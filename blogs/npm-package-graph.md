---
title: npm package graph
date: 2024-08-26 17:19:37 +08:00
tags:
  - npm
---

There is an awesome tool to generate npm package dependency graph:

- [npmgraph - NPM Dependency Diagrams](https://npmgraph.js.org/)

If you want to build a graph from lockfile, you can use `pnpm import` get `pnpm-lock.yaml`, then you can only handle `pnpm-lock.yaml`. Here are some references:

- [pnpm import | pnpm](https://pnpm.io/cli/import)
- [snyk/nodejs-lockfile-parser: Generate a Snyk dependency tree from package-lock.json or yarn.lock file](https://github.com/snyk/nodejs-lockfile-parser)
- [milahu/parse-package-lock: parse lockfiles of npm, yarn, pnpm. generic lockfile parser for javascript, to get the deep tree of dependencies, without deduplication. alternative to snyk-nodejs-lockfile-parser](https://github.com/milahu/parse-package-lock)
