---
title: npm find package dependents
date: 2024-08-26 17:08:33 +08:00
tags:
  - npm
---

Using the `why` command to show the dependents of a package.

```bash
npm why lodash
yarn why lodash
pnpm why lodash
```

Example:

```bash
$ pnpm why lodash

dependencies:
element-plus 2.7.6
├── lodash 4.17.21
└─┬ lodash-unified 1.0.3
  └── lodash 4.17.21 peer
lodash 4.17.21

devDependencies:
@vitest/browser 1.6.0
└─┬ webdriverio 8.39.0 peer
  └─┬ archiver 7.0.1
    ├─┬ archiver-utils 5.0.2
    │ └── lodash 4.17.21
    └─┬ zip-stream 6.0.1
      └─┬ archiver-utils 5.0.2
        └── lodash 4.17.21
vitest 1.6.0
└─┬ @vitest/browser 1.6.0 peer
  └─┬ webdriverio 8.39.0 peer
    └─┬ archiver 7.0.1
      ├─┬ archiver-utils 5.0.2
      │ └── lodash 4.17.21
      └─┬ zip-stream 6.0.1
        └─┬ archiver-utils 5.0.2
          └── lodash 4.17.21
```
