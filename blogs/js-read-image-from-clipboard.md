---
title: JS Read Image From Clipboard
date: 2024-04-29 23:15:58 +08:00
tags:
  - JavaScript
  - Clipboard
---

- We can using `navigator.clipboard.read()` to read image data in clipboard, like copy images.
- We can using `e.clipboardData.files` to read image file in clipboard, like copy files.

Example:

<iframe width="100%" height="350px" style="margin-bottom: 1rem;" src="/blogs/demo/js-read-image-from-clipboard/index.html"></iframe>

I found that read `e.clipboardData.files` must before `navigator.clipboard.read()`, otherwise the `e.clipboardData.files` will be empty.

```js
document.addEventListener("paste", async (e) => {
  // read e.clipboardData.files must before navigator.clipboard.read()
  for (const file of e.clipboardData.files) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    imgFileContainer.append(img);
  }

  const clipboardItems = await navigator.clipboard.read();

  for (const clipboardItem of clipboardItems) {
    const imageTypes = clipboardItem.types?.filter((type) =>
      type.startsWith("image/")
    );

    for (const imageType of imageTypes) {
      const blob = await clipboardItem.getType(imageType);
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      imgDataContainer.append(img);
    }
  }
});
```
