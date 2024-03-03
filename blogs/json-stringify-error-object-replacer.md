---
title: JSON.stringify() error object replacer
date: 2024-03-03 11:49:57 +08:00
tags:
  - JavaScript
  - JSON
---

When we try to `JSON.stringify()` an error object, we will get an empty object `{}`. This is because the error object has no enumerable properties.

```js
JSON.stringify(new Error("error")); // '{}'
```

To include the error message and stack trace, we can use a replacer function.

```js
function errorReplacer(key, value) {
  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
      stack: value.stack,
    };
  }
  return value;
}

JSON.stringify(new Error("error"), errorReplacer); // '{"name":"Error","message":"error","stack":"Error: error\\n    at <anonymous>:12:16"}'

JSON.stringify(new SyntaxError("syntaxError"), errorReplacer); // '{"name":"SyntaxError","message":"syntaxError","stack":"SyntaxError: syntaxError\\n    at <anonymous>:13:16"}'
```
