---
id: tap-moment
title: 动态社区
sidebar_label: 动态 2.x
---


#### 依赖说明
TapMomentSdk unity 版本依赖于 XDSDK 对应的 unity 版本，所以接入前需先确保已接入最新版 XDSDK。此版本的SDK需要单独的引入Moment SDK
### 接口 API

#### 1. 添加回调
动态在页面展示或发布后，会收到对应回调，游戏可以在相关回调中进行额外处理，调用方式如下:

```
 TapMomentSDK.TapMoment.SetCallback((action,msg) =>
        {
            if(action == 30000)
            {

            }
        });
```

现支持的回调类型如下：

回调 | 回调值 | 说明
--- | --- | ---
CALLBACK\_CODE_PUBLISH\_SUCCESS | 10000 | 动态发布成功
CALLBACK\_CODE_PUBLISH\_FAIL | 10100 | 动态发布失败
CALLBACK\_CODE\_PUBLISH\_CANCEL | 10200 | 动态发布失败
CALLBACK\_CODE\_GET\_NOTICE\_SUCCESS | 20000| 获取通知数量成功，附带信息为通知数量
CALLBACK\_CODE\_GET\_NOTICE\_FAIL | 20100 | 获取通知数量失败，附带信息为错误原因
CALLBACK\_CODE_MOMENT\_APPEAR | 30000 | 动态页面显示时触发
CALLBACK\_CODE_MOMENT\_DISAPPEAR | 30100 | 动态页面消失时触发
CALLBACK_CODE_INIT_SUCCESS | 40000 | 初始化成功
CALLBACK_CODE_INIT_FAIL | 40100 | 初始化失败
CALLBACK_CODE_ClOSE_CANCEL | 50000 | 弹出关闭动态弹窗时，用户取消
CALLBACK_CODE_ClOSE_CONFIRM | 50100 | 弹出关闭动态弹窗时，用户确认

#### 2. 设置屏幕方向是否旋转
由于 Unity 在 Android 的一些特殊设置，游戏如果不支持屏幕旋转，即游戏屏幕方向只有一个，需要调用 SDK 接口进行设置，示例如下：

```
 TapMomentSDK.TapMoment.SetGameScreenAutoRotate(false);
```
如果游戏支持旋转，例如支持横屏方向切换（LandscapeLeft and LandscapeRight)或横竖屏切换等，则该接口可忽略，不需调用。

#### 3. 打开动态页面
使用方式如下：

```
 TapMomentSDK.MomentConfig momentConfig = new TapMomentSDK.MomentConfig();
  // config用来设置页面显示配置，包括显示方向等
 TapMomentSDK.TapMoment.OpenMoment(momentConfig);
 
```
#### 4. 发布普通动态
普通动态包括图片和对应的内容描述，接口示例如下：

```
  TapMomentSDK.MomentConfig momentConfig = new TapMomentSDK.MomentConfig();
  string content = "普通动态描述";
  momentConfig.SetOrientation(TapMomentSDK.MomentConfig.ORIENTATION_LANDSCAPE);
  string[] imagePaths = new string[] { "content://***.jpg","/sdcard/**.jpg" };
  TapMomentSDK.TapMoment.PublishMoment(momentConfig, imagePaths, content);
        
```
#### 5. 发布视频动态
视频动态包括视频和图片（可选），接口示例如下：

```  
    TapMomentSDK.MomentConfig momentConfig = new TapMomentSDK.MomentConfig();
	string[] imagePaths = new string[] { "content://***.jpg","/sdcard/**.jpg" };
    string[] videoPaths = new string[] { "content://***.mp4", "content://***.mp4" };
    string title = "title";
    string desc = "desc";
    TapMomentSDK.TapMoment.PublishVideoMoment(momentConfig, videoPaths, imagePaths, title, desc);
    //如果不需要上传封面图片，可调用如下接口
    //TapMomentSDK.TapMoment.PublishVideoMoment(momentConfig, videoPaths, title, desc);

```
> 注意：发布视频动态时，暂时图片和视频都只会发送第一个

#### 6. 获取用户新通知数量
当游戏需要获取当前用户的新的通知信息数量时，调用该接口，示例如下：

```
TapMomentSDK.TapMoment.GetNoticeData();
```
返回结果会通过回调 `CALLBACK_CODE_GET_NOTICE_SUCCESS` (20000) 或`CALLBACK_CODE_GET_NOTICE_FAIL` (20100) 通知游戏

#### 7. 关闭动态
当游戏在特定场景下需要主动关闭动态时，可选择如下接口。

1. 直接关闭  
	该接口会直接关闭动态窗口，不会弹出二次确认弹窗，接口示例：
	
	```
	 TapMomentSDK.TapMoment.CloseMoment();
	```
	
2. 弹出二次确认  
	该接口会弹出二次确认弹窗，由用户确定是否关闭，示例如下：
	
	```
	TapMomentSDK.TapMoment.CloseMoment("提示","内容");
	```
	参数为二次弹窗的标题和内容，默认为"提示"和"匹配成功，进入游戏",用户选择接口会通过回调 `CALLBACK_CODE_ClOSE_CANCEL`(50000) 和`CALLBACK_CODE_ClOSE_CONFIRM`(50100)通知游戏

### 其他设置

#### 1. iOS 屏幕旋转兼容

TapTap 内嵌动态 SDK 支持横屏和竖屏模式，若开发者希望允许在内嵌动态页面自动旋转屏幕以获得更好的体验，需要先在 Xcode 工程的 Info.plist 或  supportedInterfaceOrientationsForWindow 声明需要支持的屏幕方向。  
直接打开上述配置可能在某些游戏引擎中出现兼容性问题，需开发者根据游戏引擎的使用方式进行手动调整。

Unity 可参考以下内容进行接入：  
1. 在 Build Settings → iOS → Player Settings... → Resolution and Presentation → Orientation → Default Orientation 中打开 Auto Rotation  
2. Allowed Orientations for Auto Rotation 中选中游戏需要支持的屏幕方向  
3. 导出游戏 Xcode 工程  
4. 在 UnityAppController.mm 中 supportedInterfaceOrientationsForWindow 返回值中添加需要额外支持的屏幕方向，或直接修改为 UIInterfaceOrientationMaskAll  
5. 在 Unity 的 C# 脚本中设定 Screen.orientation 为游戏的屏幕方向

#### 2. iOS 资源导入
将目录下 `resource` 目录下 `TapMomentResources.bundle` 导入工程