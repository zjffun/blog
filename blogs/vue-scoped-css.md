---
title: Vue scoped CSS
date: 2024-03-09 20:16:17 +08:00
tags:
  - Vue
  - CSS
---

Vue scoped CSS will not influence global, but may influenced by global. Because the scoped CSS will add a unique attribute and retain original selector name.

For example, if you have a scoped style like this:

```vue
<template>
  <div class="example">Hello World</div>
</template>

<style scoped>
.example {
  color: red;
}
</style>
```

and have a global style like this:

```css
.example {
  background: yellow;
}

.example.example.example {
  color: blue;
}
```

The text background will be yellow, because it has `example` class. The text color will be blue, because the global style is more specific than the scoped style.

Using CSS modules can solve this problem.
