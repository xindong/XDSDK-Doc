---
id: xdsdk-changelog
title: 更新日志
sidebar_label: 更新日志
---

## 3.2.0 (iOS 5.2.0 & Android 5.2.0)   
日期： 05/11
##### 内容变更
* Android / iOS 修改实名提示文案
* Android / iOS 修改不同意隐私和用户等协议时文案显示
* Android / iOS 修改心动注册时默认为未同意协议
* iOS TapDB在 14.5及以上不再申请 IDFA 权限

##### 文件变更

SDK | UPM 地址
--- | ---
 com.xd.sdk | https://github.com/xindong/XDSDK_UPM.git#3.2.0
 com.tds.sdk | https://github.com/xindong/TAPSDK_UPM.git#1.1.5


## 3.1.2 (iOS 5.1.0 & Android 5.1.0)

##### 内容变更
* 修复 iOS 编译脚本未正确添加 TapTap URLTypes

##### 文件变更

SDK | UPM 地址
--- | ---
 com.xd.sdk | https://github.com/xindong/XDSDK_UPM.git#3.1.2
 com.tds.sdk | https://github.com/xindong/TAPSDK_UPM.git#1.0.9

## 3.1.1 (iOS 5.1.0 & Android 5.1.0)

##### 内容变更
* 修复 TapDB 数据上报错误

##### 文件变更

SDK | UPM 地址
--- | ---
 com.xd.sdk | https://github.com/xindong/XDSDK_UPM.git#3.1.1
 com.tds.sdk | https://github.com/xindong/TAPSDK_UPM.git#1.0.9

## 3.1.0 (iOS 5.1.0 & Android 5.1.0)

##### 内容变更
* Android / iOS 添加防沉迷 SDK 游戏时长上报功能
* Android / iOS 添加中宣部实名信息认证异常后提示
* iOS 修复动态屏幕旋转异常


##### 文件变更

SDK | UPM 地址
--- | ---
 com.xd.sdk | https://github.com/xindong/XDSDK_UPM.git#3.1.0
 com.tds.sdk | https://github.com/xindong/TAPSDK_UPM.git#1.0.8


## 3.0.0 (iOS 5.0.0 & Android 5.0.0)

##### 内容变更
* Android / iOS 添加非游客账号绑定 Tap 账号回调 onBindTaptapSucceed
* Android / iOS 修改初始化接口，添加是否使用动态 enableMoment 字段
* Android / iOS 添加对于已实名用户调用打开实名窗口时返回实名失败回调
* Android / iOS 修改单独绑定手机号时接口配置

##### 文件变更
新版 XDSDK 使用 UPM 方式接入 ( 具体接入方式参考 [接入文档](/unity.md) )，所以需将之前的 XDSDK 相关文件全部删除，重新使用 Package Manager 接入，具体需要删除的文件请参考 [旧版SDK文件列表](/old-list.md)

## 2.6.0 (iOS 4.5.0 & Android 4.5.0)   
日期： 05/11

##### 内容变更
* Android / iOS 修改实名提示文案
* Android / iOS 修改不同意隐私和用户等协议时文案显示
* Android / iOS 修改心动注册时默认为未同意协议

##### 文件变更
* modify: Plugins/Android/libs/SDKLib.jar
* modify: Plugins/Android/res

* modify: Library/XdComPlatform.framework

* modify: Plugins/script/XDSDK.cs


## 2.5.0(iOS 4.4.0 & Android 4.4.0)

##### 内容变更

* Android / iOS 添加防沉迷 SDK 游戏时长上报功能
* Android / iOS 添加中宣部实名信息认证异常后提示

##### 文件变更

* modify: Plugins/Android/libs/SDKLib.jar
* delete: Plugins/Android/libs/anti-addiction-1.0.3.5.aar
* new: Plugins/Android/libs/anti-addiction-1.1.1.aar
* modify: Plugins/Android/res


* modify: Library/XdComPlatform.framework
* modify: iOS附加/XDSDKResouse.bundle

* modify: Plugins/script/XDSDK.cs



## 2.4.8(iOS 4.3.12 & Android 4.3.12)

##### 内容变更

- **[iOS]** 更新微信、QQ SDK 以及 心动 logo
- **[iOS]** 更新 TapDB、 添加同意协议回调返回前调用登录相关接口返回登录失败机制
- **[Android]** 更新微信、QQ SDK 以及 心动 logo
- **[Android]** 添加 Android 11 适配说明（具体内容查看接入文档）
- **[Android]**  添加同意协议回调返回前调用登录相关接口返回登录失败机制以及修复部分 UI 异常

##### 文件变更

* modify: Plugins/Android/libs/SDKLib.jar
* modify: Plugins/Android/res
* new: Plugins/Android/libs/open\_sdk\_3.5.2.152\_r9e04b1c\_lite.jar
* delete: Plugins/Android/libs/open\_sdk\_r2973327\_lite.jar
* new: Plugins/Android/libs/wechat-sdk-android-without-mta-6.6.19.jar
* delete: Plugins/Android/libs/wechat-sdk-android-with-mta-1.3.5.jar

