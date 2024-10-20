---
title: Typescript Generics Debug
date: 2024-10-20 18:52:16 +08:00
tags:
  -
---

For some React Components we may meet some error about props type, sometimes we should check the type of function and non-function props.

Simple Example:

```ts
interface Props<VT> {
  value?: VT;
  onChange?: (value: VT) => void;
}

function test<VT>(props: Props<VT>) {}

test({
  value: 1, // Type 'number' is not assignable to type 'string'.
  onChange(v: string) {
    return v;
  },
});
```

Complex Example:

```ts
interface baseProps<VT> {
  value?: VT;
}

interface Props<VT> extends baseProps<VT> {
  onChange?: (value: VT) => void;
}

class Component<P> {
  constructor(props: P) {}
}

class MyComp<VT> extends Component<Props<VT>> {}

const comp = new MyComp({
  value: 1, // Type 'number' is not assignable to type 'string'.
  onChange(v: string) {
    return v;
  },
});
```
