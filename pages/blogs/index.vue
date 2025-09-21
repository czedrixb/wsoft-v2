<template>
  <div>
    <PageHeader :title="$t('find-blogs')" :description="$t('blogs-text')" />

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem]"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-5"
      >
        <div v-for="blog in blogs" :key="blog.id">
          <img
            :src="blog.banner_url || '/images/blogs/img-blog-placeholder.png'"
            class="max-w-full md:h-[232px] lg:h-[280px] xl:h-[351px] mb-5 rounded-[16px]"
            :alt="blog?.title"
            loading="lazy"
          />

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

          <div class="font-poppins font-[600] text-[24px] text-black mb-3">
            {{ blog.title }}
          </div>

          <div
            class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden"
            style="min-height: 72px; max-height: 72px"
          >
            {{
              blog.excerpt ||
              blog.content.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
            }}
          </div>

          <NuxtLink
            :to="`/blogs/${blog.slug}`"
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
import { useAsyncData } from "#app";

const { t } = useI18n();

const { data: blogs } = await useAsyncData("blogs", () =>
  $fetch("https://blog.wsoftdev.space/api/getPosts")
);
</script>
