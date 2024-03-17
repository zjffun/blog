---
title: Nginx location priority
date: 2024-03-17 17:44:52 +08:00
tags:
  - Nginx
---

`=` > `^~` > `~` > `~*` > `/xxx`

> 1. Directives with the "=" prefix that match the query exactly. If found, searching stops.
> 2. All remaining directives with conventional strings. If this match used the "^~" prefix, searching stops.
> 3. Regular expressions, in the order they are defined in the configuration file.
> 4. If #3 yielded a match, that result is used. Otherwise, the match from #2 is used.

```nginx
location = / {
}

location ^~ /images/ {
}

location ~* \.(gif|jpg|jpeg)$ {
}

location /documents/ {
}

location / {
}
```

See also:

- [Nginx location priority - Stack Overflow](https://stackoverflow.com/questions/5238377/nginx-location-priority)
- [Module ngx_http_core_module](https://nginx.org/en/docs/http/ngx_http_core_module.html#location)
