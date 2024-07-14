---
title: JS Type Coercion
date: 2024-07-14 15:44:15 +08:00
tags:
  - js
---

There are three distinct paths through which objects may be converted to primitives:

- Primitive coercion: `[Symbol.toPrimitive]("default") → valueOf() → toString()`\
- Numeric coercion, number coercion, BigInt coercion: `[Symbol.toPrimitive]("number") → valueOf() → toString()`
- String coercion: `[Symbol.toPrimitive]("string") → toString() → valueOf()`

```js
const object1 = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'default') {
      return 41;
    }
    if (hint === 'number') {
      return 42;
    }
    if (hint === 'string') {
      return 'string';
    }
    return null;
  },
  valueOf() {
    return 43
  },
  toString() {
    return 'toString';
  }
};

console.log('' + object1); // 41 --- Primitive coercion
console.log(+object1); // 42 --- Numeric coercion
console.log(`${object1}`); // string --- String coercion
```
