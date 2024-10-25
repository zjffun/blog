---
title: Set Width to Fieldset Element Does Not Take Effect
date: 2024-10-25 20:04:10 +08:00
tags:
  - html
  - css
---

That may cause of the `<fieldset>` has `min-inline-size: min-content` by default. So we can set `min-inline-size: 0` to make `width` take effect. Example:

```html
<fieldset style="width: 10px; background: lightblue">
  <pre>xxxxxxxxxxxxxxxxxxxx</pre>
</fieldset>
<fieldset style="min-inline-size: 0; width: 10px; background: lightblue">
  <pre>xxxxxxxxxxxxxxxxxxxx</pre>
</fieldset>
```

See: [<fieldset>: The Field Set element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#styling_with_css)
