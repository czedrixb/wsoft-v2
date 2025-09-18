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
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl py-10 mb-[8rem]"
    >
      <p class="font-poppins text-[12px] text-[#999999] font-[500] mb-2">
        {{ blog?.date }}
        <span class="ms-2 text-[#333333] font-[700]">{{ blog?.author }}</span>
      </p>

      <h1
        class="font-poppins text-[32px] lg:text-[40px] font-bold mb-[3rem] text-[#475766] relative z-10"
      >
        {{ blog?.title }}
      </h1>

      <img
        v-if="blog?.image"
        :src="blog.image"
        alt="Blog Image"
        class="rounded-xl mb-5 relative z-10"
      />

      <div class="my-[5rem] mx-auto max-w-screen-lg">
        <p class="mt-5" v-for="(para, index) in blog?.content" :key="index">
          {{ para }}
        </p>
      </div>

      <img
        v-if="blog?.secondImage"
        :src="blog.secondImage"
        alt="Blog Image"
        class="rounded-xl mx-w-100 mx-auto mb-5"
      />

      <div class="my-[5rem] mx-auto max-w-screen-lg mb-[8rem]">
        <p
          class="mt-5"
          v-for="(para, index) in blog?.secondContent"
          :key="index"
        >
          {{ para }}
        </p>
      </div>

      <div
        class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl"
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
          <div v-for="i in 3" :key="i">
            <img
              src="/images/blogs/blog.png"
              class="max-w-full mb-5 rounded-[16px]"
              alt="Blog Image"
              loading="lazy"
            />

            <div class="flex mb-3">
              <span
                class="font-poppins text-[#999999] text-[12px] font-[500] me-3"
                >13 {{ $t("march") }} 2023</span
              >
              <span class="font-poppins text-[#333333] text-[12px] font-[700]"
                >John Doe</span
              >
            </div>

            <div class="font-poppins font-[600] text-[24px] text-black mb-3">
              Lorem ipsum dolor sit amet
            </div>

            <div
              class="font-poppins font-[400] text-[16px] text-[#666666] mb-3"
            >
              Lorem ipsum dolor sit amet, ius saepe primis ex, te commodo
              accusam salutatus quo. In ius facer postulant, te eum option
              oblique repudiandae.
            </div>

            <NuxtLink
              :to="`/blogs/${i === 1 ? 'lorem-ipsum' : 'second-blog'}`"
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
import { useRoute } from "vue-router";

const route = useRoute();

const blogs = [
  {
    slug: "lorem-ipsum",
    title: "Lorem ipsum dolor sit amet",
    date: "13 March 2023",
    author: "John Doe",
    image: "/images/blogs/img-single-blog.png",
    secondImage: "/images/blogs/img-single-blog2.png",
    content: [
      "Lorem ipsum dolor sit amet, ius saepe primis ex, te commodo accusam salutatus quo. In ius facer postulant, te eum option oblique repudiandae. Doctus option volutpat no pro, ea vis justo ludus democritum. Mei cu appellantur neglegentur. Ad pertinacia inciderint nam, at congue quaeque inciderint duo.",
      "Lorem ipsum dolor sit amet, ius saepe primis ex, te commodo accusam salutatus quo. In ius facer postulant, te eum option oblique repudiandae. Doctus option volutpat no pro, ea vis justo ludus democritum. Mei cu appellantur neglegentur. Ad pertinacia inciderint nam, at congue quaeque inciderint duo.",
    ],
    secondContent: [
      "Lorem ipsum dolor sit amet, ius saepe primis ex, te commodo accusam salutatus quo. In ius facer postulant, te eum option oblique repudiandae. Doctus option volutpat no pro, ea vis justo ludus democritum. Mei cu appellantur neglegentur. Ad pertinacia inciderint nam, at congue quaeque inciderint duo.",
    ],
  },
];

const blog = blogs.find((b) => b.slug === route.params.slug);
</script>
