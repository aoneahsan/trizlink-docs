---
title: Social Media
description: Connect Facebook, X, LinkedIn, Instagram, TikTok, and Threads to TrizLink, then compose, schedule, and track posts from one content calendar hub.
sidebar_position: 9
keywords: [social media scheduling, connect social accounts, schedule posts, content calendar, social media hub, oauth social, compose posts, track posts]
---

The social media feature in TrizLink is a convenience layer for composing, scheduling, and tracking posts to your own connected social accounts from one place. You connect accounts on supported networks via OAuth, then write posts, schedule them, view them on a content calendar, and track what you've published — all from the hub at `/dashboard/social`. Supported networks are Facebook, Twitter/X, LinkedIn, Instagram, TikTok, and Threads. TrizLink is free to use with Google sign-in.

## What you can do

You can connect your accounts on Facebook, Twitter/X, LinkedIn, Instagram, TikTok, and Threads through OAuth, then compose posts and schedule them for later. A content calendar gives you a single view of what's planned and published, and post tracking lets you keep tabs on what you've sent out. Because it works through your own connected accounts, it acts as a convenience layer over the social profiles you already own.

## Use cases

- **Plan a week of content in one sitting.** Compose several posts and schedule them across your connected networks instead of posting one at a time.
- **Keep a publishing overview.** Use the content calendar to see what's scheduled and avoid gaps or pile-ups in your posting.
- **Cross-post an announcement.** Share the same update to multiple connected accounts from a single compose flow.
- **Track what went out.** Review your posts in the hub to confirm scheduled items published and keep a record of recent activity.
- **Centralize a multi-network presence.** Manage accounts across six networks from `/dashboard/social` rather than logging into each platform separately.

## How it works

1. Open the social hub at `/dashboard/social`, which organizes posts, creation, the calendar, and accounts.
2. Go to the accounts area and connect a social account via OAuth — Facebook, Twitter/X, LinkedIn, Instagram, TikTok, or Threads.
3. Authorize TrizLink through the network's OAuth flow so it can post on your behalf within the permissions that network grants.
4. Compose a post in the create view, choosing the connected account or accounts it should go to.
5. Schedule the post for a chosen time, or review it on the content calendar alongside everything else planned.
6. Use the posts view to track what has published and keep an eye on recent activity.

## Tips

- Connect each account once and confirm the OAuth authorization succeeded before relying on scheduling for that network.
- Use the content calendar to spot empty days or clusters so your cadence stays even.
- Tailor copy per network where it matters — what reads well on LinkedIn may not fit X — even when cross-posting.
- Schedule posts a little ahead of time so you have room to adjust the calendar without last-minute rushing.
- Re-authorize a connection if a network's permissions change or a token expires, since posting depends on the account's current permissions.
- Keep your TrizLink short links handy to include in posts so you can track clicks alongside your publishing.

## FAQ

### Which social networks can I connect?

You can connect Facebook, Twitter/X, LinkedIn, Instagram, TikTok, and Threads. Each is connected through OAuth from the accounts area of the social hub at `/dashboard/social`.

### Do I need to give TrizLink access to my accounts?

Yes. You connect each account via OAuth and authorize TrizLink to act on your behalf. Posting then operates within whatever permissions that network grants for your account.

### Is this a separate social network?

No. The social media feature is a convenience layer over your own connected accounts. It composes, schedules, and tracks posts to the profiles you already own — it does not host content itself.

### What does the content calendar show?

The content calendar gives you one view of your posts so you can see what's scheduled and published across your connected accounts, making it easier to plan a consistent cadence.

### Why might a scheduled post not publish?

Posting depends on the connected account's permissions. If a network revokes access, a token expires, or the account lacks the needed permission, publishing can be affected. Re-authorizing the connection usually resolves it.

### Can I track how my posts performed?

You can track your posts within the hub to confirm what published and review recent activity. For click tracking on links you share, pair posts with TrizLink short links and check their analytics.

### Does the social media feature cost anything?

No. TrizLink is free to use; connecting accounts, composing, scheduling, the calendar, and post tracking are all part of the platform once you sign in with Google.

## Related

- [Link in bio](/features/link-in-bio)
- [Sharing](/features/sharing)
- [Analytics](/features/analytics)
- [Widgets](/features/widgets)
