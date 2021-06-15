---
id: tap-fun-db
title: TapDB
sidebar_label: TapDB (单独使用)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {Highlight} from './component';

:::caution
**目前 需要联系运营团队获取 TapDB 的使用权限。**
:::

`本文介绍数据收集相关功能和使用方式`
## 1. 介绍
TapSDK提供一套可供游戏开发者收集用户数据的API。系统会收集用户数据并进行分析，最终形成数据报表，帮助游戏开发者分析用户行为并优化游戏。  

## 2. 记录一个用户
当enableTapDB后，可以调用此API来记录一个用户  

#### API
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

```java
  public static void setUser(String userId)
  public static void setUser(String userId,  LoginType loginType)
```
  </TabItem>

  <TabItem value="ios">

  ```objectivec  
+ (void)setUser:(NSString *)userId;
+ (void)setUser:(NSString *)userId  loginType:(TapDBLoginType)loginType;
  ```
  </TabItem>
  <TabItem value="unity">

```cs
public static void SetUser(string userId)

public static void SetUser(string userId, string loginType)
```

  </TabItem>
</Tabs>




#### 示例代码
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  TapDB.setUser("xxxxuser1", LoginType.TapTap);
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
 [TapDB setUser:@"userId" loginType:TapDBLoginTypeTapTap];
  ```
  </TabItem>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.SetUser("userId");
TapSDK.TDSTapDB.SetUser("userId","loginType");
```

  </TabItem>
</Tabs>

**setUser参数说明**

字段 | 可为空 | 说明
| ------ | ------ | ------ |
userId | 否 | 长度大于0并小于等于256。只能包含数字、大小写字母、下划线(_)、横线(-)，用户ID。不同用户需要保证ID的唯一性
loginType | 否 | 第三方登录枚举类型，具体见下面说明

**loginType类型说明**

| 参数      |    说明   |
| :-------- | :-------- |
| TapTap      |    TapTap登录   |
| WeiXin      |    微信登录   |
| QQ      |    QQ登录   |
| Tourist      |    游客登录   |
| Apple      |    Apple登录   |
| Alipay      |    支付宝登录 |
| Facebook      |    facebook登录   |
| Google      |    Google登录   |
| Twitter      |    Twitter登录   |
| PhoneNumber      |    手机号登录   |
| Custom      |   用户自定义登录类型  （默认名字为Custom,如需修改可以调用LoginType.Custom.changeType） |
<!--
### TapTap登录时openId获取方式

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  Profile.fetchProfileForCurrentAccessToken(new Api.ApiCallback<Profile>() {
              @Override
              public void onSuccess(Profile data) {
                  Log.e(Tag, "checkLogin-onSuccess");
                  String openId = Profile.getCurrentProfile().getOpenid();
              }

              @Override
              public void onError(Throwable error) {
                  Log.e(Tag, "checkLogin-onError");
                  login();
              }
          });
  ```
  </TabItem>

  <TabItem value="ios">

```objectivec
TTSDKProfile *currentProfile = [TapLoginHelper currentProfile];
NSString *openId = [currentProfile openid];
```
  </TabItem>
  <TabItem value="unity">

```cs
TapSDK.TDSLogin.GetCurrentProfile((profile) => {
    string openid = profile.openid;
});
```
  </TabItem>

</Tabs> -->


## 3. 用户名称
设置用户名称

#### API  
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  public static void setName(String name)
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
+ (void)setName:(NSString *)name;
  ```
  </TabItem>
  <TabItem value="unity">

```cs
public static void SetName(string name);
```

  </TabItem>
</Tabs>

#### 示例代码
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  TapDB.setName("taptap");
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
 [TapDB setName:@"Tap zhang"];
  ```
  </TabItem>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.SetName("name");
```

  </TabItem>
</Tabs>


字段 | 可为空 | 说明
| ------ | ------ | ------ |
name | 否 | 长度大于0并小于等于256。用户名

## 4. 用户等级
设置用户等级。用户登录或升级时调用  

