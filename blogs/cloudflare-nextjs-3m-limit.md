---
title: Deploy Next.js on Cloudflare Meet 3M Limit
date: 2025-04-05 17:35:37 +08:00
tags:
  - nextjs
  - cloudflare
---

# A Solution

Change `wrangler deploy` to `wrangler deploy --minify`.

With the `--minify` got my worker just under 3mb.

# Build Step

- `next build`
- `opennextjs-cloudflare build`
- `wrangler deploy`

# next

Trough analyse the size of next bundle is about 1M. It's less than 3M.

[Optimizing: Package Bundling | Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling)

Install:

```bash
npm i @next/bundle-analyzer
```

Update `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
```

Run:

```bash
ANALYZE=true npm run build
```

# opennextjs-cloudflare

I can only find a doc in opennext AWS:

[Bundle Size - OpenNext](https://opennext.js.org/aws/v2/common_issues/bundle_size#reducing-bundle-size)

Run:

```bash
du -hs .open-next/server-function/node_modules/* | sort -rh
# or
du -hs .open-next/server-functions/default/node_modules/* | sort -rh
```

But I got this result. It is no help.

```bash
du -hs .open-next/server-functions/default/node_modules/* | sort -rh
#  27M    .open-next/server-functions/default/node_modules/next
# 1.7M    .open-next/server-functions/default/node_modules/react-dom
# 464K    .open-next/server-functions/default/node_modules/acorn
```

Then I read this issue, he provide a solution. [Cloudflare deploy not working (Bundle > 1MiB) · Issue #77 · opennextjs/opennextjs-cloudflare](https://github.com/opennextjs/opennextjs-cloudflare/issues/77#issuecomment-2727011652)

> `wrangler deploy --minify` with the `--minify` got my worker just under 3mb.

# wrangler

[Bundling · Cloudflare Workers docs](https://developers.cloudflare.com/workers/wrangler/bundling/)

Run:

```
npx wrangler deploy --dry-run --outdir dist
```

We will get a js file and a map file. **Maybe we can analyse through the map file.**
