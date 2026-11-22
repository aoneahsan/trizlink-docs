import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { usePluginData } from '@docusaurus/useGlobalData';

import type { DiscoveryFeedData } from '../plugins/discoveryFeed';
import { BLOG_PATH } from '../data/blog';

/**
 * `/sitemap` — the readable twin of `/sitemap.xml` (search audit SA-P05, 2026-10-30): every documentation page,
 * grouped by section. Built from the same plugin data as `/feed`, so a page that exists is listed in both.
 */
export default function SitemapPage(): ReactNode {
  const { items, posts } = usePluginData('discovery-feed') as DiscoveryFeedData;
  const what = posts > 0 ? 'documentation page and blog post' : 'documentation page';
  const sections = [...new Set(items.map((item) => item.category))].sort();
  return (
    <Layout title="Sitemap" description={`Every Trizlink ${what}, by section. Also as XML at /sitemap.xml.`}>
      <main className="container margin-vert--lg">
        <h1>Sitemap</h1>
        <p>
          Every page of this documentation, by section. Search engines read <Link href="pathname:///sitemap.xml">/sitemap.xml</Link>.
        </p>
        {sections.map((section) => (
          <section key={section} className="margin-bottom--lg">
            {/* The Blog heading leads to the blog's own page, which lists every post. */}
            <h2>{section === 'Blog' ? <Link to={BLOG_PATH}>{section}</Link> : section}</h2>
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
