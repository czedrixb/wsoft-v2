import { _ as _export_sfc, u as useHead, a as _sfc_main$7, d as __nuxt_component_0$1 } from './server.mjs';
import { ref, withAsyncContext, computed, unref, withCtx, createTextVNode, createBlock, toDisplayString, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import { u as useAsyncData } from './asyncData-DNCptviF.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import 'emailjs-com';
import 'sweetalert2';
import 'vee-validate';
import 'yup';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { canonicalUrl } = useCanonical();
    const { locale, t } = useI18n();
    ref(false);
    const bannerError = ref(false);
    const {
      data: blogs,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
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
        client: true,
        transform: (data) => Array.isArray(data) ? data : []
      }
    )), __temp = await __temp, __restore(), __temp);
    const showError = computed(
      () => error.value && (!blogs.value || blogs.value.length === 0)
    );
    const featuredBlog = computed(() => {
      var _a, _b;
      if (!((_a = blogs.value) == null ? void 0 : _a.length)) return null;
      return (_b = [...blogs.value].filter((b) => b == null ? void 0 : b.published_at).sort((a, b) => new Date(b.published_at) - new Date(a.published_at))[0]) != null ? _b : null;
    });
    const stripHtml = (html) => (html == null ? void 0 : html.replace(/<[^>]+>/g, "")) || "";
    const encodeSlug = (slug) => {
      if (!slug) return "";
      return encodeURIComponent(slug).replace(/%20/g, "-").replace(/%3A/g, "-").replace(/[^\w\-~.!*()]/g, "-");
    };
    const staticMetaTitle = t("home-title");
    const staticMetaDescription = t("home-description");
    const staticMetaKeywords = [
      t("home-meta-keyword"),
      ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`))
    ].join(", ");
    const structuredData = useStructuredData("home");
    useHead({
      title: staticMetaTitle,
      link: [{ rel: "canonical", href: canonicalUrl.value }],
      script: [
        { type: "application/ld+json", innerHTML: JSON.stringify(structuredData) }
      ],
      meta: [
        { name: "description", content: staticMetaDescription },
        { name: "keywords", content: staticMetaKeywords },
        { property: "og:title", content: staticMetaTitle },
        { property: "og:description", content: staticMetaDescription },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/images/thumbnail.png" },
        { property: "og:url", content: canonicalUrl.value }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a5bb1e59><div class="my-20 md:my-40" data-v-a5bb1e59><div class="mx-auto px-4 md:px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10" data-v-a5bb1e59><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8" data-v-a5bb1e59><div data-v-a5bb1e59><h2 class="text-[40px] md:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent" data-v-a5bb1e59>${ssrInterpolate(unref(t)("newsroom.title"))}</h2><div class="mt-6 md:mt-8 space-y-4 md:space-y-5" data-v-a5bb1e59><p class="text-[#20252CE5] font-semibold text-[14px] md:text-[16px]" data-v-a5bb1e59>${ssrInterpolate(unref(t)("newsroom.welcome"))}</p><p class="text-[#20252CE5] font-semibold text-[14px] md:text-[16px]" data-v-a5bb1e59>${ssrInterpolate(unref(t)("newsroom.description1"))}</p><p class="text-[#20252CE5] font-semibold text-[14px] md:text-[16px]" data-v-a5bb1e59>${ssrInterpolate(unref(t)("newsroom.description2"))}</p></div><div class="mt-6 md:mt-8" data-v-a5bb1e59><div class="bg-black w-full" style="${ssrRenderStyle({ "height": "1px" })}" data-v-a5bb1e59></div></div></div><div data-v-a5bb1e59><div class="space-y-3" data-v-a5bb1e59>`);
      if (unref(pending) && (!unref(blogs) || unref(blogs).length === 0)) {
        _push(`<div class="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100 animate-pulse" style="${ssrRenderStyle({ minHeight: "300px", aspectRatio: "4/3" })}" data-v-a5bb1e59><div class="absolute inset-0 flex items-center justify-center" data-v-a5bb1e59><div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" data-v-a5bb1e59></div></div></div>`);
      } else if (showError.value) {
        _push(`<div class="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100 flex items-center justify-center" style="${ssrRenderStyle({ minHeight: "300px", aspectRatio: "4/3" })}" data-v-a5bb1e59><p class="text-red-500 font-semibold text-sm px-6 text-center" data-v-a5bb1e59>${ssrInterpolate(unref(t)("newsroom.failedToLoad"))}</p></div>`);
      } else {
        _push(`<div class="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100" style="${ssrRenderStyle({ minHeight: "300px", aspectRatio: "4/3" })}" data-v-a5bb1e59>`);
        if (featuredBlog.value && featuredBlog.value.banner_url && !bannerError.value) {
          _push(`<img${ssrRenderAttr("src", featuredBlog.value.banner_url)}${ssrRenderAttr("alt", featuredBlog.value.title)} class="w-full h-full object-cover" loading="eager" data-v-a5bb1e59>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: "/images/revamp/newsroom/news-1.png",
            alt: "Newsroom image",
            class: "w-full h-full object-cover",
            modifiers: { width: 800, quality: 80 },
            loading: "eager"
          }, null, _parent));
        }
        _push(`<div class="absolute inset-0" style="${ssrRenderStyle({
          backgroundColor: "#F8FAFC99",
          clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)"
        })}" data-v-a5bb1e59><div class="h-full p-4 md:p-6 lg:p-8 flex flex-col" data-v-a5bb1e59><h5 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#0A1628] line-clamp-3 max-w-lg" data-v-a5bb1e59>${ssrInterpolate(((_a = featuredBlog.value) == null ? void 0 : _a.title) || unref(t)("newsroom.featuredArticle.title"))}</h5><p class="mt-2 md:mt-3 lg:mt-5 text-[#20252CE5] font-semibold text-[12px] md:text-[14px] line-clamp-3 max-w-lg" data-v-a5bb1e59>${ssrInterpolate(featuredBlog.value ? featuredBlog.value.excerpt || stripHtml(featuredBlog.value.content || "").slice(
          0,
          150
        ) + "..." : unref(t)("newsroom.featuredArticle.description"))}</p><div class="mt-5 md:mt-20" data-v-a5bb1e59>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: featuredBlog.value ? `/revamp/newsroom/${encodeSlug(featuredBlog.value.slug)}` : "/revamp/newsroom",
          class: "border border-[#20252CE5] px-4 md:px-6 lg:px-8 py-1.5 md:py-2 text-[#20252CE5] text-[12px] md:text-[14px] font-semibold rounded-[22px] inline-flex items-center gap-2 hover:bg-[#20252CE5] hover:text-white transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("newsroom.readMore"))} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block md:w-4 md:h-4" data-v-a5bb1e59${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-a5bb1e59${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("newsroom.readMore")) + " ", 1),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "inline-block md:w-4 md:h-4"
                }, [
                  createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      }
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/newsroom/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5bb1e59"]]);

export { index as default };
