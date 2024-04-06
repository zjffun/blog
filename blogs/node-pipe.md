---
title: Node Pipe
date: 2024-04-06 15:01:57 +08:00
tags:
  - Node
---

All data:

```js
async function main() {
  let data = "";
  for await (const chunk of process.stdin) data += chunk;

  // process all the data and write it back to stdout
  process.stdout.write(data);
}

main();
```

Line by line:

```js
const readline = require("node:readline");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  for await (const line of rl) {
    // process a line at a time
    process.stdout.write(`line: ${line}\n`);
  }
}

main();
```

See:

- [How to pipe data into a Node.js script | Jon Linnell](https://jonlinnell.co.uk/articles/node-stdin)
