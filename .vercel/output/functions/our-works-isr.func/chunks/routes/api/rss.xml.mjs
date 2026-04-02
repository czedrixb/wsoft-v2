import { d as defineEventHandler, a as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const rss_xml = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl || "https://wsoft.space";
  try {
    const blogs = await $fetch("/api/getBlogs").catch(() => []);
    const blogItems = Array.isArray(blogs) ? blogs : [];
    const sortedBlogs = [...blogItems].sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).slice(0, 20);
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title>W Soft Labs Blog</title>
  <link>${baseUrl}/blogs</link>
  <atom:link href="${baseUrl}/api/rss.xml" rel="self" type="application/rss+xml" />
  <description>Latest insights and technology articles from W Soft Labs</description>
  <language>ko</language>
  <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
  <pubDate>${(/* @__PURE__ */ new Date()).toUTCString()}</pubDate>
  <ttl>60</ttl>
  <image>
    <url>${baseUrl}/images/logo.png</url>
    <title>W Soft Labs Blog</title>
    <link>${baseUrl}/blogs</link>
  </image>
  
  ${sortedBlogs.map((blog) => {
      var _a, _b;
      const encodedSlug = encodeURIComponent(blog.slug || "").replace(/%20/g, "-").replace(/%3A/g, "-").replace(/[^\w\-~.!*()]/g, "-");
      const blogUrl = `${baseUrl}/blogs/${encodedSlug}`;
      const pubDate = new Date(blog.published_at || /* @__PURE__ */ new Date()).toUTCString();
      const excerpt = blog.excerpt || (blog.content ? blog.content.substring(0, 200) + "..." : "");
      const cleanExcerpt = excerpt.replace(/<[^>]+>/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
      const cleanTitle = (blog.title || "Untitled").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
      const cleanAuthor = (((_a = blog.author) == null ? void 0 : _a.name) || "W Soft Labs").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
      return `
  <item>
    <title>${cleanTitle}</title>
    <link>${blogUrl}</link>
    <guid isPermaLink="true">${blogUrl}</guid>
    <description><![CDATA[${cleanExcerpt}]]></description>
    <pubDate>${pubDate}</pubDate>
    <author>${cleanAuthor}</author>
    ${((_b = blog.category) == null ? void 0 : _b.name) ? `<category>${blog.category.name}</category>` : ""}
    ${blog.banner_url ? `<enclosure url="${blog.banner_url}" length="0" type="image/jpeg" />` : ""}
  </item>`;
    }).join("")}
</channel>
</rss>`;
    event.node.res.setHeader("content-type", "application/rss+xml");
    event.node.res.end(rss);
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    const fallbackRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>W Soft Labs Blog</title>
  <link>${baseUrl}/blogs</link>
  <description>Latest insights and technology articles from W Soft Labs</description>
  <language>ko</language>
  <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
</channel>
</rss>`;
    event.node.res.setHeader("content-type", "application/rss+xml");
    event.node.res.end(fallbackRss);
  }
});

export { rss_xml as default };
