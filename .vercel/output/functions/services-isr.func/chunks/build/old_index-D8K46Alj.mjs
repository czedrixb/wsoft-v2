import { _ as _export_sfc, u as useHead, c as __nuxt_component_0$2, d as __nuxt_component_0$1, a as _sfc_main$7, b as useNuxtApp } from './server.mjs';
import { ref, computed, withCtx, createVNode, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { f as publicAssetsURL } from '../_/nitro.mjs';
import { a as _imports_2, _ as __nuxt_component_4 } from './virtual_public-Ba80T58h.mjs';
import { _ as _sfc_main$2 } from './ContactEmail-uQrFUqdX.mjs';
import { _ as _imports_0$1 } from './virtual_public-DNFFkPCV.mjs';
import { useI18n } from 'vue-i18n';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import { u as useInterval } from './useInterval-Fw70iFP5.mjs';
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
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './interval-DGKf6Zoj.mjs';

const _sfc_main$1 = {
  __name: "BriefServices",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap, $ScrollTrigger } = useNuxtApp();
    const services = ref([
      {
        number: 1,
        title: "action-detection",
        slogan: "reading-behavior",
        description: "offers-advanced",
        image: "/images/home/action-detection.png",
        progress: 0
      },
      {
        number: 2,
        title: "rag",
        slogan: "retrieving-knowledge",
        description: "rag-technology",
        image: "/images/home/rag-new.png",
        progress: 20
      },
      {
        number: 3,
        title: "data-driven",
        slogan: "reimagining-business",
        description: "data-driven-text",
        image: "/images/home/web-development.png",
        progress: 40
      },
      {
        number: 4,
        title: "web-app",
        description: "build-innovative",
        image: "/images/home/web-application.png",
        progress: 60
      },
      {
        number: 5,
        title: "ui-design",
        description: "design-intuitive",
        image: "/images/home/ui-design.png",
        progress: 80
      },
      {
        number: 6,
        title: "ai-utilization",
        description: "cut-customer",
        image: "/images/home/ai-utilization-new.png",
        progress: 100
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:block" }, _attrs))} data-v-46be2845><div class="scroll-container" data-v-46be2845><div class="hidden lg:block" data-v-46be2845><div class="service-sections overflow-y-scroll h-screen" data-v-46be2845><!--[-->`);
      ssrRenderList(services.value, (service, key) => {
        _push(`<div class="service-section h-screen grid grid-cols-2 items-center gap-y-8 lg:flex-row mb-14 w-full" data-v-46be2845><div class="left-side text-left" data-v-46be2845><div data-v-46be2845><div class="radial-progress bg-white text-[#C1C1C1] mb-5" style="${ssrRenderStyle({ "--value": "100", "--size": "3rem", "--thickness": "2px" })}" role="progressbar" data-v-46be2845>${ssrInterpolate(service.number)}</div></div><div class="text-black font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%]" data-v-46be2845>${ssrInterpolate(_ctx.$t(service.title))}</div>`);
        if (service.slogan) {
          _push(`<div class="mt-5" data-v-46be2845><p class="font-inter text-[18px] text-black font-[600] lg:w-[80%] xl:w-[70%]" data-v-46be2845>${ssrInterpolate(_ctx.$t(service.slogan))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="font-inter text-[18px] text-black font-[300] lg:w-[80%] xl:w-[70%] mt-5" data-v-46be2845>${ssrInterpolate(_ctx.$t(service.description))}</p></div><div class="right-side flex justify-end" data-v-46be2845>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: service.image,
          width: "650px",
          height: "100%",
          alt: "web-development"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BriefServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-46be2845"]]);
const _imports_0 = publicAssetsURL("/images/home/home-hero-bg.webm");
const _imports_3 = publicAssetsURL("/images/home/project-1.png");
const _imports_4 = publicAssetsURL("/images/home/shadow-project.png");
const _imports_5 = publicAssetsURL("/images/home/project-4.png");
const _imports_6 = publicAssetsURL("/images/home/project-1-mobile.png");
const _imports_7 = publicAssetsURL("/images/home/project-2.png");
const _imports_8 = publicAssetsURL("/images/home/project-3-mobile.png");
const _imports_9 = publicAssetsURL("/images/home/project-4-mobile.png");
const _sfc_main = {
  __name: "old_index",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const heroWords = [
      "hero-1",
      "hero-2",
      "hero-3",
      "hero-4",
      "hero-5",
      "hero-6",
      "hero-7"
    ];
    const services = ref([
      {
        number: 1,
        title: "action-detection",
        slogan: "reading-behavior",
        description: "offers-advanced",
        image: "/images/home/action-detection.png",
        progress: 0
      },
      {
        number: 2,
        title: "rag",
        slogan: "retrieving-knowledge",
        description: "rag-technology",
        image: "/images/home/rag-new.png",
        progress: 20
      },
      {
        number: 3,
        title: "data-driven",
        slogan: "reimagining-business",
        description: "data-driven-text",
        image: "/images/home/web-development.png",
        progress: 40
      },
      {
        number: 4,
        title: "web-app",
        description: "build-innovative",
        image: "/images/home/web-application.png",
        progress: 60
      },
      {
        number: 5,
        title: "ui-design",
        description: "design-intuitive",
        image: "/images/home/ui-design.png",
        progress: 80
      },
      {
        number: 6,
        title: "ai-utilization",
        description: "cut-customer",
        image: "/images/home/ai-utilization-new.png",
        progress: 100
      }
    ]);
    const currentIndex = ref(0);
    computed(() => heroWords[currentIndex.value]);
    useInterval();
    const { locale, t } = useI18n();
    computed(() => locale.value);
    const staticMetaTitle = t("home-title");
    const staticMetaDescription = t("home-description");
    const staticMetaKeywords = [
      t("home-meta-keyword"),
      ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`))
    ].join(", ");
    const structuredData = useStructuredData("home");
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
          innerHTML: JSON.stringify(structuredData)
        }
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
      const _component_ClientOnly = __nuxt_component_0$2;
      const _component_NuxtImg = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_BriefServices = __nuxt_component_3;
      const _component_TechStackMarquee = __nuxt_component_4;
      const _component_ContactEmail = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f6e1356c><div class="w-full h-[42rem] md:h-[39rem] lg:h-[38rem] xl:h-[42rem] relative overflow-hidden" data-v-f6e1356c><video class="w-full h-full object-cover" autoplay loop muted playsinline data-v-f6e1356c><source${ssrRenderAttr("src", _imports_0)} type="video/webm" data-v-f6e1356c> Your browser does not support the video tag. </video><div class="absolute inset-0 bg-[#ebf0f7] opacity-[.80]" data-v-f6e1356c></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<p class="text-center text-black opacity-100 font-[300] font-[inter] text-[18px] lg:text-[20px] px-5 md:px-0 mb-[3rem] lg:pt-[2rem]" data-v-f6e1356c>${ssrInterpolate(_ctx.$t("elevate-business"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex justify-center z-50",
        to: "/contact-us"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="relative font-[400] text-[18px] px-8 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90" data-v-f6e1356c${_scopeId}><span class="relative z-10" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("start-project"))}</span><span class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80" data-v-f6e1356c${_scopeId}></span><span class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]" data-v-f6e1356c${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", { class: "relative font-[400] text-[18px] px-8 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90" }, [
                createVNode("span", { class: "relative z-10" }, toDisplayString(_ctx.$t("start-project")), 1),
                createVNode("span", { class: "absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80" }),
                createVNode("span", { class: "absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pointer-events-none absolute right-[-104%] bottom-[10%] md:bottom-[-15%] md:right-[-121%] lg:right-[-80%] lg:bottom-[-7%] xl:right-[-45%]" data-v-f6e1356c><img${ssrRenderAttr("src", _imports_0$1)} class="hidden md:block w-[800px] md:w-[1500px] lg:w-[1500px]" alt="shadow-overlay" loading="lazy" data-v-f6e1356c></div><div class="pointer-events-none absolute left-[-104%] bottom-[10%] md:bottom-[-15%] md:left-[-121%] lg:left-[-80%] lg:bottom-[-7%] xl:left-[-45%]" data-v-f6e1356c><img${ssrRenderAttr("src", _imports_0$1)} class="hidden md:block w-[800px] md:w-[1500px] lg:w-[1500px]" alt="shadow-overlay" loading="lazy" data-v-f6e1356c></div></div><div class="px-8 md:px-0 md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto md:mt-[15rem]" data-v-f6e1356c><div class="relative" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="absolute top-1/2 left-1/2 2xl:left-[68%] -translate-x-1/2 -translate-y-1/2 z-20 opacity-100 w-full" data-v-f6e1356c><img${ssrRenderAttr("src", _imports_2)} class="hidden md:block w-[5000px] xl:w-[1500px]" alt="shadow-overlay" loading="lazy" data-v-f6e1356c></div><div class="z-20 relative" data-v-f6e1356c><div class="flex justify-center mx-auto mb-5" data-v-f6e1356c><h1 class="text-center font-poppins font-[600] text-[25px] md:w-[55%] xl:w-[40%] lg:text-[40px] md:px-0 text-black mb-5" data-v-f6e1356c>${ssrInterpolate(_ctx.$t("trusted-partner"))}</h1></div><div class="flex justify-center mb-5" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/home/partner.png",
        width: "841px",
        height: "448.35px",
        alt: "partner"
      }, null, _parent));
      _push(`</div><p class="font-inter font-[300] text-[18px] lg:text-[20px] text-center mx-auto text-black lg:w-[50%]" data-v-f6e1356c>${ssrInterpolate(_ctx.$t("delivers-cutting"))}</p></div></div></div><div class="mx-auto px-8 md:px-0 md:max-w-[90%] lg:max-w-[90%] xl:max-w-[85%]" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_BriefServices, null, null, _parent));
      _push(`<div class="block lg:hidden mt-[5rem] md:mt-[8rem]" data-v-f6e1356c><!--[-->`);
      ssrRenderList(services.value, (service, key) => {
        _push(`<div class="flex flex-col relative justify-between items-center gap-y-8 mb-14" data-v-f6e1356c><div class="text-left lg:w-[45%]" data-v-f6e1356c><div class="block lg:hidden" data-v-f6e1356c><div class="radial-progress bg-white text-[#C1C1C1] mb-5" style="${ssrRenderStyle({ "--value": "100", "--size": "3rem", "--thickness": "2px" })}" role="progressbar" data-v-f6e1356c>${ssrInterpolate(service.number)}</div></div><h2 class="text-black font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%]" data-v-f6e1356c>${ssrInterpolate(_ctx.$t(service.title))}</h2>`);
        if (service.slogan) {
          _push(`<div class="mt-5" data-v-f6e1356c><p class="font-inter text-[18px] lg:text-[20px] text-black font-[600] lg:w-[80%]" data-v-f6e1356c>${ssrInterpolate(_ctx.$t(service.slogan))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="font-inter text-[18px] lg:text-[20px] text-black font-[300] lg:w-[80%] mt-5" data-v-f6e1356c>${ssrInterpolate(_ctx.$t(service.description))}</p></div><div class="flex justify-end" data-v-f6e1356c><img${ssrRenderAttr("src", service.image)} class="lg:w-[430px] xl:w-[500px]" alt="web-development" loading="lazy" data-v-f6e1356c></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10" data-v-f6e1356c><div class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] px-5 md:px-0 text-black mb-3" data-v-f6e1356c>${ssrInterpolate(_ctx.$t("successful-projects"))}</div><p class="font-inter font-[300] text-[18px] lg:text-[20px] text-black text-center lg:max-w-screen-sm mx-auto mb-12" data-v-f6e1356c>${ssrInterpolate(_ctx.$t("dedicated-helping"))}</p><div class="hidden md:block mb-[3rem]" data-v-f6e1356c><div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-2 md:gap-3 lg:gap-5" data-v-f6e1356c><div class="md:col-span-2 h-1px md:flex" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/academic-administration-management-system",
        class: "relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="dashboard" loading="lazy" format="webp" quality="75" sizes="sm:100vw md:50vw lg:400px" data-v-f6e1356c${_scopeId}><div class="absolute left-[0%] md:left-[-2%] lg:left-[0%] md:bottom-[0.5%] lg:bottom-[0.5%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt="shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("academic-administration"))}</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3,
                alt: "dashboard",
                loading: "lazy",
                format: "webp",
                quality: "75",
                sizes: "sm:100vw md:50vw lg:400px"
              }),
              createVNode("div", { class: "absolute left-[0%] md:left-[-2%] lg:left-[0%] md:bottom-[0.5%] lg:bottom-[0.5%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: "shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("academic-administration")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:flex" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/content-management-system",
        class: "relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/home/project-2.png",
              class: "max-w-full md:h-[255.23px] lg:h-[350.77px] xl:h-[503.39px] 2xl:h-[545.56px]",
              alt: "content-management"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute left-[0%] bottom-[0%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt=" shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("content-management"))}</div></div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/images/home/project-2.png",
                class: "max-w-full md:h-[255.23px] lg:h-[350.77px] xl:h-[503.39px] 2xl:h-[545.56px]",
                alt: "content-management"
              }),
              createVNode("div", { class: "absolute left-[0%] bottom-[0%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: " shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("content-management")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:flex" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/foreign-language-learning-system",
        class: "relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/home/project-3.png",
              class: "max-w-full md:h-[255.17px] lg:h-[350.67px] xl:h-[503.25px] xl:w-[100%] 2xl:h-[545.41px]",
              alt: " mob-app-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute left-[0%] md:left-[-2%] lg:left-[0%] bottom-[0%] md:bottom-[0%] lg:bottom-[0%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt=" shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("foreign-language"))}</div></div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/images/home/project-3.png",
                class: "max-w-full md:h-[255.17px] lg:h-[350.67px] xl:h-[503.25px] xl:w-[100%] 2xl:h-[545.41px]",
                alt: " mob-app-2"
              }),
              createVNode("div", { class: "absolute left-[0%] md:left-[-2%] lg:left-[0%] bottom-[0%] md:bottom-[0%] lg:bottom-[0%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: " shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("foreign-language")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-2 md:flex" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/blockchain",
        class: "relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_5)} class="w-[100%] h-[auto]" alt="diginest" loading="lazy" data-v-f6e1356c${_scopeId}><div class="absolute left-[0%] md:left-[-1%] lg:left-[0%] xl:left-[0%] md:bottom-[0%] lg:bottom-[0.5%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt=" shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("blockchain"))}</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_5,
                class: "w-[100%] h-[auto]",
                alt: "diginest",
                loading: "lazy"
              }),
              createVNode("div", { class: "absolute left-[0%] md:left-[-1%] lg:left-[0%] xl:left-[0%] md:bottom-[0%] lg:bottom-[0.5%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: " shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("blockchain")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex flex-col gap-y-5 md:hidden mb-[3rem]" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/academic-administration-management-system",
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="dashboard-mobs" data-v-f6e1356c${_scopeId}><div class="absolute left-[0%] bottom-[0%] opacity-100" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt="shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("academic-administration"))}</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_6,
                alt: "dashboard-mobs"
              }),
              createVNode("div", { class: "absolute left-[0%] bottom-[0%] opacity-100" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: "shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("academic-administration")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/content-management-system",
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_7)} alt="mob-app-1-mobile" loading="lazy" data-v-f6e1356c${_scopeId}><div class="absolute left-[0%] bottom-[0%] opacity-100" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt="shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("content-management"))}</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_7,
                alt: "mob-app-1-mobile",
                loading: "lazy"
              }),
              createVNode("div", { class: "absolute left-[0%] bottom-[0%] opacity-100" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: "shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("content-management")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/foreign-language-learning-system",
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_8)} alt=" mob-app-2-mobile" loading="lazy" data-v-f6e1356c${_scopeId}><div class="absolute left-[0%] bottom-[0%] opacity-100" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt="shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("foreign-language"))}</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_8,
                alt: " mob-app-2-mobile",
                loading: "lazy"
              }),
              createVNode("div", { class: "absolute left-[0%] bottom-[0%] opacity-100" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: "shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("foreign-language")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-works/blockchain",
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_9)} alt="diginest-mobile" loading="lazy" data-v-f6e1356c${_scopeId}><div class="absolute left-[0%] bottom-[0%] opacity-100" data-v-f6e1356c${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="rounded-2xl" alt="shadow" loading="lazy" data-v-f6e1356c${_scopeId}></div><div class="absolute left-[2%] bottom-[3%] opacity-100" data-v-f6e1356c${_scopeId}><div class="font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("blockchain"))}</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_9,
                alt: "diginest-mobile",
                loading: "lazy"
              }),
              createVNode("div", { class: "absolute left-[0%] bottom-[0%] opacity-100" }, [
                createVNode("img", {
                  src: _imports_4,
                  class: "rounded-2xl",
                  alt: "shadow",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "absolute left-[2%] bottom-[3%] opacity-100" }, [
                createVNode("div", { class: "font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]" }, toDisplayString(_ctx.$t("blockchain")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center mb-[5rem]" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex justify-center z-50",
        to: "/our-works"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="relative font-[400] text-[18px] lg:text-[20px] px-12 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90" data-v-f6e1356c${_scopeId}><span class="relative z-10" data-v-f6e1356c${_scopeId}>${ssrInterpolate(_ctx.$t("explore-more-projects"))}</span><span class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80" data-v-f6e1356c${_scopeId}></span><span class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]" data-v-f6e1356c${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", { class: "relative font-[400] text-[18px] lg:text-[20px] px-12 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90" }, [
                createVNode("span", { class: "relative z-10" }, toDisplayString(_ctx.$t("explore-more-projects")), 1),
                createVNode("span", { class: "absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80" }),
                createVNode("span", { class: "absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mb-[12rem]" data-v-f6e1356c>`);
      _push(ssrRenderComponent(_component_TechStackMarquee, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ContactEmail, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const old_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6e1356c"]]);

export { old_index as default };
