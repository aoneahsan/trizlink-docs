import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { usePluginData } from '@docusaurus/useGlobalData';

import type { DiscoveryFeedData } from '../plugins/discoveryFeed';

/**
 * `/feed` — the readable twin of `/feed.xml` (fleet sitemap/feed law; search audit SA-P05, 2026-10-30). GitHub Pages
 * answered `/feed` with the XML file itself, so there was no page a person could read. Same items, same order, from
 * the one plugin that writes the XML, so the two can never disagree.
 */
export default function FeedPage(): ReactNode {
  const { items } = usePluginData('discovery-feed') as DiscoveryFeedData;
  return (
    <Layout title="Feed" description="Every Trizlink documentation page, newest change first. Also as RSS at /feed.xml.">
      <main className="container margin-vert--lg">
        <h1>Feed</h1>
        <p>
          Every documentation page, newest change first. Subscribe with <Link href="/feed.xml">/feed.xml</Link>.
        </p>
        <ol>
          {items.map((item) => (
            <li key={item.permalink} className="margin-bottom--md">
              <Link to={item.permalink}><strong>{item.title}</strong></Link>
              {' · '}
              <span>{item.category}</span>
              {' · '}
              <time dateTime={item.updatedAt}>{item.updatedAt.slice(0, 10)}</time>
              <div>{item.description}</div>
            </li>
          ))}
        </ol>
      </main>
    </Layout>
  );
}
