import { _ as _sfc_main$1 } from './PageHeader-wdXI4Lm4.mjs';
import { d as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$2 } from './ContactEmail-uQrFUqdX.mjs';
import { withAsyncContext, computed, unref, withCtx, createVNode, createBlock, openBlock, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BMDHfz4P.mjs';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import { u as useAsyncData } from './asyncData-DNCptviF.mjs';
import './virtual_public-Dfg11rWA.mjs';
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
import 'vue-router';
import 'pinia';
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
    const { t } = useI18n();
    const {
      data: blogs,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "blogs",
      async () => {
        try {
          console.log("[CLIENT] Fetching blogs from /api/getBlogs...");
          const res = await $fetch("/api/getBlogs");
          console.log("[CLIENT] /api/getBlogs response:", res);
          if (!Array.isArray(res)) {
            console.warn("[CLIENT] Response is not an array:", res);
            return [];
          }
          console.log(`[CLIENT] Received ${res.length} blogs`);
          return res;
        } catch (err) {
          console.error("[CLIENT] Error fetching blogs:", err);
          return [];
        }
      },
      {
        server: true,
        client: true,
        transform: (data) => {
          console.log("[CLIENT] Transforming blogs:", data);
          return Array.isArray(data) ? data : [];
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    const showError = computed(() => {
      return error.value && (!blogs.value || blogs.value.length === 0);
    });
    function encodeSlug(slug) {
      if (!slug) return "";
      return encodeURIComponent(slug).replace(/%20/g, "-").replace(/%3A/g, "-").replace(/[^\w\-~.!*()]/g, "-");
    }
    const staticMetaTitle = t("blogs-title") || "Blogs - W SoftLabs";
    const staticMetaDescription = t("blogs-description") || t("blogs-text");
    const staticMetaKeywords = Array.from({ length: 10 }, (_, i) => t(`blogs-meta-keyword-${i + 1}`)).join(
      ", "
    ) || "blog, articles, insights, technology, AI, web development";
    const { canonicalUrl } = useCanonical();
    const stripHtml = (html) => {
      return (html == null ? void 0 : html.replace(/<[^>]+>/g, "")) || "";
    };
    const formatDate = (dateString) => {
      if (!dateString) return "";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      } catch {
        return "";
      }
    };
    const sortedBlogs = computed(() => {
      if (!blogs.value || blogs.value.length === 0) return [];
      return [...blogs.value].filter((blog) => blog && blog.published_at).sort((a, b) => {
        return new Date(b.published_at) - new Date(a.published_at);
      });
    });
    const updatedStructuredData = computed(() => {
      return useStructuredData("blog-index", {
        blogs: sortedBlogs.value || []
      });
    });
    useHead({
      title: staticMetaTitle,
      link: [
        {
          rel: "canonical",
          href: canonicalUrl.value
        }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(updatedStructuredData.value)
        }
      ],
      meta: [
        { name: "description", content: staticMetaDescription },
        { name: "keywords", content: staticMetaKeywords },
        { property: "og:title", content: staticMetaTitle },
        { property: "og:description", content: staticMetaDescription },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/images/thumbnail.png" },
        { property: "og:url", content: canonicalUrl.value },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: staticMetaTitle },
        { name: "twitter:description", content: staticMetaDescription }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ContactEmail = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        description: _ctx.$t("blogs-text")
      }, null, _parent));
      _push(`<div class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem] min-h-[60vh]">`);
      if (unref(pending) && (!unref(blogs) || unref(blogs).length === 0)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-5"><!--[-->`);
        ssrRenderList(6, (n) => {
          _push(`<div class="animate-pulse"><div class="bg-gray-200 rounded-[16px] h-[200px] mb-5"></div><div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div><div class="h-4 bg-gray-200 rounded w-1/3 mb-4"></div><div class="h-6 bg-gray-200 rounded w-full mb-3"></div><div class="h-4 bg-gray-200 rounded w-3/4"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (showError.value) {
        _push(`<div class="text-center py-10"><div class="text-red-500 font-poppins text-xl mb-4">${ssrInterpolate(_ctx.$t("failed-to-load-blogs"))}</div><button${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors">${ssrInterpolate(unref(pending) ? _ctx.$t("retrying") : _ctx.$t("retry"))}</button></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-5">`);
        if (sortedBlogs.value.length === 0) {
          _push(`<div class="col-span-3 text-center text-gray-500 font-poppins text-xl py-10">${ssrInterpolate(_ctx.$t("no-blogs"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(sortedBlogs.value, (blog) => {
          var _a, _b;
          _push(`<div class="group">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blogs/${encodeSlug(blog.slug)}`,
            class: "block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative overflow-hidden rounded-[16px] mb-5"${_scopeId}>`);
                if (blog.banner_url) {
                  _push2(`<img${ssrRenderAttr("src", blog.banner_url)} class="w-full h-full object-cover max-w-full md:h-[232px] lg:h-[280px] xl:h-[351px] transition-transform duration-300 group-hover:scale-105"${ssrRenderAttr("alt", blog == null ? void 0 : blog.title)} loading="lazy"${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full md:h-[232px] lg:h-[280px] xl:h-[351px] bg-[#f4f4f4] flex justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", blog == null ? void 0 : blog.title)} class="max-h-full max-w-full object-contain" loading="lazy"${_scopeId}></div>`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "relative overflow-hidden rounded-[16px] mb-5" }, [
                    blog.banner_url ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: blog.banner_url,
                      class: "w-full h-full object-cover max-w-full md:h-[232px] lg:h-[280px] xl:h-[351px] transition-transform duration-300 group-hover:scale-105",
                      alt: blog == null ? void 0 : blog.title,
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full md:h-[232px] lg:h-[280px] xl:h-[351px] bg-[#f4f4f4] flex justify-center items-center"
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: blog == null ? void 0 : blog.title,
                        class: "max-h-full max-w-full object-contain",
                        loading: "lazy"
                      }, null, 8, ["alt"])
                    ]))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="flex mb-3"><span class="font-poppins text-[#999999] text-[12px] font-[500] me-3">${ssrInterpolate(formatDate(blog.published_at))}</span><span class="font-poppins text-[#333333] text-[12px] font-[700]">${ssrInterpolate(((_a = blog.author) == null ? void 0 : _a.name) || "Unknown Author")}</span></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blogs/${encodeSlug(blog.slug)}`,
            class: "font-poppins font-[600] text-[24px] text-black mb-3 line-clamp-2 hover:text-blue-600 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(blog.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(blog.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden" style="${ssrRenderStyle({ "min-height": "72px", "max-height": "72px" })}">${(_b = blog.excerpt || stripHtml(blog.content || "").slice(0, 150) + "...") != null ? _b : ""}</div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blogs/${encodeSlug(blog.slug)}`,
            class: "font-poppins font-[700] text-[18px] text-[#2279E8] cursor-pointer group-hover:underline group-hover:underline-offset-3 transition-all duration-300 ease-in-out"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("read-more"))}... `);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("read-more")) + "... ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ContactEmail, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
