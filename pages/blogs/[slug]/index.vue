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
            class="prose prose-lg max-w-none font-poppins text-[18px] text-[#333333] leading-relaxed"
            v-html="blog.content"
          />
        </article>
      </template>

      <!-- Popular posts section -->
      <div
        v-if="!pending && !error && popularPosts.length > 0"
        class="px-5 mx-auto md:px-0 lg:px-[3rem] xl:max-w-screen-xl mt-20"
      >
        <div
          class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-3 sm:gap-0"
        >
          <h3 class="font-poppins text-[40px] font-[600] text-[#475766]">
            {{ $t("popular-post") }}
          </h3>
          <NuxtLink
            to="/blogs"
            class="font-[400] btn-ghost border-none transition-all duration-300 px-8 btn bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white self-start sm:self-auto"
          >
            {{ $t("view-all") }}
          </NuxtLink>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8"
        >
          <div v-for="post in popularPosts" :key="post.id">
            <div class="relative">
              <NuxtImg
                :src="
                  post.banner_url || '/images/blogs/img-blog-placeholder.png'
                "
                class="max-w-full mb-5 rounded-[16px] h-[360px] md:h-[280px] xl:h-[360px] object-cover w-full"
                :alt="post.title"
                loading="lazy"
              />

              <NuxtImg
                class="absolute top-[8%] left-[54%] md:left-[45%] xl:left-[54%]"
                src="/images/blogs/wsoft-blog.png"
                width="145px"
                height="20px"
                loading="lazy"
              />

              <div
                class="absolute rounded-md bg-[#2375E9] text-white px-3 top-[35%] left-[8%]"
              >
                <span class="font-poppins font-[600] text-[15px]">
                  {{ post.category.name }}
                </span>
              </div>

              <div class="absolute text-black top-[44%] left-[8%]">
                <span
                  class="font-poppins font-[600] text-[22px] truncate overflow-hidden text-ellipsis w-[200px] block"
                >
                  {{ post.title }}
                </span>
              </div>
            </div>
            <div class="flex mb-3">
              <span
                class="font-poppins text-[#999999] text-[12px] font-[500] me-3"
              >
                {{
                  new Date(post.published_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                }}
              </span>

              <span class="font-poppins text-[#333333] text-[12px] font-[700]">
                {{ post.author?.name }}
              </span>
            </div>

            <div class="font-poppins font-[600] text-[24px] text-black mb-3">
              {{ post.title }}
            </div>

            <div
              class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden"
              style="min-height: 72px; max-height: 72px"
            >
              {{
                post.excerpt ||
                post.content?.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
              }}
            </div>

            <NuxtLink
              :to="`/blogs/${post.slug}`"
              class="font-poppins font-[700] text-[18px] text-[#2279E8] underline underline-offset-3 cursor-pointer"
            >
              {{ $t("read-more") }}...
            </NuxtLink>
          </div>
        </div>
      </div>
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
const { getBlogs, isAuthenticated, login, token } = useAuth();
const route = useRoute();

const blog = ref(null);
const popularPosts = ref([]);
const pending = ref(true);
const error = ref(null);

// Add computed property for blog meta
const blogMeta = computed(() => {
  if (!blog.value) return null;

  return {
    date: `${t(
      new Date(blog.value.published_at)
        .toLocaleString("en-US", { month: "long" })
        .toLowerCase()
    )} ${new Date(blog.value.published_at).getDate()}, ${new Date(
      blog.value.published_at
    ).getFullYear()}`,
    author: blog.value.author?.name,
  };
});

const { canonicalUrl } = useCanonical();

const initializeAuthAndFetchBlog = async () => {
  try {
    pending.value = true;
    error.value = null;

    let allBlogs;

    const savedToken = process.client
      ? localStorage.getItem("auth_token")
      : null;

    if (!savedToken && !token.value) {
      try {
        console.log("Attempting auto-login for blog slug...");
        await login(
          import.meta.env.VITE_BLOG_EMAIL,
          import.meta.env.VITE_BLOG_PASSWORD
        );
        console.log("Auto-login successful for blog slug");
      } catch (loginError) {
        console.log("Auto-login failed, will try public access:", loginError);
        // Continue to try public access
      }
    }

    try {
      allBlogs = await getBlogs();
    } catch (blogsError) {
      console.error("Failed to fetch blogs:", blogsError);
      throw blogsError;
    }

    blog.value = allBlogs.find((b) => b.slug === route.params.slug);

    if (!blog.value) {
      error.value = new Error("Blog not found");
    }

    // Get popular posts (filter by category or sort by some criteria)
    popularPosts.value = allBlogs
      .filter((post) => post.id !== blog.value?.id) // Exclude current blog post
      .filter((post) => post.category?.slug === "popular") // Filter by popular category
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      )
      .slice(0, 3);
  } catch (err) {
    console.error("Failed to fetch blog:", err);
    error.value = err;
  } finally {
    pending.value = false;
  }
};

onMounted(async () => {
  await initializeAuthAndFetchBlog();
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
