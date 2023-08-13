---
date: "Wed, 10 Feb 2021 06:29:30 GMT"
updated: 2023-08-13 12:18:00
tags:
  - 前端
---

第三方资源设置的 Cookie。

顶级域名或者二级域名不同才会被认为是第三方。例如：`foo.example.com` 可以加载 `bar.example.com` 的 `iframe`，并且允许设置 Cookie，因为他们顶级和二级域名一样，只是三级域名不一样。

从 Chrome 80 （2020 年 2 月）开始没有设置 `SameSite` 的 Cookie 将默认使用 `SameSite=Lax`，这意味着之前没有设置 `SameSite` 的第三方 Cookie 将无法使用，需要设置 `SameSite=None; Secure` 才可以使用。

Chrome 可以在 `Settings` -> `Privacy and security` -> `Third-party cookies` 中设置允许第三方 Cookie、禁止第三方 Cookie 或者在无痕模式禁止第三方 Cookie。

> 禁用第三方 Cookie 时，浏览器**不会保存或发送**顶级窗口（当前页面）以外的域名的 Cookie。这会影响所有跨域请求，包括资源（例如`<img>`标签），iframe 和 XMLHttpRequest（包括 CORS）。实际上，这是您所期望的。

[第三方 Cookie 的测试示例](https://github.com/zjffun/test/blob/master/http-t/set-cookie.js)

> - [First-Party & Third-Party Cookies: What’s the Difference? - Clearcode Blog](https://clearcode.cc/blog/difference-between-first-party-third-party-cookies/)
> - [3rd-party cookies in practice – Muodov's Honey Jar](https://blog.zok.pw/web/2015/10/21/3rd-party-cookies-in-practice/)
> - [Chromium Blog: SameSite Cookie Changes in February 2020: What You Need to Know](https://blog.chromium.org/2020/02/samesite-cookie-changes-in-february.html)
