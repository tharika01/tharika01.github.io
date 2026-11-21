// Public site token from Cloudflare Web Analytics → Manage site.
// Confirm this token is registered for tharikavsrinivasa.dev before deployment.
const SITE_TOKEN = 'e1c24a348f9d4826a6b2420e4e29e386';
const PRODUCTION_HOSTS = new Set(['tharikavsrinivasa.dev', 'www.tharikavsrinivasa.dev']);

/** Load one beacon, only for production builds on the portfolio domain. */
export function initializeAnalytics(): void {
  if (!import.meta.env.PROD || !PRODUCTION_HOSTS.has(window.location.hostname)) return;
  if (document.querySelector('script[data-cf-beacon]')) return;

  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  // This is one page: scrolling between sections must not inflate page views.
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: SITE_TOKEN, spa: false }));
  script.onerror = () => console.warn('[analytics] Cloudflare beacon did not load; the site remains usable.');
  document.body.appendChild(script);
}
