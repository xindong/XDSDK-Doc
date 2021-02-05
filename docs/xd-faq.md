---
id: xd-faq
title: FAQ
sidebar_label: 常见问题
---
## 关闭登录框事弹出网络错误
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
