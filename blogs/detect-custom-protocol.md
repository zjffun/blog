---
title: JS 检测是否成功打开应用程序（自定义协议是否存在）
date: 2023-09-29 16:54:31 +08:00
tags:
  - JS
  - Custom Protocol
---

有时我们会使用类似 `vscode://file/xxx` 打开本地应用程序，这时我们可能希望用户没有安装对应的应用程序时，提示用户去安装，我们可以知道用户是否安装了对应的应用程序吗？目前答案是否定的，主要由于隐私问题，浏览器没有提供对应的功能，使用自定义协议打开应用的结果我们也是获取不到的。

目前有一种不太准确的方式：通过检测一定时间内是否触发了 `window` 的 `blur` 事件来判断是否打开了应用程序。这种方式应用程序打开的时间越长越不准确，因为用户可能切换标签页，看看别的应用，都会误判为打开了应用程序。

参见：

- [javascript - Detect Custom Protocol handler in chrome 86 - Stack Overflow](https://stackoverflow.com/questions/64658489/detect-custom-protocol-handler-in-chrome-86)
- [Web-to-App Communication: App Protocols – text/plain --- 网络到应用通信：应用协议 - 文本/纯文本](https://textslashplain.com/2019/08/29/web-to-app-communication-app-protocols/)
- [1137801 - Regression: "onBlur" event is not triggered for built-in dialogs - chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1137801)
