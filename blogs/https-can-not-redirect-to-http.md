---
title: HTTPS 无法跳转到 HTTP
date: 2023-10-14 16:11:04 +08:00
tags:
  - 浏览器
---

可能是浏览器新加的安全策略，同时支持 HTTP 和 HTTPS 的网站，在特定情况下通过 HTTP 访问会自动跳转到 HTTPS。具体原因没有深入研究。

比如：在 Chrome 和 Firefox 上测试如下代码，即使服务器没有配置自动重定向到 HTTPS，也可能会导致死循环。

```js
if (location.protocol === "https:") {
  location.protocol = "http:";
}
```

测试结果：

Chrome 117 版本访问 `http:` 网站时一定条件下会自动重定向到 `https`。控制台点开 `http:` 的请求会看到 `Status Code` 为 `200 Temporary Redirect`，实际这个 `http:` 请求并没有发送，发送的只有 `https` 请求。

Firefox 有 `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">` 时会自动重定向到 `https`。
