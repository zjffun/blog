---
title: MongoDB Sort By in
date: 2025-01-27 22:03:15 +08:00
tags:
  - mongodb
---

> [mongoose - Does MongoDB's $in clause guarantee order - Stack Overflow](https://stackoverflow.com/questions/22797768/does-mongodbs-in-clause-guarantee-order/42293303#42293303)

```js
var order = ["David", "Charlie", "Tess"];

var query = [
  { $match: { name: { $in: order } } },
  { $addFields: { __order: { $indexOfArray: [order, "$name"] } } },
  { $sort: { __order: 1 } },
];

var result = db.users.aggregate(query);
```
