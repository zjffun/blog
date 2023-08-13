---
title: 端口占用检查
date: 2023-08-13 14:45:00
updated: 2023-08-13 14:45:00
---

# macOS

```bash
sudo lsof -i -P -n | grep LISTEN
```

> - [How to check open ports in Linux using the CLI - nixCraft](https://www.cyberciti.biz/faq/how-to-check-open-ports-in-linux-using-the-cli/)
