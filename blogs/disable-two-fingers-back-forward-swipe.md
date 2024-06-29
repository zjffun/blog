---
title: Disable Two fingers back/forward swipe
date: 2024-06-29 17:55:04 +08:00
tags:
  - JS
---

Using [`overscroll-behavior-x`](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x) CSS property can disable this:

```css
html,
body {
  overscroll-behavior-x: none;
}
```

See:

[Disable Chrome two fingers back/forward swipe - Stack Overflow](https://stackoverflow.com/questions/17474930/disable-chrome-two-fingers-back-forward-swipe)
