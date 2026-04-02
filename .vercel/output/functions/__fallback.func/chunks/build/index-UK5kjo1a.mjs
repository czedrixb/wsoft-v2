import { _ as _export_sfc, f as useRoute, u as useHead, d as __nuxt_component_0$1, a as _sfc_main$7 } from './server.mjs';
import { ref, withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute();
    const { canonicalUrl } = useCanonical();
    ref(false);
    const bannerError = ref(false);
    function encodeSlug(slug) {
      if (!slug) return "";
      return encodeURIComponent(slug).replace(/%20/g, "-").replace(/%3A/g, "-").replace(/[^\w\-~.!*()]/g, "-");
    }
    function decodeSlug(encodedSlug) {
      try {
        return decodeURIComponent(
          encodedSlug.replace(/-/g, "%20").replace(/_/g, "%5F")
        );
      } catch {
        return encodedSlug;
      }
    }
    const {
      data: blogs,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
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
        transform: (data) => Array.isArray(data) ? data : []
      }
    )), __temp = await __temp, __restore(), __temp);
    const showError = computed(
      () => error.value && (!blogs.value || blogs.value.length === 0)
    );
    const blog = computed(() => {
      var _a2, _b2;
      if (!((_a2 = blogs.value) == null ? void 0 : _a2.length)) return null;
      const decodedSlug = decodeSlug(route.params.news);
      return (_b2 = blogs.value.find((b) => {
        if (b.slug === decodedSlug) return true;
        if (encodeSlug(b.slug) === route.params.news) return true;
        return encodeSlug(b.slug).includes(route.params.news) || route.params.news.includes(encodeSlug(b.slug));
      })) != null ? _b2 : null;
    });
    const morePosts = computed(() => {
      var _a2;
      if (!((_a2 = blogs.value) == null ? void 0 : _a2.length)) return [];
      return [...blogs.value].filter((b) => {
        var _a3;
        return (b == null ? void 0 : b.published_at) && b.id !== ((_a3 = blog.value) == null ? void 0 : _a3.id);
      }).sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).slice(0, 2);
    });
    const stripHtml = (html) => (html == null ? void 0 : html.replace(/<[^>]+>/g, "")) || "";
    const metaTitle = computed(
      () => {
        var _a2;
        return ((_a2 = blog.value) == null ? void 0 : _a2.title) || t("blog-details") || "News - W SoftLabs";
      }
    );
    const metaDescription = computed(
      () => {
        var _a2;
        return ((_a2 = blog.value) == null ? void 0 : _a2.excerpt) || t("blog-description") || "W SoftLabs News";
      }
    );
    const structuredData = computed(
      () => useStructuredData("blog-post", blog.value || {})
    );
    useHead({
      title: metaTitle,
      link: [{ rel: "canonical", href: canonicalUrl.value }],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(structuredData.value)
        }
      ],
      meta: [
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl.value },
        {
          property: "og:image",
          content: ((_a = blog.value) == null ? void 0 : _a.banner_url) || "/images/thumbnail.png"
        },
        { property: "article:published_time", content: (_b = blog.value) == null ? void 0 : _b.published_at },
        {
          property: "article:author",
          content: ((_d = (_c = blog.value) == null ? void 0 : _c.author) == null ? void 0 : _d.name) || "W SoftLabs"
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: metaTitle },
        { name: "twitter:description", content: metaDescription },
        {
          name: "twitter:image",
          content: ((_e = blog.value) == null ? void 0 : _e.banner_url) || "/images/thumbnail.png"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5e253ed5><div class="my-20" data-v-5e253ed5><div class="mx-auto px-4 md:px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10" data-v-5e253ed5>`);
      if (unref(pending) && !blog.value) {
        _push(`<div class="animate-pulse" data-v-5e253ed5><div class="grid grid-cols-1 lg:grid-cols-2" data-v-5e253ed5><div class="lg:col-start-2 bg-gray-200 h-[400px] rounded-[14px]" data-v-5e253ed5></div></div><div class="my-[10rem]" data-v-5e253ed5><div class="h-12 bg-gray-200 rounded w-3/4 mb-6" data-v-5e253ed5></div><div class="h-6 bg-gray-200 rounded w-1/2" data-v-5e253ed5></div></div></div>`);
      } else if (showError.value) {
        _push(`<div class="text-center py-20" data-v-5e253ed5><div class="text-red-500 font-poppins text-xl mb-4" data-v-5e253ed5>${ssrInterpolate(_ctx.$t("failed-to-load-blog"))}</div><button${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors" data-v-5e253ed5>${ssrInterpolate(unref(pending) ? _ctx.$t("retrying") : _ctx.$t("retry"))}</button></div>`);
      } else if (!blog.value && !unref(pending)) {
        _push(`<div class="text-center py-20" data-v-5e253ed5><div class="text-gray-500 font-poppins text-3xl mb-4" data-v-5e253ed5>${ssrInterpolate(_ctx.$t("blog-not-found"))}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/revamp/news",
          class: "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("back-to-blogs"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("back-to-blogs")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (blog.value) {
        _push(`<!--[--><div class="grid grid-cols-1 lg:grid-cols-2" data-v-5e253ed5><div class="lg:col-start-2" data-v-5e253ed5>`);
        if (blog.value.banner_url && !bannerError.value) {
          _push(`<img${ssrRenderAttr("src", blog.value.banner_url)}${ssrRenderAttr("alt", blog.value.title)} class="w-full h-full object-cover" data-v-5e253ed5>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: "/images/revamp/newsroom/news-1.png",
            alt: "Newsroom image",
            class: "w-full h-full object-cover"
          }, null, _parent));
        }
        _push(`</div></div><div class="my-[10rem]" data-v-5e253ed5><div class="grid grid-cols-1 lg:grid-cols-2" data-v-5e253ed5><div data-v-5e253ed5><h2 class="text-[40px] md:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent" data-v-5e253ed5>${ssrInterpolate(blog.value.title)}</h2><div class="mt-5" data-v-5e253ed5><p class="text-[#64748B] text-[24px]" data-v-5e253ed5>${ssrInterpolate(blog.value.excerpt || stripHtml(blog.value.content || "").slice(0, 150) + "...")}</p></div></div></div></div><div class="my-[15rem]" data-v-5e253ed5><div class="grid grid-cols-1 lg:grid-cols-2 gap-12" data-v-5e253ed5><div data-v-5e253ed5><h5 class="text-[#64748B] text-[24px]" data-v-5e253ed5>${ssrInterpolate(((_a2 = blog.value.author) == null ? void 0 : _a2.name) || "")}</h5><div class="mt-8" data-v-5e253ed5><article class="prose prose-lg max-w-none font-poppins text-[#20252C] text-[14px] font-semibold leading-relaxed space-y-5 prose-p:my-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-strong:text-[#222] prose-strong:font-semibold prose-headings:font-semibold prose-a:text-blue-600 prose-a:underline prose-img:rounded-xl" data-v-5e253ed5>${(_b2 = blog.value.content) != null ? _b2 : ""}</article></div></div><div data-v-5e253ed5></div></div></div><div class="text-center" data-v-5e253ed5><h5 class="text-[#64748B] text-[24px]" data-v-5e253ed5> More from our News, Articles, and Blogs </h5></div><div class="mt-[5rem]" data-v-5e253ed5>`);
        if (morePosts.value.length > 0) {
          _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-5e253ed5><!--[-->`);
          ssrRenderList(morePosts.value, (post) => {
            _push(`<div class="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100" style="${ssrRenderStyle({ minHeight: "300px", aspectRatio: "4/3" })}" data-v-5e253ed5>`);
            if (post.banner_url) {
              _push(`<img${ssrRenderAttr("src", post.banner_url)}${ssrRenderAttr("alt", post.title)} class="w-full h-full object-cover" loading="lazy" data-v-5e253ed5>`);
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
            })}" data-v-5e253ed5><div class="h-full p-4 md:p-6 lg:p-8 flex flex-col" data-v-5e253ed5><h5 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#0A1628] line-clamp-3 max-w-lg" data-v-5e253ed5>${ssrInterpolate(post.title)}</h5><p class="mt-2 md:mt-3 lg:mt-5 text-[#20252CE5] font-semibold text-[12px] md:text-[14px] line-clamp-3 max-w-lg" data-v-5e253ed5>${ssrInterpolate(post.excerpt || stripHtml(post.content || "").slice(0, 150) + "...")}</p><div class="mt-5 md:mt-20" data-v-5e253ed5>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/revamp/news/${encodeSlug(post.slug)}`,
              class: "border border-[#20252CE5] px-4 md:px-6 lg:px-8 py-1.5 md:py-2 text-[#20252CE5] text-[12px] md:text-[14px] font-semibold rounded-[22px] inline-flex items-center gap-2 hover:bg-[#20252CE5] hover:text-white transition-colors duration-300"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Read More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block md:w-4 md:h-4" data-v-5e253ed5${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-5e253ed5${_scopeId}></path></svg>`);
                } else {
                  return [
                    createTextVNode(" Read More "),
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
              _: 2
            }, _parent));
            _push(`</div></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="text-center text-gray-500 font-poppins text-xl py-10" data-v-5e253ed5>${ssrInterpolate(_ctx.$t("no-popular"))}</div>`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/newsroom/[news]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e253ed5"]]);

export { index as default };
