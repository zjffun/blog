---
title: Semver range syntax
date: 2024-03-03 11:42:56 +08:00
tags:
  - semver
---

I often forget how `^`(caret) and `~`(tilde) work in semver range syntax. Here's a quick reminder:

# `^`(caret)

Allows changes that do not modify the left-most non-zero digit in the [major, minor, patch] tuple.

For example, `^1.2.3` allows `1.x.x` but not `2.x.x`.

# `~`(tilde)

Allows patch-level changes if a minor version is specified on the comparator. Allows minor-level changes if not.

For example, `~1.2.3` allows `1.2.x` but not `1.3.x`.

# See

- [Semantic Versioning 2.0.0 | Semantic Versioning](https://semver.org/)
- [semver | npm Docs](https://docs.npmjs.com/cli/v6/using-npm/semver#advanced-range-syntax)
