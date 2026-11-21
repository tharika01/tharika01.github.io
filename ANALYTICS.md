# Portfolio analytics and search

## Cloudflare Web Analytics

The site uses Cloudflare's module beacon, initialized from `src/analytics.ts`.
The public token is the one provided in the setup conversation. Before deploying,
check **Web Analytics → tharikavsrinivasa.dev → Manage site** and confirm it is
that site's token. If it belongs to another site, add `tharikavsrinivasa.dev` as
its own site and replace `SITE_TOKEN` with its snippet's token. No GA4 setup or
GitHub analytics variable is needed.

Use **manual JS snippet installation** for this integration. If Cloudflare is
already automatically injecting the beacon, turn off automatic injection and
choose manual installation; don't install two copies. This applies to GitHub
Pages behind Cloudflare too; it is not a Cloudflare Pages project.

Tracking runs only in production builds on `tharikavsrinivasa.dev` or
`www.tharikavsrinivasa.dev`. Development, localhost, and preview hostnames are
excluded. SPA tracking is disabled because this is a one-page portfolio;
section navigation should not become extra page views. Revisit this when adding
real routes. There is no custom click tracking or session recording.

After deploying, visit the public domain and open browser DevTools → Network.
Look for a single `beacon.min.js` script and requests to
`cloudflareinsights.com/cdn-cgi/rum`. Ad blockers may prevent collection.
In Cloudflare → **Web Analytics**, select this site and a suitable date range;
allow a few minutes for traffic to appear. Review visits, page views, countries,
referrers, devices, and performance. Country data is not precise visitor location.
Visits are not an exact count of unique people.

Cloudflare does not show section visibility, scroll depth, click heatmaps,
email clicks, or résumé download conversions. About, Work, and Contact are
sections of the same URL, not independent pages in these reports. Add a separate
interaction analytics tool only if that detail is needed.

## SEO and Search Console

Included: descriptive title, description, canonical URL, Open Graph/Twitter
preview metadata, a 1200×630 social card, favicon, ProfilePage/Person JSON-LD,
`robots.txt`, and a sitemap containing the single public homepage. The inactive
blog and section fragments are intentionally absent from the sitemap.

After deployment:

1. Check `https://tharikavsrinivasa.dev/robots.txt`,
   `https://tharikavsrinivasa.dev/sitemap.xml`, and
   `https://tharikavsrinivasa.dev/social-card.png`.
2. At https://search.google.com/search-console add a **Domain property** for
   `tharikavsrinivasa.dev`. Follow its DNS verification flow in Cloudflare.
   Cloudflare registration alone does not verify ownership in Search Console.
3. Submit `https://tharikavsrinivasa.dev/sitemap.xml` under **Sitemaps**.
4. Use **URL inspection** for the homepage, test the live URL, inspect its rendered
   content, and request indexing. The app remains client-rendered; this change
   adds metadata but does not prerender the React content.
5. Review **Performance** for search queries, impressions, clicks, and positions
   once data accumulates. Sitemap submission does not guarantee indexing or rank.

Link the portfolio from LinkedIn and the GitHub profile. Publish useful work
write-ups and link related posts and projects naturally. An article's canonical
should be its preferred article URL (or an equivalent original copy), never an
unrelated portfolio homepage. Revisit per-article SEO when the blog launches.

The social card can be regenerated with `python3 scripts/generate-social-card.py`
on macOS with Pillow installed; the script uses system Arial/Georgia fonts.

References:
- https://developers.cloudflare.com/web-analytics/get-started/
- https://developers.cloudflare.com/web-analytics/get-started/web-analytics-spa/
- https://developers.cloudflare.com/web-analytics/data-metrics/dimensions/
- https://developers.cloudflare.com/web-analytics/data-metrics/high-level-metrics/
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
