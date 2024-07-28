---
title: Chrome DevTools Network
date: 2024-07-29 03:11:07 +08:00
tags:
  - Chrome
  - DevTools
---

# Timing

> - **Queueing**. The browser queues requests before connection start and when:
>   - There are higher priority requests.
>   - There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.
>   - The browser is briefly allocating space in the disk cache.
> - **Stalled**. The request could be stalled after connection start for any of the reasons described in **Queueing**.

See:

[Network features reference  |  Chrome DevTools  |  Chrome for Developers](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-explanation)
