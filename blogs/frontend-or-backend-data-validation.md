---
title: Frontend or backend data validation
date: 2024-03-03 11:30:16 +08:00
tags:
  - Frontend
  - Backend
  - Validation
---

We often need to determine where to validate data, whether it's on the frontend or backend. In my opinion, it's best to validate on both sides. Frontend validation is for user experience, while backend validation is for security and data integrity.

But here are some traps to avoid:

- `Date` on the frontend is relay on the user's system time. We can't trust it and using it with backend returned time. For example, if we calculate duration between backend returned start time and now using `Date.now() - backendReturnedStartTime`, it may be wrong if user's system time is not correct.
