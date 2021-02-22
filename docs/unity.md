---
id: unity
title: Unity快速开始
sidebar_label: Unity
slug: /
---
基于XDSDK实现简单的登录功能

import {Highlight} from './component';

## 快速集成

**集成前可以参考 [官方demo](https://github.com/JemyCheung/xdsdk_unity)**

1.  下载XDSDK的 **[Unity3D工具类文件](https://git.gametaptap.com/tds-public/xd-sdk-4/-/tree/master/sdk/unity)**， 双击或拖拽 XDSDK_V(版本号)_unity.unitypackage 文件到 Plugins 目录下导入相关文件。注意，该操作可能会覆盖你项目原来已经存在的文件。 
2.  全部选择，点击 “import” 按钮。   
3.  导入后，将 Plugins/script 下的 XDSDKListener.cs 脚本文件拖动到长生命周期的对象中（比如 MainCamera）进行挂接。  

![unitypackage import](https://qnblog.ijemy.com/WX20201125-093759.png)  

**至此，你已经将XDSDK导入进自己的项目工程中了**   

## TapTap登陆功能

### 1、首先引入命名空间

#### 示例代码
```cs
using xdsdk;
```

### 2、XDSDK的初始化

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

### 3、设置回调

#### API
```cs
public static void SetCallback(XDCallback callback)
```

#### 示例代码
```cs
//XDSDKCallback需要实现XDCallback接口的所有方法
XDSDK.SetCallback(new XDSDKCallback());
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

## 注意事项
-   XDCallback方法需要全部被实现，建议直接拷贝官方Demo工程中的 [XDSDKCallback.cs](https://github.com/JemyCheung/xdsdk_unity/blob/master/Assets/scripts/XDSDKCallback.cs) 脚本中的方法，否则可能会报错
-   XDSDK的初始化方法initSDK()的第一个参数 client_id 确认是从开发者后台正确获取的  
-   注意XDSDKListener.cs脚本的挂载

## Android-导出APK
### Android 11 的适配

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

### 导出apk
<Highlight color='#f00'>* 请确保签名文件和包名是在开发者中心正确配置过的，client_id从开发者中心获取</Highlight>   

按下面步骤即可成功打包安装

![](https://qnblog.ijemy.com/xd_android_releaseapk.png)

## iOS-打包Xcode
**请注意带<Highlight color='#f00'>*</Highlight>都为必配项**

### 1. 导出xcode<Highlight color='#f00'>*</Highlight>
Platform 切换至 iOS 平台 --> 点击 “Player Settings” --> 设置 Bundle Identifier --> 点击 “Build“ 按钮。如下图步骤所示。

![](https://qnblog.ijemy.com/xd-unity-ios-00.png)
请确保bundleid与开发者中心配置的bundleid保持一致

### 2. 导入资源文件<Highlight color='#f00'>*</Highlight>

下载的XDSDK文件中包含有 “iOS附加” 目录，该目录中有 XDSDKResouse.bundle 文件，将该文件拷贝至由Unity导出的Xcode项目的根目录中，该文件的主要用途如下。

目录或文件 | 用途
--- | ---
XDSDKResource.bundle | XDSDK需要或依赖的资源文件，需要保证所有文件都被添加到了Xcode的“Copy Bundle Resources”中

![](https://qnblog.ijemy.com/xd-unity-ios-01.png)

### 3. 添加系统依赖库<Highlight color='#f00'>*</Highlight>
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

### 4. 配置 info.plist

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



### 5. 配置工程capability<Highlight color='#f00'>*</Highlight>
1. 需要在xcode工程中添加capability： Sign in with apple  
<Highlight color='#f00'>由于苹果审核要求，iOS13 显示第三方登录的同时必须显示苹果登录(建议位置靠前)</Highlight>

2. (非必须)在xcode工程中添加capability：Associated Domains
Associated Domains添加一项，格式为『applinks + 域名』如「applinks:www.xd.com」。
域名为游戏官网地址，请联系平台方确认


### 6. 处理第三方应用跳转
不配置的情况下会打开webview进行登录
#### 1. 跳转  

需要在Xcode中设置多个URL Types，URL Types主要是需要设置URL Schemes，其它选项可任意填写。按照下面表格的内容填写，注意替换其中的各项AppID。

URL Schemes | 用途 |示例 |备注
---|---|---|---|
XD-{心动client_id}|用于支付宝支付后跳回|XD-ci2dos1ktzsca4f
{微信AppID}| 用于微信授权登录后跳回|wx19f231d77ac408d9
tencent{QQ AppID}|用于QQ授权登录后跳回|tencent317081|如果给到的心动AppID没有对应的QQ AppID，可以不配置该项
tt{TapTap client_id}|用户TapTap授权登录后跳回|tt123456

#### 2. 跳回
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

### 7. Buid Settings<Highlight color='#f00'>*</Highlight>

**注意：如果新版本Untiy导出后有多个Target，只需在主target配置即可。**

**Enable Bitcode = NO**

**在编译选项‘Other Linker Flags’中加入「-ObjC」和 「-all_load」。**

**Swift Language Version 设置为 Swift 5.0**

**BuildSetting中，Always Embed Swift Standard Libraries设置为YES**

**BuildSetting中，Runpath Search Paths 确保添加 @executable_path/Frameworks**

**如果新版本Untiy导出后有多个Target，只需在主target配置即可。**
