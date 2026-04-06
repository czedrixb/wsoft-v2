<template>
  <div>
    <div class="my-20">
      <div
        class="mx-auto px-4 md:px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"
      >
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

        <div v-else-if="!blog && !pending" class="text-center py-20">
          <div class="text-gray-500 font-poppins text-3xl mb-4">
            {{ $t("blog-not-found") }}
          </div>
          <NuxtLink
            to="/revamp/news"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {{ $t("back-to-blogs") }}
          </NuxtLink>
        </div>

        <template v-else-if="blog">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="lg:col-start-2">
              <img
                v-if="blog.banner_url && !bannerError"
                :src="blog.banner_url"
                :alt="blog.title"
                class="w-full h-full object-cover"
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
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <h2
                  class="text-2xl lg:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
                >
                  {{ blog.title }}
                </h2>
                <div class="mt-5">
                  <p class="text-[#64748B] text-xl lg:text-[24px]">
                    {{
                      blog.excerpt ||
                      stripHtml(blog.content || "").slice(0, 150) + "..."
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="my-[15rem]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h5 class="text-[#64748B] text-[24px]">
                  {{ blog.author?.name || "" }}
                </h5>
                <div class="mt-8">
                  <article
                    v-html="blog.content"
                    class="prose prose-lg max-w-none font-poppins text-[#20252C] text-[14px] font-semibold leading-relaxed space-y-5 prose-p:my-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-strong:text-[#222] prose-strong:font-semibold prose-headings:font-semibold prose-a:text-blue-600 prose-a:underline prose-img:rounded-xl"
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

          <div class="mt-[5rem]">
            <div
              v-if="morePosts.length > 0"
              class="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div
                v-for="post in morePosts"
                :key="post.id"
                class="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100"
                :style="{ minHeight: '300px', aspectRatio: '4/3' }"
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
                  class="absolute inset-0"
                  :style="{
                    backgroundColor: '#F8FAFC99',
                    clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                  }"
                >
                  <div class="h-full p-4 md:p-6 lg:p-8 flex flex-col">
                    <h5
                      class="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#0A1628] line-clamp-3 max-w-lg"
                    >
                      {{ post.title }}
                    </h5>
                    <p
                      class="mt-2 md:mt-3 lg:mt-5 text-[#20252CE5] font-semibold text-[12px] md:text-[14px] line-clamp-3 max-w-lg"
                    >
                      {{
                        post.excerpt ||
                        stripHtml(post.content || "").slice(0, 150) + "..."
                      }}
                    </p>
                    <div class="mt-5 md:mt-20">
                      <NuxtLink
                        :to="`/revamp/news/${encodeSlug(post.slug)}`"
                        class="border border-[#20252CE5] px-4 md:px-6 lg:px-8 py-1.5 md:py-2 text-[#20252CE5] text-[12px] md:text-[14px] font-semibold rounded-[22px] inline-flex items-center gap-2 hover:bg-[#20252CE5] hover:text-white transition-colors duration-300"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="inline-block md:w-4 md:h-4"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fallback: no other posts -->
            <div
              v-else
              class="text-center text-gray-500 font-poppins text-md lg:text-xl py-10"
            >
              {{ $t("no-popular") }}
            </div>
          </div>
        </template>
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
  return encodeURIComponent(slug)
    .replace(/%20/g, "-")
    .replace(/%3A/g, "-")
    .replace(/[^\w\-~.!*()]/g, "-");
}

function decodeSlug(encodedSlug) {
  try {
    return decodeURIComponent(
      encodedSlug.replace(/-/g, "%20").replace(/_/g, "%5F"),
    );
  } catch {
    return encodedSlug;
  }
}

const {
  data: blogs,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "news-blogs",
  async () => {
    try {
      const res = await $fetch("/api/getBlogs");
      if (!Array.isArray(res)) return [];
      return res;
    } catch (err) {
      console.error("[NEWS] Error fetching blogs:", err);
      return [];
    }
  },
  {
    server: true,
    client: true,
    transform: (data) => (Array.isArray(data) ? data : []),
  },
);

const showError = computed(
  () => error.value && (!blogs.value || blogs.value.length === 0),
);

const blog = computed(() => {
  if (!blogs.value?.length) return null;
  const decodedSlug = decodeSlug(route.params.news);
  return (
    blogs.value.find((b) => {
      if (b.slug === decodedSlug) return true;
      if (encodeSlug(b.slug) === route.params.news) return true;
      return (
        encodeSlug(b.slug).includes(route.params.news) ||
        route.params.news.includes(encodeSlug(b.slug))
      );
    }) ?? null
  );
});

const morePosts = computed(() => {
  if (!blogs.value?.length) return [];
  return [...blogs.value]
    .filter((b) => b?.published_at && b.id !== blog.value?.id)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .slice(0, 2);
});

const stripHtml = (html) => html?.replace(/<[^>]+>/g, "") || "";

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

const metaTitle = computed(
  () => blog.value?.title || t("blog-details") || "News - W SoftLabs",
);
const metaDescription = computed(
  () => blog.value?.excerpt || t("blog-description") || "W SoftLabs News",
);

const structuredData = useStructuredData("blog-post", blog.value ?? {});

useHead({
  title: metaTitle,
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: "description", content: metaDescription },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "article" },
    { property: "og:url", content: canonicalUrl.value },
    {
      property: "og:image",
      content: blog.value?.banner_url || "/images/thumbnail.png",
    },
    { property: "article:published_time", content: blog.value?.published_at },
    {
      property: "article:author",
      content: blog.value?.author?.name || "W SoftLabs",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    {
      name: "twitter:image",
      content: blog.value?.banner_url || "/images/thumbnail.png",
    },
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
