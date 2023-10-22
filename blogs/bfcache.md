---
title: 往返缓存
date: 2023-10-22 21:21:25 +08:00
tags:
  - 前端
---

浏览器有一种叫做“往返缓存”（`bfcache`）的机制，离开页面时浏览器会根据条件决定是否缓存当前页面，这种缓存保存的是整个页面，包括 JavaScript 堆。这样当用户回到之前的页面，比如：点击返回按钮，浏览器可以直接从缓存中恢复页面，不仅没有请求，也不需要重新执行 JavaScript。

参见：

[Back/forward cache  |  Articles  |  web.dev](https://web.dev/articles/bfcache)
