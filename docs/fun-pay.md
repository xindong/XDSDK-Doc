---
id: fun-pay
title: 支付
sidebar_label: 支付&广告
---
import {Highlight} from './component';

## 内购
### 流程图
![image](https://qnblog.ijemy.com/xd_pay.png)

### 发起支付

<Highlight color='#f00'>不保证在任何情况下都能收到回调，请勿直接使用SDK返回的支付结果作为最终判定订单状态的依据。
为了收到支付回调，需要在应用启动后就设置好支付相关功能。
</Highlight>

调用该接口发起支付。

```cs
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
public static bool Pay(Dictionary<string, string> info)
```

#### 示例代码

```cs
Dictionary<string, string> info = new Dictionary<string,string>();
info.Add("OrderId", "1234567890123456789012345678901234567890");
info.Add("Product_Price", "1");
info.Add("EXT", "abcd|efgh|1234|5678");
info.Add("Sid", "2");
info.Add("Role_Id", "3");
info.Add("Product_Id", "4");
info.Add("Product_Name", "648大礼包");
info.Add("EXT", "{\"payCallbackCode\":2}");（）
XDSDK.Pay (info);
```

其中info的字段如下。

参数 | 必须 |说明
--- | --- |---
Product_Name | 是 |商品名称，建议以游戏名称开头，方便财务对账
Product_Id | 是 | 商品ID
Product_Price | 是 | 商品价格（单位分）
Sid | 是 |所在服务器ID，不能有特殊字符，服务端支付回调会包含该字段
Role_Id | 是 | 支付角色ID，服务端支付回调会包含该字段
OrderId | 否 | 游戏侧订单号，服务端支付回调会包含该字段
EXT | 否 |额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。#### 示例代码：info.Add("EXT", "{\"payCallbackCode\":2}");

### 恢复支付
<Highlight color='#f00'>
恢复支付逻辑，SDK 4.0.1(iOS)之后添加。
</Highlight>  

优化前：

在玩家第一笔掉单时，SDK 一直处于等待接收收据的状态，此时，
用户一直在游戏中，苹果随时可能发送收据给 SDK，一旦发送，SDK 就会通知游戏发送道具；
用户关闭游戏（杀进程或退后台），此时 SDK 不再接收苹果收据。导致即使这期间如果苹果有发送收据来，SDK 也收不到。除非玩家第二次充值，苹果会连同上一笔未完成订单一次性发送，造成玩家同时收到两笔道具的情况。

优化后：

当玩家再次打开游戏，SDK 再次向苹果请求一次收据信息。如有掉单的收据，且玩家登录成功后，则通知游戏，游戏来收到通知后来决定是否要补发道具。
<Highlight color='#f00'>
游戏内购流程图：
</Highlight>


<Highlight color='#f00'>
注意: 如果有遗留未完成订单，在接收到恢复订单回调后，(若单个用户可能拥有多个账号，可以请求用户确认后）调用恢复订单接口。
</Highlight>

说明：

在掉单的情况下，SDK只能获取订单的基本信息，如商品ID、苹果侧订单ID（非游戏生成order_id）和商品数量，不能直接对应到用户，所以无法直接兑换商品。

游戏在收到掉单回调之后，可以弹窗请用户确认是否需要恢复商品，如需要，则用回调提供的已有参数，加上其他需要的参数，如角色ID，服务器ID等，使用恢复订单接口恢复该商品。

<Highlight color='#f00'>
SDK会提供测试包，供游戏使用沙盒测试（购买之后会造成掉单），游戏调用恢复接口如果成功到账则为测试成功。
</Highlight>

游戏内弹窗示例(文案做相应修改)：


回调方法

```cs
/// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
/// @param resultList 订单信息List。
/// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传
///                          	 	   Product_Id ：商品ID，
///                                        Quantity：商品数量
public override void RestoredPayment(List<Dictionary<string,string>> resultList){
    }
```


### 恢复订单

```cs
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
public static bool RestorePay(Dictionary<string, string> info)

```
其中info的字段如下。

参数 | 必须 |说明
--- | --- |---
TransactionIdentifier | 是 | 需要恢复的订单标识，SDK恢复订单回调中包含
Product_Name | 是 |商品名称，建议以游戏名称开头，方便财务对账
Product_Id | 是 | 商品ID，到AppStore购买的商品
Product_Price | 是 | 商品价格（单位分），对于AppStore支付，该字段没有用处，但是需要传递真实金额，有多处需要用到
Sid | 是 |所在服务器ID，不能有特殊字符，服务端支付回调会包含该字段
Role_Id | 是 | 支付角色ID，服务端支付回调会包含该字段
OrderId | 否 | 游戏侧订单号，服务端支付回调会包含该字段
EXT | 否 | 额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。#### 示例代码：[prdInfo setObject:@"{\\"payCallbackCode\\":1}" forKey:@"EXT"];

### 支付结果

调用发起支付和恢复支付接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | public void OnPayCompleted()
支付失败 | public void OnPayFailed(string msg)
支付取消 | public void OnPayCanceled()


## 广告
XDSDK内部集成了部分主要渠道广告SDK，包括今日头条巨量广告平台SDK，和腾讯广点通SDK。必要事件（如注册）会在SDK内部发送，充值事件由XDSDK服务端发送事件到相应平台。游戏不用做额外对接工作。

需要接入相应平台的SDK请联系XDSDK后端配置广告参数。

### iOS
今日头条：TTTracker.framework，版本2.0.6

广点通：GDTActionSDK.framework，版本1.4.9

游戏打包时加入对应的SDK即可。

注意：

1.广点通SDK在添加到Link Binary With Libraries之后，还必须添加到Embedded Contend中。

2.build setting 中Other Link Flag 中添加-ObjC。


### Android
今日头条：版本2.0.6

广点通：版本1.4.9

需要使用广告包时，将XDAdAction.aar加入工程。并添加新权限

```
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
```


若需要出多个渠道包，由市场联系XDSDK，提供所需文件。

SDK提供接口，获取当前包的渠道名。（单接TapDB时可以使用改接口获取渠道）

```
//获取当前包的渠道名（安卓）
public static string GetAdChannelName()

```
