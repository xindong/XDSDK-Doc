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


## 5.游客升级

当游客账号升级成功时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | public void OnGuestBindSucceed(string token)

## 6.游客绑定

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

## 8.退出

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
