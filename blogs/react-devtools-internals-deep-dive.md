---
title: React Devtools Internals Deep Dive
date: 2024-10-20 18:48:35 +08:00
tags:
  - react
  - devtool
---

# Development

## Start

See `packages/react-devtools/CONTRIBUTING.md`:

```sh
# clone
git clone git@github.com:facebook/react.git

# install
cd <react-repo>
yarn install

# build react
cd <react-repo>
cd scripts/release
yarn install
## we need provide token and commit sha1
GH_TOKEN=$(gh auth token) ./download-experimental-build.js -c $(git rev-parse main)

# build react-devtools-extensions
cd <react-repo>
cd packages/react-devtools-extensions
npm run build:chrome:local

# install chrome extension: packages/react-devtools-extensions/chrome/build/unpacked
```

## Open Debug Mode

`packages/react-devtools-shared/src/constants.js:15`:

```js
// Flip this flag to true to enable verbose console debug logging.
export const __DEBUG__ = true;
```

# Open In Editor Function

## `__source` property

```jsx
<MyComp __source={{
    fileName: "xxx/xxx/xxx.js",
    lineNumber: 1,
    columnNumber: 2,
}}>
```

## React `jsxDEV`

```js
react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV(
  MyComp,
  {
    children: "xxx",
  },
  void 0,
  false,
  {
    fileName: "xxx/xxx/xxx.js",
    lineNumber: 1,
    columnNumber: 2,
  },
  _this
);
```

Implement: `packages/react/src/jsx/ReactJSXElement.js`

Doc: [RFC: createElement changes and surrounding deprecations by sebmarkbage · Pull Request #107 · reactjs/rfcs](https://github.com/reactjs/rfcs/pull/107/files)

PS: `source` will not be carried from `jsxDEV() -> ReactElement() -> element`, and `debugStack` will be carried now.

## Components Tree

`packages/react-devtools-shared/src/devtools/views/Components/Tree.js` will using FixedSizeList show the components, pass `index` property one by one to `Element`.

`packages/react-devtools-shared/src/devtools/views/Components/Element.js` will take `index` property and showing `store.getElementAtIndex(index)`.

<!-- `packages/react-devtools-shared/src/devtools/store.js` store the tree data. -->

`packages/react-devtools-shared/src/devtools/views/Components/InspectedElement.js` side bar show the detail of the selected item.
