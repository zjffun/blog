---
title: Free disk space
date: 2023-09-17 18:03:53 +08:00
tags:
  - Linux
  - Debian
---

# [ncdu](https://dev.yorhel.nl/ncdu)

> Ncdu is a disk usage analyzer with an ncurses interface.

```bash
sudo apt-get install -y ncdu

ncdu /
```

# Analyze command

```bash
# Check disk space
df -h

# Show files size larger than 100M
find . -type f -size +100M

# Show sorted folders size
du -hd1 | sort -h
```

# Some safe commands

```bash
# Clean the apt cache
sudo apt clean

# Delete old log files
sudo find /var/log -type f -name "*.gz" -delete

# Delete unused docker images
docker image prune
```

# See also

- [dual boot - How can I free some space in /var/cache/archives/ - Ask Ubuntu](https://askubuntu.com/questions/1220816/how-can-i-free-some-space-in-var-cache-archives)
- [How To Find Large Files on Linux | Tom's Hardware](https://www.tomshardware.com/how-to/find-large-files-linux)
- [How to Check Disk Space in Linux {df and du Commands}](https://phoenixnap.com/kb/linux-check-disk-space)
