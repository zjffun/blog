---
title: Git 寻找“丢失”的提交和文件
date: 2023-08-05 17:46:00
updated: 2023-08-05 17:46:00
---

使用 `git fsck --lost-found` 可以搜索到“丢失”的提交和文件，但是只能看到 hash。使用下面的 Node.js 代码可以将“丢失”的提交和文件的内容输出到 `lost-found.txt`。

```js
// lost-found.mjs
import fs from "fs";
import { execSync } from "child_process";

const lostFoundRes = execSync(`git fsck --lost-found`).toString();

let result = "";

lostFoundRes.split("\n").forEach((line) => {
  if (line.startsWith("dangling blob")) {
    const hash = line.split(" ")[2];
    result += "\n" + hash + "\n";
    const content = execSync(`git cat-file -p ${hash}`);
    result += content.toString();
  }

  if (line.startsWith("dangling commit")) {
    const hash = line.split(" ")[2];
    result += "\n" + hash + "\n";
    const content = execSync(`git show --stat ${hash}`);
    result += content.toString();
  }
});

fs.writeFileSync("lost-found.txt", result);
```
