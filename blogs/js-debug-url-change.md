---
title: JS Debug URL Change
date: 2024-04-06 15:21:42 +08:00
tags:
  - JS
  - Debug
---

Debugging `window.open`.

```js
debug(window.open);
```

Debugging `window.open(xxx, '_self')` and `window.location` change.

```js
navigation.addEventListener("navigate", (event) => {
  debugger;
});
```
