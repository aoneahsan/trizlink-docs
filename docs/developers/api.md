---
title: "The Trizlink API"
description: "Trizlink's REST API: the base address, the OpenAPI 3.1 file, its resources, workspace scoping and cursor pagination."
slug: /developers/api-reference
sidebar_position: 3
keywords: [trizlink api, trizlink mcp, trizlink webhooks, access key]
---

# The Trizlink API

**One REST API per workspace, described in full by an OpenAPI file built from the code it runs.**

```text
https://api.trizlink.com/v1
```

```bash
curl -H "Authorization: Bearer $TRIZLINK_KEY" "https://api.trizlink.com/v1/links?limit=5"
```

The reference is at [`/v1/openapi.json`](https://api.trizlink.com/v1/openapi.json), with a Markdown copy at
`/v1/openapi.md`.

## Resources

| Resource | Can |
|---|---|
| `links`, `bio_pages`, `bio_blocks`, `labels`, `folders`, `collections`, `social_posts` | list, get, and with the scopes create, update, delete |
| `domains` | list, get |
| `clicks`, `bio_views` | list, get |
| `members`, `invitations`, `workspace` | list, get |
| `post_schedule`, `link_expiry`, `calendar` | list, get |

A key reaches only its own workspace. A link created through the API counts towards your plan exactly like one
made in the app.

## Pagination

20 rows a page, 50 at most; send `meta.next_cursor` back as `cursor`. Errors and limits are on
[Access keys](./authentication.md#rate-limits-and-errors).
