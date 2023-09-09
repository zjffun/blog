---
title: 关闭当前标签页
date: 2023-9-9
tags:
  - JavaScript
---

简单来说我们可以这样认为：

- `window.open()` 打开的标签页可以通过 `window.close()` 关闭。
- 用户点击链接在新开标签页打开的页面，如果没有进行其他跳转，可以通过 `window.close()` 关闭。
- 其他情况几乎都无法通过 `window.close()` 关闭，比如：用户新开标签页通过输入地址或者书签打开的页面不可以通过 `window.close()` 关闭。

> - [javascript - window.close and self.close do not close the window in Chrome - Stack Overflow](https://stackoverflow.com/questions/19761241/window-close-and-self-close-do-not-close-the-window-in-chrome/19768082#19768082)
