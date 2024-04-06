---
title: Chrome Not Support TIFF Image
date: 2024-04-06 14:18:45 +08:00
tags:
  - Frontend
  - Chrome
  - Image
---

When we're using remote image, we should be careful about the image format, because some formats are not supported by some browsers. For example, TIFF image is not supported by Chrome.

```js
const img = new Image();

img.onload = () => {
  console.log("Image loaded successfully");
};

// We should handle the error event, because we may meet using TIFF image in Chrome
img.onerror = () => {
  console.error("Image failed to load");
};

img.src = data.url;
```
