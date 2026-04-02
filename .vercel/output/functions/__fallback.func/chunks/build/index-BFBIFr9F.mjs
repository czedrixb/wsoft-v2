import { _ as _sfc_main$1 } from './PageHeader-wdXI4Lm4.mjs';
import { d as __nuxt_component_0$1, a as _sfc_main$7 } from './server.mjs';
import { _ as _sfc_main$2 } from './ContactEmail-uQrFUqdX.mjs';
import { withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
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
  setup(__props) {
    const projects = {
      "academic-administration-management-system": {
        title: "academic-administration",
        image: "academic-administration.png"
      },
      "content-management-system": {
        title: "content-management",
        image: "content-management.png"
      },
      // blockchain: {
      //   title: "blockchain",
      //   image: "blockchain.png",
      // },
      "youtube-content-learning-system": {
        title: "youtube-content",
        image: "youtube-content.png"
      },
      "project-management-system": {
        title: "project-management",
        image: "manage-project.png"
      },
      "foreign-language-learning-system": {
        title: "foreign-language",
        image: "foreign-language.png"
      },
      "data-crawling": {
        title: "data-crawling",
        image: "data-crawling.png"
      },
      "database-speed-test": {
        title: "database-speed-test",
        image: "database-speed-test.png"
      },
      // "ai-tarot-master": {
      //   title: "ai-tarot",
      //   image: "ai-tarot.png",
      // },
      "ai-review-analyzer": {
        title: "ai-review",
        image: "ai-review.png"
      },
      "ai-powered-language-learning-app": {
        title: "ai-powered",
        image: "ai-powered.png"
      },
      "food-calorie-analyzer": {
        title: "food-calorie",
        image: "food-calorie.png"
      },
      "encouragement-generation-platform": {
        title: "encouragement-generation",
        image: "encouragement-generation.png"
      },
      "focused-task-management": {
        title: "focused-task",
        image: "focused-task.png"
      },
      "audio-conversion-platform": {
        title: "audio-conversion",
        image: "audio-conversion.png"
      },
      "ai-powered-multilingual-translation": {
        title: "ai-multilingual",
        image: "ai-multilingual.png"
      }
    };
    const { canonicalUrl } = useCanonical();
    const { t } = useI18n();
    const staticMetaTitle = t("works-title");
    const staticMetaKeywords = Array.from(
      { length: 10 },
      (_, i) => t(`our-work-meta-keyword-${i + 1}`)
    ).join(", ");
    const structuredData = useStructuredData("our-works", { projects });
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
        { name: "keywords", content: staticMetaKeywords },
        { property: "og:title", content: staticMetaTitle },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/images/thumbnail.png" },
        { property: "og:url", content: canonicalUrl.value }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$7;
      const _component_ContactEmail = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: _ctx.$t("Our Works"),
        description: _ctx.$t("our-works-text")
      }, null, _parent));
      _push(`<div class="px-[5rem] mx-auto mb-[12rem] overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10"><!--[-->`);
      ssrRenderList(projects, (project, key) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/our-works/${key}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="block md:hidden mb-1"${_scopeId}><div class="font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-black"${_scopeId}>${ssrInterpolate(_ctx.$t(project.title))}</div></div>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                width: "600px",
                height: "100%",
                src: `/images/our-works/updated-thumbnails/${project.image}`,
                alt: project.title,
                class: "mb-5"
              }, null, _parent2, _scopeId));
              _push2(`<div class="hidden md:block"${_scopeId}><div class="font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-black"${_scopeId}>${ssrInterpolate(_ctx.$t(project.title))}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "block md:hidden mb-1" }, [
                  createVNode("div", { class: "font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-black" }, toDisplayString(_ctx.$t(project.title)), 1)
                ]),
                createVNode(_component_NuxtImg, {
                  width: "600px",
                  height: "100%",
                  src: `/images/our-works/updated-thumbnails/${project.image}`,
                  alt: project.title,
                  class: "mb-5"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "hidden md:block" }, [
                  createVNode("div", { class: "font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-black" }, toDisplayString(_ctx.$t(project.title)), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_ContactEmail, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
