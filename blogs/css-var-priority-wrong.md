---
title: CSS 变量优先级“错误”
date: 2023-9-15
tags:
  - CSS
---

首先我们来看一个简单的问题，下面的代码 `.div2` 的背景色应该是红色，浅蓝色还是浅绿色？

```html
<style>
  :root {
    --color: red;
  }
  .div1 {
    --color: lightblue;
    --bg-color: var(--color);
  }
  .div2 {
    --color: lightgreen;
    background: var(--bg-color);
  }
</style>
<div class="div1">
  <div class="div2">test</div>
</div>
```

我们都知道 CSS 的第一个字母 C 代表 Cascading（中文是层叠），表示样式可以有多个来源，发生冲突时取优先级最高的样式作为最终样式。所以我们可以猜测 `.div2` 的背景色应该是浅绿色，因为 `.div2` 的 `background` 属性的值是 `var(--bg-color)`，而 `--bg-color` 的值是 `var(--color)`，而 `--color` 的值按优先级最高的应该是 `lightgreen`，所以 `.div2` 的背景色应该是浅绿色。

我们可以先看一下开发者工具给出的结果：

![devtool](/blogs/images/css-var-priority-wrong/devtool.webp)

点击之后是跳到了 `lightgreen` ，奇怪的是前面的方框和鼠标悬浮展示的颜色是 `lightblue`。

看一下最终渲染出来的结果：

<style>
  :root {
    --color: red;
  }
  .div1 {
    --color: lightblue;
    --bg-color: var(--color);
  }
  .div2 {
    --color: lightgreen;
    background: var(--bg-color);
  }
</style>
<div class="div1">
  <div class="div2">test</div>
</div>

居然是浅蓝色，是浏览器 bug 导致优先级“错误”了么？

我们再来看一个[CSS 规范中的例子](https://drafts.csswg.org/css-variables/#example-beef67cd)：

```html
<one>
  <two>
    <three />
  </two>
</one>
<style>
  one {
    --foo: 10px;
  }
  two {
    --bar: calc(var(--foo) + 10px);
  }
  three {
    --foo: calc(var(--bar) + 10px);
  }
</style>
```

`three` 的 `--foo` 应该是是多高？答案是 `30px`。

> It is important to note that custom properties resolve any var() functions in their values at computed-value time, which occurs before the value is inherited. In general, cyclic dependencies occur only when multiple custom properties on the same element refer to each other; custom properties defined on elements higher in the element tree can never cause a cyclic reference with properties defined on elements lower in the element tree.
>
> 翻译：
>
> 需要注意的是，自定义属性会在计算值时（继承之前）在其值中解析 var() 函数。一般来说，只有当同一个元素上的多个自定义属性相互引用时，才会发生循环依赖；在元素树中较高位置的元素上定义的自定义属性，永远不会导致元素树中较低位置元素上定义的属性的循环引用。

现在我们可以得到一个简单的答案，这不是浏览器的 bug（虽然开发者工具有一些 bug），而是有意这样设计的，为了避免循环引用。

练习：

- [wpt/css/css-variables/variable-declaration-51.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-variables/variable-declaration-51.html)
- [wpt/css/css-variables/variable-declaration-52.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-variables/variable-declaration-52.html)
- [wpt/css/css-variables/variable-declaration-58.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-variables/variable-declaration-58.html)
- [wpt/css/css-variables/variable-declaration-60.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-variables/variable-declaration-60.html)

更多练习：

- [wpt/css/css-variables](https://github.com/web-platform-tests/wpt/tree/master/css/css-variables)
