---
title: Create your account
description: Sign in to Trizlink with your Google account, meet the workspace created for you, and learn how deletion, the 30-day window and the rebuild data reset work before you start.
sidebar_position: 1
keywords:
  - trizlink sign in
  - google sign in
  - create trizlink account
  - trizlink workspace
  - account deletion
---

Creating a Trizlink account means signing in with Google. There is no registration form, no password to
choose and no confirmation email, because Google is the only identity provider Trizlink accepts. The first
time you sign in, the database creates your profile and one workspace to hold your links, bio pages and
analytics, and drops you on the dashboard.

## On this page

- [What you need](#what-you-need)
- [How signing in works](#how-it-works)
- [The workspace you start with](#your-first-workspace)
- [Where your settings live](#settings)
- [Deleting your account](#deletion)
- [If you used Trizlink before](#the-reset)
- [FAQ](#faq)

## What you need {#what-you-need}

A Google account, personal or Workspace, and a browser. The
[Android app](https://play.google.com/store/apps/details?id=com.trizlink.app) is optional. That is the whole
list — the Free plan costs nothing and asks for no card.

## How signing in works {#how-it-works}

1. Open [trizlink.com](https://trizlink.com) and choose **Sign in**.
2. Press **Continue with Google** and pick the account you want to use.
3. Approve the consent screen. Trizlink receives your name, email address and avatar, and uses them to build
   your profile.
4. You land on the dashboard with a workspace already created.

On Android the same button opens your **system browser** rather than a view inside the app, and returns
through a `trizlink://` link when Google is done. That is deliberate: you should be typing a Google password
into a window Google controls, never into one an app draws.

Two paths you might expect are not there. `/reset-password` and `/email-verification` both redirect
permanently to the sign-in page, because there is no password to reset and no address to verify — Google
already did both.

If you open the sign-in page while already signed in, it says so and offers the dashboard instead of showing
you a form inviting you to do it again.

## The workspace you start with {#your-first-workspace}

A workspace is the tenant that owns things. Links, bio pages, domains, pixels and click rows all belong to
one, and a role inside it decides what a member may do.

Your first one is created by the database the moment your account exists. It is called **My Workspace** and
described as *"My personal workspace for managing links and bio pages."* Rename it, or create more, from
**Dashboard → Workspaces** at `/dashboard/workspaces`. Each workspace has its own settings, member list and —
on the Team plan — audit log, at `/dashboard/workspaces/<id>/settings`, `/members` and `/audit`.

Create a second workspace **before** you start adding links if you manage more than one brand or client.
Moving links between workspaces later is more work than starting in the right place.

## Where your settings live {#settings}

`/dashboard/settings` holds seven sections: Profile, Public profile, Account, Notifications, Security,
Preferences and AI. Two more sit beside them — `/dashboard/settings/plans` for your plan, and
`/dashboard/settings/danger` for the irreversible things.

## Deleting your account {#deletion}

Deletion is requested at **Settings → Danger zone** and is **scheduled, not immediate**. You get a **30-day**
window in which the request can be cancelled and nothing has been removed. The page shows you what deletion
will actually take before you confirm it, counted from your own data rather than described in general terms.

The product also publishes a deletion request path at
[trizlink.com/data-deletion](https://trizlink.com/data-deletion), and the full legal text is in the
[privacy policy](https://trizlink.com/privacy-policy). What is stored and why is summarised in
[Privacy and data](../about/privacy-and-data.md).

One thing worth reading before you decide it does not apply to you: the paid-plan terms reserve the right to
use content created on a **free** account to improve product features. Content on a paid plan is not used
that way without your consent. That is a reservation rather than a description of something running today,
and any change to it appears in the privacy policy first.

## If you used Trizlink before {#the-reset}

Trizlink was rebuilt on a new database. Links, bio pages, analytics history and settings from earlier
versions did not carry over, and signing in creates a fresh account rather than restoring an old one.

That includes short links you had already shared, which no longer resolve — anything printed on a card or
encoded into a QR code among them. The old codes were not carried over either, so unless somebody else has
taken one since, the address is free: create the link again, ask for the same code, and what is printed works
again.

## FAQ {#faq}

### Can I sign up with an email address and password instead?

No. Google is the only provider. The password-reset and email-verification routes redirect to the sign-in
page because neither has anything to do.

### Does creating an account cost anything?

No. The Free plan is $0 and asks for no card. Pro at $6 a month and Team at $18 a month are the paid plans,
and you can stay on Free indefinitely.

### What does Trizlink receive from Google?

Your name, email address and avatar, taken from the sign-in profile. That is what builds your account.

### Can I have more than one workspace?

Yes. You start with one and can create more from `/dashboard/workspaces`. The Free plan allows 5, Pro 25 and
Team 100.

### Who can see my links?

Only members of the workspace that owns them, and only at the role you gave them. Row-level security in the
database enforces that, so a query issued by another account returns nothing rather than the wrong rows.

### What happens during the 30 days after I request deletion?

Nothing is removed and you can cancel. The request simply sits scheduled until the window closes.

### Do I need the Android app?

No. It is the same product in a native shell; everything works in a browser.

## Next step

[Quick start](./quick-start.md) — your first short link, its QR code, a bio page and your first analytics
read.
