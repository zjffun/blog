---
title: TypeScript JSX Generics
date: 2024-10-25 19:24:24 +08:00
tags:
  - typescript
  - jsx
---

We can set the type of generic after the component name. Example:

```jsx
function Form() {
  // ...

  return (
    <Select<string>
      options={targets}
      value={target}
      onChange={setTarget}
    />
  );
}
```

See: [Passing Generics to JSX Elements in TypeScript — Marius Schulz](https://mariusschulz.com/blog/passing-generics-to-jsx-elements-in-typescript)
