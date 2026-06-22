---
title: API Access
description: Generate TrizLink API keys to programmatically create, edit, and delete links and fetch analytics over RESTful endpoints, with live interactive docs in-app.
sidebar_position: 12
keywords: [trizlink api, api keys, rest api, link management api, analytics api, api documentation, programmatic links, rotate api key]
---

The TrizLink API is a RESTful interface that lets you create, edit, and delete links and fetch analytics programmatically using an API key you generate in your dashboard. Instead of clicking through the web app for every change, you can drive TrizLink from your own scripts, backend services, or automation tools. You manage keys from the dashboard, authenticate your requests with them, and rely on the in-app interactive documentation as the authoritative, always-current reference for endpoints and parameters.

## What you can do

You can generate one or more API keys at `/dashboard/api-keys`, then use them to programmatically manage your links — creating new short links, updating existing ones, and removing links you no longer need — as well as retrieving analytics data for reporting. Because the interface is RESTful, it fits naturally into most languages and HTTP clients. The interactive API documentation lives in-app at `/dashboard/api/docs`, where you can explore the live endpoints and their exact request and response shapes.

## Use cases

- A developer integrates TrizLink into an internal tool so that publishing content also creates a tracked short link automatically.
- A marketing team generates campaign links in bulk from a spreadsheet or script instead of creating each one by hand.
- An analytics pipeline pulls click and traffic data on a schedule to combine TrizLink metrics with other reporting sources.
- A product automatically cleans up expired or unused links by deleting them through the API.
- An agency syncs link edits — such as updating a destination URL — across many campaigns from a single automation.

## How it works

1. Sign in to TrizLink and open the API keys page at `/dashboard/api-keys`.
2. Generate a new API key and copy it immediately, storing it somewhere secure such as a secrets manager or environment variable.
3. Open the in-app interactive docs at `/dashboard/api/docs` to see the available endpoints, methods, and parameters.
4. Send authenticated HTTP requests from your code or HTTP client, including your API key as the request's credential.
5. Use the responses to create, update, delete links, or read analytics within your own workflow.
6. Revoke or rotate keys from the same `/dashboard/api-keys` page whenever a key is no longer needed or may be exposed.

## Tips

- Always reference the in-app API docs at `/dashboard/api/docs` for exact endpoint paths and parameters — that is the live, authoritative source of truth.
- Store API keys in environment variables or a secrets manager, never hardcoded in committed source code.
- Create separate keys for separate integrations so you can revoke one without breaking the others.
- Rotate keys periodically and immediately revoke any key you suspect has leaked.
- Handle errors and rate responses gracefully in your code so a transient failure does not break your automation.

## FAQ

### Where do I generate an API key?

Go to `/dashboard/api-keys` in your TrizLink dashboard. From there you can create new keys and manage existing ones.

### What can the API do?

It lets you programmatically create, edit, and delete links and fetch analytics over RESTful endpoints. The full, current capability set is documented in the in-app API docs.

### Where is the endpoint reference?

The authoritative, interactive endpoint documentation is in-app at `/dashboard/api/docs`. It stays in sync with the live API, so always check it rather than relying on copied examples.

### How do I keep my keys secure?

Keep keys secret, store them outside your codebase, and revoke or rotate them from `/dashboard/api-keys` if they may have been exposed. Use a distinct key per integration.

### Can I revoke a key without losing my links?

Yes. Revoking a key only disables that credential. Your links, analytics, and account remain intact, and you can generate a replacement key right away.

### Is the API free to use?

TrizLink is a free link-management platform, and API access is part of it. Use the in-app docs to understand any limits that apply to your account.

### What format are requests and responses?

The API is RESTful and uses standard HTTP. The exact request bodies and response structures for each endpoint are shown in the in-app interactive documentation.

## Related

- [Short links](/features/short-links)
- [Analytics](/features/analytics)
- [Tracking and UTM](/features/tracking-and-utm)
- [AI features (bring your own key)](/features/ai-features-byok)
