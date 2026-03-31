<template>
  <div>
    <BlogHeader
      :title="blog?.title || $t('blog-details')"
      :blog-meta="blogMeta"
      :pending="pending"
    />

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem] min-h-[60vh]"
    >
      <!-- Loading State -->
      <div v-if="pending && !blog" class="animate-pulse">
        <div class="bg-gray-200 rounded-[16px] h-[400px] mb-5"></div>
        <div class="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="showError" class="text-center py-10">
        <div class="text-red-500 font-poppins text-xl mb-4">
          {{ $t("failed-to-load-blog") }}
        </div>
        <button
          @click="refresh"
          :disabled="pending"
          class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
        >
          {{ pending ? $t("retrying") : $t("retry") }}
        </button>
      </div>

      <!-- Blog Not Found -->
      <div v-else-if="!blog && !pending" class="text-center py-20">
        <div class="text-gray-500 font-poppins text-3xl mb-4">
          {{ $t("blog-not-found") }}
        </div>
        <NuxtLink
          to="/blogs"
          class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {{ $t("back-to-blogs") }}
        </NuxtLink>
      </div>

      <!-- Blog Content -->
      <template v-else-if="blog">
        <div
          class="relative overflow-hidden rounded-[16px] mb-[5rem] h-[400px] md:h-[450px] lg:h-[500px]"
        >
          <img
            v-if="blog.banner_url"
            :src="blog.banner_url"
            class="absolute inset-0 w-full h-full object-cover"
            :alt="blog.title"
            loading="lazy"
          />
          <div
            v-else
            class="absolute inset-0 bg-[#f4f4f4] flex justify-center items-center"
          >
            <img
              src="/images/blogs/blog-placeholder.png"
              :alt="blog.title"
              class="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <article class="max-w-4xl mx-auto">
          <div
            v-html="blog.content"
            class="prose prose-lg max-w-none font-poppins text-[#333333] leading-relaxed prose-p:my-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-strong:text-[#222] prose-strong:font-semibold prose-headings:font-semibold prose-a:text-blue-600 prose-a:underline prose-img:rounded-xl"
          ></div>
        </article>
      </template>

      <!-- Popular posts section -->
      <div
        v-if="!pending && !showError && blog"
        class="px-5 mx-auto md:px-0 lg:px-[3rem] xl:max-w-screen-xl mt-20"
      >
        <div
          class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-3 sm:gap-0"
        >
          <h3 class="font-poppins text-[40px] font-[600] text-black">
            {{ $t("popular-post") }}
          </h3>
          <NuxtLink
            to="/blogs"
            class="font-[400] btn-ghost border-none transition-all duration-300 px-8 btn bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white self-start sm:self-auto"
          >
            {{ $t("view-all") }}
          </NuxtLink>
        </div>

        <template v-if="popularPosts.length > 0">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8"
          >
            <div
              v-for="post in popularPosts"
              :key="post.id"
              class="group flex flex-col h-full"
            >
              <div
                class="relative overflow-hidden rounded-[15px] flex flex-col h-full"
              >
                <div
                  class="relative overflow-hidden rounded-[16px] mb-5 h-[360px] md:h-[280px] xl:h-[360px] flex-shrink-0"
                >
                  <!-- Top shadow -->
                  <NuxtImg
                    class="absolute top-0 left-0 right-0 z-10"
                    src="/images/blogs/blog-shadow.png"
                    style="height: 30%"
                    width="100%"
                    height="auto"
                    loading="lazy"
                  />

                  <!-- Bottom shadow -->
                  <NuxtImg
                    class="absolute bottom-0 left-0 right-0 z-10"
                    src="/images/blogs/blog-bottom-shadow.png"
                    style="height: 30%"
                    width="100%"
                    height="auto"
                    loading="lazy"
                  />

                  <NuxtLink
                    :to="`/blogs/${encodeSlug(post.slug)}`"
                    class="block h-full"
                  >
                    <NuxtImg
                      :src="
                        post.banner_url ||
                        '/images/blogs/img-blog-placeholder.png'
                      "
                      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      :alt="post.title"
                      loading="lazy"
                    />
                  </NuxtLink>

                  <NuxtImg
                    class="absolute top-[8%] left-[55%] z-20"
                    src="/images/blogs/wsoft-blog-white.png"
                    width="145px"
                    height="20px"
                    loading="lazy"
                  />

                  <div
                    class="absolute rounded-md bg-[#2375E9] text-white px-3 py-1 top-[64%] left-[5%] z-20"
                  >
                    <span class="font-poppins font-[600] text-[15px]">
                      Popular
                    </span>
                  </div>

                  <div
                    class="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                  >
                    <NuxtLink
                      :to="`/blogs/${encodeSlug(post.slug)}`"
                      class="block"
                    >
                      <span
                        class="font-poppins font-[600] text-[18px] md:text-[22px] text-white line-clamp-2 hover:text-blue-300 transition-colors"
                      >
                        {{ post.title }}
                      </span>
                    </NuxtLink>
                  </div>
                </div>

                <div class="flex flex-col flex-1 min-h-0">
                  <div class="flex mb-3">
                    <span
                      class="font-poppins text-[#999999] text-[12px] font-[500] me-3"
                    >
                      {{ formatDate(post.published_at) }}
                    </span>

                    <span
                      class="font-poppins text-[#333333] text-[12px] font-[700]"
                    >
                      {{ post.author?.name || "Unknown Author" }}
                    </span>
                  </div>

                  <NuxtLink
                    :to="`/blogs/${encodeSlug(post.slug)}`"
                    class="font-poppins font-[600] text-[24px] text-black mb-3 line-clamp-2 hover:text-blue-600 transition-colors block"
                  >
                    {{ post.title }}
                  </NuxtLink>

                  <div
                    class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden flex-1 min-h-0"
                    style="max-height: 72px"
                  >
                    <div
                      class="h-full overflow-hidden"
                      v-html="
                        post.excerpt ||
                        stripHtml(post.content || '').slice(0, 150) + '...'
                      "
                    />
                  </div>

                  <NuxtLink
                    :to="`/blogs/${encodeSlug(post.slug)}`"
                    class="font-poppins font-[700] text-[18px] text-[#2279E8] cursor-pointer group-hover:underline group-hover:underline-offset-3 transition-all duration-300 ease-in-out inline-block mt-auto pt-3"
                  >
                    {{ $t("read-more") }}...
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div
            class="col-span-3 text-center text-gray-500 font-poppins text-xl py-10"
          >
            {{ $t("no-popular") }}
          </div>
        </template>
      </div>
    </div>

    <ContactEmail />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { t } = useI18n();
