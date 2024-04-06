---
title: Simulate the use of Brotli
date: 2024-04-06 14:27:23 +08:00
tags:
  - HTTP
  - Compression
  - Brotli
---

1. Using Charles save HTTP traffic to HAR file. ([Chrome save HAR has size limitation](https://stackoverflow.com/questions/50551751/chrome-har-file-size-limitation).)
2. Using [har-extractor](https://github.com/azu/har-extractor) extract HAR file to directory. ([har-to-mocks](https://github.com/peterknezek/har-to-mocks) can't extract all files.)
3. Using Nginx to serve the extracted files with Brotli compression. (`Content-Length < 20` will not using brotli by [default](https://github.com/google/ngx_brotli?tab=readme-ov-file#brotli_min_length).)
4. Using Charles proxy to the Nginx server. (Whistle currently not support Brotli compression.)
