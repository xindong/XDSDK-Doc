---
id: android
title: Android快速开始
sidebar_label: Android
---
心动SDK（Android）对接文档

import {Highlight} from './component';

## 1.心动SDK介绍

心动SDK主要为游戏提供登录，支付等功能。登录流程和支付流程都需要客户端和服务端同时参与。


### 1.1.登录流程

![unitypackage import](https://static.tapdb.net/web/res/img/upload/2017/06/27/01.png)  


### 1.2.支付流程


![unitypackage import](https://static.tapdb.net/web/res/img/upload/2017/06/27/02.png)


### 1.3.SDK集成流程

![unitypackage import](https://static.tapdb.net/web/res/img/upload/2017/07/27/01.png)


## 2.申请心动AppID

参阅“心动AppID申请介绍”文档，申请心动AppID，获得心动AppID、心动AppKey、微信AppID、QQ AppID、Ping++ ID。其中心动AppID主要是客户端对接时使用，AppKey主要是服务端对接支付回调时使用。
<Highlight color='#f00'>* 注意，如果游戏需要自行接入微信分享功能，必须使用心动提供的微信AppID，否则会导致微信登录失败</Highlight> 


## 3.需要遵守的规则

对接过程中，为了避免出现一些奇怪的问题，无特殊需求情况下，请尽量遵守下面的规则。


### 3.1.回调依赖

游戏调用SDK的功能，SDK通常会以回调形式通知到游戏，除了必须依赖的回调（如登录成功回调），其它回调尽可能不依赖。此场景适用于登录、打开用户中心、支付。

比如游戏登录，通常是游戏提供一个登录按钮，用户点击后调用SDK登录，此时有两种处理方式。A、点击后，游戏隐藏登录按钮或使用loading图标盖住，等收到SDK登录失败回调时，才会再次展现登录按钮或移除loading。B、无论是否收到回调，都保证按钮处理可点状态。

建议游戏使用后者，防止意外情况下，流程无法走通，用户无法继续操作的情况。另外也可以采用后者的优化版，即用户点击后，仅屏蔽按钮1秒钟，这样可以防止用户反复点击导致SDK接口被反复调用。

总之游戏尽可能保证功能一直处于可用状态，而不依赖SDK的状态。


## 4.接入SDK



### 4.1.获取SDK

从心动平台处获取SDK，其中 libs 目录就是心动 SDK 项目，根据需要导入到项目中即可。

目录 | 用途
--- |---
libs | 包含心动SDK的库和其它依赖库

**注意：从 4.3.3 开始，即接入了`oaid_sdk_1.0.23.aar`依赖库，AndroidManifest 文件中需要添加 `<uses-sdk tools:overrideLibrary="com.bun.miitmdid"/>`, 同时在 `manifest`节点中添加 ` xmlns:tools="http://schemas.android.com/tools"`**


### 4.2.声明相关的Activity及文件配置

**请将配置中项目包名替换成游戏自己的包名**，例如 "com.xd.test"

```xml
<application>
    <!-- 微信登录 -->
        <activity-alias
            android:name="包名.wxapi.WXEntryActivity"
            android:exported="true"
            android:targetActivity="com.xd.sdklib.helper.WXEntryActivity"/>

        <!-- 微信支付 -->
        <activity-alias
            android:name="包名.wxapi.WXPayEntryActivity"
            android:exported="true"
        android:targetActivity="com.pingplusplus.android.PaymentActivity" />
</application>
```



### 4.3 Android 11 适配

**注意：为避免兼容性问题，建议游戏 targetVersion 使用 30 以下。**

如果编译时 targetSdkVersion < 30, 则暂不需适配，可跳过。  
如果 targetSdkVersion >= 30 , 则需要添加一下配置：  

#### （1）添加 AndroidManifest 配置
 在 AndroidManifest.xml 中添加如下内容：
 
 ```xml
 <manifest ...>
  <queries>
        <package android:name="com.tencent.mm" />
        <package android:name="com.tencent.mobileqq"/>
        <package android:name="com.taptap" />
        <package android:name="com.taptap.pad" />
        <package android:name="com.taptap.global" />
 </queries>
 <!-- 如果游戏需要游客登录或访问非游戏的其他目录文件，则需添加如下权限 -->
 <!-- <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE"/>

 ...
 </manifest>
 ```
#### (2) 修改 gradle 配置
项目根目录 build.gradle 文件中 gradle 插件版本最低 3.6.0 。例如：

```json
 dependencies {
        classpath 'com.android.tools.build:gradle:3.6.3'
        ...
        }
```



## 5.接口调用

所有接口设计为静态方法，在com.xd.xdsdk.XDSDK中调用。


### 5.1.配置SDK登录选项

**如果游戏之前登录入口已包含 心动 或 QQ 、微信等其他的账号类型，则使用`自定义登录顺序`设置，否则使用`自定义登录入口`。**

建议一般在调用 SDK 初始化前进行登录入口设置。

#### 1. 自定义登录方式

自定义登录入口。共五种，其中主要两种，次要两种。
默认显示为：

iOS: 微信、QQ、游客、苹果、TapTap

安卓: 微信、TapTap、游客、苹果、QQ  

各登录方式对应名称如下：
 
-  微信登录：WX_LOGIN，
-  taptap登录：TAPTAP_LOGIN，
-  QQ登录：QQ_LOGIN，
-  游客登录：GUEST_LOGIN，
-  心动登录：XD_LOGIN
-  苹果登录：APPLE_LOGIN

<Highlight color='#f00'>由于苹果审核要求，iOS13 显示第三方登录的同时必须显示苹果登录(建议位置靠前)</Highlight> 
<Highlight color='#f00'>SDK 在iOS12及以下、安卓中使用web实现苹果登录，但是若游戏iOS版未上架appstore，无法使用web版苹果登录，游戏需在iOS应用上架之后，才打开iOS12系统及以下和安卓的苹果登录入口。</Highlight> 


例如传入的数组 {"APPLE\_LOGIN","WX\_LOGIN","TAPTAP\_LOGIN","GUEST\_LOGIN","QQ\_LOGIN"}  

**注：(1) 最多只能显示5种登录方式。(2) 5个登录按钮中 TapTap 和心动登录不能同时显示**

```java
// 自定义登录按钮及顺序
XDSDK.setLoginEntries(new String[]{"WX_LOGIN", "TAPTAP_LOGIN", "GUEST_LOGIN","QQ_LOGIN"});
```

#### 2. TapTap 及自动登录

登录入口 UI 由游戏绘制，不再使用 SDK 页面。绘制登录按钮所需要的 UI 素材由 SDK 提供， 素材地址：[XDSDK登录方式素材](../XDSDK登录方式(大陆)_2020.zip)

使用该方式登录时, SDK 增加自定义登录接口（autoLogin/taptapLogin)，用户在点击游戏绘制的登录入口后，游戏调用对应登录接口即可。

**调用方法 ：** 游戏首先隐藏登录入口，调用 autoLogin，根据登录回调看是否自动登录成功。如果自动登录失败，其中回调信息为『自动登录失败』，则显示登录界面，然后根据用户点击不同登录按钮调用对应登录接口如 taptapLogin 等。 

**注意：在使用自定义绘制按钮登录时，如果用户因防沉迷而点击切换账号按钮时，会返回登录取消的回调**

接口如下:  

```java
//自动登录（若有上次登录记录，调用会直接登录成功）
public static bool autoLogin() 
// TapTap登录
public static void taptapLogin()
```



### 5.2.设置回调

游戏调用心动SDK的接口后，大部分情况都是通过回调的形式将结果返回给游戏，所以需要先设置对应的回调函数。

代码示例：

```c#
XDSDK.setCallback(new XDCallback() {
            //初始化成功
            @Override
            public void onInitSucceed() {

            }
            //初始化失败
            @Override
            public void onInitFailed(String msg) {

            }
            //登录成功
            @Override
            public void onLoginSucceed(String token) {
                
            }

            //登录失败
            @Override
            public void onLoginFailed(String msg) {
				
            }

            //登录取消
            @Override
            public void onLoginCanceled() {

            }

            //游客绑定成功
            @Override
            public void onGuestBindSucceed(String token) {

            }
            
             //游客绑定失败
            @Override
            public void onGuestBindFailed(String msg) {

            }
            
            //登出成功
            @Override
            public void onLogoutSucceed() {

            }
            //支付完成
            @Override
            public void onPayCompleted() {

            }
            //支付失败
            @Override
            public void onPayFailed(String msg) {

            }
            //支付取消
            @Override
            public void onPayCanceled() {

            }
            
            //实名成功
            @Override
            public void onRealNameSucceed() {

            }

			  //实名失败
            @Override
            public void onRealNameFailed(String msg) {

            }
            
            //用户同意所有协议
              @Override
            public void onProtocolAgreed() {

            }

			  //打开协议页面失败
            @Override
            public void onProtocolOpenFailed(String msg) {

            }

			  //打开协议页面成功
            @Override
            public void onProtocolOpenSucceed() {
               
            }

			//非游客匿名账号绑定 Tap 账号成功回调（游客会返回升级成功回调）
    		//返回 msg 为对应 tap 信息, 包括 name,openid,unionid,avatar 字段
  			  @Override
            public void onBindTaptapSucceed(String msg) {

            }
        });
```

**注意：付费过程中，付费结果游戏应以请求服务端的结果为准**


### 5.3.初始化SDK

初始化心动SDK，调用该接口是调用其它功能接口的必要条件。

```c#
/**
 * @param activity 游戏的主activity
 * @param appid 心动AppID
 * @param aOrientation 屏幕方向，0表示横屏，1表示竖屏
 * @param channel 渠道号
 * @param version 版本号
 * @param enableTapdb 是否开启内置TapDB统计功能，true表示开启，false表示不开启
 * @param enableMoment 是否使用动态
 */
public static void initSDK(Activity activity, String appid, int aOrientation, String channel, String version, boolean enableTapdb, boolean enableMoment) 
```

示例代码
```c#
XDSDK.initSDK(this, "xxxxxxxxxxxxxx", 0, "channel", "version", false, true);
```
调用该接口会触发下列回调。
<Highlight color='#f00'>其他接口请在获取到初始化成功回调之后进行调用。</Highlight> 

类别 | 回调方法
--- |---
初始化成功 | public void onInitSucceed()
初始化失败 | public void onInitFailed(String msg)
用户同意协议 | public void onProtocolAgreed()

<Highlight color='#f00'>注意：</Highlight> 
<Highlight color='#f00'>已经单独接入TapDB的项目请勿开启内置TapDB统计功能</Highlight> 
<Highlight color='#f00'>其他注意事项请参考Unity文档TapDB部分或与平台联系</Highlight> 



### 5.4.登录

注意：**游戏应在收到同意协议的回调（OnProtocolAgreed）之后再进行登录操作**  

调用该接口进行登录。
客户端授权登录需要包名和签名与申请时的信息保持一致。

```c#
//登录配置为默认配置或自定义登录方式时，调用该接口
public static void login();

//登录配置为TapTap及自动登录时，调用方式如下
//先调用自动登录，如果登录失败，再显示tap登录按钮，用户点击后调用tap登录
public static void autoLogin();
public static void taptapLogin();
```

示例代码

```c#
XDSDK.login();

XDSDK.autoLogin();
XDSDK.taptapLogin();
```

调用该接口会触发下列回调。
<Highlight color='#f00'>获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。</Highlight> 


类别 | 回调方法
--- | ---
登录成功 | public void onLoginSucceed(String token)
登录失败 | public void onLoginFailed(String msg)
登录取消 | public void onLoginCanceled()



### 5.5.获取Access Token

调用该接口获取当前登录用户的access token。

```c#
public static String getAccessToken()
```

代码示例
```c#
XDSDK.getAccessToken()
```



### 5.6.获取当前登录状态

调用该接口获取当前登录状态。

```c#
public boolean isLoggedIn()
```
代码示例
```c#
XDSDK.isLoggedIn()
```



### 5.7.打开用户中心

调用该接口打开用户中心界面，用户可以在该界面进行登出和登录操作，游戏注意正确处理回调。在未登录状态，无法打开用户中心。在用户中心中，用户可进行登出操作，此时交互界面将消失。游戏需要提供引导用户重新进行登录的操作界面。

```c#
/**
* @return false表示尚未登录，重复调用默认为成功
*/
public static boolean openUserCenter()
```
代码示例
```c#
XDSDK.openUserCenter()
```



### 5.8.发起支付
调用该接口发起支付。
<Highlight color='#f00'>不保证在任何情况下都能收到回调，请勿直接使用SDK返回的支付结果作为最终判定订单状态的依据。</Highlight> 

```c#
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
public static boolean pay(Map<String, String> info) 
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
EXT | 否 |额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。代码示例：info.put("EXT", "{\"payCallbackCode\":2}");

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | public void onPayCompleted()
支付失败 | public void onPayFailed(String msg) 
支付取消 | public void onPayCanceled()

示例代码

```c#
Map<String, String> info = new HashMap<String, String>();
info.put("OrderId", "1234567890123456789012345678901234567890");
info.put("Product_Price", "1");
info.put("EXT", "abcd|efgh|1234|5678");
info.put("Sid", "2");
info.put("Role_Id", "3");
info.put("Product_Id", "4");
info.put("Product_Name", "648大礼包");
XDSDK.pay(info);
```


### 5.9.登出
需要注销当前登录用户时调用，该操作不会出现登录界面。

```c#
public static void logout() 
```
调用该接口会触发下列回调

类别 | 回调方法
--- | ---
登出成功 | public void onLogoutSucceed() 

示例代码
```c#
XDSDK.logout();
```


### 5.10.游客升级

**如果游戏只有 Tap 登录入口，该接口可忽略。**  
当游客账号升级成功时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | public void onGuestBindSucceed(String token)


### 5.11.退出

调用该方法时，弹出确认框供用户选择是否退出。

```c#
public static void exit(ExitCallback callback)
```

示例代码

```c#
XDSDK.exit(new ExitCallback() {
    @Override
    public void onConfirm() {
    	super.onConfirm();
    }

    @Override
    public void onCancle() {
    	super.onCancle();
    }
});
```

### 5.12.实名认证

当用户为未实名玩家是，调用该方法弹出实名认证窗口。对于已实名用户，调用该接口会返回实名失败。

```c#
/*实名认证*/
public static void openRealName() 
```

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
认证成功 | public void onRealNameSucceed();
认证失败 | public void onRealNameFailed(string error_msg);

<Highlight color='#f00'>注意: 用户的实名认证状态以服务端接口（6.1）authoriz_state参数为准。</Highlight> 

### 5.13.游客绑定

对于游客账号，如果需要绑定 Tap 或其他类型账号时（根据游戏登录入口决定），调用如下接口：

```c#
public static void openUserBindView() 
```

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
成功 | public void onGuestBindSucceed(String token);
失败 | public void onGuestBindFailed(string msg);


### 5.14.游戏启停设置
为防沉迷及其他事件统计，游戏需要在游戏启动和停止时调用 SDK 对应接口，一般在游戏主`Activity`的`onResume`和`onStop`中调用对应接口。示例如下：

```c#
//参数为Activity实例
XDSDK.onResume(activity);
XDSDK.onStop(activity);
```
如果游戏需要主动控制防沉迷计时的启停，可以调用如下接口：

```c#
//防沉迷开始计时
XDSDK.gameStarted();
//防沉迷停止计时
XDSDK.gameStoped();
```


### 5.15.客服
在用户登录成功状态下，调用该接口打开客服。

```c#
public static void userFeedback() 
```

### 5.16.打开协议页面

在用户登录成功状态下，调用该接口打开对应协议窗口。

```c#
public static void openProtocol(int type) 
```

参数 type 为协议类型，0 用户协议 1 游戏游戏 2 隐私协议


### 5.17.设置角色信息

如果游戏使用 **自定义登录顺序** 来配置登录入口，该设置可跳过。  
对于使用 **自定义登录入口** 的游戏，在用户登录成功状态下，游戏获取到当前角色信息时，调用如下接口进行设置：

```c#
public static void setRole(String roleId,String roleName,String roleAvatar, String roleProfile)
//如果游戏没有角色形象信息，可调用
// public static void setRole(String roleId,String roleName,String roleAvatar)
```

参数 roleId 为角色ID ，roleName 为角色信息，roleAvatar 为角色头像链接 roleProfile 为角色形象信息。  
当用户切换角色或登出时，游戏需要调用如下接口清除当前角色信息：

```c#
 public static void clearRole()
```

## 6.服务端对接


### 6.1.获取用户信息
游戏服务端使用客户端获取的access token，按照下面的方式获取用户信息。

``` json
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
"adult_type":0,
"friendly_name":"xdfriendly_name",
"client_id":"abc",
"phone":"1",
"safety":false,
"site":"1"}
id：用户的ID，注意类型是字符串
id_card：加密的身份证号，可能为空
name：用户的账号名称
adult_type: 0.未实名 1. 0-8岁 2. 8-16岁 3. 16-18岁 4. 18+岁
friendly_name：用户的昵称，如果游戏想要展现用户名称，建议使用该字段
client_id：该用户在该游戏登录时使用的心动AppID
phone： 绑定的手机号码
safety： 账号是否安全/通过设备二次验证（true：安全，false：不安全）
site：账号类型, 0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，10 => 苹果账号，注意类型是字符串
fcm：0/1（0：无需防沉迷，1：需要防沉迷）
authoriz_state：0/1/2/3/4（实名状态,0未实名，>0 都表示已实名认证）
``` 


### 6.2.处理支付回调

游戏服务端需要提供一个能够处理支付回调的接口，这个接口是申请心动AppID时需要的。处理逻辑中，需要使用一个密钥进行加密验证，该密钥即为心动AppKey。
当心动平台处有充值成功时，心动服务端会通知到支付回调接口，信息如下。

```java
method：POST
数据格式：application/x-www-form-urlencoded

```
字段如下。


字段 | 类型 | 描述
--- | --- | ---
order_id | number | 心动平台的订单号，相同订单号表示是同一笔支付
payment | string | 支付方式，appstore或其它（若回调无该字段，则默认为appstore）
user_id | string | 充值用户ID <Highlight color='#f00'>注意类型是字符串</Highlight>
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

```c#
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
<Highlight color='#f00'>游戏服务端应该按照order_id进行排重，相同order_id仅生效一次</Highlight> 
<Highlight color='#f00'>游戏服务端成功处理了支付回调后，应当返回字符串“success”，如果是一笔已经处理的重复的订单，也应该返回“success”。</Highlight> 
<Highlight color='#f00'>只要通过签名校验的回调，都应该视为合法数据，按照如下逻辑发放道具。A.如果payment字段为appstore，即AppStore支付，直接按照product_id字段进行道具发放；B.如果payment字段为其它值，需要验证gold字段和 product_id 字段是否相符，如果相符，按照product_id发放道具，如果不相符，直接按照gold字段折算成对应的游戏货币发放。</Highlight> 


## 7.多渠道打包

### 7.1 配置渠道文件
 将需要打包的渠道信息配置在JSON文件中，每个渠道必须包含 “channel" 和 ”channelName" 信息，否则可能报错或不会发送对应的广告事件。内容样例如下：
  
 ```json
 [
	{"channel":"channel1","channelName":"渠道1"},
	{"channel":"channel2","channelName":"渠道2"},
	{"channel":"channel3","channelName":"渠道3"}
]
 ```
 为避免格式出错，建议可以在网页中的 JSON 编辑器将内容配置好，然后下载下来。
 
 
### 7.2 提交打包信息
   将打包相关文件的信息，包括母包、文件的输出路径、android签名文件（keystore）、签名文件的别名、签名文件的storePass、配置文件整理，联系平台处理。
   
 
### 7.3 依赖配置
   添加渠道依赖库 XDAdAction.aar文件，并新加权限:
   
   ```xml
   <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
   ```
   
### 7.4 TapDB SDK单接处理
如果需要单独接入TapDB的SDK,可以通过XDSDK.getAdChannelName获取打完渠道包的渠道信息，用例如下：

```c#
	String adChannelName = XDSDK.getAdChannelName(activity);
```   
获得的渠道名称可以在初始化TapDB的SDK时传入，注意内容可能为null。