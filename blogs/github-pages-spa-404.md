---
title: 解决 GitHub Pages 单页面应用刷新报 404
date: 2023-09-17 18:32:05 +08:00
tags:
  - GitHub Pages
  - Vue
  - React
  - Angular
  - SPA
---

让 404 页面也返回 `index.html` 的内容即可。例如，GitHub Actions 增加如下配置：

```yaml
- name: Fix SPA 404
  run: cp ./build/index.html ./build/404.html
```
