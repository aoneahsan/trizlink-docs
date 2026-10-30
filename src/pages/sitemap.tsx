import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { usePluginData } from '@docusaurus/useGlobalData';

import type { DiscoveryFeedData } from '../plugins/discoveryFeed';

/**
 * `/sitemap` — the readable twin of `/sitemap.xml` (search audit SA-P05, 2026-10-30): every documentation page,
 * grouped by section. Built from the same plugin data as `/feed`, so a page that exists is listed in both.
 */
export default function SitemapPage(): ReactNode {
  const { items } = usePluginData('discovery-feed') as DiscoveryFeedData;
  const sections = [...new Set(items.map((item) => item.category))].sort();
  return (
    <Layout title="Sitemap" description="Every page of the Trizlink documentation, by section. Also as XML at /sitemap.xml.">
      <main className="container margin-vert--lg">
        <h1>Sitemap</h1>
        <p>
          Every page of this documentation, by section. Search engines read <Link href="/sitemap.xml">/sitemap.xml</Link>.
        </p>
        {sections.map((section) => (
          <section key={section} className="margin-bottom--lg">
            <h2>{section}</h2>
            <ul>
              {items
                .filter((item) => item.category === section)
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((item) => (
                  <li key={item.permalink}>
                    <Link to={item.permalink}>{item.title}</Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </main>
    </Layout>
  );
}
