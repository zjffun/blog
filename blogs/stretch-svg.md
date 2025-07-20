---
title: Stretch SVG
date: 2025-07-20 17:07:49 +08:00
tags:
  - HTML
  - CSS
---

When we are using SVG in `<img />` or as background, we may find it not stretch as expect.

To fix this, we can set `preserveAspectRatio` to `none` for the SVG. For example:

```
<svg preserveAspectRatio="none">
</svg>
```

See:

- [html - How to stretch an SVG image? - Stack Overflow](https://stackoverflow.com/questions/44845452/how-to-stretch-an-svg-image)
