export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl || 'https://wsoft.space';
  
  try {
    // Fetch all blogs from your API
    const blogs = await $fetch('/api/getBlogs').catch(() => []);
    
    // If blogs is not an array or empty, handle gracefully
    const blogUrls = Array.isArray(blogs) ? blogs : [];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Static Pages -->
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
  
  <url>
    <loc>${baseUrl}/blogs</loc>
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
    const blogUrl = `${baseUrl}/blogs/${encodeURIComponent(blog.slug)}`;
    const lastMod = blog.updated_at || blog.published_at || new Date().toISOString();
    const imageUrl = blog.banner_url || `${baseUrl}/images/blogs/blog-placeholder.png`;
    
    return `
  <url>
    <loc>${blogUrl}</loc>
    <lastmod>${new Date(lastMod).toISOString()}</lastmod>
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

    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(sitemap);
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback to basic sitemap if blog fetch fails
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blogs</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
    
    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(fallbackSitemap);
  }
});