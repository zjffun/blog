---
updated: 'Thu, 28 Feb 2019 06:35:09 GMT'
date: 'Thu, 28 Feb 2019 06:35:09 GMT'
---

先给二级域名添加到 DNS 解析再配置 nginx

```nginx
server {
        #侦听80端口
        listen    80;
        #定义使用 www.nginx.cn访问
        server_name  ~^(?<subdomin>.+).kongciyuan.com$;

        #定义服务器的默认网站根目录位置
        root /var/www/$subdomin;
        index index.php index.html index.htm;
        #设定本虚拟主机的访问日志
        #access_log  logs/nginx.access.log  main;

        #默认请求
        location / {
            try_files $uri $uri/ /index.php;
        }

        # 定义错误提示页面
        error_page   500 502 503 504 /50x.html;
        location = /50x.html {
        }

        #静态文件，nginx自己处理
        location ~ ^/(images|javascript|js|css|flash|media|static)/ {

            #过期30天，静态文件不怎么更新，过期可以设大一点，
            #如果频繁更新，则可以设置得小一点。
            expires 30d;
        }

        #PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.
        location ~ .php$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_split_path_info ^(.+\.php)(.*)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO  $fastcgi_path_info;
            fastcgi_param PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include fastcgi_params;
        }

        #禁止访问 .htxxx 文件
            location ~ /.ht {
            deny all;
        }

    }
```
