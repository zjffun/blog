---
date: "Sun, 13 Nov 2022 13:07:53 GMT"
updated: "Sun, 13 Nov 2022 13:08:13 GMT"
---

Docker 中国区官方镜像: <https://registry.docker-cn.com>

网易: <http://hub-mirror.c.163.com>

中国科技大学: <https://docker.mirrors.ustc.edu.cn>

阿里云: <https://cr.console.aliyun.com/>

# macOS Docker Desktop

Preferences -> Docker Engine

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

# Ubuntu / Debian

```bash
sudo vim /etc/docker/daemon.json
```

```json
{
  "registry-mirrors": [
    "https://ung2thfc.mirror.aliyuncs.com",
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
# check
sudo docker info
```
