---
title: Web Component Can Not Use Web Font
date: 2025-08-03 17:31:15 +08:00
tags:
  - web component
  - web font
---

When using web components, add a web font in the shadow DOM will not work. The web font needs to be added in the document.

See: [@font-face definitions in shadowRoot cannot be used within the shadowRoot [41085401] - Chromium](https://issues.chromium.org/issues/41085401)

This not work:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div style="font-family: test-font">outer</div>
    <script>
      class MyElement extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: "open" });
          const div = document.createElement("div");
          div.textContent = "web component";
          div.style.fontFamily = "test-font";
          shadow.appendChild(div);

          // Add font to the shadow
          const style = document.createElement("style");
          style.textContent = `
            @font-face {
              font-family: test-font;
              src: url("./Florilane Cardillac.ttf");
            }
          `;
          shadow.appendChild(style);
        }
      }

      customElements.define("my-element", MyElement);

      const myElement = document.createElement("my-element");
      document.body.appendChild(myElement);
    </script>
  </body>
</html>
```

This will work:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div style="font-family: test-font">outer</div>
    <script>
      // Add font to the document
      const style = document.createElement("style");
      style.textContent = `
          @font-face {
            font-family: test-font;
            src: url("./Florilane Cardillac.ttf");
          }
        `;
      document.head.appendChild(style);

      class MyElement extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: "open" });
          const div = document.createElement("div");
          div.textContent = "web component";
          div.style.fontFamily = "test-font";
          shadow.appendChild(div);
        }
      }

      customElements.define("my-element", MyElement);

      const myElement = document.createElement("my-element");
      document.body.appendChild(myElement);
    </script>
  </body>
</html>
```
