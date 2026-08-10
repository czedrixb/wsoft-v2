export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = (config.public.baseUrl || 'https://wsoft.space').replace(/\/$/, '');

  const encodeSlug = (slug: string) =>
    encodeURIComponent(slug)
      .replace(/%20/g, '-')
      .replace(/%3A/g, '-')
      .replace(/[^\w\-~.!*()]/g, '-');

  const escapeXml = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  try {
    const blogs = await $fetch('/api/getBlogs').catch(() => []);
    const blogItems = Array.isArray(blogs) ? blogs : [];

    const sortedBlogs = [...blogItems]
      .filter(b => b?.published_at)
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
      .slice(0, 20);

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title>W Labs Newsroom</title>
  <!-- ✅ /blogs → /newsroom -->
  <link>${baseUrl}/newsroom</link>
  <atom:link href="${baseUrl}/api/rss.xml" rel="self" type="application/rss+xml" />
  <description>Latest insights and technology articles from W Labs</description>
  <language>ko</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <ttl>60</ttl>
  <image>
    <url>${baseUrl}/images/logos/w-labs-logo.png</url>
    <title>W Labs Newsroom</title>
    <link>${baseUrl}/newsroom</link>
  </image>

  ${sortedBlogs.map(blog => {
    if (!blog.slug) return '';
    const blogUrl = `${baseUrl}/newsroom/${encodeSlug(blog.slug)}`;
    const pubDate = new Date(blog.published_at).toUTCString();
    const excerpt = blog.excerpt || (blog.content ? blog.content.replace(/<[^>]+>/g, '').substring(0, 200) + '...' : '');
    const cleanTitle = escapeXml(blog.title || 'Untitled');
    const cleanAuthor = escapeXml(blog.author?.name || 'W Soft Labs');

    return `
  <item>
    <title>${cleanTitle}</title>
    <link>${blogUrl}</link>
    <guid isPermaLink="true">${blogUrl}</guid>
    <description><![CDATA[${excerpt}]]></description>
    <pubDate>${pubDate}</pubDate>
    <author>${cleanAuthor}</author>
    ${blog.category?.name ? `<category>${escapeXml(blog.category.name)}</category>` : ''}
    ${blog.banner_url ? `<enclosure url="${blog.banner_url}" length="0" type="image/jpeg" />` : ''}
  </item>`;
  }).join('')}

</channel>
</rss>`;

    setHeader(event, 'Content-Type', 'application/rss+xml');
    return rss;

  } catch (error) {
    console.error('Error generating RSS feed:', error);
    setHeader(event, 'Content-Type', 'application/rss+xml');
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>W Labs Newsroom</title>
  <link>${baseUrl}/newsroom</link>
  <description>Latest insights and technology articles from W Labs</description>
  <language>ko</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
</channel>
</rss>`;
  }
});