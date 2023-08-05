```
title: Git 分支作为单独的文件夹
date: 2023-08-05 19:00:00
updated: 2023-08-05 19:00:00
```

使用 `git worktree` 可以将分支作为单独的文件夹，这样可以在同一个仓库中同时开发多个分支。

例如，创建 `feat-xxx` 文件夹单独开发 `feat/xxx` 分支：

```bash
git worktree add ./feat-xxx feat/xxx
```