* modify: Library/XdComPlatform.framework
* modify: Library/TencentOpenAPI.framework
* modify: Plugins/iOS/libWeChatSDK.a
* modify: Plugins/iOS/libXDSDKiOSWrapper.a
* modify: iOS附加/XDSDKResouse.bundle
* new : iOS附加/TencentOpenApi_IOS_Bundle.bundle

**注意：**
- iOS 14开始，获取IDFA需要配置单独权限声明，在 info.plist 中配置 NSUserTrackingUsageDescription 及描述文案。如：请允许xxx获取并使用您的IDFA,来为您提供更好的服务。
- 系统依赖项检查是否添加 
> 	AppTrackingTransparency.framework\AdServices.framework


## 2.4.7(iOS 4.3.11 & Android 4.3.11)


##### 内容变更

- **[iOS]** 协议弹窗调整至初始化成功后
- **[Android]** 协议弹窗调整至初始化成功后

##### 文件变更

* modify: libs/SDKLib.jar
* modify: Assets/Library/XdComPlatform.framework

## 2.4.6(iOS 4.3.10 & Android 4.3.10)

##### 内容变更
- **[iOS]** 修复复杂网络环境下SDK可能崩溃问题
- **[iOS]** 修复实名认证失败没有回调
- **[iOS]** 资源引用方式改为bundle，删除原resource文件夹
- **[iOS]** 更新QQSDK为3.3.8
- **[iOS]** 稳定性提升

##### 文件变更

* modify: Plugins/script/XDSDK.cs
* modify: Assets/Library/TencentOpenAPI.framework
* modify: Assets/Library/XdComPlatform.framework
* add: Plugins/script/XDSDKUtil.cs
* add: Pluins/iOS/resource/XDSDKResouse.bundle
* del: Plugins/iOS/resource/CommonUI.bundle


**【iOS工程Swift配置说明】**

**Swift Language Version 设置为 Swift 5.0**

**BuildSetting中,Always Embed Swift Standard Libraries设置为YES**

**BuildSetting中,Runpath Search Paths 确保添加 @executable_path/Frameworks**

**如果新版本Untiy导出后有多个Target,只需在主target（Unity-iPhone）配置即可。**

## 2.4.5(iOS 4.3.9 & Android 4.3.10)
##### 内容变更
* **[Android]** 修复旧版用户中心点击退出崩溃异常
* **[Android]** 修复新版用户中心通过护照实名认证时实名按钮仍可点击问题
* **[Android]** 更新防沉迷依赖库及 Common 支持库
* **[Android]** 修复 Android 8.0.0 论坛样式兼容问题

##### 文件变更

* modify: Plugins/script/XDSDK.cs
* modify: Plugins/Android/libs/SDKLib.jar
* add: Pulgins/Android/libs/TDSCommon_1.1.2.aar
* delete: Pulgins/Android/libs/TDSCommon_1.1.0.aar
* new: Android/libs/anti-addiction-1.0.3.5.aar
* delete: Android/libs/anti-addiction-1.0.3.1.aar
* modify: Android/AndroidManifest.xml


## 2.4.4(iOS 4.3.9 & Android 4.3.9)
##### 内容变更
* **[Unity]** 修复ll2cpp编译错误的问题

##### 文件变更

* modify: Plugins/Common/BridgeIOS.cs
* modify: Plugins/script/XDSDK.cs
* 

**【iOS工程Swift配置说明】**

**Swift Language Version 设置为 Swift 5.0**

**BuildSetting中,Always Embed Swift Standard Libraries设置为YES**

**BuildSetting中,Runpath Search Paths 确保添加 executable_path/Framework**

**如果新版本Untiy导出后有多个Target,只需在主target（Unity-iPhone）配置即可。**


## 2.4.3(iOS 4.3.9 & Android 4.3.9)
##### 内容变更
* **[Android]** 修复 Android 重复调用登录接口时缺失登录结果回调的问题

##### 文件变更

* modify: Plugins/script/XDSDK.cs
* modify: Plugins/Android/libs/SDKLib.jar


## 2.4.2(iOS 4.3.9 & Android 4.3.8)
##### 内容变更
* **[iOS]** 修复Unity可能会遇到键盘调起的问题

##### 文件变更

* modify: Plugins/script/XDSDK.cs
* modify: Library/XdComPlatform.framework

## 2.4.1(ios 4.3.8 & Android 4.3.8)
##### 内容变更

* **[Android]** 更新 TapDB 依赖库
* **[Android]** 添加动态兼容接口

