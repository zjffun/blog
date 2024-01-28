---
title: Vue `v-model`
date: 2024-01-28 10:44:15 +08:00
tags:
  - Frontend
  - Vue
---

Every time I need to use custom `v-model` in Vue, I need to look up the docs. So I'm writing this down.

# Vue2 custom `v-model`

Component:

```html
<template>
  <input :value="value" @input="$emit('input', $event)" />
</template>

<script>
  export default {
    name: "MyComp",
    props: {
      value: Boolean,
    },
  };
</script>
```

Usage:

```html
<template>
  <my-comp v-model="myValue"></my-comp>
</template>
```
