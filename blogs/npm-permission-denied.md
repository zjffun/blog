---
title: npm permission denied
date: 2024-09-15 22:39:41 +08:00
tags:
  - npm
---

# Solution

```sh
# make sure the required folders exist (safe to execute even if they already exist)
sudo mkdir -p /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
# take ownership of Node.js install destination folders
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
```

# Using `n`

```sh
# make cache folder (if missing) and take ownership
sudo mkdir -p /usr/local/n
sudo chown -R $(whoami) /usr/local/n
# make sure the required folders exist (safe to execute even if they already exist)
sudo mkdir -p /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
# take ownership of Node.js install destination folders
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
```

See: [tj/n: Node version management - Installation](https://github.com/tj/n?tab=readme-ov-file#installation)

# Linux File Ownership

- User: `cat /etc/passwd`
- Group: `cat /etc/group`
- List files user and group: `ls -l`
- Change files user and group: `chown <newowner>:<newgroup> <file or directory>`
