export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = (config.public.baseUrl || 'https://wsoft.space').replace(/\/$/, '');

  try {
    const blogs = await $fetch('/api/getBlogs').catch(() => []);
    const blogUrls = Array.isArray(blogs) ? blogs : [];

    const encodeSlug = (slug: string) =>
      encodeURIComponent(slug)
        .replace(/%20/g, '-')
        .replace(/%3A/g, '-')
        .replace(/[^\w\-~.!*()]/g, '-');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${baseUrl}/about-us</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/our-works</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- ✅ /blogs → /newsroom -->
  <url>
    <loc>${baseUrl}/newsroom</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/contact-us</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Posts -->
  ${blogUrls.map(blog => {
    if (!blog.slug) return '';
    const blogUrl = `${baseUrl}/newsroom/${encodeSlug(blog.slug)}`;
    const lastMod = new Date(blog.updated_at || blog.published_at || new Date()).toISOString();
    const imageUrl = blog.banner_url || `${baseUrl}/images/blogs/blog-placeholder.png`;

    return `
  <url>
    <loc>${blogUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    ${blog.title ? `<image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title><![CDATA[${blog.title}]]></image:title>
      ${blog.excerpt ? `<image:caption><![CDATA[${blog.excerpt.substring(0, 200)}]]></image:caption>` : ''}
    </image:image>` : ''}
  </url>`;
  }).join('')}

</urlset>`;

    setHeader(event, 'Content-Type', 'text/xml');
    return sitemap;

  } catch (error) {
    console.error('Error generating sitemap:', error);
    setHeader(event, 'Content-Type', 'text/xml');
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/newsroom</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
  }
});