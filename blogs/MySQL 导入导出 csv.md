---
updated: 'Mon, 17 Feb 2020 07:08:23 GMT'
date: 'Thu, 28 Feb 2019 06:35:09 GMT'
tags:
  - 数据库
---

# 导入

```
load data infile 'c:/test.csv'
into table test [character set utf8]
fields terminated by ','  optionally enclosed by '"' escaped by '"'
lines terminated by '\r\n';
```

# 导出

```
select * from test
into outfile 'c:/test.csv'
fields terminated by ',' optionally enclosed by '"' escaped by '"'
lines terminated by '\r\n';
```

如果要带上字段名用：

```
select * from (
	select 'col1','col2','col3','col4' union
	(select col1,col2,col3,col4 from test where col1 = 'xxx' order by col1)
) tbl
```
