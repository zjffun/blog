---
updated: 'Thu, 28 Feb 2019 06:35:09 GMT'
date: 'Thu, 28 Feb 2019 06:35:09 GMT'
tags:
  - 数据库
---

简单的方法（每次增加一倍）：

```sql
insert into tb_user(f_id, f_username)
select rand(), f_username from tb_user
```
