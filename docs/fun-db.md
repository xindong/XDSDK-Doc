---
id: fun-db
title: TapDB
sidebar_label: TapDB 2.x
---

import {Highlight} from './component';


<Highlight color='#f00'>注意：</Highlight>  

1. 如果需要自行接入TapDB，请在SDK初始化方法中enableTapDB参数填写false。
2. 新版本SDK中，已经集成了TapDB的onStart、setUser方法，游戏客户端不需要再重复集成。  
3. 提供了setLevel，setServer方法供游戏调用，充值统计由服务端完成。  
4. 已接入TapDB的游戏在集成SDK时仅需要移除onStart和setUser方法，其余保持不变。  
5. 尚未接入TapDB的游戏，可根据需要自行接入SDK中尚未包含的TapDB SDK的其他方法。  


## 1.设置等级

```cs
public static void SetLevel(int level)
```

#### 示例代码

```cs
XDSDK.SetLevel(100);
```
## 2.设置服务器回调地址
```cs
public static void SetServer(string server)

```

#### 示例代码

```cs
XDSDK.SetServer("xxxxxxx");
```

## 3.记录时长

```cs
// 安卓
public static void OnResume();
public static void OnStop();
```


#### 示例代码

```cs
// 安卓
XDSDK.OnResume();
XDSDK.OnStop();
```
