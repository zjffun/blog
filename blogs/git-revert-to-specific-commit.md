---
title: Git revert to specific commit
date: 2024-02-11 12:33:43 +08:00
tags:
  - Git
---

# Amazing `git restore`

Using `git restore` to revert to a specific commit:

```bash
# Set TARGET_SHA codes to both stage and worktree
git restore --source=TARGET_SHA --staged --worktree .
```

Note: `git checkout TARGET_SHA .` will not delete new files created after `TARGET_SHA`.

# Other methods

Using `git reset --hard` and `git reset --soft` to revert to a specific commit:

```bash
# Get CURRENT_SHA
git rev-parse HEAD
# Revert all to TARGET_SHA
git reset —-hard TARGET_SHA
# Set index to CURRENT_SHA
git reset --soft CURRENT_SHA
# Commit revert
git commit -m "feat: revert to TARGET_SHA"
```
