---
id: xd-faq
title: FAQ
sidebar_label: 常见问题
---
## 关闭登录框时弹出网络错误
1.将org.apache.http.legacy.jar打包到游戏内  
2.AndroidManifest的Application标签下添加如下内容  
```
<uses-library android:name="org.apache.http.legacy" android:required="false"/>
```
3.在 AndroidManifest.xml中 application 标签内添加: android:usesCleartextTraffic="true"
```
<application
 …
  android:usesCleartextTraffic="true"
 …
>
```

## 未收到回调
其中一种可能原因是回调放在了初始化之后

## 实名认证未弹窗
登录状态下，已经实名认证过的账号调用OpenRealName不会打开实名认证界面

## xcode导出后build时报错
一般来说就是配置问题，请仔细核对[iOS配置步骤](./#ios-打包xcode)
