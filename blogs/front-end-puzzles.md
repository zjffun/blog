---
title: Front End Puzzles
date: 2025-06-07 16:01:10 +08:00
tags:
  - html
  - css
  - js
---

I have no answers to these puzzles now. If you have any idea, please let me know.

# Why there is an empty line above test?

```html
<div style="border: 1px solid #999">
  <div style="display: inline-block">
    <div style="display: flex">
      <div style="width: 0; height: 0; overflow: hidden">element of size 0</div>
      <div>test</div>
    </div>
  </div>
</div>
```

<iframe width="100%" height="120px" style="border: 1px solid gray" src="/blogs/demo/front-end-puzzles/inline-block-flex-height.html"></iframe>

# Why does td2 overlap with td3?

```html
<table style="width: 200px">
  <tr>
    <td>td1</td>
    <td style="white-space: nowrap">
      <input style="width: 100%" />
      <span style="color: aqua">td2</span>
    </td>
    <td style="color: violet">td3</td>
  </tr>
</table>
```

<iframe width="100%" height="120px" style="border: 1px solid gray" src="/blogs/demo/front-end-puzzles/table-input-width.html"></iframe>
