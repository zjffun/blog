---
title: Git Drop Some Commit
date: 2025-06-07 13:27:42 +08:00
tags:
  - git
---

Most of the time if you want to drop some commit, you can use `git rebase -i` to drop the commit. But it is hard to using when we want to write a script to drop some commit. Because it need to select the commit to drop interactively.

So if you want to drop one commit (or some continuous commits) in a script, you can use `git rebase --onto`. For example, if you want to drop the commit with message `your commit message`, you can use the following command:

```sh
commit=$(git log --format="%H" -1 --grep="your commit message")
if [ -n "$commit" ]; then
  parent_commit=$(git rev-parse "$commit"^)
  git rebase --onto  "$parent_commit" "$commit"
fi
```
