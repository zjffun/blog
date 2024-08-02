---
title: requestIdleCallback Priority
date: 2024-07-29 03:21:05 +08:00
tags:
  - js
---

> Can't think of a good alternative, but wouldn't numbers for priority API lead us into z-index:9999 situation where developers will prioritize things with abitrary high numbers and there would be still no guarantee which one is highest in the codebase?

> In React we actually just use the absolute `timeout` time as the priority (the lower time, the higher priority). That way things that risk timing out soon automatically gets higher priority.

See:

[Priority Queue Option · Issue #68 · w3c/requestidlecallback](https://github.com/w3c/requestidlecallback/issues/68)
