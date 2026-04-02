import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "TechStack",
  __ssrInlineRender: true,
  setup(__props) {
    const allTechs = [
      "apache",
      "aws",
      "bitbucket",
      "bootstrap",
      "vuetify",
      "docker",
      "electron",
      "figma",
      "flask",
      "flutter",
      "groq",
      "javaee",
      "javascript",
      "jira",
      "langchain",
      "laravel",
      "mongodb",
      "mysql",
      "nuxtjs",
      "openai",
      "opencv",
      "pwa",
      "python",
      "pytorch",
      "slack",
      "vue"
    ];
    const row1 = allTechs.slice(0, 13);
    const row2 = allTechs.slice(13);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-hidden py-8 bg-transparent" }, _attrs))} data-v-c20e3046><div class="marquee-wrapper" data-v-c20e3046><div class="marquee-track animate-marquee-left" data-v-c20e3046><!--[-->`);
      ssrRenderList([...unref(row1), ...unref(row1)], (tech) => {
        _push(`<div class="flex flex-col items-center gap-2 group shrink-0" data-v-c20e3046><div class="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-3 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110" data-v-c20e3046><img${ssrRenderAttr("src", `/images/revamp/techstack/${tech}.png`)}${ssrRenderAttr("alt", tech)} class="w-full h-full object-contain" loading="lazy" decoding="async" data-v-c20e3046></div><span class="text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 capitalize font-medium tracking-wide" data-v-c20e3046>${ssrInterpolate(tech)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="marquee-wrapper" data-v-c20e3046><div class="marquee-track animate-marquee-right" data-v-c20e3046><!--[-->`);
      ssrRenderList([...unref(row2), ...unref(row2)], (tech) => {
        _push(`<div class="flex flex-col items-center gap-2 group shrink-0" data-v-c20e3046><div class="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-3 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110" data-v-c20e3046><img${ssrRenderAttr("src", `/images/revamp/techstack/${tech}.png`)}${ssrRenderAttr("alt", tech)} class="w-full h-full object-contain" loading="lazy" decoding="async" data-v-c20e3046></div><span class="text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 capitalize font-medium tracking-wide" data-v-c20e3046>${ssrInterpolate(tech)}</span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechStack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c20e3046"]]);

export { __nuxt_component_1 as _ };
