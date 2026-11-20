---
title: "Trizlink Calendar Feeds"
description: "Subscribe Google Calendar, Outlook or Apple Calendar to a Trizlink workspace's scheduled posts and link expiries, read only."
slug: /developers/calendar-feeds
sidebar_position: 6
keywords: [trizlink api, trizlink mcp, trizlink webhooks, access key]
---

# Calendar feeds

**Your scheduled social posts and link expiry dates, in the calendar you already use.** Make one under
**Settings → Other apps → Calendar feed**, copy its address and subscribe from Google Calendar (**From URL**),
Outlook (**Subscribe from web**) or Apple Calendar (**New Calendar Subscription**).

The address carries its own `tz_cal_` token, which only reads that feed: treat it like a key. **Remove** stops it
at once.
