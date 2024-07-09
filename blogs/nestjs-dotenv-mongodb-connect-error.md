---
title: NestJS Dotenv MongoDB 报连接错误
date: 2023-09-17 18:42:15 +08:00
tags:
  - NestJS
  - Dotenv
  - MongoDB
---

可能是由于使用 [Dotenv](https://www.npmjs.com/package/dotenv) 存储的 MongoDB URI 早于 Dotenv 的初始化，将 Dotenv 初始化放在引入 `AppModule` 之前即可解决。例如：

```typescript
// ./src/initDotEnv.ts

import { config as dotenvConfig } from "dotenv";

dotenvConfig();
```

```typescript
// ./src/main.ts

// init dotenv before AppModule, otherwise process.env.MONGODB_URI will be undefined in AppModule
import "./initDotEnv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

错误信息示例：

```text
ERROR [ExceptionHandler] The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
```
