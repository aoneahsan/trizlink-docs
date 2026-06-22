---
title: Workspaces and Teams
description: Separate links, bios, and analytics into independent TrizLink workspaces, invite team members with admin, editor, or viewer roles, and group them into teams.
sidebar_position: 8
keywords: [workspaces, team members, roles, admin editor viewer, invite team, link sharing, multi-tenant links, team collaboration]
---

A workspace in TrizLink is an independent silo that holds its own links, bio pages, and analytics, separate from every other workspace you belong to. Switching the active workspace switches the entire set of links and bios you see, so different clients, brands, or projects never mix. On top of that, you can invite team members, assign them roles, and group them into teams — all managed at `/dashboard/workspaces`. TrizLink is free to use with Google sign-in.

## What you can do

You can keep separate bodies of work apart by giving each one its own workspace; all links and bios belong to the active workspace, and analytics are scoped to it. You can invite people to a workspace, assign each one a role — admin, editor, or viewer — and organize members into teams within that workspace. Invitations are sent as links and accepted through an invite URL, so collaborators join without manual account setup on your side.

## Use cases

- **Run an agency.** Give each client its own workspace so their links, bios, and analytics stay isolated and you can hand off access cleanly.
- **Separate brands.** Keep two product brands in distinct workspaces so reports and bio pages never bleed into one another.
- **Bring in a collaborator with limited access.** Invite a contractor as a viewer so they can see links and analytics without changing anything.
- **Delegate day-to-day work.** Add an editor who can create and manage links while admins keep control of workspace settings and membership.
- **Structure a larger group.** Group members into teams within a workspace so responsibilities are clear as the number of collaborators grows.

## How it works

1. Open `/dashboard/workspaces` to view and manage your workspaces, including settings, members, and teams.
2. Choose which workspace is active; the links, bios, and analytics you see all belong to that active workspace.
3. Create or select the workspace for a given client, brand, or project so its work stays in its own silo.
4. Invite a team member, choosing their role — admin, editor, or viewer — to set what they can do.
5. The invited person opens the invite link at `/invite/:token` to accept and join the workspace.
6. Optionally group members into teams within the workspace to keep larger groups organized.

## Tips

- Create a separate workspace per client or brand from the start; moving work between silos later is more effort than setting them up cleanly.
- Reserve the admin role for people who should manage settings and membership, not just create links.
- Use the viewer role for stakeholders who need to see analytics but should not edit links or bios.
- Confirm you are in the intended active workspace before creating links, since new links belong to whichever workspace is active.
- Send invite links only to people you intend to grant access to, and assign the lowest role that still lets them do their job.
- Use teams to mirror your real structure — for example a content team and a paid-media team — so responsibilities stay legible.

## FAQ

### What exactly does a workspace separate?

A workspace separates links, bios, and analytics into an independent silo. All links and bios belong to the active workspace, and analytics are scoped to it, so two workspaces never share or mix their data.

### What roles can I assign to team members?

You can assign admin, editor, or viewer. Admins manage the workspace including settings and membership, editors work with links and bios, and viewers have read access — useful for stakeholders who only need to see results.

### How does someone accept an invitation?

You invite a member from the workspace, and they accept by opening the invite link at `/invite/:token`. Following that URL joins them to the workspace with the role you assigned.

### What is the difference between a workspace and a team?

A workspace is the top-level silo that owns links, bios, and analytics. A team is a grouping of members inside a workspace, used to organize people — it does not create a separate set of links or analytics.

### Can one link belong to two workspaces?

No. Each link belongs to the workspace that was active when it was created. To work with a different set of links, switch the active workspace at `/dashboard/workspaces`.

### Can I change a member's role later?

Yes. Membership and roles are managed at `/dashboard/workspaces`, so an admin can adjust who has admin, editor, or viewer access as responsibilities change.

### Does using workspaces and teams cost anything?

No. TrizLink is free to use; workspaces, member invitations, roles, and teams are part of the platform once you sign in with Google.

## Related

- [Link in bio](/features/link-in-bio)
- [Analytics](/features/analytics)
- [Link organization](/features/link-organization)
- [Sharing](/features/sharing)
