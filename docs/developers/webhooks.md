---
title: "Trizlink Webhooks: Events, Signatures and Retries"
description: "Trizlink posts to your server when links, bio pages, domains and members change, signed with Standard Webhooks, retried for a day and paused only after five failing days."
slug: /developers/webhooks
sidebar_position: 5
keywords: [trizlink api, trizlink mcp, trizlink webhooks, access key]
---

# Webhooks

**Trizlink tells your server when something happens in a workspace, signed so you can check it came from us.**

## Events

| Event | Sent when |
|---|---|
| `link.created` · `link.updated` · `link.deleted` | A short link is made, changed or deleted |
| `link.clicked` | Someone clicks a short link |
| `bio.created` · `bio.updated` · `bio.viewed` | A bio page is made, changed or viewed |
| `domain.verified` | A custom domain passes verification |
| `member.invited` | Someone is invited to the workspace |
| `workspace.created` | A workspace is created |
| `webhook.test` | You press **Send a test event** |

Clicks and views are sent per click and per view. Payloads carry exactly the API's fields, never visitor hashes,
notes or password hashes.

## Addresses

`https://` only, on 443 or 8443; private, local and cloud metadata addresses are refused. Webhook addresses count
against the workspace owner's plan.

## Checking a request

[Standard Webhooks](https://www.standardwebhooks.com/): `webhook-id`, `webhook-timestamp` and `webhook-signature`
(`v1,` + base64 HMAC-SHA256). The secret starts `whsec_`.

```js
import { Webhook } from 'standardwebhooks';
const wh = new Webhook(process.env.TRIZLINK_WEBHOOK_SECRET);
const event = wh.verify(rawBody, headers); // throws on a bad signature or an old timestamp
```

## Retries

Any `2xx` is delivered. Otherwise Trizlink retries at once, then after 5 seconds, 5 minutes, 30 minutes, 2, 5, 10
and 10 hours. An address is turned off only by `410 Gone` or after 5 days of failing, with an email to you.

## Moving from the old webhooks

Addresses you added before 20 November 2026 were moved over with a **new signing secret** and arrive **paused**.
Read the new secret under **Settings → Other apps → Webhooks**, put it in your receiver, then press **Resume**.
