---
title: Node, npm and npm lockfile version
date: 2024-03-09 19:18:20 +08:00
tags:
  - Node
  - npm
  - lockfile
---

<table>
  <thead>
    <tr>
      <th>Node.js</th>
      <th>npm</th>
      <th>npm lockfile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>v21.7.1</td>
      <td>v10.5.0</td>
      <td>v3</td>
    </tr>
    <tr>
      <td>v20.11.1</td>
      <td>v10.2.4</td>
      <td>v3</td>
    </tr>
    <tr>
      <td>v19.9.0</td>
      <td>v9.6.3</td>
      <td>v3</td>
    </tr>
    <tr>
      <td>v18.19.1</td>
      <td>v10.2.4</td>
      <td>v3</td>
    </tr>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v17.9.1</td>
      <td>v8.11.0</td>
      <td>v2</td>
    </tr>
    <tr>
      <td>v16.20.2</td>
      <td>v8.19.4</td>
      <td>v2</td>
    </tr>
    <tr>
      <td>v15.14.0</td>
      <td>v7.7.6</td>
      <td>v2</td>
    </tr>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v14.21.3</td>
      <td>v6.14.18</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>v13.14.0</td>
      <td>v6.14.4</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>v12.22.12</td>
      <td>v6.14.16</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>v11.15.0</td>
      <td>v6.7.0</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>v10.24.1</td>
      <td>v6.14.12</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>v9.11.2</td>
      <td>v5.6.0</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>v8.17.0</td>
      <td>v6.13.4</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v7.10.1</td>
      <td>v4.2.0</td>
      <td>shrinkwrap</td>
    </tr>
    <tr>
      <td>v6.17.1</td>
      <td>v3.10.10</td>
      <td>shrinkwrap</td>
    </tr>
    <tr>
      <td>v5.12.0</td>
      <td>v3.8.6</td>
      <td>shrinkwrap</td>
    </tr>
    <tr>
      <td>v4.9.1</td>
      <td>v2.15.11</td>
      <td>shrinkwrap</td>
    </tr>
    <tr>
      <td>v0.12.18</td>
      <td>v2.15.11</td>
      <td>shrinkwrap</td>
    </tr>
  </tbody>
</table>

npm lockfile version:

> No version provided: an "ancient" shrinkwrap file from a version of npm prior to npm v5.
> 
> 1: The lockfile version used by npm v5 and v6.
> 
> 2: The lockfile version used by npm v7 and v8. Backwards compatible to v1 lockfiles.
> 
> 3: The lockfile version used by npm v9. Backwards compatible to npm v7.

See:

- [Node.js — Previous Releases](https://nodejs.org/en/about/previous-releases)
- [package-lock.json | npm Docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json#lockfileversion)
