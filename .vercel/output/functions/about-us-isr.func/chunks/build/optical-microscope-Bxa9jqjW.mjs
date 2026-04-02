import { _ as _sfc_main$1 } from './AnimatedPrivacyHeader-OvjMJnzw.mjs';
import { _ as _sfc_main$2 } from './Catalogue-BuTQxKaE.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import './server.mjs';
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
import './ScrollTrigger-Br7O8lZa.mjs';

const _sfc_main = {
  __name: "optical-microscope",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const { t } = useI18n();
    const staticMetaTitle = t("products-title");
    const staticMetaDescription = t("about-us-description");
    const staticMetaKeywords = Array.from(
      { length: 10 },
      (_, i) => t(`about-us-meta-keyword-${i + 1}`)
    ).join(", ");
    const structuredData = useStructuredData("about");
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
      const _component_AnimatedPrivacyHeader = _sfc_main$1;
      const _component_Catalogue = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_AnimatedPrivacyHeader, null, null, _parent));
      _push(`</div><div class="px-[2rem] lg:px-[5rem] mx-auto pt-16 pb-10">`);
      _push(ssrRenderComponent(_component_Catalogue, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/optical-microscope.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
