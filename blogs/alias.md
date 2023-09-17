---
title: 我的常用命令（alias）
date: 2023-09-17 18:37:16 +08:00
tags:
  - Bash
  - alias
---

```bash
# Docker dev
alias ddev="docker-compose -f docker-compose.dev.yml up --build"

# Fix lockfile registry
alias fr="npx replace-lockfile-registry --registry https://registry.npmjs.org/"
```