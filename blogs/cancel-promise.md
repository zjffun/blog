---
title: Cancel Promise
date: 2024-08-18 11:39:46 +08:00
tags:
  - JS
---

Using publish-subscribe pattern to cancel promise.

Example 1: provide `cancel` function to cancel promise

```js
function updateUser() {
  let resolve, reject, cancelled;

  const promise = new Promise((resolveFromPromise, rejectFromPromise) => {
    resolve = resolveFromPromise;
    reject = rejectFromPromise;
  });

  function wrapWithCancel(fn) {
    return (data) => {
      if (!cancelled) {
        return fn(data);
      }
    };
  }

  Promise.resolve()
    .then(
      wrapWithCancel(() => {
        return new Promise((resolve) => {
          console.log("task 1");
          setTimeout(resolve, 1000);
        });
      })
    )
    .then(
      wrapWithCancel(() => {
        return new Promise((resolve) => {
          console.log("task 2");
          setTimeout(resolve, 1000);
        });
      })
    )
    .then(
      wrapWithCancel(() => {
        return new Promise((resolve) => {
          console.log("task 3");
          setTimeout(resolve, 1000);
        });
      })
    )
    .then(resolve)
    .then(reject);

  return {
    promise,
    cancel: () => {
      cancelled = true;
      reject({ reason: "cancelled" });
    },
  };
}

const { promise, cancel } = updateUser();

setTimeout(() => {
  cancel();
}, 1500);
```

Example 2: `AbortController` to cancel promise.

```js
function updateUser(abortController) {
  let resolve, reject, cancelled;

  const promise = new Promise((resolveFromPromise, rejectFromPromise) => {
    resolve = resolveFromPromise;
    reject = rejectFromPromise;
  });

  abortController.signal.addEventListener("abort", () => {
    cancelled = true;
    reject({ reason: "cancelled" });
  });

  function wrapWithCancel(fn) {
    return (data) => {
      if (!cancelled) {
        return fn(data);
      }
    };
  }

  Promise.resolve()
    .then(
      wrapWithCancel(() => {
        return new Promise((resolve) => {
          console.log("task 1");
          setTimeout(resolve, 1000);
        });
      })
    )
    .then(
      wrapWithCancel(() => {
        return new Promise((resolve) => {
          console.log("task 2");
          setTimeout(resolve, 1000);
        });
      })
    )
    .then(
      wrapWithCancel(() => {
        return new Promise((resolve) => {
          console.log("task 3");
          setTimeout(resolve, 1000);
        });
      })
    )
    .then(resolve)
    .then(reject);

  return promise;
}

const abortController = new AbortController();

const promise = updateUser(abortController);

setTimeout(() => {
  abortController.abort();
}, 500);
```

See: [Seva Zaikov - How to Cancel Your Promise](https://blog.bloomca.me/2017/12/04/how-to-cancel-your-promise.html)
