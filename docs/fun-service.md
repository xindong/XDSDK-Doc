---
id: fun-service
title: 服务端对接
sidebar_label: 服务端
---
import {Highlight} from './component';


## 获取用户信息
游戏服务端使用客户端获取的access token，按照下面的方式获取用户信息。

```php
接口：https://api.xd.com/v1/user
method：GET
参数：access_token
请求示例：https://api.xd.com/v1/user?access_token=1234
成功判断：返回的HTTP Code为200时表示成功，否则失败
返回数据格式：application/json
返回值示例：
{"id":"1",
"id_card":"1111",
"name":"xdname",
"friendly_name":"xdfriendly_name",
"client_id":"abc",
"phone":"1",
"safety":false,
"site":"1"}
id：用户的ID，注意类型是字符串
id_card：加密的身份证号，可能为空
name：用户的账号名称
friendly_name：用户的昵称，如果游戏想要展现用户名称，建议使用该字段
client_id：该用户在该游戏登录时使用的心动AppID
phone： 绑定的手机号码
safety： 账号是否安全/通过设备二次验证（true：安全，false：不安全）
site：账号类型, 0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，注意类型是字符串
authoriz_state：0/1/2/3/4（实名状态,0未实名，>0 都表示已实名认证）
```
应用场景 | 参数以及使用方法
--- | ---
判断是否游客账号 | 游客账号的name和id相同
判断是否通过二次验证 | safety（0未实名，>0 都表示已实名认证）
判断账号类型 | site（0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，注意类型是字符串）
判断是否实名认证 | authoriz_state（0未实名，>0 都表示已实名认证）

## 处理支付回调

游戏服务端需要提供一个能够处理支付回调的接口，这个接口是申请心动AppID时需要的。处理逻辑中，需要使用一个密钥进行加密验证，该密钥即为心动AppKey。
当心动平台处有充值成功时，心动服务端会通知到支付回调接口，信息如下。

```
method：POST
数据格式：application/x-www-form-urlencoded
```


请勿信任透传参数


字段如下。

字段 | 类型 | 描述
--- | --- | ---
order_id | number | 心动平台的订单号，相同订单号表示是同一笔支付
payment | string | 支付方式，appstore或其它（若回调无该字段，则默认为appstore）
sub_payment | string | 子支付方式，Production、Sandbox或其他，为Sandbox表示苹果沙盒充值（值可能为空）
user_id | string | 充值用户ID，注意类型是字符串
client_id | string | 充值的心动AppID
app | string | 同client_id
app_id | string | 游戏客户端调用充值时传递的Sid字段
app\_order_id | string | 游戏客户端调用充值时传递的OrderId字段
role_id | string | 游戏客户端调用充值时传递的Role_Id字段
product_id | string | 支付购买的商品ID
gold | number | 支付实际所付金额，单位元。（仅在客户端使用非AppStore支付方式支付时才有该字段）
ext | string | 游戏客户端调用充值时传递的EXT字段
timestamp | number | 时间戳，1970年到当前时间的秒数
sign | string | 签名校验字段，按照下面的方式进行校验

签名算法示例，使用php语言。

```php
/**
* @param params 类型array，支付回调时收到的参数
* @param appKey 类型string，心动AppKey
*/
function verify_sign($params, $appKey) {
$tmp = $params;
$sign = $tmp['sign'];
unset($tmp['sign']);
ksort($tmp);

return strcasecmp($sign, md5(http_build_query($tmp) . $appKey)) == 0;
}
```


<Highlight color='#f00'>需要注意</Highlight>

1、游戏服务端应该按照order_id进行排重，相同order_id仅生效一次。  

2、游戏服务端成功处理了支付回调后，应当返回字符串“success”，如果是一笔已经处理的重复的订单，也应该返回“success”。  

3、只要通过签名校验的回调，都应该视为合法数据，按照如下逻辑发放道具。A.如果payment字段为appstore，即AppStore支付，直接按照product_id字段进行道具发放；B.如果payment字段为其它值，需要验证gold字段和 product_id 字段是否相符，如果相符，按照product_id发放道具，如果不相符，直接按照gold字段折算成对应的游戏货币发放。  
