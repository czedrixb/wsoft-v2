<template>
  <div>
    <div class="my-20 md:my-40">
      <div
        class="mx-auto px-4 md:px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <!-- Left -->
          <div>
            <h2
              class="text-[40px] md:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] bg-clip-text text-transparent"
            >
              {{ t("newsroom.title") }}
            </h2>

            <div class="mt-6 md:mt-8 space-y-4 md:space-y-5">
              <p
                class="text-[#20252CE5] font-semibold text-[14px] md:text-[16px]"
              >
                {{ t("newsroom.welcome", { brand: brandName }) }}
              </p>
              <p
                class="text-[#20252CE5] font-semibold text-[14px] md:text-[16px]"
              >
                {{ t("newsroom.description1") }}
              </p>
              <p
                class="text-[#20252CE5] font-semibold text-[14px] md:text-[16px]"
              >
                {{ t("newsroom.description2", { brand: brandName }) }}
              </p>
            </div>

            <div class="mt-6 md:mt-8">
              <div class="bg-black w-full" style="height: 1px"></div>
            </div>

            <!-- Pagination: only shown when there is more than one page (WOS-264 #11) -->
            <div v-if="totalPages > 1" class="mt-8">
              <Pagination
                v-model:currentPage="currentPage"
                :totalPages="totalPages"
              />
            </div>
          </div>

          <!-- Right -->
          <div>
            <!-- Loading State -->
            <div
              v-if="pending && (!blogs || blogs.length === 0)"
              class="flex flex-col gap-4"
            >
              <div
                v-for="n in 4"
                :key="n"
                class="rounded-2xl bg-gray-100 animate-pulse"
                style="min-height: 250px; aspect-ratio: 4/3"
              ></div>
            </div>

            <!-- Error State -->
            <div
              v-else-if="showError"
              class="flex items-center justify-center rounded-2xl bg-gray-100"
              style="min-height: 300px"
            >
              <p class="text-red-500 font-semibold text-sm px-6 text-center">
                {{ t("newsroom.failedToLoad") }}
              </p>
            </div>

            <!-- All Blogs Grid -->
            <div v-else class="flex flex-col gap-4 md:gap-6">
              <div
                v-for="post in paginatedBlogs"
                :key="post.id"
                class="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100"
                style="min-height: 250px; aspect-ratio: 4/3"
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
                  loading="lazy"
                />

                <!-- Overlay -->
                <div
                  class="absolute inset-0"
                  :style="{
                    backgroundColor: '#F8FAFC99',
                    clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                  }"
                >
                  <div class="h-full p-4 md:p-6 flex flex-col">
                    <h5
                      class="text-[16px] md:text-[20px] font-bold text-[#0A1628] max-w-[55%]"
                      style="
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                      "
                    >
                      {{ post.title }}
                    </h5>

                    <p
                      class="mt-2 md:mt-3 text-[#20252CE5] font-semibold text-[12px] md:text-[13px] max-w-[55%]"
                      style="
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                      "
                    >
                      {{
                        (post.excerpt || stripHtml(post.content || "")).slice(
                          0,
                          80,
                        ) + "..."
                      }}
                    </p>

                    <div
                      class="mt-[1rem] md:mt-[8rem] lg:mt-[2rem] xl:mt-[12rem]"
                    >
                      <NuxtLink
                        :to="`/newsroom/${post.id}/${encodeSlug(post.slug)}`"
                        class="border border-[#20252CE5] px-4 md:px-6 py-1.5 md:py-2 text-[#20252CE5] text-[12px] md:text-[14px] font-semibold rounded-[22px] inline-flex items-center gap-2 hover:bg-[#20252CE5] hover:text-white transition-colors duration-300"
                      >
                        {{ t("newsroom.readMore") }}
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

              <!-- No posts fallback -->
              <div v-if="!pending && blogs !== null && otherBlogs.length === 0">
                {{ t("newsroom.noPosts") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { canonicalUrl } = useCanonical();
const { locale, t } = useI18n();

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
const bannerLoaded = ref(false);

const onBannerLoad = () => {
  bannerError.value = false;
  bannerLoaded.value = true;
};
const onBannerError = () => {
  bannerError.value = true;
  bannerLoaded.value = true;
};

const {
  data: blogs,
  pending,
  error,
} = await useAsyncData(
  "newsroom-blogs",
  async () => {
    try {
      const res = await $fetch("/api/getBlogs");
      return Array.isArray(res) ? res : [];
    } catch (err) {
      console.error("[NEWSROOM] Error fetching blogs:", err);
      return [];
    }
  },
  {
    server: true,
    lazy: false,
    transform: (data) => (Array.isArray(data) ? data : []),
    getCachedData(key, nuxtApp) {
      return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
    },
  },
);

const otherBlogs = computed(() => {
  if (!blogs.value?.length) return [];
  return [...blogs.value]
    .filter((b) => b?.published_at)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
});

const showError = computed(
  () => error.value && (!blogs.value || blogs.value.length === 0),
);

const featuredBlog = computed(() => {
  if (!blogs.value?.length) return null;
  return (
    [...blogs.value]
      .filter((b) => b?.published_at)
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))[0] ??
    null
  );
});

const stripHtml = (html) => html?.replace(/<[^>]+>/g, "") || "";

const encodeSlug = (slug) => {
  if (!slug) return "";
  return encodeURIComponent(slug)
    .replace(/%20/g, "-")
    .replace(/%3A/g, "-")
    .replace(/[^\w\-~.!*()]/g, "-");
};

const ITEMS_PER_PAGE = 5;
const currentPage = ref(1);

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
  return otherBlogs.value.slice(start, start + ITEMS_PER_PAGE);
});

const totalPages = computed(() =>
  Math.ceil(otherBlogs.value.length / ITEMS_PER_PAGE),
);

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const { brandName } = useBrand();
const { shareImageUrl, shareImageWidth, shareImageHeight } = useShareImage();

const staticMetaTitle = t("home-title");
const staticMetaDescription = t("home-description", {
  brand: brandName.value,
});
const staticMetaKeywords = [
  t("home-meta-keyword"),
  ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`)),
].join(", ");

const structuredData = useStructuredData("blog-index", {
  blogs: blogs.value ?? [],
});

useHead({
  title: staticMetaTitle,
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(structuredData) },
  ],
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: shareImageUrl },
    { property: "og:image:width", content: shareImageWidth },
    { property: "og:image:height", content: shareImageHeight },
    { name: "twitter:image", content: shareImageUrl },
    { property: "og:url", content: canonicalUrl.value },
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
