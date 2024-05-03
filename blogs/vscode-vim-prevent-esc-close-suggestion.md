---
title: VS Code Vim Prevent Esc Close Suggestion
date: 2024-05-03 11:57:05 +08:00
tags:
  - VS Code
  - Vim
---

> Go to `keyboard shortcuts` → search `extension.vim_escape` → right click → Change When Expression → add `&& !parameterHintsVisible && !suggestWidgetVisible` to the when expression → Enter.

See:

- [Vscode-Vim setup — It’s not as easy as you think! | by Mario Gunawan | Medium](https://mario-gunawan.medium.com/vscode-vim-setup-its-not-as-easy-as-you-think-b8d1d97e8b13)
