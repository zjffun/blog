---
title: Convert File To Base64
date: 2024-06-29 15:17:13 +08:00
tags:
  - JavaScript
  - Base64
---

Online tool:

<iframe width="100%" height="600px" style="border: 1px solid gray" src="/blogs/demo/convert-file-to-base64/index.html"></iframe>

Code:

```js
function getBase64(file) {
  return new Promise((res, rej) => {
    var reader = new FileReader();
    reader.onloadend = function () {
      res(reader.result);
    };
    reader.onerror = function (e) {
      rej(e);
    };
    reader.readAsDataURL(file);
  });
}
```

See:

- [How can I convert an image into Base64 string using JavaScript? - Stack Overflow](https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript)
- [Base64 - Wikipedia](https://en.wikipedia.org/wiki/Base64)
