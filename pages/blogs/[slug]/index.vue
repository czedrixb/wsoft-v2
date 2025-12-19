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
            <div v-for="post in popularPosts" :key="post.id" class="group">
              <div class="relative">
                <NuxtLink :to="`/blogs/${post.slug}`" class="block">
                  <NuxtImg
                    :src="
                      post.banner_url ||
                      '/images/blogs/img-blog-placeholder.png'
                    "
                    class="max-w-full mb-5 rounded-[16px] h-[360px] md:h-[280px] xl:h-[360px] object-cover w-full transition-transform duration-300 group-hover:scale-105"
                    :alt="post.title"
                    loading="lazy"
                  />
                </NuxtLink>

                <NuxtImg
                  class="absolute top-[8%] left-[54%] md:left-[45%] xl:left-[54%]"
                  src="/images/blogs/wsoft-blog.png"
                  width="145px"
                  height="20px"
                  loading="lazy"
                />

                <!-- Updated category badge - Always show "Popular" -->
                <div
                  class="absolute rounded-md bg-[#2375E9] text-white px-3 top-[35%] left-[8%]"
                >
                  <span class="font-poppins font-[600] text-[15px]">
                    Popular
                  </span>
                </div>

                <div class="absolute text-black top-[44%] left-[8%]">
                  <NuxtLink :to="`/blogs/${post.slug}`">
                    <span
                      class="font-poppins font-[600] text-[22px] truncate overflow-hidden text-ellipsis w-[200px] block hover:text-blue-600 transition-colors"
                    >
                      {{ post.title }}
                    </span>
                  </NuxtLink>
                </div>
              </div>
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
                :to="`/blogs/${post.slug}`"
                class="font-poppins font-[600] text-[24px] text-black mb-3 line-clamp-2 hover:text-blue-600 transition-colors"
              >
                {{ post.title }}
              </NuxtLink>

              <div
                class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden"
                style="min-height: 72px; max-height: 72px"
                v-html="
                  post.excerpt ||
                  stripHtml(post.content || '').slice(0, 150) + '...'
                "
              />

              <NuxtLink
                :to="`/blogs/${post.slug}`"
                class="font-poppins font-[700] text-[18px] text-[#2279E8] cursor-pointer group-hover:underline group-hover:underline-offset-3 transition-all duration-300 ease-in-out"
              >
                {{ $t("read-more") }}...
              </NuxtLink>
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
  }
);

// Find current blog and popular posts
const blog = computed(() => {
  if (!blogs.value || !Array.isArray(blogs.value)) return null;
  return blogs.value.find((b) => b.slug === route.params.slug);
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
  () => blog.value?.title || t("blog-details") || "Blog Details - W SoftLabs"
);

const metaDescription = computed(
  () =>
    blog.value?.excerpt ||
    t("blog-description") ||
    "Read this insightful blog post from W SoftLabs"
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
  useStructuredData("blog-post", blog.value || {})
);

useHead({
  title: metaTitle,
  htmlAttrs: {
    lang: "ko", // Set to appropriate language
  },
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
    // Add prev/next for pagination if needed
    // {
    //   rel: 'prev',
    //   href: `${baseUrl}/blogs?page=${prevPage}`
    // },
    // {
    //   rel: 'next',
    //   href: `${baseUrl}/blogs?page=${nextPage}`
    // }
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
      content: blog.value?.banner_url || "/images/thumbnail.jpg",
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
    { property: "article:section", content: "Technology" }, // Add appropriate category

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    {
      name: "twitter:image",
      content: blog.value?.banner_url || "/images/thumbnail.jpg",
    },
    { name: "twitter:site", content: "@wsoftlabs" }, // Add your Twitter handle
    {
      name: "twitter:creator",
      content: blog.value?.author?.twitter || "@wsoftlabs",
    },

    // Additional meta tags
    { name: "author", content: blog.value?.author?.name || "W SoftLabs" },
    {
      name: "article:publisher",
      content: "https://www.facebook.com/wsoftlabs",
    }, // Add your FB page

    // Mobile/App specific
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-title", content: "W SoftLabs" },

    // Verification tags (add these in your main layout)
    // { name: 'google-site-verification', content: 'YOUR_VERIFICATION_CODE' },
    // { name: 'naver-site-verification', content: 'YOUR_NAVER_VERIFICATION_CODE' },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData.value),
    },
  ],
});
</script>
