---
title: Docker 常用命令
date: 2023-08-13 14:27:00
updated: 2023-08-13 14:27:00
---

```bash
# 启动 Docker 开发环境
docker compose -f docker-compose.dev.yml up --build

# 进入容器执行命令
sudo docker exec -it your-container /bin/sh

# 拉取镜像
sudo docker pull your-image

# 停止容器
sudo docker stop your-container

# 删除容器
sudo docker remove your-container

# 查看容器日志
sudo docker logs your-container
```
