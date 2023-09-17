---
title: Troubleshooting Cloudflare with GitHub Pages
date: 2023-09-17 18:52:47 +08:00
tags:
  - Cloudflare
  - GitHub Pages
  - troubleshooting
---

# `ERR_TOO_MANY_REDIRECTS`

If you want to use _Flexible_ Cloudflare SSL/TLS encryption mode, disable `Enforce HTTPS` in GitHub Pages can fix this.

See also:

- [cloudflare-docs/content/ssl/troubleshooting/too-many-redirects.md at production · cloudflare/cloudflare-docs](https://github.com/cloudflare/cloudflare-docs/blob/production/content/ssl/troubleshooting/too-many-redirects.md)

- [dns - How to fix ERR_TOO_MANY_REDIRECTS on custom github pages domain? - Stack Overflow](https://stackoverflow.com/questions/50145231/how-to-fix-err-too-many-redirects-on-custom-github-pages-domain)
