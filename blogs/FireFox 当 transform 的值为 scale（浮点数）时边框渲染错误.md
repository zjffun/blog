---
updated: 'Mon, 10 Feb 2020 11:05:46 GMT'
date: 'Mon, 03 Feb 2020 15:44:31 GMT'
tags:
  - 前端
---

浏览器的问题，这个 bug 已经有很久的历史了。[1476379 - Border issue (pixels) when using floating point numbers in css transform: scale()](https://bugzilla.mozilla.org/show_bug.cgi?id=1476379)

不知道有什么解法。不只是`border`，1px 的元素和`outline`也同样有问题，都会消失。
