---
title: Video frame capture color different
date: 2023-12-30
tags:
  - Canvas
  - Video
  - Color
  - JavaScript
---

## Problem

When capture video frame to canvas, the color is different. But I can't find the reason. Maybe YCbCr to RGB will bring some difference.

## Comparison

<iframe width="100%" height="500px" src="/blogs/demo/video-frame-capture-color-different/video-capture-compare.html" style="border: 1px solid gray"></iframe>

## Test commands

```bash
ffprobe -show_streams xxx.mp4
```

Will get something like this:

```txt
pix_fmt=yuv420p
color_space=bt709
```

## See

- [Maxime Lebled's blog: BT.601 vs BT.709](https://blog.maxofs2d.net/post/148346073513/bt601-vs-bt709)
- [css - HTML5 video background color not matching background color of website -- in some browsers, sometimes - Stack Overflow](https://stackoverflow.com/questions/35214962/html5-video-background-color-not-matching-background-color-of-website-in-some)
