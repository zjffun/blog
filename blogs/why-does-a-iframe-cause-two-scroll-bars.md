---
title: Why Does a Iframe Cause Two Scroll Bars
date: 2024-06-23 00:22:39 +08:00
tags:
  - iframe
  - CSS
---

Sometimes, we may set the height of iframe to it container height, but we'll see there are two scroll bars on in the iframe and one in the container. That because the iframe is an inline element. We can fix this by set the iframe to be a block element.

Example:

<iframe width="100%" height="640px" src="/blogs/demo/why-does-a-iframe-cause-two-scroll-bars/example.html"></iframe>
