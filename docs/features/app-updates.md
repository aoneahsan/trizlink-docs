---
title: Update Trizlink when a release is ready
description: Understand a normal release notice, an urgent update block and what the Update action means.
last_update:
  date: 2026-11-02
keywords: [Trizlink updates, release notice, urgent release, update block]
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Update Trizlink when a release is ready',
      description:
        'Understand a normal release notice, an urgent update block and what the Update action means.',
      url: 'https://docs.trizlink.com/features/app-updates',
      inLanguage: 'en',
      author: { '@type': 'Organization', name: 'The Trizlink team', url: 'https://trizlink.com' },
      dateModified: '2026-11-02',
      about: { '@type': 'SoftwareApplication', name: 'Trizlink', url: 'https://trizlink.com' },
    })}
  </script>
</Head>

*By The Trizlink team*

## What happens when Trizlink has an update?

A normal release shows a notice and blocks an older version from the next start. An urgent release blocks
immediately, with the published reason and one **Update** action. The release has a version, a platform and a
channel; Trizlink compares the newest relevant release with the version you are running. If your version has
already reached it, the gate stays out of your way and a stored notice is cleared.

That comparison matters.

## What happens after a normal release notice?

The notice tells you a newer version is available. You can choose the notice's update action now or close it
and continue this run. Choosing the action opens the update block already in its updating state. Closing the
notice leaves the release pending: start Trizlink again while still on the older version, and the block
appears with the reason the release publisher supplied.

The notice comes first. The block holds until your running version reaches the published version;
then the stored notice clears.

## What happens with an urgent release?

An urgent release blocks an older running version as soon as the client finds it. The block shows the
published reason and gives you one **Update** action. There is no later choice on that screen: the release
publisher has marked the older version for immediate replacement, and the block stays until your running
version reaches the published one.

The reason should tell you why. It comes from the release record, so the block does not invent an explanation
for the interruption.

## How does Update work on the web?

**Update** checks the service worker for a new build. If a worker is waiting or installing, Trizlink asks it
to take over and reloads when control changes. If control does not change, a fallback reload runs after
8 seconds. If no worker is ready, the page reloads directly.

If the attempt throws, the block says “The update didn’t finish. Reload to try again.” Press **Reload** to
try again.

A failed release-record read does not create a new block. A normal release already announced on this device
can still block from a later start until the stored version is reached.

**Update the app** when the notice or block offers the action. If you're a superadmin publishing releases,
see [release management](./release-management.md).
