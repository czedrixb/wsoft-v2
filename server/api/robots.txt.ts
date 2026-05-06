export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const baseUrl = (config.public.baseUrl || 'https://wsoft.space').replace(/\/$/, '');

  setHeader(event, 'Content-Type', 'text/plain');

  return `# robots.txt for ${baseUrl}
User-agent: *
Allow: /
# ✅ Removed broken "Disallow: /api/ (except...)" — comments can't go inline
Disallow: /search
Disallow: /admin/
Disallow: /dashboard/
Disallow: /private/
Allow: /api/sitemap.xml
Allow: /api/robots.txt
Allow: *.css$
Allow: *.js$
Allow: *.png$
Allow: *.jpg$
Allow: *.jpeg$
Allow: *.gif$
Allow: *.webp$
Allow: *.svg$

User-agent: Yeti
Crawl-delay: 1
Allow: /newsroom/
Allow: /services/
Allow: /our-works/

User-agent: Yeti-Image
Crawl-delay: 1

User-agent: Googlebot
Crawl-delay: 0.5

User-agent: Bingbot
Crawl-delay: 1

User-agent: Slurp
Crawl-delay: 1

User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: ClaudeBot
Disallow: /

Sitemap: ${baseUrl}/api/sitemap.xml
Host: ${baseUrl.replace(/^https?:\/\//, '')}`;
});