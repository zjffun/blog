---
updated: 'Mon, 10 Feb 2020 11:05:46 GMT'
date: 'Wed, 22 May 2019 15:04:14 GMT'
tags:
  - 前端
---

[Crypko](https://crypko.ai/#/beta) 网站里面的下拉滚动条进行的动画感觉非常炫，于是研究了一下她的实现，发现她主要是使用了 [ScrollMagic](https://github.com/janpaepke/ScrollMagic) 这个库实现了基于滚动条的动画。

为什么这么确定就是用了 ScrollMagic ？因为她代码里写的很清楚。。

![Crypko 基于滚动条进行的动画是如何实现的？](/blogs/images/CrypkoScrollAnimate.png)

一些其他资料：

-   ScrollMagic 的示例：[Resume svg scroll animation](https://codepen.io/1010543618/pen/OYjEgb)
-   使用 SVG 的 `stroke-dashoffset`属性实现随滚动条展示绘画步骤：[Scroll controlled SVG animation | CSSDeck](http://cssdeck.com/labs/scroll-controlled-svg-animation)
