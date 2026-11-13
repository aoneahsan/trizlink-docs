---
title: Verifying a licence
description: "How to check whether a deployment of Trizlink is licensed, by its licence key or by its domain, and what each answer from the licensing service means."
sidebar_label: Verify a licence
sidebar_position: 5
last_update:
  date: 2026-11-13
keywords: [verify trizlink licence, white label licence check, well-known licence file]
---

Anyone can check a licence on the [verify page](https://trizlink.com/verify-license). Verification is run by
our licensing service, from its own records.

## By key

Paste the key from the certificate. The answer is one of:

| Answer | Meaning |
|---|---|
| Valid licence | Issued and active. The page shows who it was issued to, its domains, its groups and when its updates end. |
| Issued, not set up yet | The licence exists; its deployment is still being set up. |
| Revoked | It no longer covers any domain. |
| No licence with this key | Nothing matches. Keys are never shortened or changed after issue. |
| Not the shape of a licence key | The text pasted is not a whole key. |

No answer includes an email address, a phone number or a price.

## By domain

Give the host, such as `links.example.com`. The licensing service fetches
`https://<host>/.well-known/trizlink-white-label-license.json` over HTTPS and checks the key the file names.

| Answer | Meaning |
|---|---|
| Licensed for this domain | The file names a licence that covers this host. |
| The licence names a different domain | A file is there, but its licence does not cover this host. |
| The file names no valid licence | A file is there, and its key matches nothing. |
| No licence file at this domain | Nothing at that path. |
| The domain did not answer | The file could not be fetched; that says nothing about the licence itself. |
