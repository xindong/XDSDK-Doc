---
id: unity
title: Unity快速开始
sidebar_label: Unity
slug: /
---
基于XDSDK实现简单的登录功能

import {Highlight} from './component';

## 导包

1.  打开/xd-sdk-4/sdk/unity/vx.x.x，拖拽unitypackage到Plugins目录  
2.  全部选择，点击import   
3.  导入后，将 Plugins/script 下面的 XDSDKListener.cs 脚本文件拖动到长生命周期的对象中进行脚本挂接  

**您可以参考[快速开始demo](#)**

![unitypackage import](http://qnblog.ijemy.com/WX20201125-093759.png)  
**至此，已经将XDSDK导入自己的工程**   

## TapTap登陆功能
### 设置回调
#### API
```c#
public static void SetCallback(XDCallback callback)
```

#### 示例代码
```c#
//XDSDKCallback需要实现XDCallback接口的所有方法
 XDSDK.SetCallback(new XDSDKCallback());
```

### 初始化
XDSDK.InitSDK

#### API
```c#
/**
 * @param appid 心动AppID
 * @param aOrientation 屏幕方向，0表示横屏，1表示竖屏
 * @param channel 渠道号
 * @param version 版本号
 * @param enableTapDB 是否开启TapDB
 */

public static void InitSDK(string appid, int aOrientation, string channel, string version, bool enableTapdb)
```

#### 示例代码
```c#
XDSDK.InitSDK ("xxxxxx", 1,"xx","xx",true);
```

### 登录
#### API
```c#
public static void TapTapLogin()
```

#### 示例代码
```c#
XDSDK.TapTapLogin();
```

## 注意事项
-   XDCallback方法需要全部实现，建议copy demo，否则可能会报错  
-   InitSDK的appid确认是从开发者后台正确获取  
-   注意XDSDKListener.cs的挂载

## Android 导出APK
<Highlight color='#f00'>* 请确保签名文件和包名是在开发者中心正确配置过的，client_id从开发者中心获取</Highlight>   

按下面步骤即可成功打包安装

![](http://qnblog.ijemy.com/xd_android_releaseapk.png)

## iOS 打包xcode工程
