---
title: Custom domains
description: Add a domain you own to Trizlink and prove it with three DNS records. Verification works today; serving short links on a verified domain is not live yet.
sidebar_position: 5
keywords: [custom domain, branded short link, dns verification, cname record, txt record, domain ownership]
---

A custom domain is a host you own, registered with Trizlink so that short links can eventually be issued and
served on it instead of `trizlink.com`. You add the host, publish three DNS records, and Trizlink verifies
them by looking them up over DNS-over-HTTPS.

Read the next section before you plan anything around this feature.

## On this page

- [What is not live yet](#not-live)
- [Adding a domain](#adding)
- [The three DNS records](#records)
- [Verification and its four statuses](#verification)
- [Per-domain settings](#settings)
- [Limits](#limits)
- [FAQ](#faq)

## What is not live yet {#not-live}

**Adding a domain and verifying that you own it work today. Serving traffic on a verified domain does not.**

A verified domain is recorded, its records are confirmed and the product shows it as yours — and requests
arriving at it are not yet answered by Trizlink. Serving begins when `trizlink.com` completes its move onto
the edge that terminates customer hostnames. The app says the same thing on the domains page itself:
*"Verified — serving starts at cutover."* A domain's certificate status stays **pending** until then.

Nothing you set up now needs to change when serving switches on. But do not point a domain you depend on at
Trizlink expecting links to resolve on it, and do not put a branded address on printed material yet.

Everything below describes what verification actually does. Where it describes serving behaviour, it is
describing what a verified domain will do, not what it does today, and says so.

## Adding a domain {#adding}

Go to **Dashboard → Domains** at `/dashboard/domains` and add the host.

Two refusals surprise people, so they are worth stating up front:

- **An apex domain is refused.** The host needs three labels or more — `links.example.com`, not
  `example.com`. The reason is DNS rather than policy: the required record is a `CNAME`, and an apex cannot
  carry one alongside the `SOA` and `NS` records it must have.
- **A host can belong to one workspace, globally.** Hosts are unique across the whole product, so a domain
  already registered elsewhere cannot be added again.

Hosts are stored lowercase, and anything containing a scheme or a path is rejected before it is saved.

## The three DNS records {#records}

Trizlink derives the records from your host and a token it generates. They are never stored as text you could
edit, which is what keeps the page you read and the lookup that verifies you from ever asking for different
things.

| Type | Name | Value | Required |
|---|---|---|---|
| `CNAME` | `links.example.com` | `edge.trizlink.com` | Yes |
| `TXT` | `_trizlink.links.example.com` | `trizlink-site-verification=<32 hex characters>` | Yes |
| `CNAME` | `www.links.example.com` | `edge.trizlink.com` | No |

TTL 3600, which is one hour.

- The first record points the address at our edge. A `CNAME` to a **name** rather than an `A` record to an
  address is deliberate — an address can change, a name does not.
- The `TXT` record proves the domain is yours. You can remove it once the domain is verified.
- The `www` record is optional and only matters if somebody types the `www` form. Demanding it would fail
  every customer who never wanted one.

Add them in whichever panel manages DNS for that domain, and leave everything else alone.

## Verification and its four statuses {#verification}

Press **Check DNS now**. Trizlink resolves the three names over DNS-over-HTTPS and stores what it saw for
each one separately, so the panel can tick individual records instead of reducing three answers to one word.

| Status | Meaning |
|---|---|
| `pending` | Added, never checked |
| `verifying` | A lookup is running |
| `failed` | The last lookup could not see a required record. The panel names which one |
| `verified` | Every required record was found |

A failed first check is normal. DNS takes time to spread, and the panel says so rather than implying you did
something wrong. The optional `www` record being absent never causes a failure.

Verification results are written by the verifier alone. No browser can set a domain's status, because a
browser that could write `verified` would be a browser that can claim anybody's domain.

## Per-domain settings {#settings}

Each domain carries its own settings, applying to requests arriving on that address only. They take effect
when serving is live.

| Setting | Effect |
|---|---|
| Redirect `http` to `https` | Anybody typing the address without a scheme lands on the secure one. Available once the certificate is issued |
| Send `www` to the bare host | Both forms work and only one is canonical. Available once the domain verifies |
| Count clicks arriving here | Off means the redirect still works and records nothing, which is what some legal teams ask for |
| Primary | New links are created on this domain unless you choose otherwise. A domain has to verify first |

Exactly one domain per workspace can be primary.

## Limits {#limits}

- Domains: **1** on Free, **5** on Pro, **25** on Team.
- **The allowance is counted per account across every workspace you own**, not per workspace. Adding a
  second workspace does not give you a second domain.
- The database enforces that count as well as the page, so the limit holds regardless of what a browser
  sends.
- Trizlink does not host your DNS, register domains, or issue records on your behalf. You publish the three
  records at your own provider.
- Bio pages live on `trizlink.com`. A domain's settings include a bio slug field for when serving is live;
  until then bio pages are unaffected by anything on this page.

## FAQ {#faq}

### Can I use my custom domain for short links right now?

No. You can add it and verify it. Serving is not live yet, and a verified domain does not answer requests
until it is.

### Why was my apex domain rejected?

Because the setup needs a `CNAME`, and an apex domain cannot carry one. Use a subdomain such as
`links.example.com` or `go.example.com`.

### How long does verification take?

The lookup is immediate. The DNS records themselves usually spread within a few minutes and can take longer
depending on your provider and the TTL you had set previously.

### It says a record is missing but I added it. What now?

Check the value matches exactly, including the `trizlink-site-verification=` prefix on the `TXT` record and
the absence of a trailing dot mismatch on the `CNAME`. Then check again — the panel counts your attempts and
names the specific record it could not see.

### Can I delete the TXT record after verifying?

Yes. It only proves ownership once.

### Can two workspaces share one domain?

No. A host maps to one workspace across the entire product.

### Does a custom domain cost extra?

The allowance is part of your plan: 1 on Free, 5 on Pro, 25 on Team. Buying and renewing the domain itself is
between you and your registrar.

## Related

- [Short links](./short-links.md)
- [Analytics](./analytics.md)
- [Workspaces and teams](./workspaces-and-teams.md)
- [Bio pages](./link-in-bio.md)
