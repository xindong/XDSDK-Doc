---
id: fun-login
title: 登录
sidebar_label: 登录
---
import {Highlight} from './component';

## 1.登录

- XDSDK 2.3.0开始，支持游戏自定义登录入口。入口素材联系平台提供

- 游戏自行绘制登录按钮，分别出发下面的登录事件
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
<Highlight color='#f00'>由于苹果审核要求，iOS13 显示第三方登录的同时必须显示苹果登录(建议位置靠前)</Highlight>


调用该接口会触发下列回调
<Highlight color='#f00'>获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。</Highlight>

类别 | 回调方法
--- | ---
登录成功 | void OnLoginSucceed(string token)
登录失败 | void OnLoginFailed(string msg)
登录取消 | void OnLoginCanceled()

<Highlight color='#f00'>XDSDK 4.2.0之后，新版用户中心显示角色信息，需要额外调用接口设置角色信息</Highlight>


## 2.设置角色
	角色登录成功之后，设置当前角色信息；角色登出后，清空当前角色信息

	```
	public static void SetRole(string roleId,string roleName,string roleAvatar)

	public static void ClearRole()
	```

## 3.获取Access Token

调用该接口获取当前登录用户的access token。

```
public static string GetAccessToken()
```

#### 示例代码
```
XDSDK.GetAccessToken()
```

## 4.获取当前登录状态

```
public static bool IsLoggedIn()
```
#### 示例代码
```
XDSDK.IsLoggedIn()
```

## 5.打开用户中心

调用该接口打开用户中心界面，用户可以在该界面进行登出和登录操作，游戏注意正确处理回调。在未登录状态，无法打开用户中心。在用户中心中，用户可进行登出操作，此时交互界面将消失。游戏需要提供引导用户重新进行登录的操作界面。

```
/**
* @return false表示尚未登录，重复调用默认为成功
*/
public static bool OpenUserCenter()
```
#### 示例代码
```
XDSDK.OpenUserCenter()
```

## 6.发起支付

<Highlight color='#f00'>不保证在任何情况下都能收到回调，请勿直接使用SDK返回的支付结果作为最终判定订单状态的依据。
为了收到支付回调，需要在应用启动后就设置好支付相关功能。
</Highlight>

### 6.1发起支付
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
EXT | 否 |额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。#### 示例代码：info.Add("EXT", "{\"payCallbackCode\":2}");

### 6.2恢复支付
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

```
/// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
/// @param resultList 订单信息List。
/// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传
///                          	 	   Product_Id ：商品ID，
///                                        Quantity：商品数量
public override void RestoredPayment(List<Dictionary<string,string>> resultList){
    }
```


### 6.3恢复订单

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
EXT | 否 | 额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。#### 示例代码：[prdInfo setObject:@"{\\"payCallbackCode\\":1}" forKey:@"EXT"];

### 6.4支付结果

调用发起支付和恢复支付接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | public void OnPayCompleted()
支付失败 | public void OnPayFailed(string msg)
支付取消 | public void OnPayCanceled()

#### 6.5示例代码

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

## 7.登出

需要注销当前登录用户时调用，该操作不会出现登录界面。

```
public static void Logout()
```
调用该接口会触发下列回调

类别 | 回调方法
--- | ---
登出成功 | public void OnLogoutSucceed()

#### 示例代码
```
XDSDK.Logout();
```

## 8.游客升级

当游客账号升级成功时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | public void OnGuestBindSucceed(string token)

## 9.退出

调用该方法时，弹出确认框供用户选择是否退出。

```
public static void Exit()
```

#### 示例代码

```
XDSDK.Exit();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
确认退出 | public void OnExitConfirm()
取消退出 | public void OnExitCancel()

## 10.微信分享
<Highlight color='#f00'>微信分享功能即将停止维护，建议单独接入</Highlight>

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



音乐分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
musicUrl | 是 | string | 音乐链接 （请填写音乐路径。例：https://www.xd.com/music.mp3）
musicLowBandUrl | 否 | string | 低带宽音乐链接
musicDataUrl | 否 | string | 音乐数据链接
musicLowBandDataUrl | 否 | string | 低带宽状音乐数据链接


视频分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
videoUrl | 是 | string | 视频链接
videoLowBandUrl | 否 | string | 低带宽视频链接



网页分享参数 | 是否必须 | 类型| 说明
--- | --- | --- | ---
webpageUrl | 是 | string | 网页链接

#### 示例代码

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

<Highlight color='#f00'>
注意：分享过程中，若用户选择留在微信，则不会产生分享回调。游戏不应当完全依赖分享回调。
</Highlight>

## 11.实名认证

调用该方法时，弹出实名认证窗口。

```
public static void OpenRealName()
```

#### 示例代码

```
XDSDK.OpenRealName();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
确认退出 | public void OnRealNameSucceed()
取消退出 | public void OnRealNameFailed(string error_msg)

<Highlight color='#f00'>
注意：实名认证结果以服务端authoriz_state参数为准（见4.1）。
</Highlight>

## 12.游客绑定

调用该方法时，弹出游客绑定窗口。

```
public void OpenUserBindView()
```

#### 示例代码

```
XDSDK.OpenUserBindView ();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
成功 | public void OnGuestBindSucceed (string token)
失败 | public void OnGuestBindFailed(string msg)


## 13.客服

调用该方法时，弹出客服窗口。

```
public static void UserFeedback()
```

#### 示例代码

```
XDSDK.UserFeedback();
```

## 15.TapTap论坛
导入`namespace com.taptap.sdk`

打开论坛

```
appid 游戏论坛ID，与TapTap开发者ID不同
public void OpenTapTapForum(string appid)

```

示例

```
TapTapSDK.Instance.OpenTapTapForum("123");
```

## 16.XDLive直播
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


## 18.打开协议页面
游戏需要打开协议的内容时，可以调用该接口，示例如下：

```
xdsdk.XDSDK.OpenProtocol(xdsdk.XDSDK.ProtocolType.PROTOCOL_TYPE_GAME);
```
参数为协议类型，包括  PROTOCOL\_TYPE\_USER(用户协议),PROTOCOL\_TYPE\_GAME(游戏协议),PROTOCOL\_TYPE\_PRIVACY(隐私协议)

## 19.地区判断

心动SDK提供地区判断

```c#

using TDSCommon;

TDSCommon.TDSCommon.GetRegionCode((isMainland)=>
{
    //true 大陆 false 非大陆
});

```
