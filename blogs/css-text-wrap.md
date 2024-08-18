---
title: Text wrap and overflow
date: 2024-08-18 17:10:05 +08:00
tags:
  - CSS
---

# Wrap

- [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space): shorthand of `white-space-collapse` and `text-wrap`
- [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
- [overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap) (alias `word-wrap`)
- [hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)

# Overflow

- [overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
- [-webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)

# Examples

One line:

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

Multiple lines:

```css
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
```

# Tips

If you both set `white-space: no-wrap;` and `word-break: break-all;`, the text will not be wrapped.
