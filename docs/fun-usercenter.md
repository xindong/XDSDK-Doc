---
id: fun-usercenter
title: 用户
sidebar_label: 用户
---
import {Highlight} from './component';


## 1.打开用户中心

调用该接口打开用户中心界面，用户可以在该界面进行登出和登录操作，游戏注意正确处理回调。在未登录状态，无法打开用户中心。在用户中心中，用户可进行登出操作，此时交互界面将消失。游戏需要提供引导用户重新进行登录的操作界面。

```
/**
* @return false表示尚未登录，重复调用默认为成功
*/
public static bool OpenUserCenter()
```
#### 示例代码
```cs
XDSDK.OpenUserCenter()
```


## 2.微信分享
**<Highlight color='#f00'>微信分享功能即将停止维护，建议单独接入</Highlight>**

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

```cs
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

## 3.实名认证

调用该方法时，弹出实名认证窗口。

```cs
public static void OpenRealName()
```

#### 示例代码

```cs
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

## 4.客服

调用该方法时，弹出客服窗口。

```cs
public static void UserFeedback()
```

#### 示例代码

```cs
XDSDK.UserFeedback();
```


## 5.防沉迷
unity 2.3.0版本优化防沉迷，支持单机游戏和联网游戏。

**
下面两种使用方式的区别：  
第二个是游戏前后台时调用，记录游戏时长，固定的。  
第一个应用场景是，玩家正在打比赛/游戏中，时间快到了。可以调个GameStop，停止计时。
**
```cs
//停止计时和恢复计时
public static void GameStop();

public static void GameResume ();
```

Android 防沉迷依赖于 XDSDK.OnResume 和 XDSDK.OnStop 接口，所以游戏应确保这两个接口接入正常，在 unity 中接入示例：
```cs
//游戏前后台时固定调用，记录游戏时常
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



## 6.打开协议页面
游戏需要打开协议的内容时，可以调用该接口，示例如下：

```cs
xdsdk.XDSDK.OpenProtocol(xdsdk.XDSDK.ProtocolType.PROTOCOL_TYPE_GAME);
```
参数为协议类型，包括  PROTOCOL\_TYPE\_USER(用户协议),PROTOCOL\_TYPE\_GAME(游戏协议),PROTOCOL\_TYPE\_PRIVACY(隐私协议)



## 7.TapTap论坛
导入`namespace com.taptap.sdk`

打开论坛

```cs
appid 游戏论坛ID，与TapTap开发者ID不同
public void OpenTapTapForum(string appid)

```

示例

```cs
TapTapSDK.Instance.OpenTapTapForum("123");
```

### Android配置
1. 确认 /app/manifest/AndroidManifest.xml 文件。

2. 将 uses-permission 元素添加到清单文件中：
```cs
<uses-permission android:name="android.permission.INTERNET"/>
```

3. 添加 Activity元素到清单文件中:
```java
<activity android:name="com.taptap.sdk.TapTapActivity"
    android:exported="false"
    android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
    android:screenOrientation="sensorLandscape"//请保持和游戏屏幕方向相同
    android:theme="@android:style/Theme.NoTitleBar">
</activity>
```

### iOS配置
打开infog.plist，添加授权文案
```
<key>NSPhotoLibraryUsageDescription</key>   
<string>XXXX需要您的同意,才能访问相册</string>
<key>NSCameraUsageDescription</key>   
<string>XXXX需要您的同意,才能访问相机</string>
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>
```

## 8.XDLive直播
XDSDK中包含了游戏直播相关组件。

开通步骤：

1.联系XDSDK相关人员开通，获取appid和授权直播源管理后台。

2.接口

打开论坛

```cs
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

```cs
com.xdsdk.xdlive.XDLive.Instance.OpenXDLive("123");

```

设置直播相关事件回调：

```cs
public void SetCallback(XDLiveCallback callback)；

```

回调方法：
cs
```
// 直播打开
public override void OnXDLiveOpen();
// 直播关闭
public override void OnXDLiveClosed();
```

## 9. 地区判断

```cs
using TDSCommon;

TDSCommon.TDSCommon.GetRegionCode((isMainland)=>
{
    //true 大陆 false 非大陆
});

```
