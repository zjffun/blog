---
updated: 'Tue, 11 Feb 2020 12:03:08 GMT'
date: 'Mon, 17 Dec 2018 11:16:53 GMT'
tags:
  - 前端
  - JavaScript
---

# 适用场景

-   一般在需要使用匿名函数时使用

# 误用场景

-   函数作为构造函数
-   需要修改函数的`this`
-   需要使用`arguments`对象或访问`prototype`属性
-   需要作为生成器函数

## 例如

### 需要修改函数的`this`

```javascript
var user = {
  name: "zhang",
  appendAF: val => {
    console.log(this.name + val); // apply不绑定this（箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。）
  },
  appendF: function(val) {
    console.log(this.name + val); // apply绑定this
  }
};

function call(obj, fname, ...args) {
  console.log(obj);
  obj[fname].apply(obj, args);
}

call(user, "appendAF", "qqq"); // undefinedqqq
call(user, "appendF", "qqq"); // zhangqqq
```

### 生成器函数

```javascript
var genAF = (* () => {
    yield 123;
})(); // 语法错误

var genF = (function* (){
    yield 123;
})(); // 正确
```

# 参考

> [箭头函数 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
