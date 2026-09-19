# IPTVBR SEO audit

Audit completed on 19 September 2026 against the production build.

## Passed checks

- 84 rendered/indexable pages checked.
- Unique, valid titles and meta descriptions.
- Canonical URLs present and valid.
- Exactly one H1 per page.
- Open Graph and Twitter sharing metadata.
- Images include alt attributes.
- JSON-LD is valid on rendered pages.
- Internal links resolve to known routes.
- Indexable canonical URLs exist in the sitemap.
- robots.txt advertises the production sitemap.
- Preview deployments are protected with `noindex, nofollow`.
- TypeScript, ESLint, production build and Vercel contract checks pass.
- HTTP smoke tests cover the homepage, trust pages, robots.txt and sitemap.xml.

## Commands

```bash
npm run build
npm run verify:seo
npm run verify:vercel
npm run test:e2e
npm run lint
npm run typecheck
```

## Deployment note

A perfect Lighthouse score cannot be guaranteed before testing the deployed production URL because hosting latency, network conditions, third-party services and runtime configuration affect the result. After deployment, run PageSpeed Insights on the live homepage and key commercial pages, submit `https://iptvbr.pt/sitemap.xml` in Google Search Console, and set `GOOGLE_SITE_VERIFICATION` in Vercel.
