---
title: Publish a Trizlink release
description: Choose the platform, channel, version and severity that control when people must update Trizlink.
last_update:
  date: 2026-10-31
keywords: [Trizlink releases, publish a release, superadmin, app updates]
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Publish a Trizlink release',
      description:
        'Choose the platform, channel, version and severity that control when people must update Trizlink.',
      url: 'https://docs.trizlink.com/features/release-management',
      inLanguage: 'en',
      author: { '@type': 'Organization', name: 'The Trizlink team', url: 'https://trizlink.com' },
      dateModified: '2026-10-31',
      about: { '@type': 'SoftwareApplication', name: 'Trizlink', url: 'https://trizlink.com' },
    })}
  </script>
</Head>

*By The Trizlink team*

## How does a superadmin publish a release?

Open **Releases** under the platform admin dashboard. Select **Platform** and **Channel**, enter a **Version**
and the **Reason people will see**, then choose **Severity** and press **Publish a release**. Only a
superadmin can publish. The server checks that role before writing the record.

The form starts at **Web**, **Test** and **Normal**. Check the channel. **Production** addresses the live
channel, while **Test** addresses the test channel; a release on one platform and channel does not set the
target for another. Below the form, the last 20 published records appear newest first. Each shows its
version, platform, channel, severity, reason and publication time.

## What should I enter for the version and reason?

Use a version in `x.y.z` form, such as `2.17.0`. Write a reason that explains the update to the person who
will see the block. The reason must contain text and stay within 280 characters. **Publish a release**
remains unavailable until the required fields are valid.

For **Android**, the form also shows an optional **Minimum app version**. When set, it accepts the same
`x.y.z` format and is sent only with Android releases. The release gate compares it with the installed
native version to decide whether a new binary is required. Web has no such field.

## When does the release stop an older version?

Choose **Normal** to show a notice now and require the newer version from the next start; choose **Urgent**
to block an older running version as soon as the release is found. No later start is needed. The block shows
the reason you entered and one **Update** action. The [app update guide](./app-updates.md) explains what the
person sees.

The warning about a version not above the live build compares against the version embedded in the
dashboard's current build, even when **Android** is selected. It does not disable publication. Check the
target build yourself before you press the button.

## How do I correct a published release?

Publish another release for the same platform and channel. The list is read-only. The client reads the latest
published record, but a notice already shown for the same version is not repeated in that run. An open block
also stays put. The prior reason may remain visible until the next start, and a failed release read can keep
it longer because the device still holds the first notice.

**[Open Releases](https://trizlink.com/dashboard/admin/releases)**
