---
updated: 'Sun, 14 Jul 2019 05:20:16 GMT'
date: 'Sun, 14 Jul 2019 05:20:16 GMT'
tags:
  - GIS
---

在每帧动画时设置 Marker 的 transform 属性就行，[zjffun/Leaflet.MovingMarker at zjf/feature-rotate](https://github.com/zjffun/Leaflet.MovingMarker/tree/zjf/feature-rotate) 我在这个 Fork 中实现了一下。

Leaflet.MovingMarker 插件为了让 Marker 实现运动会在每帧都重写 transform 属性，所以旋转的实现无法在拐弯处改写 transfrom 的 rotate，只能每帧都设置一次 transfrom 的 rotate。。。

[在线预览](https://zjffun.github.io/Leaflet.MovingMarker/examples/index.html) （点击最上面的蓝线的 Marker 可以看到效果）
