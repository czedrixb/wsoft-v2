<template>
  <div>
    <PageHeader :title="$t('find-blogs')" :description="$t('blogs-text')" />

    <div
      :class="[
        'px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem] min-h-[60vh]',
        !pending ? 'flex items-center justify-center' : '',
      ]"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-5"
      >
        <template v-if="pending">
          <div v-for="n in 6" :key="n" class="animate-pulse">
            <div class="bg-gray-200 rounded-[16px] h-[200px] mb-5"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div class="h-6 bg-gray-200 rounded w-full mb-3"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </template>

        <template v-else-if="sortedBlogs?.length === 0">
          <div
            class="col-span-3 text-center text-gray-500 font-poppins text-3xl"
          >
            {{ $t("no-blogs") }}
          </div>
        </template>

        <template v-else>
          <div v-for="blog in sortedBlogs" :key="blog.id" class="group">
            <NuxtLink :to="`/blogs/${blog.slug}`" class="block">
              <div class="relative overflow-hidden rounded-[16px] mb-5">
                <img
                  v-if="blog.banner_url"
                  :src="blog.banner_url"
                  class="w-full h-full object-cover max-w-full md:h-[232px] lg:h-[280px] xl:h-[351px]"
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
              <span class="font-poppins text-[#333333] text-[12px] font-[700]">
                {{ blog.author?.name }}
              </span>
            </div>

            <NuxtLink
              :to="`/blogs/${blog.slug}`"
              class="font-poppins font-[600] text-[24px] text-black mb-3"
            >
              {{ blog.title }}
            </NuxtLink>

            <div
              class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden"
              style="min-height: 72px; max-height: 72px"
              v-html="
                blog.excerpt || stripHtml(blog.content).slice(0, 150) + '...'
              "
            />
            <NuxtLink
              :to="`/blogs/${blog.slug}`"
              class="font-poppins font-[700] text-[18px] text-[#2279E8] cursor-pointer group-hover:underline group-hover:underline-offset-3 transition-all duration-300 ease-in-out"
            >
              {{ $t("read-more") }}...
            </NuxtLink>
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
import { useAsyncData } from "#app";

const { t } = useI18n();

const { data: blogs, pending } = await useAsyncData("blogs", () =>
  $fetch("https://blog.wsoftdev.space/api/getPosts")
);

const stripHtml = (html) => {
  return html.replace(/<[^>]+>/g, "");
};

const sortedBlogs = computed(() => {
  if (!blogs.value) return [];

  return [...blogs.value].sort((a, b) => {
    return new Date(b.published_at) - new Date(a.published_at);
  });
});
</script>
