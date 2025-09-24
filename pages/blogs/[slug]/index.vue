<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute w-[100%] z-0 bottom-[93%] md:bottom-[90%] lg:bottom-[82%] left-1/2 -translate-x-1/2"
    >
      <img
        src="/images/home/shadow-overlay.png"
        class="w-100 md:w-[1500px] lg:w-[1500px] mx-auto"
        alt="shadow-overlay"
        loading="lazy"
      />
    </div>

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-md xl:max-w-screen-xl py-10 mb-[8rem]"
    >
      <p class="font-poppins text-[12px] text-[#999999] font-[500] mb-2">
        {{
          t(
            new Date(blog?.published_at)
              .toLocaleString("en-US", { month: "long" })
              .toLowerCase()
          )
        }}
        {{ new Date(blog?.published_at).getDate() }},
        {{ new Date(blog?.published_at).getFullYear() }}
        <span class="ms-2 text-[#333333] font-[700]">
          {{ blog?.author?.name }}
        </span>
      </p>

      <h1
        class="font-poppins text-[32px] lg:text-[40px] font-bold mb-[3rem] text-[#475766] relative z-10"
      >
        {{ blog?.title }}
      </h1>

      <div :class="blog?.banner_url ? 'flex justify-center' : ''">
        <img
          v-if="blog?.banner_url"
          :src="blog?.banner_url || '/images/blogs/img-single-blog.png'"
          :alt="blog?.title"
          class="rounded-xl mb-5 relative z-10"
        />

        <div
          v-else
          class="rounded-xl max-w-full mb-5 relative z-10 xl:h-[608px] bg-[#f4f4f4] flex justify-center items-center"
        >
          <img src="/images/blogs/blog-placeholder.png" :alt="blog?.title" />
        </div>
      </div>

      <div class="my-[5rem] mx-auto max-w-screen-lg prose">
        <div v-html="blog?.content"></div>
      </div>
    </div>

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem]"
    >
      <div class="flex md:justify-between mb-10">
        <h3 class="font-poppins text-[40px] font-[600] text-[#475766]">
          {{ $t("popular-post") }}
        </h3>
        <NuxtLink
          to="/blogs"
          class="font-[400] btn-ghost border-none transition-all duration-300 px-8 btn bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white"
        >
          {{ $t("view-all") }}
        </NuxtLink>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8"
      >
        <div v-for="post in popularPosts" :key="post.id">
          <img
            v-if="post.banner_url"
            :src="post.banner_url || '/images/blogs/img-blog-placeholder.png'"
            class="max-w-full mb-5 rounded-[16px] h-[270px]"
            :alt="post.title"
            loading="lazy"
          />

          <div
            v-else
            class="max-w-full mb-5 rounded-[16px] h-[270px] flex justify-center items-center bg-[#f4f4f4]"
          >
            <img
              src="/images/blogs/blog-placeholder.png"
              :alt="post.title"
              loading="lazy"
            />
          </div>

          <div class="flex mb-3">
            <span
              class="font-poppins text-[#999999] text-[12px] font-[500] me-3"
            >
              {{
                t(
                  new Date(post.published_at)
                    .toLocaleString("en-US", { month: "long" })
                    .toLowerCase()
                )
              }}
              {{ new Date(post.published_at).getDate() }},
              {{ new Date(post.published_at).getFullYear() }}
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
              post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
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

    <ContactEmail />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();

const { data: posts } = await useAsyncData("posts", () =>
  $fetch("https://blog.wsoftdev.space/api/getPosts")
);

const blog = ref(null);
const popularPosts = ref([]);

async function loadBlog(slug) {
  const current = posts.value.find((p) => p.slug === slug);
  if (current) {
    blog.value = await $fetch(
      `https://blog.wsoftdev.space/api/getPost/${current.id}`
    );
  }
}

function loadPopularPosts() {
  popularPosts.value = posts.value
    .filter((p) => p.category?.slug === "popular")
    .sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    )
    .slice(0, 3);
}

await loadBlog(route.params.slug);
loadPopularPosts();

watch(
  () => route.params.slug,
  async (newSlug) => {
    await loadBlog(newSlug);
  }
);

useSeoMeta({
  title: () => blog.value?.title || "Blog Post",
  description: () => blog.value?.excerpt || "",
  ogTitle: () => blog.value?.title || "Blog Post",
  ogDescription: () => blog.value?.excerpt || "",
  ogImage: () => blog.value?.banner_url || "",
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterTitle: () => blog.value?.title || "Blog Post",
  twitterDescription: () => blog.value?.excerpt || "",
  twitterImage: () => blog.value?.banner_url || "",
});
</script>
