---
title: Git branch
date: 2023-12-29
tags:
  - Git
---

## Git list branchs ordered by most recent commit

Command:

```bash
git branch -av --sort=-committerdate
```

Alias:

```bash
git config --global alias.recentbranch 'branch -av --sort=-committerdate'
```

See:

- [version control - How can I get a list of Git branches, ordered by most recent commit? - Stack Overflow](https://stackoverflow.com/questions/5188320/how-can-i-get-a-list-of-git-branches-ordered-by-most-recent-commit)
