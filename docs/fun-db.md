---
id: fun-db
title: 数据收集
sidebar_label: 收据收集
---

import {Highlight} from './component';

## 1.设置等级

```
public static void SetLevel(int level)
```

#### 示例代码

```
XDSDK.SetLevel(100);
```
## 2.设置服务器回调地址
```
public static void SetServer(string server)

```

#### 示例代码

```
XDSDK.SetServer("xxxxxxx");
```

## 3.记录时长

```
// 安卓
public static void OnResume();
public static void OnStop();
```


#### 示例代码

```
// 安卓
XDSDK.OnResume();
XDSDK.OnStop();
```


<Highlight color='#f00'>
注意：</Highlight>  

1. 新版本SDK中，已经集成了TapDB的onStart、setUser方法，游戏客户端不需要再重复集成。  
2. 提供了setLevel，setServer方法供游戏调用，充值统计由服务端完成。  
3. 已接入TapDB的游戏在集成SDK时仅需要移除onStart和setUser方法，其余保持不变。  
4. 尚未接入TapDB的游戏，可根据需要自行接入SDK中尚未包含的TapDB SDK的其他方法。  
5. 如果需要自行接入TapDB，请在SDK初始化方法中enableTapDB参数填写false。  
