<template>
  <div>
    <PageHeader :title="$t('find-blogs')" :description="$t('blogs-text')" />

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem] min-h-[60vh]"
    >
      <!-- Loading State -->
      <div
        v-if="pending && (!blogs || blogs.length === 0)"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-5"
      >
        <div v-for="n in 6" :key="n" class="animate-pulse">
          <div class="bg-gray-200 rounded-[16px] h-[200px] mb-5"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div class="h-6 bg-gray-200 rounded w-full mb-3"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="showError" class="text-center py-10">
        <div class="text-red-500 font-poppins text-xl mb-4">
          {{ $t("failed-to-load-blogs") }}
        </div>
        <button
          @click="refresh"
          :disabled="pending"
          class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
        >
          {{ pending ? $t("retrying") : $t("retry") }}
        </button>
      </div>

      <!-- Content Grid -->
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-5"
      >
        <!-- Empty State -->
        <div
          v-if="sortedBlogs.length === 0"
          class="col-span-3 text-center text-gray-500 font-poppins text-xl py-10"
        >
          {{ $t("no-blogs") }}
        </div>

        <div v-for="blog in sortedBlogs" :key="blog.id" class="group">
          <NuxtLink :to="`/blogs/${blog.slug}`" class="block">
            <div class="relative overflow-hidden rounded-[16px] mb-5">
              <img
                v-if="blog.banner_url"
                :src="blog.banner_url"
                class="w-full h-full object-cover max-w-full md:h-[232px] lg:h-[280px] xl:h-[351px] transition-transform duration-300 group-hover:scale-105"
                :alt="blog?.title"
                loading="lazy"
              />

              <div
                v-else
                class="w-full md:h-[232px] lg:h-[280px] xl:h-[351px] bg-[#f4f4f4] flex justify-center items-center"
              >
                <img
                  src="/images/blogs/blog-placeholder.png"
                  :alt="blog?.title"
                  class="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </NuxtLink>

          <div class="flex mb-3">
            <span
              class="font-poppins text-[#999999] text-[12px] font-[500] me-3"
            >
              {{ formatDate(blog.published_at) }}
            </span>
            <span class="font-poppins text-[#333333] text-[12px] font-[700]">
              {{ blog.author?.name || "Unknown Author" }}
            </span>
          </div>

          <NuxtLink
            :to="`/blogs/${blog.slug}`"
            class="font-poppins font-[600] text-[24px] text-black mb-3 line-clamp-2 hover:text-blue-600 transition-colors"
          >
            {{ blog.title }}
          </NuxtLink>

          <div
            class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden"
            style="min-height: 72px; max-height: 72px"
            v-html="
              blog.excerpt ||
              stripHtml(blog.content || '').slice(0, 150) + '...'
            "
          />

          <NuxtLink
            :to="`/blogs/${blog.slug}`"
            class="font-poppins font-[700] text-[18px] text-[#2279E8] cursor-pointer group-hover:underline group-hover:underline-offset-3 transition-all duration-300 ease-in-out"
          >
            {{ $t("read-more") }}...
          </NuxtLink>
        </div>
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

const showError = computed(() => {
  return error.value && (!blogs.value || blogs.value.length === 0);
});

const staticMetaTitle = t("blogs-title") || "Blogs - W SoftLabs";
const staticMetaDescription = t("blogs-description") || t("blogs-text");
const staticMetaKeywords =
  Array.from({ length: 10 }, (_, i) => t(`blogs-meta-keyword-${i + 1}`)).join(
    ", "
  ) || "blog, articles, insights, technology, AI, web development";

const { canonicalUrl } = useCanonical();

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

const sortedBlogs = computed(() => {
  if (!blogs.value || blogs.value.length === 0) return [];

  return [...blogs.value]
    .filter((blog) => blog && blog.published_at)
    .sort((a, b) => {
      return new Date(b.published_at) - new Date(a.published_at);
    });
});

const updatedStructuredData = computed(() => {
  return useStructuredData("blog-index", {
    blogs: sortedBlogs.value || [],
  });
});

useHead({
  title: staticMetaTitle,
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(updatedStructuredData.value),
    },
  ],
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
    { property: "og:url", content: canonicalUrl.value },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: staticMetaTitle },
    { name: "twitter:description", content: staticMetaDescription },
  ],
});
</script>