#### API  
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  public static void setLevel(int level)
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
+ (void)setLevel:(NSInteger)level;
  ```
  </TabItem>
  <TabItem value="unity">

```cs
public static void SetLevel(int level);
```

  </TabItem>
</Tabs>

#### 示例代码
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  TapDB.setLevel(5);
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
[TapDB setLevel:10];
  ```
  </TabItem>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.SetLevel(5);
```

  </TabItem>
</Tabs>


字段 | 可为空 | 说明
| ------ | ------ | ------ |
level | 否 | 大于等于0。用户等级

## 5. 用户所在服务器

设置用户所在服务器。用户登陆或切换服务器时调用

#### API   
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  public static void setServer(String server)
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
+ (void)setServer:(NSString *)server;
  ```
  </TabItem>
  <TabItem value="unity">

```cs
public static void SetServer(string server);
```

  </TabItem>
</Tabs>

#### 示例代码
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  TapDB.setServer("https://test.taptap.com/callback");
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
[TapDB setServer:@"https://test.taptap.com/callback"];
  ```
  </TabItem>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.SetServer("https://test.taptap.com/callback");
```

  </TabItem>
</Tabs>


字段 | 可为空 | 说明
| ------ | ------ | ------ |
server | 否 | 用户所在服务器。长度大于0并小于等于256。

## 6. 充值

### 客户端充值推送

