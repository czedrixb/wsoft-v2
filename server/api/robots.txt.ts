// server/api/robots.txt.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl || 'https://wsoft.space';
  
  const robotsTxt = `# robots.txt for ${baseUrl}
User-agent: *
Allow: /

# Crawl-delay for Korean search engines (Naver)
User-agent: Yeti
Crawl-delay: 1

User-agent: Yeti-Image
Crawl-delay: 1

# Crawl-delay for other major crawlers
User-agent: Googlebot
Crawl-delay: 0.5

User-agent: Bingbot
Crawl-delay: 1

User-agent: Slurp
Crawl-delay: 1

# Disallow search and admin areas
Disallow: /search
Disallow: /admin/
Disallow: /dashboard/
Disallow: /private/
Disallow: /api/ (except for sitemap and robots)

# Allow these paths specifically
Allow: /api/sitemap.xml
Allow: /api/robots.txt

# Allow assets for proper rendering
Allow: *.css$
Allow: *.js$
Allow: *.png$
Allow: *.jpg$
Allow: *.jpeg$
Allow: *.gif$
Allow: *.webp$
Allow: *.svg$

# Sitemaps
Sitemap: ${baseUrl}/api/sitemap.xml

# Additional sitemaps (if you have them)
# Sitemap: ${baseUrl}/api/sitemap-blogs.xml
# Sitemap: ${baseUrl}/api/sitemap-pages.xml

# Host directive (optional, helps with canonicalization)
Host: ${baseUrl.replace(/^https?:\/\//, '')}

# For Korean SEO - Naver specific
User-agent: Yeti
Allow: /blogs/
Allow: /services/
Allow: /our-works/

# Block AI scrapers (optional)
User-agent: ChatGPT-User
Disallow: /
User-agent: GPTBot
Disallow: /
User-agent: Claude-Web
Disallow: /
User-agent: ClaudeBot
Disallow: /`;

  event.node.res.setHeader('content-type', 'text/plain');
  event.node.res.end(robotsTxt);
});