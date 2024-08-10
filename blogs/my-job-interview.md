---
title: My Job Interview
date: 2018-07-01
tags:
  - interview
---

# Career Planning

- 喜好原则
- 擅长原则
- 价值原则
- 发展原则

# Strength

- 执行能力
- 学习能力
- 沟通正在练习

# Skill

## Testing

- Unit Testing: Karma, Mocha & Chai
- E2E Testing: Cypress or Nightwatch

# Open Source

## VS Code

[Visual Studio Code March 2022 version 1.66](https://code.visualstudio.com/updates/v1_66)

- [feat: heap profiling by zjffun · Pull Request #1187 · microsoft/vscode-js-debug](https://github.com/microsoft/vscode-js-debug/pull/1187) `+1,027 −288`
- [Feat heap visualization by zjffun · Pull Request #59 · microsoft/vscode-js-profile-visualizer](https://github.com/microsoft/vscode-js-profile-visualizer/pull/59) `+3,738 −1,702`

> Contributions to vscode-js-debug:
> @zjffun (JuFeng Zhang): feat: heap profiling PR #1187

Generate heap profile file, visualize heap profile, refactor code and extract components.

1. get heap profile
2. add heap profile adapter
3. add heap profile visualizer, extract components
4. generate annotations, help us see heap usage in the editor
5. add model layer, generate heap profile tree
6. using WebGL draw heap profile flame graph
   1. add shader
   2. bind buffer set data

## jsdom

> jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js.

Added some features and fixed some bugs and make them pass WPT (jsdom using WPT test features). For example:

- [jsdom/jsdom: A JavaScript implementation of various web standards, for use with Node.js](https://github.com/jsdom/jsdom/pull/3561)
- [Treat SVG a element with the href attribute as focusable by zjffun · Pull Request #2965 · jsdom/jsdom](https://github.com/jsdom/jsdom/pull/2965)

## draggable

Currently 17.8k stars.

Value:

1. Provide sortable, droppable, swappable etc. Those plugins is powerful, for example, them handle scroll well.
2. native DnD is great, but when we meet some compatibility issues, we can use this library. Around 7% mobile device not support DnD. [Drag and Drop Compatibility](https://caniuse.com/dragndrop)

Previous collaborator. Review PRs, add features and handle issues.

Project architecture:

- raw events: raw mouse event, raw pointer event, raw dnd event
- plugins: draggable plugin, sortable plugin, droppable plugin, swappable plugin
- custom events: draggable event, sortable event, droppable event, swappable event
- user API (class): Draggable class, Sortable class, Droppable class, Swappable class

Technical:

- `position: fixed` relative to the containing block, so sometimes it's not relative to the page left-top edge. [Layout and the containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block)

## VS Code Extension

### VSCode Snippets Manager

Currently 4466 download.

Technical:

- Using [jsonc-parser](https://www.npmjs.com/package/jsonc-parser) parse jsonc file to Map (The key order of object may wrong when meet pure numeric keys).

## Chrome Extension

### Close Socket

Currently 484 users.

Technical:

- Sometimes you modify hosts, but it's not take effect in Chrome, this may be caused by sockets, you can use this extension.

# Technical Projects

## Upgrade Vue 2 to Vue 3

### Performance Optimize

Using [InteractionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) lazy load components make the page load faster almost 10 times.

## ZYB DEV Chrome Extension

Modify cookie quickly, improve dev experience.

## front end monitor

- Performance
- JS error
- Event and log

## iconfont

Technical:

- Convert raster image (png icon) to vector image (SVG icon) is difficult.
- Optimize SVG is difficult, cuz SVG is very complex, it has CSS, animation, [fill-rule](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule) and [`clip-rule`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule) etc. So we often ask the design to provide "simple" SVG. [svg/svgo: ⚙️ Node.js tool for optimizing SVG files](https://github.com/svg/svgo)
- Convert SVG to font. [jaywcjlove/svgtofont: Read a set of SVG icons and ouput a TTF/EOT/WOFF/WOFF2/SVG font.](https://github.com/jaywcjlove/svgtofont)

## low-code

[detail](./low-code)

## design to code

- Figma

# Business Projects

## Table performance optimization

Lazy load components.

## DnD config page

Drag and drop config buttons, datum and table columns.

## AI Correction

TensorFlow:

1. Prepare data
2. Train the model
   1. Tensor
   2. Network structure
   3. Loss function
   4. Optimizers
3. Validate the model
4. Use the model

# other

- CRM (Customer Relationship Management) 客户关系管理：帮助企业有效录入、留存和追踪客户信息。
- BI (Business Intelligence) 商业智能：很多图表辅助决策。即席查询（Ad Hoc）：输入查询条件，查询结果会在图表上展示。
- BPM (Business Process Management) 业务流程管理：拖拽配置审批、报销、请假等业务流程。
