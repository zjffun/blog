---
title: Nginx static files port method
date: 2024-03-17 18:00:57 +08:00
tags:
  - Nginx
  - Static files
---

Adding `error_page 405 =200 $uri;` to the config. Example

```nginx
location ^~ /mock/ {
  root /var/www/mock;
  error_page 405 =200 $uri;
}
```

See also:

- [NGINX return 405 Not Allowed with POST method - Stack Overflow](https://stackoverflow.com/questions/62431038/nginx-return-405-not-allowed-with-post-method/62431969#62431969)
