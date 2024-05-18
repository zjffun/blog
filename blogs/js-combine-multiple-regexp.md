---
title: JS Combine Multiple RegExp
date: 2024-05-18 23:23:50 +08:00
tags:
  - JS
  - RegExp
---

We can combine multiple regexps into one using `source` property and `|` (disjunction). For example, a humble regexp to get dependency:

```js
const regexps = [
  /(?:(?:require|import|url)\(['"`]([^'"]+)['"`]\))/g,
  /(?:(?:\@import|from|import)\s+['"]([^'"]+)['"])/g,
  /(?:(?:url)\(([^'"]+)\))/g,
  /(?:(?:[sS][rR][cC]=)['"]([^'"]+)['"])/g,
];

const combinedRegexp = new RegExp(regexps.map((d) => d.source).join("|"), "g");
```

But this long complex regexp is not efficient a lot than running several smaller ones. Because those parts have different prefix.

See:

- [RegExp.prototype.source - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)
- [python - Is a single big regex more efficient than a bunch of smaller ones? - Stack Overflow](https://stackoverflow.com/questions/45100310/is-a-single-big-regex-more-efficient-than-a-bunch-of-smaller-ones)
