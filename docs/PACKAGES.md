# Packages — trizlink-docs

**Last Updated:** 2026-11-16 (Node 26.13.1 fleet pass). Internal record: excluded from the site by `exclude` in
`docusaurus.config.ts`.

| Package | Range | Kind |
|---|---|---|
| `@docusaurus/core` | ^3.10.2 | dependencies |
| `@docusaurus/preset-classic` | ^3.10.2 | dependencies |
| `@docusaurus/theme-mermaid` | ^3.10.2 | dependencies |
| `@mdx-js/react` | ^3.1.1 | dependencies |
| `clsx` | ^2.1.1 | dependencies |
| `prism-react-renderer` | ^2.4.1 | dependencies |
| `react` | ^19.3.1 | dependencies |
| `react-dom` | ^19.3.1 | dependencies |
| `@docusaurus/module-type-aliases` | ^3.10.2 | devDependencies |
| `@docusaurus/types` | ^3.10.2 | devDependencies |
| `@types/node` | ^26.6.6 | devDependencies |
| `@types/react` | ^19.3.0 | devDependencies |
| `typescript` | ~7.0.2 | devDependencies |

## 2026-11-16 — Node 26.13.1 fleet pass

- `.nvmrc` 22 → 26.13.1; `engines.node` `>=18.0.0` → `>=26.13.1`; `@types/node` 26.6.6.
- **TypeScript 6 → 7.0.2 (major).** This site has no typescript-eslint and no Capacitor CLI, so the fleet TypeScript 7
  pin does not apply. `@docusaurus/tsconfig` set the `baseUrl` TypeScript 7 removed, so the package is gone and
  `tsconfig.json` carries its options itself, minus `baseUrl` and `ignoreDeprecations`; the relative `@site/*` path still
  resolves. A planted type error in `src/` fails `yarn typecheck`.

## Workaround — `NODE_OPTIONS=--no-experimental-webstorage` in `build`

- **Why:** on Node 26, Docusaurus 3.10's SSG renderer loads through the `eval` package, which copies every global; reading
  Node's experimental `localStorage` getter prints an `ExperimentalWarning`. The build must print zero warnings. The flag
  removes that global; the docs never use it at build time.
- **Re-check when:** Docusaurus is upgraded, or Node's web storage leaves experimental status.
- **Remove:** drop the prefix from `build`, run `yarn build`, and confirm no `ExperimentalWarning` line.