##### 文件变更
* modify: Plugins/script/XDSDK.cs
* modify: Plugins/Android/libs/SDKLib.jar
* new: Android/libs/libTapDB-2.2.3.aar
* delete: Android/libs/libTapDB-2.2.2.aar

## 2.4.0(ios 4.3.8 & Android 4.3.7)
##### 内容变更

* **[Unity]** 新增地区判断接口

##### 文件变更
* add:Library/TDSCommonSource.framework
* add:Plugins/Common/**.cs
* add:Pulgins/Android/libs/TDSCommon_1.1.0.aar

## 2.3.11(iOS 4.3.8 & Android 4.3.7)
##### 内容变更
* **[iOS]** 修复编译错误

##### 文件变更

* modify: Plugins/script/XDSDK.cs
* modify: Library/XdComPlatform.framework


## 2.3.10(iOS 4.3.7 & Android 4.3.7)
##### 内容变更
* **[iOS]** 修复实名认证输入框获取焦点crash问题

##### 文件变更

* modify: Plugins/script/XDSDK.cs
* modify: Library/XdComPlatform.framework


## 2.3.9(iOS 4.3.6 & Android 4.3.7)
##### 内容变更

* **[Android]** 添加 Tap 用户信息缓存
* **[iOS]** 添加 Tap 用户信息缓存

##### 文件变更

* modify: Plugins/script/XDSDK.cs
* modify: Plugins/Android/libs/SDKLib.jar
* modify: Library/XdComPlatform.framework


## 2.3.8(iOS 4.3.5 & Android 4.3.6)

##### 内容变更

* **[Android]** 防沉迷优化
* **[Android]** 添加对动态相关支持
* **[iOS]**  添加对动态相关支持
* **[iOS]**  更新 TapTap 登录 SDK

##### 文件变更

* modify: Android/libs/SDKLib.jar
* delete: Android/libs/anti-addiction-1.0.1.aar
* new : Android/libs/anti-addiction-1.0.3.1.aar
* modify: Library/XdComPlatform.framework
* modify: Library/TapTapSDK.framework
* modify: Plugins/script/XDSDK.cs

## 2.3.6(iOS 4.3.4 & Android 4.3.4)

##### 内容变更

* **[Android]** 修复 Android 直播关闭回调缺失问题

##### 文件变更

* modify: Android/libs/XDLiveForUnity.jar


## 2.3.5(iOS 4.3.4 & Android 4.3.4)

##### 内容变更

* **[Android]** 修复 Android 支付回调多次问题

##### 文件变更

* modify: Android/libs/SDKLib.jar


## 2.3.4(iOS 4.3.4 & Android 4.3.3)

##### 内容变更

* **[Android]** 更新 Android libTapDB 依赖库
* **[iOS]** 修复iOS TapDB设备统计错误

##### 文件变更

* new: Android/libs/libTapDB-2.2.2.aar
* delete :  Android/libs/libTapDB-2.2.2.jar
* delete:  Android/assets/supplierconfig.json
* delete: Android/libs/msa\_mdid\_1.0.13.aar
* new: Android/libs/oaid\_sdk\_1.0.23.aar
* modify: Android/AndroidManifest.xml
* modify: Library/XdComPlatform.framework


## 2.3.2

##### 内容变更

(1) IOS v4.3.3

* **[iOS]** 修复部分环境下退出程序无效的 bug
* **[iOS]** 修复与第三方 web 登录层级错误问题 
* **[Android]** 修复 Android TapDB 依赖库问题

##### 文件变更

* modify: Library/XdComPlatform.framework
* new: Android/libs/libTapDB.jar
* delete :  Android/libs/libTapDB-2.2.2.jar


## 2.3.1

##### 内容变更

(1) Android  v4.3.2

* **[Android]** 点击倒计时气泡后弹出实名窗口时，时长用尽不会再弹提示框，避免弹出两个实名窗口
* **[Android]** 修复旧版实名窗口可通过电脑键盘左右键切换页面
* **[Android]** 添加游客一键登录，仅供游戏测试
* **[Android]**  修复付费过程中，唤起支付宝等第三方后切到后台，在进入游戏无法正常支付
* **[Android]** 旧版游戏（游戏类型为0）QQ和微信登录接口修复为V1  

(2) IOS v4.3.2

* **[iOS]** 旧版游戏（游戏类型为0）QQ登录接口修复为V1  

##### 文件变更

* modify：Android/libs/SDKLib.jar
* modify: Android/libs/SDKLibForUnity.jar
* delete: Android/libs/anti-addiction-1.0.0.aar
* new : Android/libs/anti-addiction-1.0.1.aar
* delete: Android/libs/libTapDB.jar
* new :  Android/libs/libTapDB-2.2.2.jar
* modify: Android/libs/xdlive.jar
* modify: Android/res
* modify: Plugins/script
* modify: Library/TapTapSDK.framework
* modify: Library/XdComPlatform.framework
* modify: iOS/libXDSDKiOSWrapper
