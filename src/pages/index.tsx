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
    title: 'Short links',
    body: 'A slug you choose, a QR code, an expiry date, a password, UTM values in the address. The redirect resolves at the edge, and every visit is recorded — the refused ones included.',
  },
  {
    title: 'Bio pages',
    body: 'One page at trizlink.com/your-slug, built from blocks. Reorder them by dragging or with the arrow buttons — a drag-only editor cannot be used by keyboard at all.',
  },
  {
    title: 'Click analytics',
    body: 'One append-only row per visit: country, device, browser, referrer host, and whether it was refused. The database writes the totals from those rows. No caller can set one, including you. Real click counts are best-effort everywhere — bots, prefetching and privacy blockers all distort them.',
  },
  {
    /* 🔴 AMENDED AT PUBLISH, 2026-09-05. The approved slot read "Four error-correction
       levels, and nothing else to set", which was written BEFORE the QR download shipped
       earlier the same day. Left as approved it would have put this landing page at odds
       with its own feature page, which now documents the download — the third instance of
       one pattern this week, and the one TASK-033 exists for. A truth correction, in the
       same class as removing `yet` from the band heading. */
    title: 'QR codes',
    body: 'Every short link has one, drawn from the link rather than stored. Download it as PNG or SVG; four error-correction levels, and nothing else to set — a printed code cannot be changed, which is why suspending a workspace never stops its short links resolving.',
  },
  {
    title: 'Workspaces and teams',
    body: 'Links, bio pages and analytics are scoped to a workspace: 5 on Free, 25 on Pro, 100 on Team. Every plan has roles. Owner, admin, member, viewer. Teams and the workspace audit log need the Team plan.',
  },
  {
    title: 'AI, and your own key',
    body: 'Three suggestion panels, one a read of the numbers already on screen. Metered at 50 a month on Free. Your own OpenAI or Anthropic key takes the meter off on every plan, Free included, because a request you pay for costs us nothing.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        {/* Slot 5 — the lede. It qualifies the tagline above it in the next breath, which is
            the whole reason it sits here rather than below the cards. */}
        <p className={styles.heroLede}>
          A shortener you already have. What Trizlink adds is the bio page and the scheduled posts
          sitting in the same workspace, so the clicks land in one report instead of three — though
          publishing itself is built and not switched on yet. These 23 pages say how each part works,
          and 15 carry a section on what that part cannot do.
        </p>
        <div className={styles.buttons}>
          {/* 🔴 `Read the docs` takes the primary position — it is the content map's CTA. The old
              secondary button asked "What is Trizlink?", which the fingerprint's ban on the
              rhetorical opener rules out and which a reader on the docs site has already answered
              by arriving. The old primary promised "5 min" while quick-start.md says "about five
              minutes"; rather than pick a number, the button names the page. */}
          <Link className="button button--primary button--lg" to="/intro">
            Read the docs
          </Link>
          <Link className="button button--secondary button--lg" to="/getting-started/quick-start">
            Quick start
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

/**
 * Slot 8 — the limit band.
 *
 * 🔴 THE HEADING IS "What is not switched on", NOT "…yet". `D-CUSTOM-DOMAINS-DEFERRED`
 * made `yet` false for one of these three: serving from a custom domain is a declined
 * spend decision, not a queue position, and `yet` told a reader all three were coming.
 * The per-item wording carries the timeline where a timeline exists, which is more
 * honest than a heading flattening three different states into one word.
 */
function LimitBand(): ReactNode {
  return (
    <section className={styles.limitBand}>
      <div className="container">
        <h2 className={styles.limitTitle}>What is not switched on</h2>
        <p className={styles.limitBody}>
          Three things are further along in the code than in your hands. There is no browser
          extension. It is deferred until web and Android are finished, and it is not cancelled.
          Social publishing is built and switched off, because a wrong post under somebody&apos;s
          name cannot be taken back. And custom domains verify but do not serve — you can add a
          host and prove you own it today; requests arriving there go nowhere.
        </p>
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
      title="Short links, bio pages, click analytics, API"
      description="How Trizlink works, from the code: short links, bio pages, QR codes, click analytics that store no visitor IP address, and what is not switched on."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LimitBand />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
