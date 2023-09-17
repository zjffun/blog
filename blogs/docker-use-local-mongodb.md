---
title: Docker 使用本地安装的 MongoDB
date: 2023-09-17 18:22:08 +08:00
tags:
  - Docker
  - MongoDB
  - Development
---

将 MongoDB URI 中的 `mongodb://mongodb` 或者 `mongodb://127.0.0.1` 修改为 `mongodb://host.docker.internal` 即可。

# 参见

- [nginx - From inside of a Docker container, how do I connect to the localhost of the machine? - Stack Overflow](https://stackoverflow.com/questions/24319662/from-inside-of-a-docker-container-how-do-i-connect-to-the-localhost-of-the-mach)
