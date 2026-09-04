import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Branded short links',
    body: 'Turn long URLs into short, shareable links with optional custom aliases, passwords, and expiry dates. Every link gets a QR code and live click stats.',
  },
  {
    title: 'Bio pages',
    body: 'Build one page for all your links from fifteen block types and three layouts. Publish it to a slug like trizlink.com/yourname, which shares an address space with your short links.',
  },
  {
    title: 'Click analytics',
    body: 'See clicks over time plus a breakdown by country, referrer, device and browser, per link and across a whole workspace. No visitor IP is ever stored, and click counts are best-effort everywhere, ours included.',
  },
  {
    title: 'QR codes',
    body: 'Every short link has a QR code, derived from the link rather than stored, with four error-correction levels. Scans are counted separately from ordinary clicks.',
  },
  {
    title: 'Workspaces & teams',
    body: 'Keep links, bio pages and analytics separate per workspace. Four fixed roles: owner, admin, member and viewer. Teams and the audit log are on the Team plan.'
  },
  {
    title: 'Bring-your-own-key AI',
    body: 'AI drafts a bio tagline, a social post and an analytics summary. It is metered on the Free plan; adding your own OpenAI or Anthropic key removes that limit on every plan, including Free.'
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/getting-started/quick-start">
            Quick Start — 5 min
          </Link>
          <Link className="button button--secondary button--lg" to="/intro">
            What is Trizlink?
          </Link>
          <Link className="button button--outline button--lg" href="https://trizlink.com">
            Open Trizlink
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div key={f.title} className="col col--4" style={{ marginBottom: '1.5rem' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href="https://www.npmjs.com/~aoneahsan">npm</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      /* 🔴 NO `siteConfig.title` HERE. Docusaurus's `useTitleFormatter` already appends
         ` | ${siteTitle}`, so including it produced `Trizlink Docs — … | Trizlink Docs` —
         the brand twice, 76 chars, pushing the unique words past the ~60-char truncation.
         Measured live 2026-09-05. Verify in `build/`, never here. */
      title="Short links, bio pages, QR codes & analytics"
      description="Documentation for Trizlink: branded short links, bio pages, QR codes, click analytics, workspaces and a public API. Sign in with Google."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
