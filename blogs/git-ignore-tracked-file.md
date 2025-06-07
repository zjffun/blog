---
title: Git Ignore Tracked File
date: 2025-06-07 13:35:54 +08:00
tags:
  - git
---

Sometimes we will make some changes to a file that we don't want to commit, but we also don't want to see the changes in `git status`.

# `git update-index --assume-unchanged`?

You may find some articles suggest using `git update-index --assume-unchanged <file>` to ignore the changes in a tracked file. But it is not recommended by Git documentation:

> Users often try to use the assume-unchanged and skip-worktree bits to tell Git to ignore changes to files that are tracked. This does not work as expected, since Git may still check working tree files against the index when performing certain operations. In general, Git does not provide a way to ignore changes to tracked files, so alternate solutions are recommended.
>
> For example, if the file you want to change is some sort of config file, the repository can include a sample config file that can then be copied into the ignored name and modified. The repository can even include a script to treat the sample file as a template, modifying and copying it automatically.

# Commit it and drop before pushing

I find a little complex way to do this. We can create a new branch, commit the changes to the file we want to ignore. When we want to use them we can cherry-pick the commit form the branch. But please **make sure you drop the commit before you submit a pull request or merge the developing branch into the main branch**.

Cherry-picking the commit to the developing branch:

```sh
git cherry-pick <your personal change branch>
```

[Dropping the personal change commit](./git-drop-some-commit.md):

```sh
commit=$(git log --format="%H" -1 --grep="your personal change commit message")
if [ -n "$commit" ]; then
  parent_commit=$(git rev-parse "$commit"^)
  git rebase --onto  "$parent_commit" "$commit"
fi
```

# See

- [Ignore files in Git without adding them to .gitignore | Luis Dalmolin](https://luisdalmolin.dev/blog/ignoring-files-in-git-without-gitignore/)
- [Git - git-update-index Documentation](https://git-scm.com/docs/git-update-index)
