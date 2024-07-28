---
title: Hard Link and Symbolic Link
date: "Fri, 06 May 2022 14:07:51 GMT"
updated: 2024-07-28 23:53:05 +08:00
---

- A hard link is a direct reference to a file via its inode. You can also only hardlink files and not directories.

- Symbolic links are essentially shortcuts that reference to a file instead of its inode value.

(The inode is a database that describes the file/directory attributes such as metadata and the physical location on the hard drive.)

Example:

```sh
touch test

ln test test2
ln -s test test3

ls -l

# `2` in second column is the number of hard links
# -rw-r--r--    2 zjf  staff       0 Jul 28 23:54 test2

# `l` in first column means it's a symbolic link
# lrwxr-xr-x    1 zjf  staff       4 Jul 28 23:54 test3 -> test
```

See:

- [Hard links and Symbolic links — A comparison | by Andrew | Medium](https://medium.com/@307/hard-links-and-symbolic-links-a-comparison-7f2b56864cdd#:~:text=A%20hard%20link%20is%20essentially,to%20the%20inode%2C%20a%20shortcut.)
