---
title: "Trizlink for developers"
description: "Use Trizlink from a script, an AI assistant, another app or your calendar: one API, one assistant connection, signed webhooks and two-step sign-in, per workspace, on every plan."
slug: /developers
sidebar_position: 1
keywords: [trizlink api, trizlink mcp, trizlink webhooks, access key]
---

# Trizlink for developers

**Your links, bio pages and posts can be worked on from outside Trizlink.** A script can create short links in
bulk, Claude can tell you which links got clicks this week, and your server can hear the moment a link is clicked.
It works on every plan, Free included, and every door reaches one workspace only.

## Which one do you need?

| You want | Use |
|---|---|
| A script or app of yours to read or change a workspace | An [access key](./authentication.md) and the [API](./api.md) |
| Claude, ChatGPT, Claude Code or Cursor to work with a workspace | The [MCP connection](./mcp.md) |
| Your server told when something happens | [Webhooks](./webhooks.md) |
| Scheduled posts and link expiries in your calendar | A [calendar feed](./calendar-feed.md) |
| Your account protected while any of this is on | [Two-step sign-in](./two-step-sign-in.md) |

## Who may change what

Everything belongs to a **workspace**. Its **owners and admins** may give a key or an assistant *Read*, *Change*
and *Delete*. Every other **member** can only give *Read*. The rule is checked when the key is made and again on
every call, so a member whose role changes loses writes at once, and someone who leaves loses everything.

## Limits

| Limit | Free | Pro | Team |
|---|---|---|---|
| Access keys | 5 | 25 | 50 |
| API requests a day | 5,000 | 50,000 | 100,000 |
| Webhook addresses | 3 | 20 | 40 |
| Assistant connections | 3 | 10 | 25 |
| Calendar feeds | 2 | 10 | 20 |

Every key may also send 120 requests a minute. Webhook addresses count against the workspace owner's plan.
