---
title: Iframe can not access parent content although in the same domain
date: 2024-03-09 14:58:29 +08:00
tags:
  - HTML
  - iframe
  - Same Origin Policy
---

Maybe someone set the [`document.domain`](https://developer.mozilla.org/en-US/docs/Web/API/Document/domain), it used by the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). Only both the parent and the iframe don't set `document.domain` or both of them set the same `document.domain`, the iframe can access the parent content.

> Note that setting `document.domain` to its current value is not a no-op. It
> still changes the origin. For example, if one page sets
>
> ```js
> document.domain = document.domain;
> ```
>
> then it will be counted as cross-origin from any other normally-same-origin pages that
> have not done the same thing.

Since Chrome 115 set `document.domain` has no effect by default, so we will not meet this problem in most case.

Below is some test case, we can try those examples in Firefox:

| parent set `blog.zjffun.com` | parent set `zjffun.com` | iframe set `blog.zjffun.com` | iframe set  `zjffun.com` | accessible |
| --- | --- | --- | --- | --- |
| ❌ | ❌ | ❌ | ❌ | ✅  <a href="https://blog.zjffun.com/blogs/demo/ iframe-can-not-access-parent-content-although-in-the-same-domain/parent.html" target="_blank">example</a> |
| ✅ | ❌ | ✅ | ❌ | ✅ <a href="https://blog.zjffun.com/blogs/demo/ iframe-can-not-access-parent-content-although-in-the-same-domain/parent.html?set-parent-domain-1=true&set-iframe-domain-1=true" target="_blank">example</a> |
| ❌ | ✅ | ❌ | ✅ | ✅ <a href="https://blog.zjffun.com/blogs/demo/ iframe-can-not-access-parent-content-although-in-the-same-domain/parent.html?set-parent-domain-2=true&set-iframe-domain-2=true" target="_blank">example</a> |
| ✅ | ✅ | ❌ | ✅ | ✅ <a href="https://blog.zjffun.com/blogs/demo/ iframe-can-not-access-parent-content-although-in-the-same-domain/parent.html?set-parent-domain-1=true&set-parent-domain-2=true&set-iframe-domain-2=true" target="_blank">example</a> |
| ✅ | ❌ | ❌ | ❌ | ❌ <a href="https://blog.zjffun.com/blogs/demo/ iframe-can-not-access-parent-content-although-in-the-same-domain/parent.html?set-parent-domain-1=true" target="_blank">example</a> |
| ❌ | ❌ | ✅ | ❌ | ❌ <a href="https://blog.zjffun.com/blogs/demo/ iframe-can-not-access-parent-content-although-in-the-same-domain/parent.html?&set-iframe-domain-1=true" target="_blank">example</a> |
| ❌ | ❌ | ❌ | ✅ | ❌ <a href="https://blog.zjffun.com/blogs/demo/ iframe-can-not-access-parent-content-although-in-the-same-domain/parent.html?&set-iframe-domain-2=true" target="_blank">example</a> |
