---
title: 浏览器渲染流程
date: 2023-10-28 15:14:32 +08:00
tags:
  - 前端
---

# 主线程

负责构建 DOM 树、构建样式树、布局、构建层和绘制。

# 合成线程

负责处理用户操作、分片、栅格化和展示到屏幕。

栅格化和展示到屏幕会交给 GPU 处理。

下面的代码，进入页面 10 秒内，虽然主线程很忙，但滚动指令由合成线程处理，依然可以滚动。如果进入页面 10 秒内有点击，点击事件的处理程序也会在 10 秒后主线程空闲了执行。

```html
<style>
  .box {
    width: 100px;
    height: 2000px;
    background: linear-gradient(lightcoral 0%, lightblue 100%);
  }
</style>
<div class="box"></div>
<script>
  window.addEventListener("scroll", () => {
    console.log("scroll");
  });

  window.addEventListener("click", () => {
    console.log("click");
  });

  setTimeout(() => {
    let i = 0;

    const stopTime = Date.now() + 10000;
    while (stopTime > Date.now()) {
      i++;
    }
  }, 1000);
</script>
```

# 参考资料

- [Life of a Pixel - Google Slides](https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y)
- [Life of a pixel (Chrome University 2019) - YouTube](https://www.youtube.com/watch?v=m-J-tbAlFic)
