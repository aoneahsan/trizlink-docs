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
    title: 'Link-in-bio pages',
    body: 'Build a single landing page for all your links with a drag-and-drop block editor and ready-made templates. Publish it to a custom slug like trizlink.com/yourname.',
  },
  {
    title: 'Click analytics',
    body: 'See clicks over time plus a breakdown by country, referrer, device, browser, and OS — per link and across your whole workspace. Updates in real time.',
  },
  {
    title: 'QR codes',
    body: 'Generate a QR code for any short link, customise it, and download it for print or screens. A standalone QR generator tool is included too.',
  },
  {
    title: 'Workspaces & teams',
    body: 'Keep links, bios, and analytics separate per workspace. Invite teammates with admin, editor, or viewer roles and group them into teams.',
  },
  {
    title: 'Bring-your-own-key AI',
    body: 'Add your own OpenAI or Anthropic API key to draft captions, hashtags, and bios and forecast link performance. No key, no AI — and no extra cost from us.',
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
            What is TrizLink?
          </Link>
          <Link className="button button--outline button--lg" href="https://trizlink.com">
            Open TrizLink
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
      title={`${siteConfig.title} — Short links, bio pages, QR codes & analytics`}
      description="Documentation for TrizLink: branded short links, link-in-bio pages, QR codes, click analytics, workspaces, an API, and a browser extension. Sign in with Google."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
