---
title: Web 存储大小限制
date: 2023-10-14 16:29:18 +08:00
tags:
  - 前端
---

对于 IndexedDB 我们可以认为绝大部分情况下容量可以在 10GB 以上。这是个值仅适用于在做粗略的判断时做参考，因为不同浏览器的策略不一样，可以通过下面的参考文档看更详细的内容。

查看 IndexedDB 的总容量：

```js
navigator.storage
  .estimate()
  .then(({ quota }) => console.log(`${quota / 1024 / 1024 / 1024}GB`));
```

256GB 硬盘的笔记本得到的数据：

- Chrome: 136.96431884728372GB
- Firefox: 10GB

参见：

- [Storage quotas and eviction criteria - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#other_web_technologies)
