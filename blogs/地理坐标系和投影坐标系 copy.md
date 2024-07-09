---
updated: 'Thu, 28 Feb 2019 06:35:09 GMT'
date: 'Tue, 05 Jun 2018 15:13:29 GMT'
---

# 地理坐标系（Geographic Coordinate System）

> [https://baike.baidu.com/item/ 地理坐标系](https://baike.baidu.com/item/地理坐标系)\
> 地理坐标系（Geographic Coordinate System），是使用三维球面来定义地球表面位置，以实现通过经纬度对地球表面点位引用的坐标系。一个地理坐标系包括角度测量单位、本初子午线和参考椭球体三部分。在球面系统中，水平线是等纬度线或纬线。垂直线是等经度线或经线。

百度百科上写的有点少，于是去维基上看了下（PS：搞不懂为什么中文被墙了，英文和其他的确能访问，只能啃啃英文的了）

> <https://en.wikipedia.org/wiki/Geographic_coordinate_system>\
> A geographic coordinate system is a coordinate system used in geography that enables every location on Earth to be specified by a set of numbers, letters or symbols. The coordinates are often chosen such that one of the numbers represents a vertical position, and two or three of the numbers represent a horizontal position. A common choice of coordinates is latitude, longitude and elevation.

常用一个数字代表垂直位置，二到三个数字代表水平位置。常用的是经度、纬度和高程。

想表达的应该是：\
垂直位置：海拔\
水平位置：经度、纬度

## 地理经纬度

-   经度：赤道平面的夹角
-   纬度：本初子午面的夹角

## 使用基准面测量高程

问题的复杂性：地球长得凹凸有致的谁知道从哪里算高程啊
通用的基准：大地高、正高、正常高（传说中的三高）
基准：为了定义 "表面位置" 和 "高度" 地理工作者选用参考椭球（WGS84 等）

# 投影坐标系（Projection coordinatesystem）

> [https://baike.baidu.com/item/ 投影坐标系](https://baike.baidu.com/item/投影坐标系)\
> 投影坐标系 （Projection coordinatesystem）平面坐标系统地图单位通常为米 ，也称非地球投影坐标系统（notearth），或者是平面坐标。

地理坐标系（由基准面确定，比如：北京 54、西安 80、WGS84） +  投影方法（比如高斯－克吕格、Lambert 投影、Mercator 投影）

全是大学学过的，学的不扎实的都得补上啊 T_T
