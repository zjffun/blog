---
title: Performance Metrics
date: 2024-07-14 23:19:19 +08:00
tags:
  - front end
---

| Metrics                         | Good      | Poor      |
| ------------------------------- | --------- | --------- |
| TTFB (Time To First Byte)       |           |           |
| FP (First Paint)                |           |           |
| FCP (First Contentful Paint)    |           |           |
| LCP (Largest Contentful Paint)  | < 2.5 sec | > 4.0 sec |
| CLS (Cumulative Layout Shift)   | < 0.1     | > 0.25    |
| INP (Interaction to Next Paint) | < 200 ms  | > 500 ms  |
| TBT (Total Blocking Time)       |           |           |

Note:

- First Meaningful Paint (FMP) is deprecated in Lighthouse 6.0. In practice FMP has been overly sensitive to small differences in the page load, leading to inconsistent (bimodal) results.
- First Input Delay (FID) is no longer a Core Web Vital, and has been replaced by the Interaction to Next Paint (INP) metric.
- Max Potential First Input Delay was deprecated in Lighthouse 6.0.
- Time to Interactive (TTI) has proved overly sensitive to outlier network requests and long tasks, resulting in high variability in this metric.

See:

- [Web Vitals | web.dev](https://web.dev/articles/vitals)
- [应用性能监控全链路版 - 火山引擎](https://www.volcengine.com/docs/6431/107445)
