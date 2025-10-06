export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl || 'https://wsoft-v2.vercel.app';
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Allow all major crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Disallow admin areas
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /dashboard/

# Allow CSS and JS for proper rendering
Allow: /*.css$
Allow: /*.js$`;

  event.node.res.setHeader('content-type', 'text/plain');
  event.node.res.end(robotsTxt);
});