const route = useRoute();

// Helper function to encode slugs for URLs
function encodeSlug(slug) {
  if (!slug) return "";
  // Encode the slug for URL usage
  return encodeURIComponent(slug)
    .replace(/%20/g, "-")
    .replace(/%3A/g, "-") // Replace colon
    .replace(/[^\w\-~.!*()]/g, "-"); // Replace other special chars
}

// Helper function to decode slugs
function decodeSlug(encodedSlug) {
  try {
    return decodeURIComponent(
      encodedSlug.replace(/-/g, "%20").replace(/_/g, "%5F"),
    );
  } catch {
    return encodedSlug;
  }
}

// Fetch all blogs data
const {
  data: blogs,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "blogs",
  async () => {
    try {
      console.log("[CLIENT] Fetching blogs from /api/getBlogs...");
      const res = await $fetch("/api/getBlogs");
      console.log("[CLIENT] /api/getBlogs response:", res);

      if (!Array.isArray(res)) {
        console.warn("[CLIENT] Response is not an array:", res);
        return [];
      }

      console.log(`[CLIENT] Received ${res.length} blogs`);
      return res;
    } catch (err) {
      console.error("[CLIENT] Error fetching blogs:", err);
      return [];
    }
  },
  {
    server: true,
    client: true,
    transform: (data) => {
      console.log("[CLIENT] Transforming blogs:", data);
      return Array.isArray(data) ? data : [];
    },
  },
);

// Find current blog - decode the slug from URL
const blog = computed(() => {
  if (!blogs.value || !Array.isArray(blogs.value)) return null;

  const decodedSlug = decodeSlug(route.params.slug);
  console.log("Looking for blog with slug:", decodedSlug);

  return blogs.value.find((b) => {
    // Try exact match first
    if (b.slug === decodedSlug) return true;

    // Try encoded version
    if (encodeSlug(b.slug) === route.params.slug) return true;

    // Try partial match for backward compatibility
    return (
      encodeSlug(b.slug).includes(route.params.slug) ||
      route.params.slug.includes(encodeSlug(b.slug))
    );
  });
});

const popularPosts = computed(() => {
  if (!blogs.value || !Array.isArray(blogs.value)) return [];

  return blogs.value
    .filter((post) => post.id !== blog.value?.id) // Exclude current blog post
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .slice(0, 3); // Get only the 3 latest posts
});

const showError = computed(() => {
  return error.value && (!blogs.value || blogs.value.length === 0);
});

// Helper functions
const stripHtml = (html) => {
  return html?.replace(/<[^>]+>/g, "") || "";
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

// Blog meta for header
const blogMeta = computed(() => {
  if (!blog.value) return null;

  return {
    date: formatDate(blog.value.published_at),
    author: blog.value.author?.name || "Unknown Author",
  };
});

// SEO and Meta Tags
const { canonicalUrl } = useCanonical();

const metaTitle = computed(
  () => blog.value?.title || t("blog-details") || "Blog Details - W SoftLabs",
);

const metaDescription = computed(
  () =>
    blog.value?.excerpt ||
    t("blog-description") ||
    "Read this insightful blog post from W SoftLabs",
);

const metaKeywords = computed(() => {
  if (!blog.value) return "blog, article, insights, technology";

  const baseKeywords = ["blog", "article", "insights", "technology"];
  const titleKeywords = blog.value.title?.toLowerCase().split(/\s+/) || [];

  return [...new Set([...baseKeywords, ...titleKeywords])]
    .slice(0, 10)
    .join(", ");
});

const structuredData = computed(() =>
  useStructuredData("blog-post", blog.value || {}),
);

useHead({
  title: metaTitle,
  htmlAttrs: {
    lang: "ko",
  },
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: metaDescription },
    { name: "keywords", content: metaKeywords },
    { name: "robots", content: "index, follow, max-image-preview:large" },

    // Open Graph
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "article" },
    { property: "og:url", content: canonicalUrl.value },
    {
      property: "og:image",
      content: blog.value?.banner_url || "/images/thumbnail.png",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "W SoftLabs" },
    { property: "og:locale", content: "ko_KR" },

    // Article specific
    { property: "article:published_time", content: blog.value?.published_at },
    {
      property: "article:modified_time",
      content: blog.value?.updated_at || blog.value?.published_at,
    },
    {
      property: "article:author",
      content: blog.value?.author?.name || "W SoftLabs",
    },
    { property: "article:section", content: "Technology" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    {
      name: "twitter:image",
      content: blog.value?.banner_url || "/images/thumbnail.png",
    },
    { name: "twitter:site", content: "@wsoftlabs" },
    {
      name: "twitter:creator",
      content: blog.value?.author?.twitter || "@wsoftlabs",
    },

    { name: "author", content: blog.value?.author?.name || "W SoftLabs" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData.value),
    },
  ],
});
</script>
