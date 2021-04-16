---
id: unity
title: Unity快速开始
sidebar_label: Unity
slug: /
---
基于XDSDK实现简单的登录功能

import {Highlight} from './component';

## 导包


**已接入旧版 SDK 的游戏需要先删除旧版 SDK 的所有文件，具体文件列表参考 [旧版SDK文件列表](./旧版SDK文件列表.md)**  

 新版 XDSDK 使用 UPM 方式导入 SDK 资源，配置方式有两种，选择一种即可，如下所示：

### 1 修改对应配置文件

```json
//在YourProjectPath/Packages/manifest.json中添加以下代码
"dependencies":{
        "com.xd.sdk":"https://github.com/xindong/XDSDK_UPM.git#3.0.0",
        "com.tds.sdk":"https://github.com/xindong/TAPSDK_UPM.git#1.0.7",
    }
```



### 2 通过 Unity PackageManager 导入
1.  下载XDSDK的 **[Unity3D工具类文件](https://git.gametaptap.com/tds-public/xd-sdk-4/-/tree/master/sdk/unity)**， 双击或拖拽 XDSDK_V(版本号)_unity.unitypackage 文件到 Plugins 目录下导入相关文件。注意，该操作可能会覆盖你项目原来已经存在的文件。
2.  全部选择，点击 “import” 按钮。   
3.  导入后，将 Plugins/script 下的 XDSDKListener.cs 脚本文件拖动到长生命周期的对象中（比如 MainCamera）进行挂接。  

![unitypackage import](https://qnblog.ijemy.com/WX20201125-093759.png)  

**至此，你已经将XDSDK导入进自己的项目工程中了**   

## xdsdk快速集成-登录功能

### 1、引入命名空间

#### 示例代码
```cs
using xdsdk;
```

### 2、设置回调

#### API
```cs
public static void SetCallback(XDCallback callback)
```

#### 示例代码
```cs
//XDSDKCallback需要实现XDCallback接口的所有方法
XDSDK.SetCallback(new XDSDKCallback());
```

### 3、初始化XDSDK

#### API

```cs
/**
 * @param client_id 心动client_id
 * @param aOrientation 屏幕方向，0表示横屏，1表示竖屏
 * @param channel 渠道号
 * @param version 版本号
 * @param enableTapDB 是否开启TapDB
 */

public static void InitSDK(string client_id,
						   int aOrientation,
						   string channel,
						   string version,
						   bool enableTapdb)
```

#### 示例代码

```cs
XDSDK.InitSDK("xxxxxx", 1,"xx","xx",true);
```


### 4、登录
#### API

```cs
public static void TapTapLogin()
```

#### 示例代码

```cs
XDSDK.TapTapLogin();
```

### 5. 注意事项
-   XDCallback方法需要全部被实现，建议直接拷贝官方Demo工程中的 [XDSDKCallback.cs](https://github.com/JemyCheung/xdsdk_unity/blob/master/Assets/scripts/XDSDKCallback.cs) 脚本中的方法，否则可能会报错
-   XDSDK的初始化方法initSDK()的第一个参数 client_id 确认是从开发者后台正确获取的  
-   注意XDSDKListener.cs脚本的挂载

### 6. Android-导出APK
#### Android 11 的适配

如果游戏打包设置的 targetSdkVersion < 30 , 暂不需要配置，可跳过此步。
如果设置的 targetSdkVersion >= 30 , 则需按如下步骤进行配置：
#### 1. 配置 AndroidManifest.xml 文件
```xml
<!--在 AndroidManifest.xml 中添加如下内容：-->
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

#### 2. unity配置修改

根据不同 Unity 版本修改对应编译配置，具体可参考Unity [适配 Android 11](https://developers.google.com/ar/develop/unity/android-11-build)  
如果当前版本小于 2019.3.patch 7, 当编译提示 launcher 与 main library 的 gradle 版本不一致错误信息时，需要将 SDK 目录中的 Android 附加 / Android 11适配目录中、将launcherTemplate.gradle 文件拷贝到项目 Assets / plugins / Android 目录中、将GradleTemplateFixer.cs 文件拷贝到 Assets / Editor 目录中。在编译前需选择Unity菜单 Tools -> Build -> Gradle Template Fix (Preprocess build）。如果游戏除当前项目外还需要编译其他项目，在编译完成后还需选择 Tools -> Build -> Gradle Template Fix (Postprocess build），否则不需要其他操作。

#### 导出apk
<Highlight color='#f00'>* 请确保签名文件和包名是在开发者中心正确配置过的，client_id从开发者中心获取</Highlight>   

按下面步骤即可成功打包安装

![](https://qnblog.ijemy.com/xd_android_releaseapk.png)

### 7. iOS-打包Xcode
**请注意带<Highlight color='#f00'>*</Highlight>都为必配项**

#### 1. 导出xcode<Highlight color='#f00'>*</Highlight>
Platform 切换至 iOS 平台 --> 点击 “Player Settings” --> 设置 Bundle Identifier --> 点击 “Build“ 按钮。如下图步骤所示。

![](https://qnblog.ijemy.com/xd-unity-ios-00.png)
请确保bundleid与开发者中心配置的bundleid保持一致

#### 2. 导入资源文件<Highlight color='#f00'>*</Highlight>

下载的XDSDK文件中包含有 “iOS附加” 目录，该目录中有 XDSDKResouse.bundle 文件，将该文件拷贝至由Unity导出的Xcode项目的根目录中，该文件的主要用途如下。

目录或文件 | 用途
--- | ---
XDSDKResource.bundle | XDSDK需要或依赖的资源文件，需要保证所有文件都被添加到了Xcode的“Copy Bundle Resources”中

![](https://qnblog.ijemy.com/xd-unity-ios-01.png)

#### 3. 添加系统依赖库<Highlight color='#f00'>*</Highlight>
**请核对下列库文件是否已自动添加，如果未自动添加则需要手动添加**

```cs
libz.tbd
libsqlite3.0.tbd
libicucore.tbd
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
AuthenticationServices.framework
```

![](https://qnblog.ijemy.com/xd-unity-ios-02.png)

#### 4. 配置 info.plist

修改项目的info.plist，在dict节点中添加下列内容。修改的内容主要为了保证QQ和微信登录能够正常运行。

```xml
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
<dict>
	<key>NSAllowsArbitraryLoads</key>
	<true/>
</dict>

```



#### 5. 配置工程capability<Highlight color='#f00'>*</Highlight>
1. 需要在xcode工程中添加capability： Sign in with apple  
<Highlight color='#f00'>由于苹果审核要求，iOS13 显示第三方登录的同时必须显示苹果登录(建议位置靠前)</Highlight>

2. (非必须)在xcode工程中添加capability：Associated Domains
Associated Domains添加一项，格式为『applinks + 域名』如「applinks:www.xd.com」。
域名为游戏官网地址，请联系平台方确认


#### 6. 处理第三方应用跳转
不配置的情况下会打开webview进行登录
##### 6.1. 跳转  

需要在Xcode中设置多个URL Types，URL Types主要是需要设置URL Schemes，其它选项可任意填写。按照下面表格的内容填写，注意替换其中的各项AppID。

URL Schemes | 用途 |示例 |备注
---|---|---|---|
XD-{心动client_id}|用于支付宝支付后跳回|XD-ci2dos1ktzsca4f
{微信AppID}| 用于微信授权登录后跳回|wx19f231d77ac408d9
tencent{QQ AppID}|用于QQ授权登录后跳回|tencent317081|如果给到的心动AppID没有对应的QQ AppID，可以不配置该项
tt{TapTap client_id}|用户TapTap授权登录后跳回|tt123456

##### 6.2. 跳回
在UnityAppController.mm中增加如下两个方法，如果已经存在这些方法，在其中追加相应的处理代码即可。请务必添加下列代码，否则将影响第三方登录的授权回调。

SDK 2.1.0 新增universalLink处理

```c
#import <XdComPlatform/XDCore.h>
```

```c
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

### 8. Buid Settings<Highlight color='#f00'>*</Highlight>

**注意：如果新版本Untiy导出后有多个Target，只需在主target配置即可。**

**Enable Bitcode = NO**

**在编译选项‘Other Linker Flags’中加入「-ObjC」和 「-all_load」。**

**Swift Language Version 设置为 Swift 5.0**

**BuildSetting中，Always Embed Swift Standard Libraries设置为YES**

**BuildSetting中，Runpath Search Paths 确保添加 @executable_path/Frameworks**

**如果新版本Untiy导出后有多个Target，只需在主target配置即可。**



## 登录功能介绍


### 1.登录

- XDSDK 2.3.0开始，支持游戏自定义登录入口。入口素材联系平台提供。<Highlight color='#f00'>原默认登录方式不再推荐</Highlight>

- 游戏自行绘制登录按钮，分别触发下面的登录事件

- 登录前需设置回调并完成初始化，回调设置请[参考demo](https://github.com/JemyCheung/xdsdk_unity/blob/master/Assets/scripts/XDSDKCallback.cs)
```cs
// 自动登录（若有上次登录记录，则会直接登录）
public static bool AutoLogin()
// TapTap登录
public static void TapTapLogin()
// 苹果登录
public static void AppleLogin()
// 游客登录
public static void GuestLogin()

```

*<Highlight color='#f00'>由于苹果审核要求，iOS13+ 显示第三方登录的同时必须显示苹果登录(建议位置靠前) </Highlight>*  

*<Highlight color='#f00'>获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。</Highlight>*

#### 登录状态回调

类别 | 回调方法
--- | ---
登录成功 | void OnLoginSucceed(string token)
登录失败 | void OnLoginFailed(string msg)
登录取消 | void OnLoginCanceled()


### 2.设置角色

角色登录成功之后，设置当前角色信息；角色登出后，清空当前角色信息

**<Highlight color='#f00'>XDSDK 4.2.0之后，新版用户中心显示角色信息，需要额外调用接口设置角色信息</Highlight>**

```cs
public static void SetRole(string roleId,string roleName,string roleAvatar)

public static void ClearRole()
```

### 3.获取Access Token

调用该接口获取当前登录用户的access token。

```cs
public static string GetAccessToken()
```

#### 示例代码
```cs
XDSDK.GetAccessToken()
```

### 4.获取当前登录状态

```cs
public static bool IsLoggedIn()
```
#### 示例代码
```cs
XDSDK.IsLoggedIn()
```


### 5.游客升级

当游客账号升级成功时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | public void OnGuestBindSucceed(string token)

### 6.游客绑定

调用该方法时，弹出游客绑定窗口。

```cs
public void OpenUserBindView()
```

#### 示例代码

```cs
XDSDK.OpenUserBindView();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
成功 | public void OnGuestBindSucceed (string token)
失败 | public void OnGuestBindFailed(string msg)

### 7.登出

需要注销当前登录用户时调用，该操作不会出现登录界面。

```cs
public static void Logout()
```
调用该接口会触发下列回调

类别 | 回调方法
--- | ---
登出成功 | public void OnLogoutSucceed()

#### 示例代码
```cs
XDSDK.Logout();
```

### 8.退出

调用该方法时，弹出确认框供用户选择是否退出。

```cs
public static void Exit()
```

#### 示例代码

```cs
XDSDK.Exit();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
确认退出 | public void OnExitConfirm()
取消退出 | public void OnExitCancel()



## 用户相关功能介绍
### 1. 打开用户中心

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


### 2. 微信分享
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

### 3.实名认证

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

### 4.客服

调用该方法时，弹出客服窗口。

```cs
public static void UserFeedback()
```

#### 示例代码

```cs
XDSDK.UserFeedback();
```


### 5.防沉迷
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



### 6.打开协议页面
游戏需要打开协议的内容时，可以调用该接口，示例如下：

```cs
xdsdk.XDSDK.OpenProtocol(xdsdk.XDSDK.ProtocolType.PROTOCOL_TYPE_GAME);
```
参数为协议类型，包括  PROTOCOL\_TYPE\_USER(用户协议),PROTOCOL\_TYPE\_GAME(游戏协议),PROTOCOL\_TYPE\_PRIVACY(隐私协议)



### 7.TapTap论坛
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

#### Android配置
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

#### iOS配置
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

### 8.XDLive直播
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

### 9. 地区判断

```cs
using TDSCommon;

TDSCommon.TDSCommon.GetRegionCode((isMainland)=>
{
    //true 大陆 false 非大陆
});

```



## 内购
### 1. 流程图
![image](https://qnblog.ijemy.com/xd_pay.png)

### 2. 发起支付

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

### 3. 恢复支付
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


### 4. 恢复订单

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

### 5. 支付结果

调用发起支付和恢复支付接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | public void OnPayCompleted()
支付失败 | public void OnPayFailed(string msg)
支付取消 | public void OnPayCanceled()


## 广告
XDSDK内部集成了部分主要渠道广告SDK，包括今日头条巨量广告平台SDK，和腾讯广点通SDK。必要事件（如注册）会在SDK内部发送，充值事件由XDSDK服务端发送事件到相应平台。游戏不用做额外对接工作。

需要接入相应平台的SDK请联系XDSDK后端配置广告参数。

### 1. iOS
今日头条：TTTracker.framework，版本2.0.6

广点通：GDTActionSDK.framework，版本1.4.9

游戏打包时加入对应的SDK即可。

注意：

1.广点通SDK在添加到Link Binary With Libraries之后，还必须添加到Embedded Contend中。

2.build setting 中Other Link Flag 中添加-ObjC。


### 2. Android
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

