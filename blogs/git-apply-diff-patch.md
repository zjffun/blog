---
title: Git Apply Diff Patch
date: 2024-04-06 15:18:36 +08:00
tags:
  - Git
  - Patch
---

```sh
git diff > some-changes.patch

git apply /path/to/some-changes.patch

# when patch failed we can try to use -3 to apply the patch and resolve the conflict
git apply -3 /path/to/some-changes.patch
```
