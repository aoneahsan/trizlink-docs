# Search-console fix log — trizlink-docs

Fixed path in every repo (`aoneahsan-cccs-search-issue-remediation`). Newest first. Not published: excluded in
`docusaurus.config.ts`. The audit session retests with the commands under **Retest**.

## trizlink-docs#1 — AEO structured data gaps · 2026-11-27 · commit: see `git log -- docs/search-consoles/fix-log.md`

Status: live-verified, google-pending (commit `37bb45e`, gh-pages `edb4227`, IndexNow 200): FAQPage on both FAQ pages in the
raw HTML; `/guides/faq` → 301 `/guides/faq/`; 0 unslashed sitemap URLs. `yarn build` (zero warnings) ends with `yarn seo:contract`
(`src/plugins/seo-contract.mts`), which failed on a planted noindex on `/guides/faq/`, then passed. Rendered
`/guides/faq/` at 1440.

| Box | SA | What was wrong (evidence) | Root fix (file) | Contract | Live proof |
|---|---|---|---|---|---|
| AEO · FAQ without FAQPage | P30 | `/guides/faq` (34 questions, `###` under `##` topics) and `/white-label/faq` (8 questions at `##`) had no FAQPage | `src/plugins/faq-schema.ts` reads every question heading (the level per page, ending in `?`) and its answer off the BUILT page and writes FAQPage into its head (from clearhire-docs, made level-aware) | build fails if a FAQ page yields no question; JSON-LD must parse | see Retest |
| found · slashed URLs 404 | P26 | `trailingSlash: false`; `/guides/faq/` → 404 on 2026-11-27 | `docusaurus.config.ts` `trailingSlash: true`; the blog-index lastmod and ignore patterns accept the slashed form | fails on any `x.html` page, unslashed canonical or sitemap URL | see Retest |

### Pending

| Box | Why not done | Who | Next action |
|---|---|---|---|
| Rich Results validation | console | daily audit / owner | Rich Results Test on both FAQ pages |

### Retest

```bash
H=https://docs.trizlink.com
for p in /guides/faq /guides/faq/ /white-label/faq/; do printf '%s %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "$H$p")"; done
curl -s "$H/guides/faq/" | grep -c '"@type":"FAQPage"'; curl -s "$H/white-label/faq/" | grep -c '"@type":"FAQPage"'
curl -s "$H/sitemap.xml" | grep -oE '<loc>[^<]*</loc>' | grep -vc '/</loc>'   # 0
```
