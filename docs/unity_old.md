---
id: unity2.x
title: Unity2.x快速开始
sidebar_label: Unity2.x
---
基于XDSDK实现简单的登录功能

:::tip
XDSDK 6.x 文档地址在 [docs.xdglobalapi.com](https://docs.xdglobalapi.com)，使用 6.x 版本的开发者请忽略这里的文档。
:::

import {Highlight,ImageLink} from './component';

## 1.Unity

**namespace均为xdsdk**

### 1.1.导入SDK资源

下载“XDSDK For Unity 3D”版本的SDK包。将其中的XDSDKForUnity.unitypackage文件导入到Unity工程里面（如果无法导入，请再次确认文件是放置于非中文路径下的），如下图所示： 

![](/img/1.png)

目录或文件 | 用途
--- |---
Plugins/script/XDSDK.cs | 心动SDK接口
Plugins/script/XDCallback.cs | 心动SDK回调
Plugins/script/XDSDKImp.cs | 心动SDK调用原生方法
Plugins/Android/libs | 心动SDK Android依赖库
Plugins/Android/res | 心动SDK Android资源文件
Plugins/iOS/libRMStore | 心动SDK iOS支付库组件
Plugins/iOS/libWeChatSDK | 心动SDK iOS微信依赖库
Plugins/iOS/libXDSDKiOSWrapper | 心动SDK iOS桥接组件
Library/TencentOpenAPI.framework | 心动SDK iOSQQ登录库文件
Library/XdComPlatform.framework | 心动SDK iOS核心依赖库 
Library/XDStore.framework | 心动SDK iOS支付组件


 **导入后，将 Plugins/script 下面的 XDSDKListener.cs 脚本文件拖动到长生命周期的对象中进行脚本挂接。** 



### 1.2.实现并设置回调方法

 脚本需要实现的回调请参考以下代码： 

```
public class XDSDKHandler : XDCallback {

    //初始化成功回调
    public override void OnInitSucceed (){

    }
	
    //初始化失败回调
    public override void OnInitFailed (string msg){

    }

    //登录成功回调
    public override void OnLoginSucceed (string token){

    }

    //登录失败回调
    public override void OnLoginFailed (string msg){

    }
	
    //登录取消回调
    public override void OnLoginCanceled (){

    }

    //游客绑定成功回调
    public override void OnGuestBindSucceed (string token){

    }

    //游客绑定失败回调（可选）
    public override void OnGuestBindFailed(string msg){

    }

    //登出回调
    public override void OnLogoutSucceed (){

    }

    //支付完成回调
    public override void OnPayCompleted (){

    }

    //支付失败回调
    public override void OnPayFailed (string msg){

    }

    //支付取消回调
    public override void OnPayCanceled (){  

    }

    //Android 退出回调
    public override void OnExitConfirm (){

    }

    //Android 取消退出回调
    public override void OnExitCancel (){

    }

    //微信分享成功回调（可选）
    public override void OnWXShareSucceed (){

    }

    //微信分享失败回调（可选）
    public override void OnWXShareFailed (){

    }
    
    //实名认证成功
    public override void OnRealNameSucceed (){

    }
    
    //实名认证失败
    public override void OnRealNameFailed (string error_msg){

    }
    
/// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
/// @param resultList 订单信息List。
/// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传
///                             		 Product_Id ：商品ID，
///                                        Quantity：商品数量
public override void RestoredPayment(List<Dictionary<string,string>> resultList){
    }
    
    //用户同意所有协议
    public override void OnProtocolAgreed() {}

	//打开协议成功
    public override void OnProtocolOpenSucceed() {}
    
	//打开协议失败
    public override void OnProtocolOpenFailed(string msg) {}
    
    //非游客匿名账号绑定 Tap 账号成功回调（游客会返回升级成功回调）
    //返回 msg 为对应 tap 信息, 包括 name,openid,unionid,tap
    public override void OnBindTaptapSucceed(Dictionary<string,string> msg) {}

}
```

设置回调方法 

```
XDSDK.SetCallback (new XDSDKHandler ());
```

### 1.3.配置登录选项

#### 1.3.1 默认配置 (旧版接口）

心动SDK提供配置QQ、微信登录、游客登录的显示与隐藏以及登录方式。

如不进行配置，SDK将默认显示QQ、微信、游客登录。QQ和微信的登录方式默认为App授权登录，心动SDK会根据QQ和微信的安装情况，将QQ和微信登录方式切换为Web登录，或者不提供对应的登录功能。

> 请勿直接复制以下代码，根据游戏实际需求选择调用。(以下API为旧接口，建议直接使用自定义登录顺序功能)

```
XDSDK.HideGuest()	//隐藏游客登录
XDSDK.HideWX()		//隐藏微信登录
XDSDK.HideQQ()		//隐藏QQ登录
XDSDK.ShowVC()		//显示VeryCD登录（此接口供老游戏兼容，新游戏不建议调用）
XDSDK.SetQQWeb()	//设置QQ为Web登录方式
XDSDK.SetWXWeb()	//设置微信为Web 扫码登录方式
XDSDK.HideTapTap()	//隐藏TapTap登录，使用心动登录
```

#### 1.3.2 自定义登录顺序
 
**SDK版本1.1.3添加了新接口，自定义登录按钮及顺序。可以在SDK初始化之前调用。具体说明如下：**

**DK版本2.1.0添加了新入口：苹果登录**


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

> ***由于苹果审核要求，iOS13 显示第三方登录的同时必须显示苹果登录(建议位置靠前)***

**SDK 在iOS12及以下、安卓中使用web实现苹果登录，但是若游戏iOS版未上架appstore，无法使用web版苹果登录，游戏需在iOS应用上架之后，才打开iOS12系统及以下和安卓的苹果登录入口。**
 
例，传入的数组。
 {"APPLE\_LOGIN","WX\_LOGIN","TAPTAP\_LOGIN","GUEST\_LOGIN","QQ\_LOGIN"}

注：

- 最多只能显示4种登录方式。
- 四个登录按钮TapTap和心动登录不能同时显示

```
// 自定义登录按钮及顺序
XDSDK.SetLoginEntries({"APPLE_LOGIN","WX_LOGIN","TAPTAP_LOGIN","GUEST_LOGIN","QQ_LOGIN"});
```

#### 1.3.3 自定义登录入口

**XDSDK 2.3.0开始，支持游戏自定义登录入口。入口素材由平台提供**

素材地址：[XDSDK登录方式素材](/res/XDSDK登录方式(大陆)_2020.zip)  

增加自定义登录接口（iOS:AutoLogin/TapTapLogin/AppleLogin/GuestLogin,Android:AutoLogin/TapTapLogin），游戏绘制登录按钮后调用.  

**调用方法 ：** 调用Autologin，根据登录回调看是否自动登录成功，如果自动登录失败，回调信息为『自动登录失败』，如果没有成功就显示登录界面，用户点击不同登录按钮然后调用对应登录:TapTapLogin等。

**（自定义绘制登录按钮时，点击防沉迷切换账号按钮会回调登录取消）**

接口如下：



```
// 自动登录（若有上次登录记录，则会直接登录）
public static bool AutoLogin() 
// TapTap登录
public static void TapTapLogin() 
// 苹果登录
public static void AppleLogin() 
// 游客登录
public static void GuestLogin() 

```


示例：

![](/img/5.jpg)

### 1.4.初始化SDK

初始化心动SDK，调用该接口是调用其它功能接口的必要条件。

```
/**
 * @param appid 心动AppID
 * @param aOrientation 屏幕方向，0表示横屏，1表示竖屏
 * @param channel 渠道号
 * @param version 版本号
 * @param enableTapDB 是否开启TapDB
 */
public static void InitSDK(string appid, int aOrientation, string channel, string version, bool enableTapDB)
```

示例代码：

```
XDSDK.InitSDK ("xxxxxx", 1,"xx","xx",true);
```

调用该接口会触发下列回调。
> 其他接口请在获取到初始化成功回调之后进行调用。

类别 | 回调方法
--- |---
初始化成功 | public void OnInitSucceed()
初始化失败 | public void OnInitFailed(string msg)


> **注意：
已经单独接入TapDB的项目请勿开启内置TapDB统计功能
其他注意事项请参考文档TapDB部分或与平台联系**


### 1.5.登录

> 注意：unity 版本自 2.4.8 开始，游戏应在收到同意协议的回调（OnProtocolAgreed）之后再进行登录操作

游戏如果采用非自定义登录入口，调用该接口进行登录。

```
public static void Login()
```

示例代码
```
XDSDK.Login();
```

游戏如果采用自定义登录入口，请参考[自定义登录入口调用方式](#自定义登录入口调用方式)

调用该接口会触发下列回调。

> **获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。**

类别 | 回调方法
--- | ---
登录成功 | void OnLoginSucceed(string token)
登录失败 | void OnLoginFailed(string msg)
登录取消 | void OnLoginCanceled()

**XDSDK 4.2.0之后，新版用户中心显示角色信息，需要额外调用接口设置角色信息**

#### 1.5.1 角色
	角色登录成功之后，设置当前角色信息；角色登出后，清空当前角色信息
	
	```
	public static void SetRole(string roleId,string roleName,string roleAvatar)
	
	public static void ClearRole()
	```

### 1.6.获取Access Token

调用该接口获取当前登录用户的access token。

```
public static string GetAccessToken()
```

代码示例
```
XDSDK.GetAccessToken()
```

### 1.7.获取当前登录状态

```
public static bool IsLoggedIn()
```
代码示例
```
XDSDK.IsLoggedIn()
```

### 1.8.打开用户中心

调用该接口打开用户中心界面，用户可以在该界面进行登出和登录操作，游戏注意正确处理回调。在未登录状态，无法打开用户中心。在用户中心中，用户可进行登出操作，此时交互界面将消失。游戏需要提供引导用户重新进行登录的操作界面。

```
/**
* @return false表示尚未登录，重复调用默认为成功
*/
public static bool OpenUserCenter()
```
代码示例
```
XDSDK.OpenUserCenter()
```

### 1.9.发起支付

> 注意：**不保证在任何情况下都能收到回调，请勿直接使用SDK返回的支付结果作为最终判定订单状态的依据。
为了收到支付回调，需要在应用启动后就设置好支付相关功能。**



```
- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
	...
	// 初始化支付
	[XDCore setupXDStore];
}
```


**1.9.1 发起支付**

调用该接口发起支付。

```
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
public static bool Pay(Dictionary<string, string> info)
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
EXT | 否 |额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。代码示例：info.Add("EXT", "{\"payCallbackCode\":2}");

**1.9.2 恢复支付**

**恢复支付逻辑，SDK 4.0.1(iOS)之后添加。**

优化前：

在玩家第一笔掉单时，SDK 一直处于等待接收收据的状态，此时，
用户一直在游戏中，苹果随时可能发送收据给 SDK，一旦发送，SDK 就会通知游戏发送道具；
用户关闭游戏（杀进程或退后台），此时 SDK 不再接收苹果收据。导致即使这期间如果苹果有发送收据来，SDK 也收不到。除非玩家第二次充值，苹果会连同上一笔未完成订单一次性发送，造成玩家同时收到两笔道具的情况。

优化后：

当玩家再次打开游戏，SDK 再次向苹果请求一次收据信息。如有掉单的收据，且玩家登录成功后，则通知游戏，游戏来收到通知后来决定是否要补发道具。

**游戏内购流程图：**

![](/img/3.png)


> **注意: 如果有遗留未完成订单，在接收到恢复订单回调后，(若单个用户可能拥有多个账号，可以请求用户确认后）调用恢复订单接口。**

说明：

在掉单的情况下，SDK只能获取订单的基本信息，如商品ID、苹果侧订单ID（非游戏生成order_id）和商品数量，不能直接对应到用户，所以无法直接兑换商品。

游戏在收到掉单回调之后，可以弹窗请用户确认是否需要恢复商品，如需要，则用回调提供的已有参数，加上其他需要的参数，如角色ID，服务器ID等，使用恢复订单接口恢复该商品。


**SDK会提供测试包，供游戏使用沙盒测试（购买之后会造成掉单），游戏调用恢复接口如果成功到账则为测试成功。**

游戏内弹窗示例(文案做相应修改)：
![](/img/4.jpg)

回调方法

```
/// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
/// @param resultList 订单信息List。
/// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传	
///                          	 	   Product_Id ：商品ID，
///                                        Quantity：商品数量
public override void RestoredPayment(List<Dictionary<string,string>> resultList){
    }
```


恢复订单接口

```
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
EXT | 否 | 额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。代码示例：[prdInfo setObject:@"{\\"payCallbackCode\\":1}" forKey:@"EXT"];

**1.9.3 支付结果**

调用发起支付和恢复支付接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | public void OnPayCompleted()
支付失败 | public void OnPayFailed(string msg) 
支付取消 | public void OnPayCanceled()

示例代码

```
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

### 1.10.登出

需要注销当前登录用户时调用，该操作不会出现登录界面。

```
public static void Logout() 
```
调用该接口会触发下列回调

类别 | 回调方法
--- | ---
登出成功 | public void OnLogoutSucceed() 

示例代码
```
XDSDK.Logout();
```

### 1.11.游客升级

当游客账号升级成功时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | public void OnGuestBindSucceed(string token)

### 1.12.退出

调用该方法时，弹出确认框供用户选择是否退出。

```
public static void Exit()
```

示例代码

```
XDSDK.Exit();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
确认退出 | public void OnExitConfirm() 
取消退出 | public void OnExitCancel() 

### 1.13.微信分享（微信分享功能即将停止维护，建议单独接入）

调用心动SDK的微信分享功能。

参数说明


通用参数 | 是否必须 | 类型 | 说明 
--- | --- | --- | ---
text | 否 | string | 分享文字内容 
bText | 是 | string | 分享内容是否为多媒体内容（1文本内容，0多媒体内容）
scene | 是 | string | 分享场景（SESSION对话，TIMELINE朋友圈，FAVOURITE收藏）
shareType | 是 | string | 分享类型（TEXT，IMAGE，MUSIC，VIDEO，WEB）
title | 否 | string | 分享标题 
description | 否 | string | 分享描述信息 
thumbPath | 否 | string | 缩略图路径 （安卓不支持Url，请填写文件路径。）
meidaTagName | 否 | string
messageExt | 否 | string 
messageAction | 否 | string

以下参数，请根据不同的分享类型（shareType参数）进行设置

图片分享 | 是否必须 | 类型| 说明 
--- | --- | --- | ---
imageUrl | 是| string | 分享图片Url （安卓不支持Url，请填写文件路径）
<br/>


音乐分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
musicUrl | 是 | string | 音乐链接 （请填写音乐路径。例：https://www.xd.com/music.mp3）
musicLowBandUrl | 否 | string | 低带宽音乐链接
musicDataUrl | 否 | string | 音乐数据链接
musicLowBandDataUrl | 否 | string | 低带宽状音乐数据链接
<br/>

视频分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
videoUrl | 是 | string | 视频链接
videoLowBandUrl | 否 | string | 低带宽视频链接
<br/>


网页分享参数 | 是否必须 | 类型| 说明
--- | --- | --- | ---
webpageUrl | 是 | string | 网页链接

示例代码

```
//分享文字
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***");  //标题
content.Add ("description", "***description***"); //描述
content.Add ("text", "***text***"); //内容
content.Add ("scene", "SESSION"); //scene场景值
content.Add ("shareType", "TEXT");  //分享类型 文字
xdsdk.XDSDK.Share (content);

//分享图片
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***");  //标题
content.Add ("description", "***description***");  //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("imageUrl", "/storage/emulated/0/2.png"); //图片路径
content.Add ("scene", "SESSION"); //scene场景值
content.Add ("shareType", "IMAGE");  //分享类型 图片
xdsdk.XDSDK.Share (content);

//分享音乐
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***"); //标题
content.Add ("description", "***description***"); //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("musicUrl", "http://staff2.ustc.edu.cn/~wdw/softdown/index.asp/0042515_05.ANDY.mp3");  //音乐url
content.Add ("scene", "SESSION");  //scene场景值
content.Add ("shareType", "MUSIC");  //分享类型 音乐
xdsdk.XDSDK.Share (content);

//分享视频
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***"); //标题
content.Add ("description", "***description***"); //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("videoUrl", "https://www.xd.com");  //视频url
content.Add ("scene", "SESSION");  //scene场景值
content.Add ("shareType", "VIDEO");  //分享类型 视频
xdsdk.XDSDK.Share (content);

//分享网页
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***"); //标题
content.Add ("description", "***description***"); //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("webpageUrl", "https://www.xd.com");  //视频url
content.Add ("scene", "SESSION");  //scene场景值
content.Add ("shareType", "WEB");  //分享类型 网页
xdsdk.XDSDK.Share (content);
```


调用分享接口会触发下列回调

类别 | 回调方法
--- | ---
分享成功 | public void OnWXShareSucceed() 
分享失败 | public void OnWXShareFailed(string msg)


> **注意：分享过程中，若用户选择留在微信，则不会产生分享回调。游戏不应当完全依赖分享回调。**

### 1.14.实名认证

调用该方法时，弹出实名认证窗口。

```
public static void OpenRealName()
```

示例代码

```
XDSDK.OpenRealName();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
确认退出 | public void OnRealNameSucceed() 
取消退出 | public void OnRealNameFailed(string error_msg)
 

> **注意：实名认证结果以服务端authoriz_state参数为准（见4.1）。**

### 1.15.游客绑定

调用该方法时，弹出游客绑定窗口。

```
public void OpenUserBindView()
```

示例代码

```
XDSDK.OpenUserBindView ();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
成功 | public void OnGuestBindSucceed (string token)
失败 | public void OnGuestBindFailed(string msg)
 

### 1.16.客服

调用该方法时，弹出客服窗口。

```
public static void UserFeedback()
```

示例代码

```
XDSDK.UserFeedback();
```

### 1.17.TapDB

```
public static void SetLevel(int level)

public static void SetServer(string server)

```

示例代码

```
XDSDK.SetLevel(100);

XDSDK.SetServer("xxxxxxx");

```

PS：为了在Android平台跟踪玩家的游戏次数和时长，需要在游戏的每个Activity的onResume和onStop中添加对应的调用。

```
// 安卓
public static void OnResume();
public static void OnStop();
```


示例代码

```
// 安卓
XDSDK.OnResume();
XDSDK.OnStop();
```



> **注意：  
1.新版本SDK中，已经集成了TapDB的onStart、setUser方法，游戏客户端不需要再重复集成。  
2.提供了setLevel，setServer方法供游戏调用，充值统计由服务端完成。  
3.已接入TapDB的游戏在集成SDK时仅需要移除onStart和setUser方法，其余保持不变。  
4.尚未接入TapDB的游戏，可根据需要自行接入SDK中尚未包含的TapDB SDK的其他方法。  
5.如果需要自行接入TapDB，请在SDK初始化方法中enableTapDB参数填写false。**  
 

### 1.18.TapTap论坛
导入

namespace com.taptap.sdk

打开论坛

```
appid 游戏论坛ID，与TapTap开发者ID不同
public void OpenTapTapForum(string appid)

```

示例

```
TapTapSDK.Instance.OpenTapTapForum("123");
```

**其他部分**

安卓:

1. 确认 /app/manifest/AndroidManifest.xml 文件。
2. 将 uses-permission 元素添加到清单文件中：

      ```<uses-permission android:name="android.permission.INTERNET"/>```
      
3. 添加 Activity元素到清单文件中: 
 
		__请根据游戏屏幕方向设置activity__

    ```xml
    <activity android:name="com.taptap.sdk.TapTapActivity" 
        android:exported="false"
        android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
        android:screenOrientation="sensorLandscape"//请保持和游戏屏幕方向相同
        android:theme="@android:style/Theme.NoTitleBar">
    </activity>
    ```


iOS:

配置info.plist

```
<key>NSPhotoLibraryUsageDescription</key>   
<string>XXXX需要您的同意,才能访问相册</string>
<key>NSCameraUsageDescription</key>   
<string>XXXX需要您的同意,才能访问相机</string>
<key>NSAppTransportSecurity</key>

<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>
```

### 1.19.XDLive直播
XDSDK中包含了游戏直播相关组件。

开通步骤：

1.联系XDSDK相关人员开通，获取appid和授权直播源管理后台。

2.接口

打开论坛

```
// appid: 申请到的appid
public void OpenXDLive(string appid);

// appid: 申请到的appid 
// 	 uri: 自定义地址
public void OpenXDLive(string appid,string uri);

// 		 appid: 申请到的appid 
//   	   uri: 自定义地址
// orientation: 指定屏幕方向（支持竖屏游戏强制设置横屏）
public void OpenXDLive(string appid,string uri,int orientation);
```

示例：

```
com.xdsdk.xdlive.XDLive.Instance.OpenXDLive("123");

```

设置直播相关事件回调：

```
public void SetCallback(XDLiveCallback callback)；

```

回调方法：

```
// 直播打开
public override void OnXDLiveOpen();
// 直播关闭
public override void OnXDLiveClosed();
```

### 1.20.防沉迷
unity 2.3.0版本优化防沉迷，支持单机游戏和联网游戏。
提供停止计时和恢复计时接口。游戏根据需求自行调用。

```

public static void GameStop();

public static void GameResume ();

```

### 1.21.打开协议页面
游戏需要打开协议的内容时，可以调用该接口，示例如下：

```
xdsdk.XDSDK.OpenProtocol(xdsdk.XDSDK.ProtocolType.PROTOCOL_TYPE_GAME);
```
参数为协议类型，包括  PROTOCOL\_TYPE\_USER(用户协议),PROTOCOL\_TYPE\_GAME(游戏协议),PROTOCOL\_TYPE\_PRIVACY(隐私协议)

### 1.22.地区判断

心动SDK提供地区判断

```c#

using TDSCommon;

TDSCommon.TDSCommon.GetRegionCode((isMainland)=>
{
    //true 大陆 false 非大陆
});

```

## 2.Android

**如果游戏打包后无法在AndroidP的机型上使用**

1. 将[org.apache.http.legacy.jar](../org.apache.http.legacy.jar)打包到游戏内
2. AndroidManifest的Application标签下添加如下内容

```
<uses-library android:name="org.apache.http.legacy" android:required="false"/>
```

另外需要在 AndroidManifest.xml中 application 标签内添加: android:usesCleartextTraffic="true" ，例如：

```
    <application 
     …
      android:usesCleartextTraffic="true"
     …
    >
    
```

### 2.1.按需要修改AndroidManifest

**可以根据需要, 参照如下示例修改Plugins/Android/AndroidManifest.xml，注意要将“项目包名”改为游戏自己的包名。**


```
<?xml version="1.0" encoding="utf-8"?>
<manifest
    xmlns:android="http://schemas.android.com/apk/res/android"
    package="项目包名"
    xmlns:tools="http://schemas.android.com/tools"
    android:installLocation="preferExternal"
    android:versionCode="1"
    android:versionName="1.0">
    <supports-screens
        android:smallScreens="true"
        android:normalScreens="true"
        android:largeScreens="true"
        android:xlargeScreens="true"
        android:anyDensity="true"/>

 	<uses-sdk tools:overrideLibrary="com.bun.miitmdid"/>
 	
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

    <application  android:usesCleartextTraffic="true">
        <activity
            android:name="com.unity3d.player.UnityPlayerActivity"
            android:launchMode="2"
            android:screenOrientation="0"
            android:configChanges="orientation|keyboardHidden|screenSize"
            android:hardwareAccelerated="false">
               <intent-filter>
                  <action
                      android:name="android.intent.action.MAIN" />
                  <category
                      android:name="android.intent.category.LAUNCHER" />
               </intent-filter>
       </activity>
       
    <activity
        android:name="com.xd.sdklib.helper.XDStartView"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" 
        android:configChanges="orientation|keyboardHidden|screenSize" />
    <activity
        android:name="com.xd.sdklib.helper.XDPayActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
        android:configChanges="orientation|keyboardHidden|screenSize"  />
    <activity
        android:name="com.xd.sdklib.helper.XDViewActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
        android:configChanges="orientation|keyboardHidden|screenSize" />
    <activity
        android:name="com.xd.sdklib.helper.XDWebView"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
    <activity
        android:name="com.xd.sdklib.helper.WXEntryActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />

    <activity-alias
        android:name="项目包名.wxapi.WXEntryActivity"
        android:exported="true"
        android:targetActivity="com.xd.sdklib.helper.WXEntryActivity"/>

    <!-- Ping++ SDK -->
    <activity
        android:name="com.pingplusplus.android.PaymentActivity"
        android:configChanges="orientation|screenSize"
        android:launchMode="singleTop"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
        
     <!-- TapTap登录 -->
    <activity
            android:name="com.taptap.sdk.TapTapActivity"
            android:exported="false"
            android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />

    <activity
            android:name="com.taptap.forum.TapTapActivity"
            android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
            android:exported="false"
            android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />
            
    <!-- 支付宝 -->
    <activity
        android:name="com.alipay.sdk.app.H5PayActivity"
        android:configChanges="orientation|keyboardHidden|navigation"
        android:exported="false"
        android:screenOrientation="portrait" />
    <activity
        android:name="com.alipay.sdk.auth.AuthActivity"
        android:configChanges="orientation|keyboardHidden|navigation"
        android:exported="false"
        android:screenOrientation="portrait" />

    <!-- 微信支付 -->
    <activity-alias
        android:name="项目包名.wxapi.WXPayEntryActivity"
        android:exported="true"
        android:targetActivity="com.pingplusplus.android.PaymentActivity" />

    <!-- QQ登录 -->
    <activity
        android:name="com.tencent.tauth.AuthActivity"
        android:noHistory="true"
        android:launchMode="singleTask" />
    <activity
        android:name="com.tencent.connect.common.AssistActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar"
        android:configChanges="orientation|keyboardHidden|screenSize" />
        
    <!-- 文件配置 -->    
    <provider 
		android:authorities="项目包名.com.squareup.picasso" 
		android:exported="false" 
		android:name="com.squareup.picasso.PicassoProvider"/>
    </application>
</manifest>
```


### 2.2.防沉迷设置

Android 防沉迷依赖于 XDSDK.OnResume 和 XDSDK.OnStop 接口，所以游戏应确保这两个接口接入正常，在 unity 中接入示例：

```
void OnApplicationPause(bool pauseStatus)
    {
        if (pauseStatus)
        {
			xdsdk.XDSDK.OnStop();
        }
        else
        {
			xdsdk.XDSDK.OnResume();
        }
    }
```
如果游戏将项目导出为 Android 原生工程，也可以在主 Activity 中的`onResume`和`onStop`中调用原生对应接口 `XDSDK.onResume`和`XDSDK.onStop`。两种接入方式选择一个即可。

### 2.3.生成APK

在Unity中生成APK，或将工程导出至Android Studio进行打包。


**当前版本QQ SDK （open_sdk_r6008_lite.jar）包含assets，当构建工具设置成internal时，这些文件不会被打包进apk中，会导致未安装QQ时不能扫码登录。为避免此类问题，建议将构建构建工具换成gradle或提取jar包含的assets文件，放置于android/assets**


![](/img/2.png)


### 2.4.接入微信分享

> **心动SDK提供的分享功能已过期，即将停止维护，请尽量自行接入分享。**
微信分享的微信AppID必须使用心动提供的微信AppID，否则会导致微信登录失败
如果游戏需要自行接入微信分享，AndroidManifest需进行以下处理。

接入第三方分享插件有两种常见的方式：

* 一般会被要求在包名目录下创建wxapi文件夹，新建一个名为WXEntryActivity的activity并继承或实现某个类或接口，请将这个类改名为WXEntryForXDActivity以免和心动登录功能冲突。
* 另一种是直接配置activity-alias，这种情况请与平台联系后再使用

```

单接分享SDK被要求的增加配置，注意其中name的修改
<activity
	android:name=".wxapi.WXEntryForXDActivity"
	android:theme="@android:style/Theme.Translucent.NoTitleBar"
	android:configChanges="keyboardHidden|orientation|screenSize"
	android:exported="true"
	android:screenOrientation="portrait"/>
	
```
### 2.5.Android 11 适配
游戏打包时根据 targetSdkVersion 版本不同需要进行适配。  
> targetSdkVersion 指在 unity 中通过 File -> Build Settings -> Player Settings -> Other Settings 中 Target API Level 设置的版本  

如果游戏打包配置时 targetSdkVersion < 30 , 暂不需要配置，可跳过。  
如果 targetSdkVersion >= 30 , 需按如下步骤进行配置：

####（1）添加 AndroidManifest 配置  

 在 AndroidManifest.xml 中添加如下内容：
 
 ```
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
 
#### (2) Unity 配置修改

根据不同 Unity 版本修改对应编译配置，具体可参考[Unity 适配 Android 11](https://developers.google.com/ar/develop/unity/android-11-build)。  

如果当前版本小于 2019.3.patch 7, 当编译提示 launcher 与 main library 的 gradle 版本不一致错误信息时，需要将 SDK 目录中的 Android 附加 / Android 11适配目录 中 launcherTemplate.gradle 文件复制到项目 Assets / plugins / Android 目录中 、GradleTemplateFixer.cs 复制到 Assets / Editor 目录中。在编译前需选择Unity菜单 Tools -> Build -> Gradle Template Fix (Preprocess build）。如果游戏除了当前项目外还需要编译其他项目，在编译完成后还需选择 Tools -> Build -> Gradle Template Fix (Postprocess build）否则不需要其他操作。

## 3.iOS

用Unity导出Xcode工程并打开

### 3.1. 导入SDK文件

从心动平台处获取SDK资源文件，其中主要的文件或目录用途如下。

目录或文件 | 用途
--- | ---
XDSDKResource.bundle | 心动SDK需要或依赖的资源文件，需要保证所有文件都被添加到了Xcode的“Copy Bundle Resources”中


将以上文件导入Xcode工程。

### 3.2. 添加系统依赖库

```
libz.tbd
libsqlite3.0.tbd
libicucore.tbd
*请核对下列库文件是否已自动添加*
Security.framework 
CFNetwork.framework
UIKit.framework
QuartzCore.framework
Foundation.framework
CoreGraphics.Framework
CoreTelephony.framework
SystemConfiguration.framework
libiconv.tbd
libc++.tbd
// 2.1.0
AuthenticationServices.framework
```

### 3.3. 设置 URL Types

需要在Xcode中设置多个URL Types，URL Types主要是需要设置URL Schemes，其它选项可任意填写。按照下面表格的内容填写，注意替换其中的各项AppID。

URL Schemes | 用途 |示例 |备注
---|---|---|---|
XD-{心动AppID}|用于支付宝支付后跳回|XD-ci2dos1ktzsca4f
{微信AppID}| 用于微信授权登录后跳回|wx19f231d77ac408d9
tencent{QQ AppID}|用于QQ授权登录后跳回|tencent317081|如果给到的心动AppID没有对应的QQ AppID，可以不配置该项
tt{TapTap AppID}|用户TapTap授权登录后跳回|tt123456

### 3.4. 配置 info.plist

修改项目的info.plist，在节点中添加下列内容。修改的内容主要为了保证QQ和微信登录能够正常运行。

```
<key>LSApplicationQueriesSchemes</key>
<array>
<string>tapsdk</string>
<string>mqq</string>
<string>mqqapi</string>
<string>wtloginmqq2</string>
<string>mqqopensdkapiV4</string>
<string>mqqopensdkapiV3</string>
<string>mqqopensdkapiV2</string>
<string>mqqwpa</string>
<string>mqqOpensdkSSoLogin</string>
<string>mqqgamebindinggroup</string>
<string>mqqopensdkfriend</string>
<string>mqzone</string>
<string>weixin</string>
<string>wechat</string>
// 2.1.0
<string>weixinULAPI</string>
</array>
<key>NSAppTransportSecurity</key>

<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>

```


### 3.5.配置工程capability

更新SDK 2.1.0之后，
***需要在xcode工程中添加两项capability：Associated Domains \ Sign in with apple.***

如下图:

![](/img/4.png)

Associated Domains添加一项，格式为『applinks + 域名』如「applinks:www.xd.com」。
**域名为游戏官网地址，请联系平台方确认**

### 3.6. 处理第三方应用跳回事件
**在UnityAppController.mm中增加如下两个方法，如果已经存在这些方法，在其中追加相应的处理代码即可。请务必添加下列代码，否则将影响第三方登录的授权回调。**

> SDK 2.1.0 新增universalLink处理

```
#import <XdComPlatform/XDCore.h>
```

```
- (BOOL)application:(UIApplication*)application openURL:(NSURL*)url sourceApplication:(NSString*)sourceApplication annotation:(id)annotation{
	
	...
	...
    ...
   return [XDCore HandleXDOpenURL:url];
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options{
    
    return [XDCore HandleXDOpenURL:url];
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
    return [XDCore handleOpenUniversalLink:userActivity];
}
```

### 3.6. Buid Settings

Enable Bitcode = NO

***在编译选项‘Other Linker Flags’中加入「-ObjC」和 「-all_load」。***

**Swift Language Version 设置为 Swift 5.0**

**BuildSetting中,Always Embed Swift Standard Libraries设置为YES**

**BuildSetting中,Runpath Search Paths 确保添加 @executable_path/Frameworks**

**如果新版本Untiy导出后有多个Target,只需在主target配置即可。**

##### 完成以上配置即可进行编译打包。

## 4. 广告部分说明
XDSDK内部集成了部分主要渠道广告SDK，包括今日头条巨量广告平台SDK，和腾讯广点通SDK。必要事件（如注册）会在SDK内部发送，充值事件由XDSDK服务端发送事件到相应平台。游戏不用做额外对接工作。

需要接入相应平台的SDK请联系XDSDK后端配置广告参数。

### 4.1	iOS
今日头条：TTTracker.framework，版本2.0.6

广点通：GDTActionSDK.framework，版本1.4.9

游戏打包时加入对应的SDK即可。

注意：

1.广点通SDK在添加到Link Binary With Libraries之后，还必须添加到Embedded Contend中。

2.build setting 中Other Link Flag 中添加-ObjC。


### 4.2	Android
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




## 5. 服务端对接

### 5.1	获取用户信息
游戏服务端使用客户端获取的access token，按照下面的方式获取用户信息。

```
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
应用场景 | 参数以及使用方法
--- | ---
判断是否游客账号 | 游客账号的name和id相同
判断是否通过二次验证 | safety（0未实名，>0 都表示已实名认证）
判断账号类型 | site（0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，注意类型是字符串）
判断是否实名认证 | authoriz_state（0未实名，>0 都表示已实名认证）

### 5.2.	处理支付回调

游戏服务端需要提供一个能够处理支付回调的接口，这个接口是申请心动AppID时需要的。处理逻辑中，需要使用一个密钥进行加密验证，该密钥即为心动AppKey。
当心动平台处有充值成功时，心动服务端会通知到支付回调接口，信息如下。

```
method：POST
数据格式：application/x-www-form-urlencoded

```

***请勿信任透传参数***

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

```
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


> 需要注意:  
1、游戏服务端应该按照order_id进行排重，相同order_id仅生效一次。  
2、游戏服务端成功处理了支付回调后，应当返回字符串“success”，如果是一笔已经处理的重复的订单，也应该返回“success”。  
3、只要通过签名校验的回调，都应该视为合法数据，按照如下逻辑发放道具。A.如果payment字段为appstore，即AppStore支付，直接按照product_id字段进行道具发放；B.如果payment字段为其它值，需要验证gold字段和 product_id 字段是否相符，如果相符，按照product_id发放道具，如果不相符，直接按照gold字段折算成对应的游戏货币发放。

