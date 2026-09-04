---
title: Workspaces and teams
description: A Trizlink workspace is the tenant that owns links, bio pages and analytics. Four roles and seven capabilities on every plan; teams and the audit log on Team.
sidebar_position: 8
keywords: [workspace, workspace roles, team members, permissions matrix, invite member, audit log, multi tenant]
---

A workspace is the tenant that owns things in Trizlink. Links, bio pages, domains, pixels, widgets and every
click row belong to exactly one, and a member's role inside it decides what they may do. Switching workspace
switches everything you see, so a client's work and a client's numbers never mix with anybody else's.

## On this page

- [What a workspace owns](#what-it-owns)
- [Four roles, seven capabilities](#roles)
- [Inviting people](#inviting)
- [Teams](#teams)
- [The audit log](#audit)
- [Limits](#limits)
- [FAQ](#faq)

## What a workspace owns {#what-it-owns}

Everything scoped to work rather than to you personally: short links, bio pages, folders, labels,
collections, custom domains, tracking pixels, UTM templates, webhooks, widgets, social connections and the
click and view rows behind the analytics.

Your account owns the workspaces. A first one, **My Workspace**, is created when you sign in for the first
time; manage the rest at `/dashboard/workspaces`.

Separation is enforced in the database rather than in the interface. Row-level security means a query issued
for the wrong workspace returns nothing, not the wrong rows — so a bug in a screen cannot show you somebody
else's links.

## Four roles, seven capabilities {#roles}

The roles are a ladder, strongest first.

| Role | What it is |
|---|---|
| **Owner** | Everything, including deleting the workspace and handing it to someone else |
| **Admin** | Everything except deleting the workspace or changing who owns it |
| **Member** | Creates and edits links and bio pages. Cannot change people or settings |
| **Viewer** | Reads links and analytics. Changes nothing |

Underneath, seven capabilities are what the server actually checks:

| Capability | Meaning |
|---|---|
| `canCreateLinks` | Create links and bio pages |
| `canEditLinks` | Edit links anyone here made |
| `canDeleteLinks` | Delete links |
| `canViewAnalytics` | See analytics |
| `canManageTeam` | Invite, remove and change roles |
| `canManageSettings` | Change workspace settings |
| `canManageBilling` | Change the plan |

Two things follow from that list, and both are deliberate:

- **Bio pages are governed by the link capabilities.** There is no separate bio permission, because a bio
  page is workspace content like anything else. Adding one would put a row on the permissions matrix for a
  distinction the product does not make.
- **Organising is editing.** Folders, labels and collections ride `canEditLinks` rather than
  `canManageSettings`, so a contributor can file their own work instead of asking an admin for a folder.

The browser holds a copy of this table to draw the matrix and disable controls, and **the browser is not the
enforcement**. Every write is re-checked server-side against the workspace's own capability table. Asking the
browser what a role may do would be asking it to widen its own permissions.

Roles are available on **every plan**, Free included.

## Inviting people {#inviting}

From `/dashboard/workspaces/<id>/members`, invite by email and choose the role. The invitation is a link the
recipient opens at `/invite/<token>` and accepts; they need a Google account, because that is how everybody
signs in.

Give the lowest role that lets someone do their job. A stakeholder who wants to see numbers is a viewer, and
a viewer genuinely cannot change anything — the refusal is in the database, not in a hidden button.

## Teams {#teams}

A team is a named group of members *inside* a workspace. It does not own links, does not have its own
analytics and does not create a second silo — it exists so responsibilities stay legible when a workspace has
more people than you can hold in your head.

**Teams are part of the Team plan.** So is the audit log. The plan's own line for this is *"Roles, teams
and an audit log"* — roles are on every plan; the teams and the log are what Team adds.

## The audit log {#audit}

`/dashboard/workspaces/<id>/audit` records who was added to what and when: every membership change, team
change and settings change, as it happens.

It is worth understanding how it refuses, because there are two different refusals and they mean different
things:

- **By role.** If your role cannot change settings, you are told you are not permitted. You are not shown an
  upsell, because the answer to "may I read this" is not "buy something".
- **By plan.** If your role would allow it but the workspace is not on Team, you get the locked card
  explaining what the log adds to the People page you already have.

The server asks both questions again, with a distinct message for each, so a stale entitlement in the browser
still lands on the right sentence.

Three properties of the log itself:

- **It is append-only.** Update and delete are refused for every role, so the page offers neither. An edit
  control that always fails is worse than none, because it implies the rest of the row is negotiable.
- **The actor comes from the session on the server**, never from the request. A client cannot claim to be
  somebody else.
- **There is no export**, and that is a decision rather than a gap. The log is a reading surface for the
  people in the workspace; a CSV of who-joined-when leaving the product is a promise this page does not make.

## Limits {#limits}

| | Free | Pro | Team |
|---|---|---|---|
| Workspaces | 5 | 25 | 100 |
| Members | 30 | 100 | 500 |
| Roles | Yes | Yes | Yes |
| Teams and the audit log | — | — | Yes |

- A link belongs to one workspace and cannot be moved to another. Decide the structure before you create four
  hundred links.
- Only the owner can delete a workspace or transfer it.
- Deleting a workspace removes its content. The owner's own membership row goes with it, never on its own.

## FAQ {#faq}

### What roles exist?

Owner, admin, member and viewer. There is no "editor" — the role that creates and edits links is called
member.

### Do I need a paid plan to work with other people?

No. Members, roles and invitations are on every plan, including Free, which allows 30 members. Teams and the audit log are the
Team-plan additions.

### What is the difference between a workspace and a team?

A workspace owns links, bio pages and analytics. A team is a grouping of people inside one workspace. A team
owns nothing.

### Can a link belong to two workspaces?

No. It belongs to the workspace it was created in. Check which workspace is active before you start creating.

### Can I change somebody's role later?

Yes, from the workspace's members page, if your own role includes `canManageTeam`.

### Why can a viewer not see the audit log?

Because reading who changed what is a settings-level question. A viewer is told they are not permitted rather
than being shown an upgrade prompt, since the plan is not what is stopping them.

### Can I export the audit log?

No, by decision. It is a reading surface inside the workspace.

## Related

- [Bio pages](./link-in-bio.md)
- [Analytics](./analytics.md)
- [Link organisation](./link-organization.md)
- [Custom domains](./custom-domains.md)