充值成功时调用。SDK推送和[服务端充值推送](#101-充值推送接口)只能选择其中一种。建议优先选择服务端推送方式，以保证数据的准确性。

#### API  
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  public static void onCharge(String orderId, String product, long amount, String currencyType, String payment)
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
+ (void)onChargeSuccess:(NSString *)orderId product:(NSString *)product amount:(NSInteger)amount currencyType:(NSString *)currencyType payment:(NSString *)payment;
  ```
  </TabItem>
  <TabItem value="unity">

```cs
public static void OnCharge(string orderId, string productId, string amount, string currencyType, string payment)
```

  </TabItem>
</Tabs>

#### 示例代码
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'unity', value: 'unity'},
  ]}>
  <TabItem value="android">

  ```java
  TapDB.onCharge("0xueiEns","轩辕剑","100","CNY","wechat");
  ```
  </TabItem>

  <TabItem value="ios">

  ```objectivec
[TapDB onChargeSuccess:@"0xueiEns" product:@"轩辕剑" amount:10 currencyType:@"CNY" payment:@"wechat"];
  ```
  </TabItem>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.OnCharge("0xueiEns","大宝剑","100","CNY","wechat");
```

  </TabItem>
</Tabs>

**参数说明**

字段 | 可为空 | 说明
| ------ | ------ | ------ |
orderId | 是 | 订单ID。长度大于0并小于等于256。传递订单ID可进行排重，防止计算多次
product | 是 | 商品名称。长度大于0并小于等于256。
amount | 否 | 充值金额。大于0并小于等于100000000000。单位分，即无论什么币种，都需要乘以100
currencyType | 是 | 货币类型。国际通行三字母表示法，为空时默认CNY。参考：人民币 CNY，美元 USD；欧元 EUR
payment | 是 | 充值渠道。长度大于0并小于等于256。

常见货币类型的格式参考<a target="_blank" href="https://www.tapdb.com/docs/zh_CN/features/exchangeRate.html">汇率表</a>

### 服务端充值推送


由于SDK推送可能会不太准确，这里提供服务端充值推送方法。需要忽略掉SDK中的相关充值推送接口。

```
接口：https://e.tapdb.net/event
内容（注意后面还需要处理一下）：
{
    "module": "GameAnalysis", // 固定参数
    "ip": "8.8.8.8", // 可选。充值用户的IP
    "name": "charge", // 固定参数
    "index": "APPID", // 必需。注意APPID需要被替换成TapDB的appid
    "identify": "userId", // 必需。用户ID。必须和SDK的setUser接口传递的userId一样，并且该用户已经通过SDK接口进行过推送
    "properties": {
        "order_id": "100000", // 可选。长度大于0并小于等于256。订单ID。传递订单ID可进行排重，防止计算多次
        "amount": 100, // 必需。大于0并小于等于100000000000。充值金额。单位分，即无论什么币种，都需要乘以100
        "currency_type": "CNY", // 可选。货币类型。国际通行三字母表示法，为空时默认CNY。参考：人民币 CNY，美元 USD；欧元 EUR
        "product": "item1", // 可选。长度大于0并小于等于256。商品名称
        "payment": "alipay" // 可选。长度大于0并小于等于256。充值渠道
    }
}

假如游戏的appid为abcd1234。构建出json字符串后，去掉空格和换行符，然后再进行一次urlencode。再把结果作为POST数据推送
先替换换行符和空格，变成：
{"module":"GameAnalysis","name":"charge","index":"abcd1234","identify":"user_id","properties":{"order_id":"100000","amount":100,"virtual_currency_amount":100,"currency_type":"CNY","product":"item1","payment":"alipay"}}
然后urlencode，变成如下形式。某些版本的urlencode可能会把':'和','进行编码，不会影响实际使用。
%7B%22module%22:%22GameAnalysis%22,%22name%22:%22charge%22,%22index%22:%22abcd1234%22,%22identify%22:%22user_id%22,%22properties%22:%7B%22order_id%22:%22100000%22,%22amount%22:100,%22virtual_currency_amount%22:100,%22currency_type%22:%22CNY%22,%22product%22:%22item1%22,%22payment%22:%22alipay%22%7D%7D
```

成功判断：返回的HTTP Code为200时认为发送成功，否则认为失败

常见货币类型的格式参考<a target="_blank" href="https://www.tapdb.com/docs/zh_CN/features/exchangeRate.html">汇率表</a>


## 7. 自定义事件


需要发送自定义事件时调用，自定义事件的 eventName 和 properties 属性都必须在元数据管理预先配置，才可以使用SDK进行发送

用户可以通过调用 trackEvent 方法上传需要跟踪的自定义事件。eventName 为自定义事件的事件名，需要保证以 '#' 开头，取值规则请参考自定义属性登记页面。properties 为自定义事件所包含的自定义属性（以 Key : Value 的形式保存），其中 Key 代表了自定义属性的属性名，Value 代表了该属性的值。这里需要注意的是 Key 的命名规则同 eventName 一致，也需要保证以 '#' 开头。目前所支持的 Value 类型为 String, Number, Boolean。String 类型支持最大长度为 256。Number 类型取值区间为 [-9E15, 9E15]。以战斗事件为例：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.Track("#eventName", "{\"weapon\":\"axe\"}");	
```

  </TabItem>
  <TabItem value="android">

```java
JSONObject properties = new JSONObject();
properties.put("#weapon", "axe");
properties.put("#level", 10);
properties.put("#map", "atrium");
TapDB.track("#battle", properties); 
```
  </TabItem>
  <TabItem value="ios">

```objectivec
 NSDictionary* dic = @{@"aaa":@"xxx",@"bbb":@"yyy"};    
[TapDB trackEvent:@"testEvent2" properties:dic];
```

  </TabItem>
</Tabs>


### 设置通用事件属性

对于某些重要的属性需要在每个上传的事件中出现，用户可以将这些属性设置为全局通用的自定义属性，包括静态通用属性和动态通用属性，静态通用属性为固定值，动态通用属性每次获取的值由用户所设置的计算逻辑产生。这些通用属性在注册之后，会被附带在TapDB上传的事件中。这里需要注意 trackEvent 中传入的属性优先级 > 动态通用属性优先级 > 静态通用属性优先级，也就是说动态通用属性会覆盖同名的静态通用属性。trackEvent 中的属性会覆盖同名的动态通用属性和静态通用属性。

#### 添加静态通用属性

例如，添加来源渠道：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
string properties = "{\"channel\":\"TapDB\"}}";
TapSDK.TDSTapDB.RegisterStaticProperties(properties);
```
  </TabItem>
  <TabItem value="android">

```java
JSONObject commonProperties = new JSONObject();
        commonProperties.put("channel", "TapDB");
        TapDB.registerStaticProperties(properties);
```
  </TabItem>
  <TabItem value="ios">

```objectivec
[TapDB registerStaticProperties:@{@"channel":@"TapDB"}];
```
  </TabItem>
</Tabs>

#### 删除静态通用属性

删除单个已添加的事件属性：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.UnregisterStaticProperty("channel");
```
  </TabItem>
  <TabItem value="android">
```java
TapDB.unregisterStaticProperty("channel");
```
  </TabItem>
  <TabItem value="ios">
```objectivec
[TapDB unregisterStaticProperty:@"channel"];
```
  </TabItem>
</Tabs>

删除所有事件属性：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">
```cs
TapSDK.TDSTapDB.ClearStaticProperties();
```
  </TabItem>
  <TabItem value="android">

```java
TapDB.clearStaticProperties();
```
  </TabItem>
  <TabItem value="ios">

```objectivec
[TapDB clearStaticProperties];
```
  </TabItem>
</Tabs>

#### 添加动态通用属性

如果需要添加的通用属性的值在不同的上传事件中具有动态的赋值逻辑，那么可以调用 registerDynamicProperties 方法，注册相应的取值逻辑。以用户事件调用当前等级为例：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
public class TapDBDynamicPropertiesImpl : IDynamicSuperProperties
{
        public Dictionary<string, object> GetDynamicProperties()
        {
                Dictionary<string, object> dic = new Dictionary<string, object>();
                dic["#currentLevel"] = level;
                return dic;
        }
}
TapSDK.TDSTapDB.RegisterDynamicProperties(new TapDBDynamicPropertiesImpl());
```

  </TabItem>
  <TabItem value="android">

```java

TapDB.registerDynamicProperties(
    () -> {
              JSONObject properties = new JSONObject();
            // getCurrentLevel 在这里仅作为案例，表示用户任何的自有逻辑实现
            long level = getCurrentLevel();
            properties.put("#currentLevel", level);
            return properties; 
    }
);
```

  </TabItem>
  <TabItem value="ios">

```objectivec
[TapDB registerDynamicProperties:^NSDictionary *_Nonnull {
      return @{
          @"#currentLevel": level
      };
  }];
```
  </TabItem>
</Tabs>




### 事件主体操作

TapDB 目前支持两个事件主体：设备，账号。相应支持主体属性的操作为初始化，更新和累加。累加操作只支持数值类型。需要注意的是，传入的自定义属性需要同预登记属性名保持一致。

#### 初始化

初始化操作用于初始化属性。
已初始化的属性，后续的初始化操作会被忽略。
以上报首次活跃服务器为例：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
string properties = "{\"firstActiveServer\":\"server1\"}";
TapSDK.TDSTapDB.DeviceInitialize(properties);
string properties = "{\"firstActiveServer\":\"server2\"}";
TapSDK.TDSTapDB.DeviceInitialize(properties);
```
  </TabItem>
  <TabItem value="android">

```java
JSONObject properties = new JSONObject();
        properties.put("firstActiveServer", "server1");
        TapDB.deviceInitialize(properties);
        properties.put("firstActiveServer", "server2");
        TapDB.deviceInitialize(properties);
```

  </TabItem>
  <TabItem value="ios">

```objectivec
[TapDB deviceInitialize:@{@"firstActiveServer":@"server1"}];
[TapDB deviceInitialize:@{@"firstActiveServer":@"server2"}];
```

  </TabItem>
</Tabs>

运行上述代码后，设备表的 `firstActiveServer` 字段值仍为 `server1`。

#### 更新

更新操作用于更新属性。
该操作会覆盖原属性值。
以上报当前点数为例：
<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
string properties = "{\"currentPoints\":10}";
TapSDK.TDSTapDB.DeviceUpdate(properties);

properties["currentPoints"] = 42;
TapSDK.TDSTapDB.DeviceUpdate(properties);
```
  </TabItem>
  <TabItem value="android">

```java
JSONObject properties = new JSONObject();
        properties.put("currentPoints", 10);
        TapDB.deviceUpdate(properties);
        properties.put("currentPoints", 42);
        TapDB.deviceUpdate(properties);
```
  </TabItem>
  <TabItem value="ios">

```objectivec
[TapDB deviceUpdate:@{@"currentPoints":@10}];
[TapDB deviceUpdate:@{@"currentPoints":@42}];
```
  </TabItem>
</Tabs>

运行上述代码后，设备表的 `currentPoints` 字段值为 `42`。

#### 累加

累加操作用于增减属性，目前只支持数字属性。
该操作会在原属性值基础上累加数值，原属性不存在时，原属性值计为 0.
以上报总点数为例：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
string properties = "{\"totalPoints\":10}";
TapSDK.TDSTapDB.DeviceAdd(properties);

properties["totalPoints"] = -2;
TapSDK.TDSTapDB.DeviceAdd(properties);
```
  </TabItem>
  <TabItem value="android">

```java
JSONObject properties = new JSONObject();
        properties.put("totalPoints", 10);
        TapDB.deviceAdd(properties);
        properties.put("totalPoints", -2);
        TapDB.deviceAdd(properties);
```
  </TabItem>
  <TabItem value="ios">

```objectivec
[TapDB deviceAdd:@{@"totalPoints":@10}];
[TapDB deviceAdd:@{@"totalPoints":@(-2)}];
```
  </TabItem>
</Tabs>

运行上述代码后，设备表的 `totalPoints` 字段值为 `8`。

上述代码示例中，属性值为整数。
累加操作也支持浮点数，不过浮点数相加有精度问题，开发者还需留意。

初始化、更新、累加操作同样适用于账号主体：

<Tabs
groupId="tap-platform"
  defaultValue="Android"
  values={[
    {label: 'unity', value: 'unity'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>
  <TabItem value="unity">

```cs
TapSDK.TDSTapDB.UserInitialize(properties);
TapSDK.TDSTapDB.UserUpdate(properties);
TapSDK.TDSTapDB.UserAdd(properties);
```
  </TabItem>
  <TabItem value="android">

```java
TapDB.userInitialize(properties);
        TapDB.userUpdate(properties);
        TapDB.userAdd(properties);
```
  </TabItem>
  <TabItem value="ios">

```objectivec
[TapDB userInitialize:@{@"firstActiveServer":@"server1"}];
[TapDB userUpdate:@{@"currentPoints":@10}];
[TapDB userAdd:@{@"totalPoints":@10}];
```

  </TabItem>
</Tabs>



## 8. 服务端在线人数推送

由于SDK无法推送准确的在线数据，这里提供服务端在线数据推送接口。游戏服务端可以每隔5分钟`自行统计`在线人数，通过接口推送到TapDB。TapDB进行数据汇总展现。

```
接口：https://se.tapdb.net/tapdb/online
方法：POST
格式：json
必需头信息：Content-Type: application/json
```

请求内容：

参数名 | 参数类型 | 参数说明
| ------ | ------ | ------ |
appid | string | 游戏的APP ID
onlines | array | 多条在线数据（最多100条）

其中onlines数组的结构为

参数名 | 参数类型 | 参数说明
| ------ | ------ | ------ |
server | string | 服务器。TapDB对同一服务器每一个自然5分钟仅接受一次数据
online | int | 在线人数
timestamp | long | 当前统计数据的时间戳(秒)。TapDB会按照自然5分钟进行数据对齐

示例：

```
{
  "appid":"gkjasd13bbsa1sdk",
  "onlines":[{
    "server":"s1",
    "online":123,
    "timestamp":1489739590
  },{
    "server":"s2",
    "online":188,
    "timestamp":1489739560
  }]
}
```

成功判断：返回的HTTP Code为200时认为发送成功，否则认为失败

## 9. 收集设备指纹
### OAID方式
自行选择是否引入OAID，TapSDK支持OAID版本为1.0.5-1.0.23
- 如果自己有集成其他SDK使用到OAID，TapSDK可以直接使用
- 如果没有集成其他OAID版本，我们推荐下载 [oaid_sdk_1.0.23.aar](https://qnblog.ijemy.com/oaid_sdk_1.0.23.aar)

### 数美SDK收集
  <Highlight color='#f00'> ⬇️ 数美定制版，仅支持当前下载渠道</Highlight>

[下载SDK](https://qnblog.ijemy.com/xdwl-pri-release.aar)
