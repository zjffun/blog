---
title: GitHub Markdown 嵌入 bilibili 视频
date: 2022-05-04 15:23:00
tags:
  - 工具
---

目前 GitHub Markdown 不支持 `iframe` 标签，所以我们在 B 站点击分享复制的嵌入代码在 GitHub 上会展示成纯文本。

例如复制的嵌入代码：

```html
<iframe
  src="//player.bilibili.com/player.html?aid=683633468&bvid=BV1jS4y1w7SW&cid=711074429&page=1"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
>
</iframe>
```

会展示成这样：

<img src="/blogs/images/github-markdown-embed-bilibili-video/github-display-iframe.webp" alt="github display iframe" />

所以我们可以换一种思路展示一张图片，图片点击会打开视频，例如：

```md
[![](https://i1.hdslb.com/bfs/archive/9a32c55b90ac9485d02dc1a50dc1fa94d12b3111.jpg@640w_400h_1c.webp)](https://player.bilibili.com/player.html?aid=683633468&bvid=BV1jS4y1w7SW&cid=711074429&page=1)
```

但此时外观是这样的：

<img src="/blogs/images/github-markdown-embed-bilibili-video/bilibili-thumbnail.webp" alt="bilibili thumbnail" />

用户可能并不知道这是一个视频

此时我们可以使用 [bilibili 视频封面图](https://bb-embed.zjffun.com/) 这个工具为图片添加这是一个视频的视觉提示，例如：

```md
[![](https://bb-embed.zjffun.com/embed?v=BV1jS4y1w7SW)](https://player.bilibili.com/player.html?aid=683633468&bvid=BV1jS4y1w7SW&cid=711074429&page=1)
```

外观是这样：

[![](https://bb-embed.zjffun.com/embed?v=BV1jS4y1w7SW)](https://player.bilibili.com/player.html?aid=683633468&bvid=BV1jS4y1w7SW&cid=711074429&page=1)
