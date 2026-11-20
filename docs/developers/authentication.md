---
title: "Trizlink Access Keys: Scopes, Roles and Limits"
description: "Make a workspace access key in Trizlink, choose what it may read, change or delete, see it again within ten minutes of signing in, and stay inside the rate limits."
slug: /developers/access-keys
sidebar_position: 2
keywords: [trizlink api, trizlink mcp, trizlink webhooks, access key]
---

# Access keys

**An access key lets your script use one Trizlink workspace as you.** It starts `tz_pat_` and goes in the
`Authorization: Bearer` header.

## How do you make one?

1. **Settings → Other apps**, then pick the workspace.
2. **Make a key**, named after where it will live.
3. Tick what it may do. *Read* is ticked; *Change* and *Delete* are offered to owners and admins only, and start
   unticked.
4. Choose 30, 90 or 365 days. A key that can only read may also never expire.
5. Copy it. Trizlink shows it in full this once.

## Can you see a key again?

Within **ten minutes of signing in**. After that Trizlink asks you to sign in again, and with two-step on, for a
code; then it takes you back to the same key.

## Scopes

| Scope | Covers |
|---|---|
| `links:read` · `links:write` · `links:delete` | Short links |
| `bio:read` · `bio:write` · `bio:delete` | Bio pages and their blocks |
| `organise:read` · `organise:write` · `organise:delete` | Labels, folders and collections |
| `social:read` · `social:write` · `social:delete` | Social posts and their schedule |
| `domains:read` | Custom domains and their state |
| `analytics:read` | Clicks and bio page views |
| `members:read` | The workspace, its members and invitations |
| `calendar:read` | Scheduled posts and link expiries together |

## Replace and remove

**Replace** gives a new key and keeps the old one working for 24 hours. **Remove** stops it at once.

## Rate limits and errors

120 requests a minute per key, plus the account's daily total from its plan. `RateLimit-*` headers say where you
stand; past a limit you get `429` with `Retry-After`. Every error has one shape:

```json
{ "error": { "code": "scope_required", "message": "This credential needs the links:delete permission.", "details": { "scope": "links:delete" }, "correlation_id": "req_…" } }
```

A Trizlink rule, such as your plan's link limit, answers `409 conflict` with the rule in `message`.
