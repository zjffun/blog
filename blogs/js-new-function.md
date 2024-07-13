---
title: What happened when JavaScript call function with new
date: 2024-07-13 19:14:31 +08:00
tags:
  - js
---

When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

1. Creates a blank, plain JavaScript object. For convenience, let's call it **newInstance**.
2. `newInstance.__proto__ = calledFunction.prototype`.
3. `calledFunction.call(newInstance)`.
4. If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, **newInstance** is returned instead.

See: [new - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
