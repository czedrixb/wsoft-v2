import { withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { useRoute as useRoute$1 } from 'vue-router';
import { f as useRoute, d as __nuxt_component_0$1, a as _sfc_main$7 } from './server.mjs';
import { _ as _sfc_main$2 } from './ContactEmail-uQrFUqdX.mjs';
import { _ as _imports_0 } from './virtual_public-BMDHfz4P.mjs';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
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

const _sfc_main$1 = {
  __name: "BlogHeader",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    blogMeta: {
      type: Object,
      default: null
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const route = useRoute$1();
    const props = __props;
    const showBlogMeta = computed(() => {
      return props.blogMeta && route.path.includes("/blogs/");
    });
    const formattedDate = computed(() => {
      var _a;
      if (!((_a = props.blogMeta) == null ? void 0 : _a.date)) return "";
      const date = new Date(props.blogMeta.date);
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    });
    const shouldShowDescription = computed(() => {
      if (!props.description) return false;
      const isBlogPage = route.path.includes("/blog");
      if (isBlogPage) {
        return props.description && props.description.trim() !== "";
      }
      return !!props.description;
    });
    const contentContainerClass = computed(() => {
      return showBlogMeta.value ? "w-[80%] 2xl:w-[60%]" : "";
    });
    const titleClass = computed(() => {
      const baseClasses = "font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-black mb-5";
      return showBlogMeta.value ? baseClasses : `${baseClasses} text-center`;
    });
    const descriptionClass = computed(() => {
      const baseClasses = "font-inter font-[300] text-[18px] text-black";
      return showBlogMeta.value ? baseClasses : `${baseClasses} text-center mx-auto w-[80%] 2xl:w-[60%]`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[24rem] sm:h-[19rem] md:h-[16rem] lg:h-[10rem] overflow-hidden relative mb-0" }, _attrs))}><div class="absolute inset-0 bg-[#ebf0f7] opacity-[.60] hidden lg:block"></div><div class="absolute inset-0 flex justify-center items-center"><div class="${ssrRenderClass(contentContainerClass.value)}">`);
      if (__props.pending) {
        _push(`<div class="animate-pulse w-full"><div class="h-6 bg-gray-200 rounded w-1/3 mb-3 mx-auto lg:mx-0"></div><div class="h-10 bg-gray-200 rounded w-3/4 mb-4 mx-auto lg:mx-0"></div><div class="h-5 bg-gray-200 rounded w-2/4 mx-auto lg:mx-0"></div></div>`);
      } else {
        _push(`<!--[-->`);
        if (showBlogMeta.value && __props.blogMeta) {
          _push(`<div class="flex flex-wrap items-center mb-1"><span class="font-poppins text-[#999999] text-[14px] font-[500] me-4">${ssrInterpolate(formattedDate.value)}</span><span class="font-poppins text-[#333333] text-[14px] font-[700]">${ssrInterpolate(__props.blogMeta.author)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(route).path == "/blogs") {
          _push(`<div class="text-center font-poppins uppercase font-[700] text-[16px] lg:text-[20px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("our-blogs"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="${ssrRenderClass(titleClass.value)}">${ssrInterpolate(__props.title)}</h1>`);
        if (shouldShowDescription.value) {
          _push(`<h2 class="${ssrRenderClass(descriptionClass.value)}">${ssrInterpolate(__props.description)}</h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute();
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
    const blog = computed(() => {
      if (!blogs.value || !Array.isArray(blogs.value)) return null;
      const decodedSlug = decodeSlug(route.params.slug);
      console.log("Looking for blog with slug:", decodedSlug);
      return blogs.value.find((b) => {
        if (b.slug === decodedSlug) return true;
        if (encodeSlug(b.slug) === route.params.slug) return true;
        return encodeSlug(b.slug).includes(route.params.slug) || route.params.slug.includes(encodeSlug(b.slug));
      });
    });
    const popularPosts = computed(() => {
      if (!blogs.value || !Array.isArray(blogs.value)) return [];
      return blogs.value.filter((post) => {
        var _a2;
        return post.id !== ((_a2 = blog.value) == null ? void 0 : _a2.id);
      }).sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).slice(0, 3);
    });
    const showError = computed(() => {
      return error.value && (!blogs.value || blogs.value.length === 0);
    });
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
    const blogMeta = computed(() => {
      var _a2;
      if (!blog.value) return null;
      return {
        date: formatDate(blog.value.published_at),
        author: ((_a2 = blog.value.author) == null ? void 0 : _a2.name) || "Unknown Author"
      };
    });
    const { canonicalUrl } = useCanonical();
    const metaTitle = computed(
      () => {
        var _a2;
        return ((_a2 = blog.value) == null ? void 0 : _a2.title) || t("blog-details") || "Blog Details - W SoftLabs";
      }
    );
    const metaDescription = computed(
      () => {
        var _a2;
        return ((_a2 = blog.value) == null ? void 0 : _a2.excerpt) || t("blog-description") || "Read this insightful blog post from W SoftLabs";
      }
    );
    const metaKeywords = computed(() => {
      var _a2;
      if (!blog.value) return "blog, article, insights, technology";
      const baseKeywords = ["blog", "article", "insights", "technology"];
      const titleKeywords = ((_a2 = blog.value.title) == null ? void 0 : _a2.toLowerCase().split(/\s+/)) || [];
      return [.../* @__PURE__ */ new Set([...baseKeywords, ...titleKeywords])].slice(0, 10).join(", ");
    });
    const structuredData = computed(
      () => useStructuredData("blog-post", blog.value || {})
    );
    useHead({
      title: metaTitle,
      htmlAttrs: {
        lang: "ko"
      },
      link: [
        {
          rel: "canonical",
          href: canonicalUrl.value
        }
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: metaDescription },
        { name: "keywords", content: metaKeywords },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        // Open Graph
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl.value },
        {
          property: "og:image",
          content: ((_a = blog.value) == null ? void 0 : _a.banner_url) || "/images/thumbnail.png"
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:site_name", content: "W SoftLabs" },
        { property: "og:locale", content: "ko_KR" },
        // Article specific
        { property: "article:published_time", content: (_b = blog.value) == null ? void 0 : _b.published_at },
        {
          property: "article:modified_time",
          content: ((_c = blog.value) == null ? void 0 : _c.updated_at) || ((_d = blog.value) == null ? void 0 : _d.published_at)
        },
        {
          property: "article:author",
          content: ((_f = (_e = blog.value) == null ? void 0 : _e.author) == null ? void 0 : _f.name) || "W SoftLabs"
        },
        { property: "article:section", content: "Technology" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: metaTitle },
        { name: "twitter:description", content: metaDescription },
        {
          name: "twitter:image",
          content: ((_g = blog.value) == null ? void 0 : _g.banner_url) || "/images/thumbnail.png"
        },
        { name: "twitter:site", content: "@wsoftlabs" },
        {
          name: "twitter:creator",
          content: ((_i = (_h = blog.value) == null ? void 0 : _h.author) == null ? void 0 : _i.twitter) || "@wsoftlabs"
        },
        { name: "author", content: ((_k = (_j = blog.value) == null ? void 0 : _j.author) == null ? void 0 : _k.name) || "W SoftLabs" }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(structuredData.value)
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_BlogHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$7;
      const _component_ContactEmail = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BlogHeader, {
        title: ((_a2 = blog.value) == null ? void 0 : _a2.title) || _ctx.$t("blog-details"),
        "blog-meta": blogMeta.value,
        pending: unref(pending)
      }, null, _parent));
      _push(`<div class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem] min-h-[60vh]">`);
      if (unref(pending) && !blog.value) {
        _push(`<div class="animate-pulse"><div class="bg-gray-200 rounded-[16px] h-[400px] mb-5"></div><div class="h-8 bg-gray-200 rounded w-3/4 mb-4"></div><div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div><div class="h-4 bg-gray-200 rounded w-1/3 mb-6"></div><div class="h-4 bg-gray-200 rounded w-full mb-2"></div><div class="h-4 bg-gray-200 rounded w-full mb-2"></div><div class="h-4 bg-gray-200 rounded w-3/4"></div></div>`);
      } else if (showError.value) {
        _push(`<div class="text-center py-10"><div class="text-red-500 font-poppins text-xl mb-4">${ssrInterpolate(_ctx.$t("failed-to-load-blog"))}</div><button${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors">${ssrInterpolate(unref(pending) ? _ctx.$t("retrying") : _ctx.$t("retry"))}</button></div>`);
      } else if (!blog.value && !unref(pending)) {
        _push(`<div class="text-center py-20"><div class="text-gray-500 font-poppins text-3xl mb-4">${ssrInterpolate(_ctx.$t("blog-not-found"))}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blogs",
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
        _push(`<!--[--><div class="relative overflow-hidden rounded-[16px] mb-[5rem] h-[400px] md:h-[450px] lg:h-[500px]">`);
        if (blog.value.banner_url) {
          _push(`<img${ssrRenderAttr("src", blog.value.banner_url)} class="absolute inset-0 w-full h-full object-cover"${ssrRenderAttr("alt", blog.value.title)} loading="lazy">`);
        } else {
          _push(`<div class="absolute inset-0 bg-[#f4f4f4] flex justify-center items-center"><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", blog.value.title)} class="max-h-full max-w-full object-contain" loading="lazy"></div>`);
        }
        _push(`</div><article class="max-w-4xl mx-auto"><div class="prose prose-lg max-w-none font-poppins text-[#333333] leading-relaxed prose-p:my-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-strong:text-[#222] prose-strong:font-semibold prose-headings:font-semibold prose-a:text-blue-600 prose-a:underline prose-img:rounded-xl">${(_b2 = blog.value.content) != null ? _b2 : ""}</div></article><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(pending) && !showError.value && blog.value) {
        _push(`<div class="px-5 mx-auto md:px-0 lg:px-[3rem] xl:max-w-screen-xl mt-20"><div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-3 sm:gap-0"><h3 class="font-poppins text-[40px] font-[600] text-black">${ssrInterpolate(_ctx.$t("popular-post"))}</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blogs",
          class: "font-[400] btn-ghost border-none transition-all duration-300 px-8 btn bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white self-start sm:self-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("view-all"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("view-all")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (popularPosts.value.length > 0) {
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8"><!--[-->`);
          ssrRenderList(popularPosts.value, (post) => {
            var _a3, _b3;
            _push(`<div class="group flex flex-col h-full"><div class="relative overflow-hidden rounded-[15px] flex flex-col h-full"><div class="relative overflow-hidden rounded-[16px] mb-5 h-[360px] md:h-[280px] xl:h-[360px] flex-shrink-0">`);
            _push(ssrRenderComponent(_component_NuxtImg, {
              class: "absolute top-0 left-0 right-0 z-10",
              src: "/images/blogs/blog-shadow.png",
              style: { "height": "30%" },
              width: "100%",
              height: "auto",
              loading: "lazy"
            }, null, _parent));
            _push(ssrRenderComponent(_component_NuxtImg, {
              class: "absolute bottom-0 left-0 right-0 z-10",
              src: "/images/blogs/blog-bottom-shadow.png",
              style: { "height": "30%" },
              width: "100%",
              height: "auto",
              loading: "lazy"
            }, null, _parent));
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/blogs/${encodeSlug(post.slug)}`,
              class: "block h-full"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_NuxtImg, {
                    src: post.banner_url || "/images/blogs/img-blog-placeholder.png",
                    class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                    alt: post.title,
                    loading: "lazy"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      src: post.banner_url || "/images/blogs/img-blog-placeholder.png",
                      class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                      alt: post.title,
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(_component_NuxtImg, {
              class: "absolute top-[8%] left-[55%] z-20",
              src: "/images/blogs/wsoft-blog-white.png",
              width: "145px",
              height: "20px",
              loading: "lazy"
            }, null, _parent));
            _push(`<div class="absolute rounded-md bg-[#2375E9] text-white px-3 py-1 top-[64%] left-[5%] z-20"><span class="font-poppins font-[600] text-[15px]"> Popular </span></div><div class="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/blogs/${encodeSlug(post.slug)}`,
              class: "block"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="font-poppins font-[600] text-[18px] md:text-[22px] text-white line-clamp-2 hover:text-blue-300 transition-colors"${_scopeId}>${ssrInterpolate(post.title)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-poppins font-[600] text-[18px] md:text-[22px] text-white line-clamp-2 hover:text-blue-300 transition-colors" }, toDisplayString(post.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div><div class="flex flex-col flex-1 min-h-0"><div class="flex mb-3"><span class="font-poppins text-[#999999] text-[12px] font-[500] me-3">${ssrInterpolate(formatDate(post.published_at))}</span><span class="font-poppins text-[#333333] text-[12px] font-[700]">${ssrInterpolate(((_a3 = post.author) == null ? void 0 : _a3.name) || "Unknown Author")}</span></div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/blogs/${encodeSlug(post.slug)}`,
              class: "font-poppins font-[600] text-[24px] text-black mb-3 line-clamp-2 hover:text-blue-600 transition-colors block"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(post.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(post.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="font-poppins font-[400] text-[16px] text-[#666666] mb-3 overflow-hidden flex-1 min-h-0" style="${ssrRenderStyle({ "max-height": "72px" })}"><div class="h-full overflow-hidden">${(_b3 = post.excerpt || stripHtml(post.content || "").slice(0, 150) + "...") != null ? _b3 : ""}</div></div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/blogs/${encodeSlug(post.slug)}`,
              class: "font-poppins font-[700] text-[18px] text-[#2279E8] cursor-pointer group-hover:underline group-hover:underline-offset-3 transition-all duration-300 ease-in-out inline-block mt-auto pt-3"
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
            _push(`</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="col-span-3 text-center text-gray-500 font-poppins text-xl py-10">${ssrInterpolate(_ctx.$t("no-popular"))}</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
