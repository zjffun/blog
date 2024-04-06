---
title: Uploaded Video Broken
date: 2024-04-06 15:10:34 +08:00
tags:
  - Frontend
  - Video
---

Sometimes, we may meet the uploaded video is broken. And when we check the video with FFmpeg, we may see the error message `moov atom not found`.

> You might encounter the issue if the file is not fully uploaded because this atom might be at the file's end.

This may happen when user recording the video and upload the video when paused, not stopped. The video file is not complete.

See:

- [Moov Atom Not Found? Fix It in 6 Ways [2024 Guide] - EaseUS](https://www.easeus.com/data-recovery-solution/moov-atom-not-found.html)
