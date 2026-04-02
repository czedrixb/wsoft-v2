import { f as useRoute, a as _sfc_main$7 } from './server.mjs';
import { computed, mergeProps, unref, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './virtual_public-Dfg11rWA.mjs';
import { _ as _sfc_main$2 } from './ContactEmail-uQrFUqdX.mjs';
import { _ as _imports_0 } from './virtual_public-DNFFkPCV.mjs';
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
import 'vue-i18n';
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
  __name: "OurWorksHeader",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    tools: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const imageLoaded = ref({});
    props.tools.forEach((tool) => {
      imageLoaded.value[tool] = true;
    });
    const handleImageError = (event, tool) => {
      event.target.style.display = "none";
      imageLoaded.value[tool] = false;
    };
    const handleImageLoad = (event, tool) => {
      imageLoaded.value[tool] = true;
      event.target.style.display = "block";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[30rem] sm:h-[19rem] md:h-[16rem] lg:h-[24rem] overflow-hidden relative mb-10" }, _attrs))}><video class="w-full h-full object-cover" autoplay loop muted playsinline><source${ssrRenderAttr("src", _imports_0$1)} type="video/mp4"> Your browser does not support the video tag. </video><div class="absolute inset-0 bg-main opacity-[.60] hidden lg:block"></div><div class="absolute inset-0 flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/about-us/hero-overlay.png",
        width: "1500px",
        height: "800px",
        alt: "hero-overlay"
      }, null, _parent));
      _push(`</div><div class="absolute inset-0 flex justify-center items-center"><div><h1 class="text-center lg:w-[80%] mx-auto font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-black mb-5">${ssrInterpolate(__props.title)}</h1><div class="flex flex-wrap items-center justify-center gap-3 lg:w-[70%] mx-auto"><div class="rounded-full shadow-sm font-poppins font-[400] text-[16px] md:text-[18px] text-black bg-[#FFFFFF4D] backdrop-blur-[5.3px] flex items-center jusitfy-center py-3 px-5">${ssrInterpolate(_ctx.$t("web-app"))}</div><div class="rounded-full shadow-sm font-poppins font-[400] text-[16px] md:text-[18px] text-black bg-[#FFFFFF4D] backdrop-blur-[5.3px] flex items-center jusitfy-center py-3 px-5">${ssrInterpolate(_ctx.$t("ui-design"))}</div><!--[-->`);
      ssrRenderList(__props.tools, (tool) => {
        _push(`<div class="rounded-full shadow-sm font-poppins font-[400] text-[16px] md:text-[18px] text-black bg-[#FFFFFF4D] backdrop-blur-[5.3px] flex items-center justify-center py-3 px-5">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          preload: "",
          width: "24px",
          height: "24px",
          sizes: "24px",
          alt: `${tool}-icon`,
          src: `/images/home/devtools/devicon_${tool}.webp`,
          class: "mr-2",
          onError: (e) => handleImageError(e, tool),
          onLoad: (e) => handleImageLoad(e, tool)
        }, null, _parent));
        _push(` ${ssrInterpolate(tool.charAt(0).toUpperCase() + tool.slice(1))}</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OurWorksHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const projects = {
      "academic-administration-management-system": {
        title: "academic-administration",
        big_image: "/images/our-works/updated-academic/academic.png",
        description: "comprehensive-program",
        image1: "updated-academic/dashboard.png",
        title1: "dashboard",
        text1: "dashboard-offers",
        image2: "updated-academic/organize.png",
        title2: "organize",
        text2: "student-data",
        image3: "updated-academic/calendar.png",
        title3: "calendar",
        text3: "calendar-feature",
        tools: ["laravel", "vue"]
      },
      "content-management-system": {
        title: "content-management",
        big_image: "/images/our-works/updated-cms/cms.png",
        description: "serves-engine",
        image1: "updated-cms/booklist.png",
        title1: "booklist",
        text1: "diplaying-list",
        image2: "updated-cms/video-enhanced.png",
        title2: "video-enhanced",
        text2: "creating-online",
        image3: "updated-cms/create.png",
        title3: "create",
        text3: "convert-offline",
        tools: ["laravel", "vue"]
      },
      blockchain: {
        title: "blockchain",
        big_image: "/images/our-works/blockchain.png",
        description: "niftle-description",
        image1: "blockchain/color.png",
        title1: "niftle-title1",
        title1_sub: "niftle-title1-sub",
        content1: [
          {
            tool_name: "Laravel",
            tool_text: "laravel-text"
          },
          {
            tool_name: "Vue.js",
            tool_text: "vue-text"
          },
          {
            tool_name: "Bootstrap",
            tool_text: "bootstrap-text"
          }
        ],
        image2: "blockchain/design.png",
        title2: "niftle-title2",
        content2: [
          {
            title: "neon-color",
            text: "neon-color-text"
          },
          {
            title: "3d-graphics",
            text: "3d-graphics-text"
          },
          {
            title: "futuristic-typo",
            text: "futuristic-typo-text"
          }
        ],
        image3: "blockchain/font.png",
        title3: "niftle-title3",
        content3: [
          {
            text: "niftle-text3-1"
          },
          {
            text: "niftle-text3-2"
          },
          {
            text: "niftle-text3-3"
          }
        ],
        tools: ["laravel", "vue", "bootstrap"]
      },
      "youtube-content-learning-system": {
        title: "youtube-content",
        big_image: "/images/our-works/updated-youtube/youtube.png",
        description: "revolutionizes-english",
        image1: "updated-youtube/video-selection.png",
        title1: "video-selection",
        text1: "asking-choose",
        image2: "updated-youtube/watch-learn.png",
        title2: "watch-learn",
        text2: "videos-english",
        image3: "updated-youtube/activity.png",
        title3: "activity",
        text3: "partake-activities",
        tools: ["laravel", "vue"]
      },
      "project-management-system": {
        title: "project-management",
        big_image: "/images/our-works/updated-pms/project-management.png",
        description: "developed-streamline",
        image1: "updated-pms/dashboard.png",
        title1: "dashboard",
        text1: "dashboard-provides",
        image2: "updated-pms/incorporate.png",
        title2: "incorporate",
        text2: "easily-add",
        image3: "updated-pms/arrange.png",
        title3: "arrange",
        text3: "effortlessly-organize"
      },
      "foreign-language-learning-system": {
        title: "foreign-language",
        big_image: "/images/our-works/foreign-language.png",
        description: "endeavors-modernize",
        image1: "foreign/dialogue.png",
        title1: "dialogue",
        text1: "watch-videos",
        image2: "foreign/expressions.png",
        title2: "expressions",
        text2: "expressions-presented",
        image3: "foreign/vocabulary.png",
        title3: "vocabulary",
        text3: "translated-korean"
      },
      "data-crawling": {
        title: "data-crawling",
        big_image: "/images/our-works/updated-data/data-crawling.png",
        description: "developed-streamline",
        image1: "updated-data/dashboard.png",
        title1: "dashboard",
        text1: "dashboard-comprehensive",
        image2: "updated-data/crawled-products.png",
        title2: "crawled-products",
        text2: "products-have",
        image3: "updated-data/database-update.png",
        title3: "Database Update",
        text3: "no-worry",
        tools: ["laravel", "bootstrap", "blade"]
      },
      "ai-tarot-master": {
        title: "ai-tarot",
        big_image: "/images/our-works/ai-tarot.png",
        description: "innovative-application",
        image1: "tarot/tarot-reading.png",
        title1: "tarot-reading",
        text1: "crafted-captivating",
        image2: "tarot/card-selection.png",
        title2: "card-selection",
        text2: "select-three",
        image3: "tarot/reading-result.png",
        title3: "reading-result",
        text3: "experience-past",
        tools: ["laravel", "bootstrap"]
      },
      "ai-review-analyzer": {
        title: "ai-review",
        big_image: "/images/our-works/updated-ai-review/ai-review.png",
        description: "meticulously-crafted",
        image1: "updated-ai-review/input.png",
        title1: "input",
        text1: "feature-allows",
        image2: "updated-ai-review/inquire.png",
        title2: "inquire",
        text2: "integrating-gpt",
        image3: "updated-ai-review/reviews.png",
        title3: "reviews",
        text3: "various-shopping",
        tools: ["vue", "laravel"]
      },
      "ai-powered-language-learning-app": {
        title: "ai-powered",
        big_image: "/images/our-works/updated-ai-powered/ai-powered.png",
        description: "versatile-mobile",
        image1: "updated-ai-powered/video-selection.png",
        title1: "video-selection",
        text1: "asking-choose",
        image2: "updated-ai-powered/watch-learn.png",
        title2: "watch-learn",
        text2: "videos-english",
        tools: ["vue", "laravel"]
      },
      "database-speed-test": {
        title: "database-speed-test",
        big_image: "/images/our-works/database-speed.png",
        description: "test-compare",
        image1: "tcp/accuracy.png",
        title1: "accuracy",
        text1: "following-tpc",
        tools: ["laravel", "bootstrap", "blade"]
      },
      "food-calorie-analyzer": {
        title: "food-calorie",
        big_image: "/images/our-works/updated-food-calorie/food-calorie.png",
        description: "food-calorie-text",
        image1: "updated-food-calorie/food-calorie-img1.png",
        title1: "food-calorie-title1",
        text1: "food-calorie-text1",
        image2: "updated-food-calorie/food-calorie-img2.png",
        title2: "food-calorie-title2",
        text2: "food-calorie-text2",
        image3: "updated-food-calorie/food-calorie-img3.png",
        title3: "food-calorie-title3",
        text3: "food-calorie-text3",
        tools: ["react", "firebase"]
      },
      "encouragement-generation-platform": {
        title: "encouragement-generation",
        big_image: "/images/our-works/updated-encouragement-generation/encouragement-generation.png",
        description: "encouragement-generation-text",
        image1: "updated-encouragement-generation/encouragement-generation-img1.png",
        title1: "encouragement-generation-title1",
        text1: "encouragement-generation-text1",
        title2: "encouragement-generation-title2",
        text2: "encouragement-generation-text2",
        title3: "encouragement-generation-title3",
        text3: "encouragement-generation-text3",
        tools: ["next.js", "genkit"]
      },
      "focused-task-management": {
        title: "focused-task",
        big_image: "/images/our-works/updated-focused-task/focused-task.png",
        description: "focused-task-text",
        title1: "focused-task-title1",
        text1: "focused-task-text1",
        title2: "focused-task-title2",
        text2: "focused-task-text2",
        title3: "focused-task-title3",
        text3: "focused-task-text3",
        tools: ["next.js", "supabase"]
      },
      "audio-conversion-platform": {
        title: "audio-conversion",
        big_image: "/images/our-works/updated-audio-conversion/audio-conversion-platform.png",
        description: "audio-conversion-text",
        image1: "updated-audio-conversion/audio-conversion-platform-img1.png",
        title1: "audio-conversion-title1",
        text1: "audio-conversion-text1",
        image2: "updated-audio-conversion/audio-conversion-platform-img2.png",
        title2: "audio-conversion-title2",
        text2: "audio-conversion-text2",
        image3: "updated-audio-conversion/audio-conversion-platform-img3.png",
        title3: "audio-conversion-title3",
        text3: "audio-conversion-text3",
        tools: ["vue", "laravel"]
      },
      "ai-powered-multilingual-translation": {
        title: "ai-multilingual",
        big_image: "/images/our-works/updated-ai-multilingual/ai-multilingual.png",
        description: "ai-multilingual-text",
        image1: "updated-ai-multilingual/ai-multilingual-img1.png",
        title1: "ai-multilingual-title1",
        text1: "ai-multilingual-text1",
        image2: "updated-ai-multilingual/ai-multilingual-img2.png",
        title2: "ai-multilingual-title2",
        text2: "ai-multilingual-text2",
        image3: "updated-ai-multilingual/ai-multilingual-img3.png",
        title3: "ai-multilingual-title3",
        text3: "ai-multilingual-text3",
        tools: ["next.js", "firebase"]
      }
    };
    const project = computed(() => projects[route.params.project]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H;
      const _component_OurWorksHeader = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$7;
      const _component_ContactEmail = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OurWorksHeader, {
        title: _ctx.$t((_a = unref(project)) == null ? void 0 : _a.title),
        tools: ((_b = unref(project)) == null ? void 0 : _b.tools) || []
      }, null, _parent));
      _push(`<div class="overflow-hidden flex justify-center max-w-full py-16 lg:mb-[8rem]">`);
      if (((_c = unref(project)) == null ? void 0 : _c.title) == "focused-task") {
        _push(ssrRenderComponent(_component_NuxtImg, {
          width: "500px",
          preload: "",
          alt: (_d = unref(project)) == null ? void 0 : _d.title,
          src: (_e = unref(project)) == null ? void 0 : _e.big_image
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "w-[100%]",
          height: "100%",
          preload: "",
          alt: (_f = unref(project)) == null ? void 0 : _f.title,
          src: (_g = unref(project)) == null ? void 0 : _g.big_image
        }, null, _parent));
      }
      _push(`</div><div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mb-10"><h2 class="text-center font-poppins font-[600] text-[25px] lg:text-[30px] md:px-0 text-black mb-2">${ssrInterpolate(_ctx.$t("project-overview"))}</h2><p class="font-inter font-[300] text-[18px] text-justify mx-auto text-black lg:w-[80%] mb-[4rem] lg:mb-[5rem]">${ssrInterpolate(_ctx.$t((_h = unref(project)) == null ? void 0 : _h.description))}</p>`);
      if (unref(project).title == "encouragement-generation") {
        _push(`<div>`);
        if (unref(project).image1) {
          _push(`<div class="relative mb-12 md:mb-[5rem] md:py-[5rem]">`);
          if (unref(project).image1) {
            _push(`<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5"><div class="absolute left-0 md:left-[-67%] lg:left-[-37%] z-0"><img${ssrRenderAttr("src", _imports_0)} class="max-w-full" alt="shadow-overlay" loading="lazy"></div>`);
            _push(ssrRenderComponent(_component_NuxtImg, {
              width: "800px",
              height: "100%",
              class: "z-20",
              preload: "",
              alt: (_i = unref(project)) == null ? void 0 : _i.image1,
              src: `/images/our-works/${(_j = unref(project)) == null ? void 0 : _j.image1}`
            }, null, _parent));
            _push(`<div><div class="lg:w-[80%] mx-auto z-20 mb-10"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_k = unref(project)) == null ? void 0 : _k.title1))}</h2>`);
            if (unref(project).title1_sub) {
              _push(`<h3 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_l = unref(project)) == null ? void 0 : _l.title1_sub))}</h3>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(project).content1) {
              _push(`<div class="mt-2"><!--[-->`);
              ssrRenderList(unref(project).content1, (content) => {
                _push(`<div class="d-flex align-center mb-1"><span class="text-left font-inter font-medium text-[18px] mx-auto text-black mb-0">${ssrInterpolate(_ctx.$t(content.tool_name))}: </span><span class="text-left font-inter font-[300] text-[18px] mx-auto text-black mb-0">${ssrInterpolate(_ctx.$t(content.tool_text))}</span></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_m = unref(project)) == null ? void 0 : _m.text1))}</p>`);
            }
            _push(`</div><div class="lg:w-[80%] mx-auto z-20 mb-10"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_n = unref(project)) == null ? void 0 : _n.title2))}</h2><p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_o = unref(project)) == null ? void 0 : _o.text2))}</p></div><div class="lg:w-[80%] mx-auto z-20"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_p = unref(project)) == null ? void 0 : _p.title3))}</h2><p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_q = unref(project)) == null ? void 0 : _q.text3))}</p></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (unref(project).title == "focused-task") {
        _push(`<div><div class="relative mb-12 md:mb-[5rem] md:py-[5rem]"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5"><div class="lg:w-[80%] mx-auto z-20 mb-10"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_r = unref(project)) == null ? void 0 : _r.title1))}</h2><p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_s = unref(project)) == null ? void 0 : _s.text1))}</p></div><div class="lg:w-[80%] mx-auto z-20 mb-10"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_t = unref(project)) == null ? void 0 : _t.title2))}</h2><p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_u = unref(project)) == null ? void 0 : _u.text2))}</p></div><div class="lg:w-[80%] mx-auto z-20"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_v = unref(project)) == null ? void 0 : _v.title3))}</h2><p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_w = unref(project)) == null ? void 0 : _w.text3))}</p></div></div></div></div>`);
      } else {
        _push(`<div>`);
        if (unref(project).image1) {
          _push(`<div class="relative mb-12 md:mb-[5rem] md:py-[5rem]">`);
          if (unref(project).image1) {
            _push(`<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5"><div class="absolute left-0 md:left-[-67%] lg:left-[-37%] z-0"><img${ssrRenderAttr("src", _imports_0)} class="max-w-full" alt="shadow-overlay" loading="lazy"></div>`);
            _push(ssrRenderComponent(_component_NuxtImg, {
              width: "800px",
              height: "100%",
              class: "z-20",
              preload: "",
              alt: (_x = unref(project)) == null ? void 0 : _x.image1,
              src: `/images/our-works/${(_y = unref(project)) == null ? void 0 : _y.image1}`
            }, null, _parent));
            _push(`<div class="lg:w-[80%] mx-auto z-20"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_z = unref(project)) == null ? void 0 : _z.title1))}</h2>`);
            if (unref(project).title1_sub) {
              _push(`<h3 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black">${ssrInterpolate(_ctx.$t((_A = unref(project)) == null ? void 0 : _A.title1_sub))}</h3>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(project).content1) {
              _push(`<div class="mt-2"><!--[-->`);
              ssrRenderList(unref(project).content1, (content) => {
                _push(`<div class="d-flex align-center mb-1"><span class="text-left font-inter font-medium text-[18px] mx-auto text-black mb-0">${ssrInterpolate(_ctx.$t(content.tool_name))}: </span><span class="text-left font-inter font-[300] text-[18px] mx-auto text-black mb-0">${ssrInterpolate(_ctx.$t(content.tool_text))}</span></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_B = unref(project)) == null ? void 0 : _B.text1))}</p>`);
            }
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(project).image2) {
          _push(`<div class="relative mb-12 md:mb-[5rem] md:py-[5rem]"><div class="absolute right-0 md:right-[-67%] md:bottom-0 lg:right-[-37%] z-0"><img${ssrRenderAttr("src", _imports_0)} class="max-w-full" alt="shadow-overlay" loading="lazy"></div><div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5"><div class="lg:w-[80%] mx-auto order-2 md:order-1 z-20"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black mb-2">${ssrInterpolate(_ctx.$t((_C = unref(project)) == null ? void 0 : _C.title2))}</h2>`);
          if (unref(project).content2) {
            _push(`<div><!--[-->`);
            ssrRenderList(unref(project).content2, (content, index) => {
              _push(`<div class="d-flex align-center mb-1"><span class="text-left font-inter fw-bold font-medium text-[18px] mx-auto text-black mb-0">${ssrInterpolate(_ctx.$t(content.title))}: </span><span class="text-left font-inter font-[300] text-[18px] mx-auto text-black mb-0">${ssrInterpolate(_ctx.$t(content.text))}</span></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<p class="text-left font-inter font-[300] text-[18px] mx-auto text-black">${ssrInterpolate(_ctx.$t((_D = unref(project)) == null ? void 0 : _D.text2))}</p>`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            width: "800px",
            height: "100%",
            preload: "",
            alt: "academic",
            src: `/images/our-works/${(_E = unref(project)) == null ? void 0 : _E.image2}`,
            class: "order-1 md:order-2 z-20"
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(project).image3) {
          _push(`<div class="relative mb-12 md:mb-[5rem] md:py-[5rem]"><div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl"><div class="absolute left-0 md:left-[-67%] md:bottom-[5%] lg:left-[-37%] z-0"><img${ssrRenderAttr("src", _imports_0)} class="max-w-full" alt="shadow-overlay" loading="lazy"></div><div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mb-12 md:mb-[5rem]">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            width: "800px",
            height: "100%",
            class: "z-20",
            preload: "",
            alt: "academic",
            src: `/images/our-works/${(_F = unref(project)) == null ? void 0 : _F.image3}`
          }, null, _parent));
          _push(`<div class="lg:w-[80%] mx-auto z-20"><h2 class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black mb-2">${ssrInterpolate(_ctx.$t((_G = unref(project)) == null ? void 0 : _G.title3))}</h2>`);
          if (unref(project).content3) {
            _push(`<div><ul class="list-disc pl-5"><!--[-->`);
            ssrRenderList(unref(project).content3, (content, index) => {
              _push(`<li class="text-left font-inter font-[300] text-[18px] text-black">${ssrInterpolate(_ctx.$t(content.text))}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<p class="text-left font-inter font-[300] text-[18px] text-black">${ssrInterpolate(_ctx.$t((_H = unref(project)) == null ? void 0 : _H.text3))}</p>`);
          }
          _push(`</div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-works/[project]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
