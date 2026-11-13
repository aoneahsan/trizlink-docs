---
title: From payment to a running deployment
description: "What happens after a Trizlink white-label payment, in order: the licence email and certificate, the setup of domain and branding, and the deployment with its licence file."
sidebar_label: Setup
sidebar_position: 3
last_update:
  date: 2026-11-13
keywords: [white label setup, trizlink deployment, custom domain white label]
---

The checkout opens on the payment page in the same tab. Nothing is issued by that redirect, and nothing by the
thank-you page after it: the licence is issued when the payment provider confirms the payment to our licensing
service.

1. **The licence email.** It carries the licence key and the certificate as a PDF, and goes to the address used at
   checkout. The thank-you page shows the order's status once; it does not need to stay open.
2. **Domain and branding.** The Trizlink team writes to collect the domain, the name, the logo and the colours.
   The buyer points the domain's DNS at the deployment; we issue its certificate.
3. **The deployment.** We build and deploy it under the buyer's name. It serves its licence file at
   `/.well-known/trizlink-white-label-license.json`, with the certificate beside it, so anyone can
   [verify it](/white-label/verify-a-licence).
4. **Android, when licensed.** We build the app under the buyer's name and icon for upload from the buyer's
   Google Play account.

## The check inside a deployment

Every white-label build carries its licence key and checks it with the licensing service once when it starts and
once each time it comes back into view, never on a timer. If the licence is revoked or does not cover the domain,
the app shows a screen saying so and deletes nothing. If the licensing service cannot be reached, the deployment
keeps working and asks again next time.
