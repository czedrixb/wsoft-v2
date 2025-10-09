<template>
  <div>
    <PageHeader
      :title="blog?.title || $t('blog-details')"
      :description="blog?.excerpt || $t('blog-text')"
    />

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem] min-h-[60vh]"
    >
      <template v-if="pending">
        <div class="animate-pulse">
          <div class="bg-gray-200 rounded-[16px] h-[400px] mb-5"></div>
          <div class="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </template>

      <template v-else-if="error">
        <div class="text-center text-red-500 font-poppins text-xl py-20">
          {{ $t("failed-to-load-blog") }}
        </div>
      </template>

      <template v-else-if="!blog">
        <div class="text-center text-gray-500 font-poppins text-3xl py-20">
          {{ $t("blog-not-found") }}
        </div>
      </template>

      <template v-else>
        <article class="max-w-4xl mx-auto">
          <div class="relative overflow-hidden rounded-[16px] mb-8">
            <img
              v-if="blog.banner_url"
              :src="blog.banner_url"
              class="w-full h-full object-cover max-w-full md:h-[400px] lg:h-[450px]"
              :alt="blog.title"
              loading="lazy"
            />
            <div
              v-else
              class="w-full md:h-[400px] lg:h-[450px] bg-[#f4f4f4] flex justify-center items-center"
            >
              <img
                src="/images/blogs/blog-placeholder.png"
                :alt="blog.title"
                class="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div class="flex flex-wrap items-center mb-6">
            <span
              class="font-poppins text-[#999999] text-[14px] font-[500] me-4"
            >
              {{
                t(
                  new Date(blog.published_at)
                    .toLocaleString("en-US", { month: "long" })
                    .toLowerCase()
                )
              }}
              {{ new Date(blog.published_at).getDate() }},
              {{ new Date(blog.published_at).getFullYear() }}
            </span>
            <span class="font-poppins text-[#333333] text-[14px] font-[700]">
              {{ blog.author?.name }}
            </span>
          </div>

          <h1
            class="font-poppins font-[600] text-[32px] lg:text-[40px] text-black mb-6"
          >
            {{ blog.title }}
          </h1>

          <div
            class="prose prose-lg max-w-none font-poppins text-[16px] text-[#333333] leading-relaxed"
            v-html="blog.content"
          />
        </article>
      </template>
    </div>

    <ContactEmail />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { t } = useI18n();
const { getBlogs, isAuthenticated } = useAuth();
const route = useRoute();

const blog = ref(null);
const pending = ref(true);
const error = ref(null);

const { canonicalUrl } = useCanonical();

const fetchBlog = async () => {
  try {
    pending.value = true;
    error.value = null;

    let allBlogs;

    try {
      allBlogs = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
        method: "GET",
      });
    } catch (publicError) {
      console.log("Public API failed, trying authenticated...");

      if (isAuthenticated.value) {
        allBlogs = await getBlogs();
      } else {
        throw publicError;
      }
    }

    blog.value = allBlogs.find((b) => b.slug === route.params.slug);

    if (!blog.value) {
      error.value = new Error("Blog not found");
    }
  } catch (err) {
    console.error("Failed to fetch blog:", err);
    error.value = err;
  } finally {
    pending.value = false;
  }
};

onMounted(async () => {
  await fetchBlog();
});

const metaTitle = computed(
  () => blog.value?.title || t("blog-details") || "Blog Post - W SoftLabs"
);
const metaDescription = computed(
  () =>
    blog.value?.excerpt ||
    t("blog-text") ||
    "Read this insightful blog post from W SoftLabs"
);
const metaKeywords = computed(() => {
  return (
    Array.from({ length: 10 }, (_, i) => t(`blog-meta-keyword-${i + 1}`)).join(
      ", "
    ) || "blog, article, insights, technology"
  );
});

const structuredData = computed(() =>
  useStructuredData("blog-post", blog.value || {})
);

useHead({
  title: metaTitle,
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData.value),
    },
  ],
  meta: [
    { name: "description", content: metaDescription },
    { name: "keywords", content: metaKeywords },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: blog.value?.banner_url || "/images/thumbnail.jpg",
    },
    { property: "og:url", content: canonicalUrl.value },
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
      content: blog.value?.banner_url || "/images/thumbnail.jpg",
    },
  ],
});
</script>
