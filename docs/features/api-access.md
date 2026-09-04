---
title: Public API
description: Eighteen REST endpoints at api.trizlink.com/v1 for links, bio pages, analytics, domains, webhooks and social posts, with per-resource scopes and separate destructive permissions.
sidebar_position: 12
keywords: [trizlink api, rest api, api key, api scopes, rate limits, openapi, link management api]
---

The Trizlink public API is eighteen REST endpoints at `https://api.trizlink.com/v1` covering links, bio pages,
analytics, domains, webhooks and social posts. You mint a workspace-scoped key, tick the scopes it needs, and
call it from anything that speaks HTTP. It is available on **Pro and Team**.

## On this page

- [The endpoints](#endpoints)
- [Scopes, and the permissions that are not scopes](#scopes)
- [Two addresses, one API](#two-addresses)
- [Keys](#keys)
- [Errors](#errors)
- [Conventions](#conventions)
- [Rate limits and allowances](#limits)
- [FAQ](#faq)

## The endpoints {#endpoints}

| Method | Path | Scope |
|---|---|---|
| `GET` | `/v1/links` | `links:read` |
| `POST` | `/v1/links` | `links:write` |
| `GET` | `/v1/links/{id}` | `links:read` |
| `PATCH` | `/v1/links/{id}` | `links:write` |
| `DELETE` | `/v1/links/{id}` | `links:write` **plus** `links:delete` |
| `GET` | `/v1/links/{id}/clicks` | `analytics:read` |
| `GET` | `/v1/bio-pages` | `bio:read` |
| `POST` | `/v1/bio-pages` | `bio:write` |
| `GET` | `/v1/bio-pages/{id}` | `bio:read` |
| `PATCH` | `/v1/bio-pages/{id}` | `bio:write` |
| `DELETE` | `/v1/bio-pages/{id}` | `bio:write` **plus** `bio:delete` |
| `GET` | `/v1/analytics/overview` | `analytics:read` |
| `GET` | `/v1/analytics/breakdown` | `analytics:read` |
| `GET` | `/v1/domains` | `domains:read` |
| `POST` | `/v1/webhooks` | `webhooks:write` |
| `DELETE` | `/v1/webhooks/{id}` | `webhooks:write` |
| `POST` | `/v1/social/posts` | `social:write` |
| `GET` | `/v1/token` | **none** |

The reference inside the product at `/dashboard/api/docs` renders from the same table the router validates
against, and `/v1/openapi.json` is generated from it too. There is no hand-maintained specification to drift.

## Scopes, and the permissions that are not scopes {#scopes}

Eight scopes, read and write per resource:

```text
links:read   links:write
bio:read     bio:write
analytics:read
domains:read
webhooks:write
social:write
```

**A scope you did not tick answers `404`, not `403`.** A 403 confirms the thing exists, which turns an
id-guessing loop into a way of finding out what a workspace holds.

Three **permissions** sit on a separate list, and none of them is implied by a write scope:

```text
links:delete   bio:delete   workspace:purge
```

Deleting a link needs `links:write` **and** `links:delete`. That separation is the point: a key that
automates creating campaign links has every reason to hold `links:write` and no reason at all to be able to
erase them. Grant a destructive permission only to the key that genuinely needs it.

A missing permission is the one case that answers **403** rather than 404, and the difference is not
inconsistency. The key already holds the scope, so it has already proved it may see the resource — refusing
loudly gives away nothing it did not know, and tells the integrator precisely what to add.

**`GET /v1/token` deliberately requires no scope.** It answers what the key is and what it may do, which is
what a client needs before it can do anything else — a key that cannot ask about itself makes every
integration start by guessing.

## Two addresses, one API {#two-addresses}

`api.trizlink.com` is the documented address. The underlying Supabase functions address **still answers and
is not deprecated** — the friendly host is a small edge worker that rewrites the host and prefix onto the same
function, and the two were proved byte-identical against a control.

If you wrote an integration against either address, it keeps working. That is a promise, not an accident of
the current deployment. New integrations should use `https://api.trizlink.com/v1` because it is the address
the documentation, the OpenAPI document and the key cards all print.

## Keys {#keys}

Mint keys at `/dashboard/api-keys`. A key looks like `tz_live_` followed by four visible characters and then
the secret.

- **The full key is shown once, at creation.** Only a hash is stored, and no client role can read that column
  at all. If you lose it, rotate rather than recover — there is nothing to recover.
- What the interface can show afterwards is the prefix, the last four characters, the scopes and the dates.
- A key is **live** or **revoked**. Expired is derived from its expiry date rather than stored, because a
  stored copy needs something to write it and the day that job is missed a dead key reads as live.
- A revoked key carries the moment it stopped working, and its reason is either `manual` or `rotated` —
  "rotated" tells the reader a replacement exists, and "revoked" tells them it does not.
- Revoking a key disables that credential and nothing else. Links, analytics and the workspace are untouched.

Use one key per integration, so revoking one does not break the others.

## Errors {#errors}

Eight codes, each with a fixed status. There is no ninth.

| Code | Status |
|---|---|
| `invalid_request` | 400 |
| `invalid_key` | 401 |
| `insufficient_permission` | 403 |
| `not_found` | 404 |
| `conflict` | 409 |
| `limit_reached` | **422** |
| `rate_limited` | **429** |
| `server_error` | 500 |

`limit_reached` is a plan allowance, so retrying will not help until something changes. `rate_limited` is a
speed problem, so backing off will.

If the platform's API switch is turned off, every key gets a `503` with a body saying so — deliberate, not a
fault. That is there so an integrator does not go looking through their own logs for a bug that is not theirs.

## Conventions {#conventions}

- **Pagination**: list endpoints default to **20** items and cap at **50**.
- **Times** are ISO-8601 with a zone.
- **Ids** are UUIDs.
- **`PATCH` is partial** — send only what changes.
- **The version is in the path**, and additions are additive: new fields may appear, existing ones do not
  change meaning.

## Rate limits and allowances {#limits}

Rates are derived from the workspace owner's plan and never stored on the key.

| | Per minute | Per hour | Per day | Live keys |
|---|---|---|---|---|
| Free | — | — | — | **0** |
| Pro | 120 | 5,000 | 50,000 | 5 |
| Team | 300 | 20,000 | 250,000 | 20 |

**Free has no API access at all**, which is a real state rather than a hidden one: there is no key to mint.

## FAQ {#faq}

### Is the API available on the Free plan?

No. Pro and Team only, and the key allowance on Free is zero.

### Why does a request for something I did not authorise return 404 rather than 403?

Because a 403 tells you the resource exists. Answering 404 means a key cannot be used to map what a workspace
holds.

### I have `links:write`. Why can I not delete a link?

Because deletion needs `links:delete` as well, and a write scope never implies it. Add the permission to the
key deliberately, or use a different key for destructive work.

### Do I have to move to `api.trizlink.com`?

No. The functions address still answers and is not deprecated. Use the friendly host for new work because it
is what everything documents.

### Can I recover a key I lost?

No. Only a hash is stored. Rotate the key and update the integration.

### What is the difference between 422 and 429?

`limit_reached` (422) means a plan allowance was hit and retrying changes nothing. `rate_limited` (429) means
you are going too fast and backing off will work.

### Where is the machine-readable specification?

`/v1/openapi.json`, generated from the same table the router enforces.

## Related

- [Short links](./short-links.md)
- [Analytics](./analytics.md)
- [Tracking and UTM](./tracking-and-utm.md)
- [Workspaces and teams](./workspaces-and-teams.md)
