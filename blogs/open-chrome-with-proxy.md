---
title: Open Chrome With Proxy
date: 2025-02-24 00:18:05 +08:00
tags:
  - macos
  - chrome
  - proxy
---

# MacOS

You can using command line to open Chrome with proxy:

```bash
open -na "Google Chrome" --args --proxy-server='socks5://127.0.0.1:7890'
```

- Change `socks5://127.0.0.1:7890` to your proxy.

# Linux

You can using command line to open Chrome with proxy:

```bash
nohup /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --proxy-server='socks5://127.0.0.1:7890' > /dev/null 2>&1 &
```

- Change `socks5://127.0.0.1:7890` to your proxy.
- Using `nohup` and `&` to run it in the background.
- Using `> /dev/null 2>&1 &` to hide the output.
