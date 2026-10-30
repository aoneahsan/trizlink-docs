import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { LoadedContent } from '@docusaurus/plugin-content-docs';
import type { AllContent, LoadContext, Plugin } from '@docusaurus/types';

type FeedItem = {
  title: string;
  description: string;
  permalink: string;
  updatedAt: Date;
  /** The section a page lives in, from its first path segment (search audit SA-P05, 2026-10-30). */
  category: string;
};

/** What the readable `/feed` and `/sitemap` pages receive (`usePluginData('discovery-feed')`). */
export type DiscoveryFeedData = {
  items: { title: string; description: string; permalink: string; updatedAt: string; category: string }[];
};

/** Section names as the sidebar shows them. A page outside these folders is "Overview". */
const CATEGORY: Record<string, string> = {
  'getting-started': 'Getting started',
  features: 'Features',
  guides: 'Guides',
  about: 'About',
};

function categoryOf(permalink: string): string {
  const first = permalink.split('/').filter(Boolean)[0] ?? '';
  return CATEGORY[first] ?? 'Overview';
}

type DiscoveryFeedOptions = {
  description: string;
};

export default function discoveryFeed(
  _context: LoadContext,
  rawOptions: unknown,
): Plugin {
  const options = discoveryFeedOptions(rawOptions);
  let items: FeedItem[] = [];
  return {
    name: 'discovery-feed',
    allContentLoaded({ allContent, actions }) {
      items = docsFeedItems(allContent);
      if (items.length === 0) {
        throw new Error('discovery-feed: no dated documentation pages were found');
      }
      const data: DiscoveryFeedData = {
        items: items.map((item) => ({ ...item, updatedAt: item.updatedAt.toISOString() })),
      };
      actions.setGlobalData(data);
    },
    async postBuild({ outDir, siteConfig }) {
      const siteUrl = new URL(siteConfig.baseUrl, siteConfig.url).toString();
      await writeFile(
        join(outDir, 'feed.xml'),
        renderFeed(items, {
          title: siteConfig.title,
          description: options.description,
          siteUrl,
        }),
        'utf8',
      );
    },
  };
}

function discoveryFeedOptions(value: unknown): DiscoveryFeedOptions {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('description' in value) ||
    typeof value.description !== 'string' ||
    value.description.trim() === ''
  ) {
    throw new Error('discovery-feed: description must be a non-empty string');
  }
  return { description: value.description };
}

function docsFeedItems(allContent: AllContent): FeedItem[] {
  const instances = allContent['docusaurus-plugin-content-docs'] ?? {};
  const items = Object.values(instances).flatMap((raw) => {
    const content = raw as LoadedContent;
    const versions = content.loadedVersions.filter((version) => version.isLast);
    return versions.flatMap((version) =>
      version.docs.flatMap((doc) => {
        if (doc.draft || doc.unlisted) return [];
        const frontMatter = doc.frontMatter as {
          last_update?: { date?: Date | string };
        };
        const updatedAt = parseDate(frontMatter.last_update?.date ?? doc.lastUpdatedAt);
        return updatedAt
          ? [{
              title: doc.title,
              description: doc.description,
              permalink: doc.permalink,
              updatedAt,
              category: categoryOf(doc.permalink),
            }]
          : [];
      }),
    );
  });
  return items.sort(
    (left, right) =>
      right.updatedAt.getTime() - left.updatedAt.getTime() ||
      left.permalink.localeCompare(right.permalink),
  );
}

function renderFeed(
  items: FeedItem[],
  site: { title: string; description: string; siteUrl: string },
): string {
  const newest = items[0];
  if (!newest) throw new Error('discovery-feed: refusing to render an empty feed');
  const entries = items
    .map((item) => {
      const permalink = new URL(item.permalink, site.siteUrl).toString();
      return `    <item>
      <title>${xml(item.title)}</title>
      <link>${xml(permalink)}</link>
      <guid isPermaLink="true">${xml(permalink)}</guid>
      <pubDate>${item.updatedAt.toUTCString()}</pubDate>
      <category>${xml(item.category)}</category>
      <description><![CDATA[${cdata(item.description)}]]></description>
    </item>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(site.title)}</title>
    <link>${xml(site.siteUrl)}</link>
    <description><![CDATA[${cdata(site.description)}]]></description>
    <language>en</language>
    <lastBuildDate>${newest.updatedAt.toUTCString()}</lastBuildDate>
    <atom:link href="${xml(new URL('feed.xml', site.siteUrl).toString())}" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;
}

function parseDate(value: Date | string | number | null | undefined): Date | null {
  if (value === null || value === undefined || value === '') return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function xml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function cdata(value: string): string {
  return value.replaceAll(']]>', ']]]]><![CDATA[>');
}
