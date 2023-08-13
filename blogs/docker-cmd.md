---
title: Docker 镜像启动后自动执行命令
date: 2023-08-06 21:11:00
updated: 2023-08-06 21:11:00
---

## 使用 `CMD`

`RUN` 会包含在镜像里，`CMD` 不会包含在镜像里，例如在 `Dockerfile` 中添加 `CMD` 可以在启动镜像时执行 `npm run dev` 用来开发：

```dockerfile
CMD npm run dev
```

参考资料：

- [Dockerfile RUN vs CMD vs ENTRYPOINT - CI/CD/DevOps - Medium](https://medium.com/ci-cd-devops/dockerfile-run-vs-cmd-vs-entrypoint-ae0d32ffe2b4)
