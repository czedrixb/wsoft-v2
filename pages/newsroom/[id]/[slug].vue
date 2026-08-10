<template>
  <div>
    <div class="mt-20">
      <div class="mx-auto px-4 md:px-8 max-w-screen-lg pb-0 md:pt-16">
        <!-- Loading State -->
        <div v-if="pending && !blog" class="animate-pulse">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div
              class="lg:col-start-2 bg-gray-200 h-[400px] rounded-[14px]"
            ></div>
          </div>
          <div class="my-[10rem]">
            <div class="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div class="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="showError" class="text-center py-20">
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

        <div v-else-if="!pending && !blog" class="text-center py-20">
          <div class="text-gray-500 font-poppins text-3xl mb-4">
            {{ $t("blog-not-found") }}
          </div>
          <NuxtLink
            to="/news"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {{ $t("back-to-blogs") }}
          </NuxtLink>
        </div>

        <template v-else-if="blog">
          <div class="grid grid-cols-1">
            <div class="lg:col-start-2">
              <img
                v-if="blog.banner_url && !bannerError"
                :src="blog.banner_url"
                :alt="blog.title"
                class="w-full h-full object-cover rounded-[14px]"
                @error="onBannerError"
              />
              <NuxtImg
                v-else
                src="/images/revamp/newsroom/news-1.png"
                alt="Newsroom image"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <div class="my-[10rem]">
            <div class="grid grid-cols-1">
              <div>
                <h2
                  class="font-satoshi font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] lg:text-[64px] lg:leading-[80px] bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] bg-clip-text text-transparent"
                >
                  {{ blog.title }}
                </h2>
                <div class="mt-5">
                  <p
                    class="font-satoshi font-normal text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[32px] text-[#64748B]"
                  >
                    {{
                      blog.excerpt ||
                      stripHtml(blog.content || "").slice(0, 150) + "..."
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-[15rem]">
            <div class="grid grid-cols-1 gap-12">
              <div>
                <h5
                  class="font-satoshi font-normal text-[18px] leading-[32px] lg:text-[24px] text-[#64748B]"
                >
                  {{ blog.author?.name || "" }}
                </h5>
                <div class="mt-8">
                  <article
                    v-html="blog.content"
                    class="prose prose-lg max-w-none font-opensans text-[#20252C] text-[14px] font-semibold leading-relaxed [&>p]:mb-[96px] [&>section]:mb-[96px] [&>h1]:font-satoshi [&>h1]:font-bold [&>h1]:mb-[24px] [&>h2]:font-satoshi [&>h2]:font-bold [&>h2]:mb-[24px] [&>h3]:font-satoshi [&>h3]:font-bold [&>h3]:mb-[24px] [&>h4]:font-satoshi [&>h4]:font-bold [&>h4]:mb-[24px] prose-a:text-blue-600 prose-a:underline prose-img:rounded-xl"
                  />
                </div>
              </div>

              <div>
                <!-- <img
                  v-if="blog.banner_url && !bannerError"
                  :src="blog.banner_url"
                  :alt="blog.title"
                  class="w-full h-full object-cover rounded-[14px]"
                  @error="onBannerError"
                />
                <NuxtImg
                  v-else
                  src="/images/revamp/newsroom/news-sample.png"
                  alt="Newsroom image"
                  class="w-full h-full object-cover rounded-[14px]"
                /> -->
              </div>
            </div>
          </div>

          <!-- More posts section -->
          <!-- <div class="text-center">
            <h5 class="text-[#64748B] text-md lg:text-[24px]">
              More from our News, Articles, and Blogs
            </h5>
          </div> -->
        </template>
      </div>

      <div class="mx-auto px-4 md:px-8 max-w-screen-2xl mb-[10rem]">
        <div
          v-if="morePosts.length > 0"
          class="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <NuxtLink
            v-for="post in morePosts"
            :key="post.id"
            :to="`/newsroom/${post.id}/${encodeSlug(post.slug)}`"
            class="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100 block h-[230px]"
          >
            <img
              v-if="post.banner_url"
              :src="post.banner_url"
              :alt="post.title"
              class="w-full h-full object-cover"
              loading="lazy"
              @error="(e) => (e.target.style.display = 'none')"
            />
            <NuxtImg
              v-else
              src="/images/revamp/newsroom/news-1.png"
              alt="Newsroom image"
              class="w-full h-full object-cover"
              :modifiers="{ width: 800, quality: 80 }"
              loading="eager"
            />

            <!-- Overlay -->
            <div
              class="absolute inset-0 flex flex-col justify-start p-4 md:p-6"
              style="
                background-color: #20252ce5;
                clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
              "
            >
              <h5
                class="text-[16px] md:text-[18px] font-bold text-white line-clamp-1 max-w-[60%]"
              >
                {{ post.title }}
              </h5>
              <p
                class="mt-2 text-white/80 font-semibold text-[11px] md:text-[12px] max-w-[50%] line-clamp-2"
              >
                {{
                  post.excerpt ||
                  stripHtml(post.content || "").slice(0, 50) + "..."
                }}
              </p>
            </div>
          </NuxtLink>
        </div>

        <div
          v-else
          class="text-center text-gray-500 font-poppins text-md lg:text-xl py-10"
        >
          {{ $t("no-popular") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { t } = useI18n();
const route = useRoute();
const { canonicalUrl } = useCanonical();

const isMobile = ref(false);
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const bannerError = ref(false);
const onBannerError = () => {
  bannerError.value = true;
};

function encodeSlug(slug) {
  if (!slug) return "";
  return slug
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Reuse the cached posts list from the index page — no extra network call
const { data: allPosts } = await useAsyncData(
  "newsroom-blogs", // ← same key as index so Nuxt reuses the payload
  async () => {
    const res = await $fetch("/api/getBlogs");
    return Array.isArray(res) ? res : [];
  },
  {
    getCachedData(key, nuxtApp) {
      return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
    },
  },
);

const {
  data: blog,
  pending,
  error,
  refresh,
} = await useAsyncData(
  `news-blog-${route.params.id}`,
  async () => {
    try {
      const id = route.params.id;
      if (!id) return null;
      const res = await $fetch(`/api/getPost/${id}`);
      return res ?? null;
    } catch (err) {
      console.error("[NEWS] Error fetching post:", err);
      return null;
    }
  },
  {
    server: true,
    lazy: false,
    getCachedData(key, nuxtApp) {
      return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
    },
  },
);

const showError = computed(
  () => !pending.value && !!error.value && !blog.value,
);

const morePosts = computed(() => {
  if (!allPosts.value?.length) return [];
  return [...allPosts.value]
    .filter((b) => b?.published_at && b.id !== blog.value?.id)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .slice(0, 2);
});

const stripHtml = (html) => html?.replace(/<[^>]+>/g, "") || "";

const metaTitle = computed(
  () => blog.value?.title || t("blog-details") || "News - W Labs",
);
const metaDescription = computed(
  () => blog.value?.excerpt || t("blog-description") || "W Labs News",
);

const structuredData = useStructuredData("blog-post", blog.value ?? {});

const { shareImageUrl } = useShareImage();

// Prefer the post's own banner; fall back to the site share image. Computed so
// it resolves once `blog` loads rather than being captured as undefined.
const articleImageUrl = computed(
  () => blog.value?.banner_url || shareImageUrl.value,
);

useHead({
  title: metaTitle,
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(structuredData) },
  ],
  meta: [
    { name: "description", content: metaDescription },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "article" },
    { property: "og:url", content: canonicalUrl.value },
    { property: "og:image", content: articleImageUrl },
    { property: "article:published_time", content: blog.value?.published_at },
    {
      property: "article:author",
      content: blog.value?.author?.name || "W Labs",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    { name: "twitter:image", content: articleImageUrl },
  ],
});
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.6s ease-in-out;
}
</style>
