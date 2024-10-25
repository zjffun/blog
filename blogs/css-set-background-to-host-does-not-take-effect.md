---
title: CSS Set Background to :host Does Not Take Effect
date: 2024-10-25 19:44:52 +08:00
tags:
  - css
---

You may create a custom element like this and find `background` not take effect. This not a bug of `:host` or shadow DOM, but because it is an inline element. So you can set `display: block;` to `:host` to make it work.

```html
<x-element></x-element>
<script>
  customElements.define(
    "x-element",
    class extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        div.innerText = "test";
        shadow.appendChild(div);

        const style = document.createElement("style");
        style.textContent = `
          :host {
            background-color: lightgreen;
          }
        `;
        shadow.prepend(style);
      }
    }
  );
</script>
```

Tests:

```html
<!-- background "seems" not effect -->
<span style="background: aqua;">
  <div>test</div>
</span>

<!-- background effect -->
<span style="display: block; background: aqua;">
  <div>test</div>
</span>
```
