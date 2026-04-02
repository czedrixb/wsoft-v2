import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, useAttrs, ref, computed, mergeProps, unref, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, resolveComponent, hasInjectionContext, inject, useSSRContext, Suspense, Fragment, createApp, shallowReactive, toRef, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, withCtx, createBlock, createCommentVNode, openBlock, getCurrentScope, createTextVNode, toDisplayString } from 'vue';
import { p as parseQuery, i as createError$1, k as hasProtocol, l as joinURL, m as getContext, w as withQuery, n as withTrailingSlash, o as withoutTrailingSlash, q as isScriptProtocol, r as defu, s as sanitizeStatusCode, v as withLeadingSlash, x as parseURL, $ as $fetch, y as baseURL, f as publicAssetsURL, z as createHooks, A as executeAsync, B as toRouteMatcher, C as createRouter$1, D as encodeParam, E as encodePath } from '../_/nitro.mjs';
import { setActivePinia, createPinia, shouldHydrate } from 'pinia';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1 } from 'vue-router';
import { useI18n, createI18n } from 'vue-i18n';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { u as useHead$1, h as headSymbol } from '../routes/renderer.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.20.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input2, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input2, { head, ...options });
  }
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher2 = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher2.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-CS9m2a64.mjs')
  },
  {
    name: "about-us",
    path: "/about-us",
    component: () => import('./about-us-CB1oA4Du.mjs')
  },
  {
    name: "services",
    path: "/services",
    component: () => import('./services-DVf4wq5t.mjs')
  },
  {
    name: "old_index",
    path: "/old_index",
    component: () => import('./old_index-D8K46Alj.mjs')
  },
  {
    name: "contact-us",
    path: "/contact-us",
    component: () => import('./contact-us-DZw5G6mQ.mjs')
  },
  {
    name: "blogs",
    path: "/blogs",
    component: () => import('./index-cXdVwszM.mjs')
  },
  {
    name: "wiz-assistant",
    path: "/wiz-assistant",
    component: () => import('./wiz-assistant-D25tl_HT.mjs')
  },
  {
    name: "our-works",
    path: "/our-works",
    component: () => import('./index-BFBIFr9F.mjs')
  },
  {
    name: "revamp-about-us",
    path: "/revamp/about-us",
    component: () => import('./about-us-BF4qvuZq.mjs')
  },
  {
    name: "revamp-products",
    path: "/revamp/products",
    component: () => import('./products-73l4-5zw.mjs')
  },
  {
    name: "revamp-services",
    path: "/revamp/services",
    component: () => import('./services-CaF1p3YO.mjs')
  },
  {
    name: "blogs-slug",
    path: "/blogs/:slug()",
    component: () => import('./index-D2zB-S1m.mjs')
  },
  {
    name: "optical-microscope",
    path: "/optical-microscope",
    component: () => import('./optical-microscope-Bxa9jqjW.mjs')
  },
  {
    name: "revamp-our-projects",
    path: "/revamp/our-projects",
    component: () => import('./our-projects-B0IYTm4x.mjs')
  },
  {
    name: "revamp-wiz-assistant",
    path: "/revamp/wiz-assistant",
    component: () => import('./wiz-assistant-BRGctdYD.mjs')
  },
  {
    name: "revamp-newsroom",
    path: "/revamp/newsroom",
    component: () => import('./index-C4v5oMdO.mjs')
  },
  {
    name: "revamp-privacy-policy",
    path: "/revamp/privacy-policy",
    component: () => import('./privacy-policy-DXqPD7NV.mjs')
  },
  {
    name: "revamp-terms-conditions",
    path: "/revamp/terms-conditions",
    component: () => import('./terms-conditions-XmEd_Ml4.mjs')
  },
  {
    name: "our-works-project",
    path: "/our-works/:project()",
    component: () => import('./index-BBdwQKQO.mjs')
  },
  {
    name: "revamp-optical-microscope",
    path: "/revamp/optical-microscope",
    component: () => import('./optical-microscope-C2gyIqZ5.mjs')
  },
  {
    name: "revamp-newsroom-news",
    path: "/revamp/newsroom/:news()",
    component: () => import('./index-UK5kjo1a.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      if (to.matched.at(-1)?.components?.default === from.matched.at(-1)?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        return nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_0$2 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to });
    const href = computed(() => {
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            return props.replace ? router.replace(href.value) : router.push(href.value);
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    if (nuxtApp.payload && nuxtApp.payload.pinia) {
      pinia.state.value = nuxtApp.payload.pinia;
    }
    return {
      provide: {
        pinia
      }
    };
  },
  hooks: {
    "app:rendered"() {
      const nuxtApp = useNuxtApp();
      nuxtApp.payload.pinia = toRaw(nuxtApp.$pinia).state.value;
      setActivePinia(void 0);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const ContactUs$1 = "Contact Us";
const OurProjects$1 = "Our Projects";
const Projects$1 = "Projects";
const ProductsServices$1 = "Products & Services";
const NewsRoom$1 = "News Room";
const wizAssistant$1 = "WIZ Assistant";
const registrations$1 = "Registrations";
const Products$1 = "Products";
const English$1 = "English";
const Korean$1 = "Korean";
const Home$1 = "Home";
const Services$1 = "Services";
const Blogs$1 = "Blogs";
const january$1 = "January";
const february$1 = "February";
const march$1 = "March";
const april$1 = "April";
const may$1 = "May";
const june$1 = "June";
const july$1 = "July";
const august$1 = "August";
const september$1 = "September";
const october$1 = "October";
const november$1 = "November";
const december$1 = "December";
const send$1 = "Send";
const ceo$1 = "CEO";
const developer$1 = "Developer";
const designer$1 = "UI / UX Designer";
const recaptcha$1 = "reCAPTCHA security protection";
const blockchain$1 = "Blockchain";
const dashboard$1 = "Dashboard";
const organize$1 = "Organize";
const calendar$1 = "Calendar";
const booklist$1 = "Booklist";
const create$1 = "Create";
const color$1 = "Color";
const design$1 = "Design";
const font$1 = "Font";
const incorporate$1 = "Incorporate";
const arrange$1 = "Arrange";
const dialogue$1 = "Dialogue";
const expressions$1 = "Expressions";
const vocabulary$1 = "Vocabulary";
const input$1 = "Input";
const inquire$1 = "Inquire";
const Reviews$1 = "Reviews";
const accuracy$1 = "Accuracy";
const activity$1 = "Activity";
const reviews$1 = "Reviews";
const company$1 = "Company";
const message$1 = "Message";
const submit$1 = "Submit";
const address$1 = "3F, 219, Segwon-ro, Gwonseon-gu, Suwon-si, Gyeonggi-do, Republic of Korea";
const matt$1 = "Matt";
const ricky$1 = "Ricky";
const joseph$1 = "Joseph";
const hoon$1 = "Hoon";
const lin$1 = "Lin";
const songyi$1 = "Songyi";
const gale$1 = "Gale";
const jaimie$1 = "Jaimie";
const salve$1 = "Salve";
const lora$1 = "Lora";
const ben$1 = "Ben";
const czedrix$1 = "Czedrix";
const rj$1 = "RJ";
const mon$1 = "Raymond";
const orland$1 = "Orland";
const neil$1 = "Neil";
const jason$1 = "Jason";
const winona$1 = "Winona";
const pola$1 = "Pola";
const zyra$1 = "Zyra";
const virnel$1 = "Virnel";
const karlo$1 = "Karlo";
const yolo$1 = "Object recognition based on YOLOv5 and ResNet";
const roi$1 = "Behavior sequence analysis based on ROI";
const rtsp$1 = "Video acquisition and preprocessing based on RTSP";
const multimodal$1 = "Video + Sensor Data Multimodal Integration";
const outlier$1 = "Random Forest-based Outlier Removal";
const jumbotron$1 = "We Do";
const slogan$1 = "Slogan";
const rag$1 = "RAG-based knowledge generation AI";
const productsFooter$1 = { "contactInformation": "Contact Information", "inquiryEmail": "Inquiry Email", "inquiryType": "Inquiry Type", "inquiryTypeValue": "Research Product and Service Inquiry", "providerInformation": "Provider Information", "serviceProvider": "Service Provider", "organizationType": "Organization Type", "organizationTypeValue": "Software & AI Research Service Provider", "location": "Location", "locationValue": "Republic of Korea", "registrations": "Registrations", "dunsRegistered": "D-U-N-S® Registered" };
const products$1 = { "pageTitle": "Optical Microscope–Based Skin Measurement", "productSubtitle": "Digital Optical Observation System with embedded Visual Interface", "catalogueNumber": "Catalogue Number", "productType": "Product Type", "includedProgram": "Included Program", "intendedUse": "Intended Use", "researchUseDisclaimer": "Research Use Only Disclaimer", "packageComponents": "Package Components", "pricing": "Pricing", "leadTime": "Lead Time", "pricingUponRequest": "Priced Upon Request (USD)", "leadTimeValue": "2-4 weeks", "researchUseOnly": "For Research Use Only.", "notForMedical": "Not for medical, cosmetic efficacy substantiation, or clinical decision-making.", "notForCosmetic": "Not for diagnostic, therapeutic, cosmetic, or clinical use.", "notForCosmeticClaims": "Not for diagnostic, therapeutic, cosmetic claims, or clinical use.", "notForCosmeticEfficacy": "Not for diagnostic, therapeutic, cosmetic efficacy claims, or clinical use.", "items": { "poreDensity": { "productName": "Optical Microscope–Based Pore Density Analysis System", "subText": "Direct pore coverage measurement", "catalogueNumber": "WSL-ODM-SKIN-S1", "productType": "Research Product, Device + Analysis Software Package", "descriptions": ["This service combines a high-magnification digital optical microscope with a basic image analysis program for quantitative evaluation of skin pore density.", "The service measures visible pore-like structures within optical microscopy images and provides numerical pore density metrics for research and comparative evaluation."], "programs": { "skinPoreDensityAnalysis": "Skin Pore Density Analysis", "features": ["Pore count per unit area (mm²)", "ROI-based quantitative output", "Comparative trend indicators"] }, "intendedUse": "This service is intended for research and experimental evaluation of skin pore density using optical microscopy images.", "packageComponents": ["Digital Optical Microscope (up to 1000x)", "PC-Compatible Image Acquisition Software", "Skin Pore Density Analysis Program", "Technical Documentation"] }, "skinFlake": { "productName": "Optical Microscope–Based Skin Flake Analysis System", "subText": "Dryness and exfoliation assessment", "catalogueNumber": "WSL-ODM-SKIN-S2", "productType": "Research Product, Device + Multi-Metric Analysis Package", "descriptions": ["This service provides combined analysis of skin pore density and skin flake (desquamation) area ratio using optical microscopy images.", "It enables comparative research on pore distribution and surface dryness-related characteristics."], "programs": { "skinPoreDensityAnalysis": "Skin Pore Density Analysis", "skinFlakeAreaRatioAnalysis": "Skin Flake Area Ratio Analysis" }, "intendedUse": "This service is intended for research and experimental evaluation of skin pore characteristics and surface flake distribution using optical microscopy images.", "packageComponents": ["Digital Optical Microscope (up to 1000x)", "PC-Compatible Image Acquisition Software", "Pore Density Analysis Program", "Flake Area Ratio Analysis Program", "Technical Documentation"] }, "skinTexture": { "productName": "Optical Microscope–Based Skin Texture Analysis System", "subText": "Texture smoothness evaluation", "catalogueNumber": "WSL-ODM-SKIN-S3", "productType": "Research, Device + Comprehensive Analysis Package", "descriptions": ["This service offers comprehensive skin surface analysis by combining pore density, flake area ratio, and texture roughness score analyses based on optical microscopy images.", "It provides multi-dimensional quantitative data for advanced skin surface research and comparative studies."], "programs": { "skinPoreDensityAnalysis": "Skin Pore Density Analysis", "skinFlakeAreaRatioAnalysis": "Skin Flake Area Ratio Analysis", "skinTextureRoughnessAnalysis": "Skin Texture Roughness Score Analysis" }, "intendedUse": "This service is intended for research and experimental evaluation of comprehensive skin surface characteristics using optical microscopy images.", "packageComponents": ["Digital Optical Microscope (up to 1000x)", "PC-Compatible Image Acquisition Software", "Pore Density Analysis Program", "Flake Area Ratio Analysis Program", "Texture Roughness Score Analysis Program"] }, "skinTone": { "productName": "Optical Microscope–Based Skin Tone & Darkness Analysis System", "subText": "Brightness and pigmentation tracking", "catalogueNumber": "WSL-ODM-SKIN-S4", "productType": "Research Product, Device + Colorimetric Analysis Software Package", "descriptions": ["This service provides quantitative evaluation of skin brightness and darkness levels using optical microscopy images and standardized colorimetric analysis.", "By converting RGB image data into perceptual color spaces (e.g., CIE L*a*b*), the service calculates numerical skin tone indices within a fixed region of interest (ROI).", "It enables objective comparison of skin tone variation over time or between experimental conditions, including brightness changes related to environmental exposure or treatment effects."], "programs": { "skinDarknessAnalysis": "Skin Darkness / Skin Tone Analysis", "features": ["Average skin lightness (L*) value within ROI", "Skin darkness index (normalized 0–100 scale)", "Optional Individual Typology Angle (ITA°) calculation", "Comparative trend indicators"] }, "intendedUse": "This service is intended for research and experimental evaluation of skin brightness and darkness characteristics using optical microscopy images under controlled imaging conditions.", "packageComponents": ["Digital Optical Microscope (up to 1000x)", "PC-Compatible Image Acquisition Software", "Skin Darkness / Skin Tone Analysis Program", "Color Calibration and Measurement Guidelines", "Technical Documentation"] } } };
const home$1 = { "partnership": { "fortune100": { "text": "W Labs is now an approved vendor to a", "highlight": "Top 3 of a Fortune 100 pharmaceutical", "text_end": "company." }, "scienceExchange": { "text": "W Labs is now a verified supplier on", "highlight": "Science Exchange,", "text_end": "the world's premier R&D marketplace for life sciences." }, "link": "https://www.scienceexchange.com/", "description": "Global Top 5 pharmaceutical companies, biotech firms, and research institutions can leverage our AI-powered biomedical imaging analysis software to accelerate cutting-edge projects like LC-OCT and 3D skin analysis." }, "banner": { "title": "A Global AI-First Development Partner Redesigning Productivity", "subtitle": "We don't just build software—we design intelligent systems that transform how organizations work.", "description": "W Labs is a globally growth-driven IT partner that designs digital success for clients through AI and web/app development, grounded in innovative technology and a flexible organizational culture.", "button": "Get to know us" }, "carousel": { "readMore": "Read more", "slide1": { "title": { "line1": "At W Labs,", "line2": "We innovate with data and AI" }, "description": { "line1": "We architect efficiency through cutting-edge technology: PWAs for universal access, serverless infrastructure for instant scalability, and AI automation for workflow optimization. ", "line2": "Leading the tech future means deploying tomorrow's solutions today—making work faster, simpler, and more impactful." } }, "slide2": { "title": { "line1": "At W Labs,", "line2": "We design a growth engine and trust" }, "description": { "line1": "We craft platforms that fuel your business growth while building lasting partnerships through reliable, scalable solutions.", "line2": "Our systems turn ideas into measurable impact, earning trust by delivering technology that consistently performs—because your growth is our mission." } }, "slide3": { "title": { "line1": "At W Labs,", "line2": "We maximize work efficiency and lead the future of technology" }, "description": { "line1": "Our innovation DNA combines advanced AI models with robust data pipelines. ", "line2": "We deploy machine learning that evolves with usage, natural language processing that understands context, and predictive analytics that anticipate needs—turning data complexity into elegant simplicity." } } }, "services": { "aiAutomation": { "title": "AI automation projects", "subtitle": "Let AI handle the repetitive work while your team focuses on strategy.", "description": "We deploy intelligent automation—computer vision, NLP, and machine learning—that streamlines operations and unlocks new capabilities." }, "legacyModernization": { "title": "Legacy system modernization", "subtitle": "Don't let outdated technology hold you back.", "description": "We transform legacy systems into modern, cloud-native platforms that enhance performance, reduce costs, and position your business for future growth." }, "saasDevelopment": { "title": "SaaS & Custom Platform development", "subtitle": "Build software products that scale from startup to enterprise.", "description": "We create cloud-based platforms with seamless UX, rock-solid infrastructure, and the flexibility to evolve with your business needs." }, "publicSector": { "title": "Education, administrative & public-sector systems", "subtitle": "Technology that serves the public good.", "description": "We build specialized systems for educational institutions, government agencies, and non-profits—making administration efficient and learning experiences exceptional." } }, "projects": { "title": "Projects", "description": "Let us help transform your online presence and support your business's growth in the digital world." } };
const footer$1 = { "title": "Partner for Growth and Digital Transformation", "newsletter_text": "Subscribe to our newsletter and receive ingenious digital productivity solutions every now and then.", "home": "Home", "about_us": "About Us", "services": "Services", "products": "Products", "projects": "Projects", "newsroom": "Newsroom", "contact_us": "Contact Us", "terms_conditions": "Terms & Conditions", "privacy_policy": "Privacy Policy", "copyright_text": "W Labs © All Rights Reserved 2026. Ver #.00", "company_name": "Company Name", "business_id": "Business ID", "subscribe": "Subscribe" };
const about$1 = { "title": "About Us", "description": "W Labs delivers cutting-edge solutions to optimize business operations. Leveraging the latest IT advancements, we empower organizations efficiently. Stay competitive with us as your trusted technology partner.", "hero_words": { "hero-1": "Innovation", "hero-2": "Excellence", "hero-3": "Transformation", "hero-4": "Technology", "hero-5": "Partnership", "hero-6": "Growth", "hero-7": "Solutions" }, "services": { "action-detection": { "title": "Action Detection", "slogan": "Reading Behavior Analysis", "description": "Offers advanced computer vision solutions for understanding user actions and interactions." }, "rag": { "title": "RAG Technology", "slogan": "Retrieving Knowledge", "description": "Retrieval-Augmented Generation technology for enhanced AI responses with contextual accuracy." }, "data-driven": { "title": "Data-Driven Solutions", "slogan": "Reimagining Business", "description": "Leverage data analytics to transform business operations and drive strategic decisions." }, "web-app": { "title": "Web Applications", "description": "Build innovative, scalable web applications that deliver exceptional user experiences." }, "ui-design": { "title": "UI/UX Design", "description": "Design intuitive interfaces that engage users and enhance digital experiences." }, "ai-utilization": { "title": "AI Utilization", "description": "Cutting-edge customer solutions powered by artificial intelligence and machine learning." } }, "animated_about": { "cutting_edge": { "title": "Cutting-edge Solutions", "description": "We specialize in developing cutting-edge solutions that are tailored to your specific needs. Our team stays at the forefront of information technology, ensuring you receive the latest advancements that optimize your business operations and drive success.", "second_description": "W Labs is dedicated to providing cutting-edge solutions that optimize business operations and drive success. Leveraging the latest advancements in information technology, we develop tailored solutions to streamline processes and empower organizations to achieve their goals efficiently." }, "expertise_innovation": { "title": "Expertise and Innovation", "description": "With a deep understanding of emerging technologies and industry trends, we bring expertise and innovation to every project. By leveraging our knowledge, we keep your business competitive in today's dynamic market landscape, helping you stay ahead of the curve.", "second_description": "By staying ahead of emerging technologies and industry trends, W Labs ensures that our clients remain competitive in today's dynamic market landscape. With W Labs as your technology partner, you can trust that your business operations are in capable hands, allowing you to focus on what you do best while we take care of the rest." }, "reliable_partner": { "title": "Reliable Technology Partner", "description": "Trust is paramount in any partnership. With W Labs as your technology partner, you can rely on us to handle your business operations efficiently, allowing you to focus on your core competencies. Our commitment is to support your success, every step of the way.", "second_description": "We develop systems such as AI-powered video analysis platforms, enterprise capability assessment tools, and personalized educational systems that offer AI coaching based on students' learning progress and patterns — all built using cutting-edge technologies like PyTorch, Hugging Face Transformers, LoRA, LangChain, and FastAPI." } }, "team": { "title": "The Driving Force Behind Innovation and Growth", "description_1": "W Labs is a team of experts leading technological innovation across diverse IT domains, including AI data integration and automated learning systems, AI-powered application solutions, and web and app IT maintenance.", "description_2": "Each team member goes beyond simply fulfilling a role — they are strategic partners and creative problem solvers who shape project direction and design success alongside our clients.", "meet_team": "Meet the W Labs Team", "members": { "matt": { "name": "Matt G." }, "ricky": { "name": "Ricky F." }, "joseph": { "name": "Joseph B." }, "hoon": { "name": "Hoon L." }, "lin": { "name": "Lin T." }, "songyi": { "name": "Songyi L." }, "gale": { "name": "Gale B." }, "jaimie": { "name": "Jaimie F." }, "salve": { "name": "Salve R." }, "lora": { "name": "Lora C." }, "ben": { "name": "Ben R." }, "czedrix": { "name": "Czedrix M." }, "neil": { "name": "Neil P." }, "jason": { "name": "Jason D." }, "winona": { "name": "Winona E." }, "pola": { "name": "Pola F." }, "zyra": { "name": "Zyra G." }, "virnel": { "name": "Virnel C." }, "karlo": { "name": "Karlo M." } }, "positions": { "ceo": "Chief Executive Officer", "project-manager": "Project Manager", "full-pm": "Full Stack Project Manager", "full-sa": "Full Stack System Architect", "administrative-officer": "Administrative Officer", "designer": "Designer", "operation-manager": "Operations Manager", "junior-project": "Junior Project Coordinator", "corporate-secretary": "Corporate Secretary", "communications-manager": "Communications Manager", "full-tpm": "Full Stack Technical Project Manager", "full-stack": "Full Stack Developer", "full-ai": "Full Stack AI Developer", "marketing-specialist": "Marketing Specialist", "qa-specialist": "QA Specialist" } } };
const services$1 = { "title": "Services", "description": "Our skilled developers and designers will create a stunning, user-friendly website tailored to your specific company requirements. We ensure an engaging user experience that captivates your audience, from adaptable designs to seamless functionality.", "product1Alt": "Product development service illustration", "product2Alt": "Design and development service illustration", "metaTitle": "Professional Web Development & Design Services | Your Company Name", "metaDescription": "Expert web development and design services tailored to your business needs. Get stunning, user-friendly websites with seamless functionality and engaging user experience.", "metaKeywords": "web development, web design, professional services, website development, custom web design, user experience, UI/UX design, responsive design", "sections": { "deepLearning": { "title": "Deep learning-based object detection and behavior analysis", "items": ["Object recognition based on YOLOv5 and ResNet", "Motion tracking using Optical Flow and CAMShift", "Behavior sequence analysis based on ROI", "Precision optimization of abnormal behavior classification model"], "imageAlt": "Deep learning object detection and behavior analysis illustration" }, "realTimeStreaming": { "title": "Real-time streaming data processing technology", "items": ["Video acquisition and preprocessing based on RTSP", "Low-latency data transmission using WebSocket", "Real-time frame analysis using OpenCV", "Multi-stream parallel processing architecture design"], "imageAlt": "Real-time streaming data processing technology illustration" }, "aiDataIntegration": { "title": "AI data integration and automated learning system", "items": ["Video + Sensor Data Multimodal Integration", "Random Forest-based Outlier Removal", "Dynamic ROI auto-resetting algorithm", "Incremental learning framework for continuous learning"], "imageAlt": "AI data integration and automated learning system illustration" }, "customDesign": { "title": "Custom Design & UI/UX", "items": ["Custom website & template-based designs", "Responsive, user-friendly layouts", "Engaging UI/UX for better usability"], "imageAlt": "Custom design and UI/UX services illustration" }, "contentMedia": { "title": "Content & Media Management", "items": ["Easy-to-use content editor", "Image, file, and video uploads (YouTube, audio, playback)", "Auto-tagging and data visualization"], "imageAlt": "Content and media management system illustration" }, "adminBusiness": { "title": "Admin & Business Management", "items": ["Inquiry & content editing system", "Inventory, order, and delivery tracking", "Secure payment processing"], "imageAlt": "Admin and business management dashboard illustration" }, "userInteraction": { "title": "User Interaction & Communication", "items": ["Job requests & quotation calculator", "Seller & company dashboards", "Messaging, questionnaires, and team collaboration"], "imageAlt": "User interaction and communication features illustration" }, "advancedFeatures": { "title": "Advanced Features & Security", "items": ["Interactive calendar UI & pop-ups", "Location-based map integrations", "reCAPTCHA security protection"], "imageAlt": "Advanced features and security system illustration" }, "ecommerce": { "title": "E-Commerce & Product Listings", "items": ["Item catalogs with detailed pages", "Wishlist & star rating system", "Smooth checkout & payment experience"], "imageAlt": "E-commerce and product listings platform illustration" } } };
const product$1 = { "products-title": "Products", "products-description": "We take pride in delivering high-quality, innovative digital solutions that drive success. From custom websites and powerful web applications to AI-driven platforms, our portfolio showcases a commitment to excellence, usability, and performance.", "animatedProjects": { "lcOct": { "title": "LC-OCT Skin Structure Analysis", "description": "High-resolution optical coherence tomography that enables non-invasive, real-time imaging of skin microstructures—providing dermatologists with cellular-level insights without the need for biopsy.", "cta": "Ask about LC-OCT Skin Structure Analysis" }, "aiMeasuring": { "title": "AI-Measuring & Analysis Skin Optics", "description": "Comprehensive academy management program integrating progress tracking, achievement monitoring, payment processing, attendance records, and statistical analysis to support both administrative operations and personalized educational effectiveness.", "cta": "Ask about AI Optics Skin Analyser" }, "wizAssistant": { "title": "WIZ Assistant", "description": "Your website's intelligent assistant that answers customer questions instantly, explains service procedures, and handles document requests automatically. Reduce support burden while improving response times—like having a knowledgeable staff member who never sleeps.", "cta": "Ask about WIZ Assistant" }, "aiEncouragement": { "title": "AI Encouragement Generation Platform", "description": "Behind-the-scenes CMS engine enabling seamless online book digitization and video subtitle integration, allowing administrators to manage text, images, interactive elements, and multimedia accessibility from a centralized platform.", "cta": "Ask about WIZ Assistant" }, "aiDietTracker": { "title": "AI-Aided Diet and Calorie Analysis Tracker", "description": "English language learning platform offering curated video clips (movies, talk shows, lyrics) with integrated interactive activities, facilitating authentic language acquisition through multimedia content and seamless in-video learning exercises." }, "aiTranslator": { "title": "AI-Powered Multilingual Translator", "description": "Advertising marketing project management platform with real-time data monitoring, featuring user-friendly dashboards, integrated client/cost management, and streamlined business process workflows." }, "aiAudioGenerator": { "title": "AI-Generating Audio File", "description": "Digital transformation of Talking Plus and SLE textbooks from hard copy to interactive online format using Laravel API and Vue.js 2, featuring content digitization and seamless backend data management." }, "aiSelfManagement": { "title": "AI Self-Management and Motivation", "description": "Automated data extraction and collection system for gathering, processing, and organizing web-based information for business intelligence and analysis." }, "aiEvaluation": { "title": "AI-Evaluating Assignment & Learning System", "description": "Performance benchmarking system testing and comparing database systems through complex business queries, measuring speed, efficiency, and scalability to optimize decision-making and data analysis." }, "aiLanguageLearning": { "title": "AI-Enhanced Language Learning Platform", "description": "E-commerce AI platform analyzing large volumes of customer reviews using sophisticated algorithms, providing comprehensive insights to help sellers refine products and identify new sales opportunities." } } };
const newsroom$1 = { "title": "Newsroom", "welcome": "Welcome to the W Labs blog, where innovation meets creativity.", "description1": "Our developers, designers, and research teams share their expertise, experience, and ideas—bringing you a closer look at our technology and the stories behind it.", "description2": "Discover insights into our latest projects, product updates, and the cutting-edge solutions shaping the future of W Labs.", "readMore": "Read More", "featuredArticle": { "title": "OpenAI Launches GPT-4 Turbo with Enhanced Vision Capabilities", "description": "New AI model offers 128K context window and improved multimodal understanding at lower cost" } };
const wiz$1 = { "title": "WIZ Assistant", "subtitle": "A smart information desk employee - embedded inside a website", "features": { "guide_users": "Guide users on how to use a service", "automatically_respond": "Automatically respond to FAQs", "handle_document": "Handle document requests such as meeting minutes, summaries, and notices", "provide_examples": "Provide examples of how different types of organizations can apply it to their workflows", "automate_repetitive": "Automate repetitive inquiries", "extendable_future": "Extendable in the future to include reservations, document search, internal resource navigation, and more" }, "main_message": "With WIZ Assistant, customer support gets faster and operational burden gets lighter.", "ask_button": "Ask for WIZ Assistant now", "availability": "*available in all screens and browsers", "pricing_tiers": "Pricing Tiers", "tiers": { "lite": { "name": "Lite", "price": "Starts at ₩ 29,000/mo", "features": { "basic_guidance": "Basic guidance", "faq_responses": "FAQ responses" } }, "standard": { "name": "Standard", "price": "Starts at ₩ 79,000/mo", "features": { "basic_guidance": "Basic guidance", "faq_responses": "FAQ responses", "document_request": "Document request handling", "operational_guidance": "Practical operational guidance" } }, "business": { "name": "Business", "price": "Starts at ₩ 149,000/mo", "features": { "basic_guidance": "Basic guidance", "faq_responses": "FAQ responses", "document_request": "Document request handling", "operational_guidance": "Practical operational guidance", "customized_responses": "Organization-customized responses", "strengthened_support": "Strengthened operations support" } }, "enterprise": { "name": "Enterprise", "price": "Ask for Custom Pricing", "features": { "basic_guidance": "Basic guidance", "faq_responses": "FAQ responses", "document_request": "Document request handling", "operational_guidance": "Practical operational guidance", "customized_responses": "Organization-customized responses", "strengthened_support": "Strengthened operations support", "large_organizations": "For large organizations", "internal_integrations": "Internal systems integrations", "custom_features": "Custom feature design" } } }, "audience": { "businesses": { "title": "Businesses / SMEs", "description": "Service guidance, customer inquiry handling, document drafting, internal operations support" }, "hospitals": { "title": "Hospitals / Medical Institutions", "description": "Pre-examination preparation instructions, document issuance procedures, administrative inquiry handling" }, "schools": { "title": "Schools / Educational Institutions", "description": "Course material guidance, academic administration Q&A, assignment submission instructions" }, "associations": { "title": "Associations / Public-Interest Organizations", "description": "Civil inquiry guidance, application procedure explanations, document submission requirements" }, "online_stores": { "title": "Online Stores / E-Commerce", "description": "Order, shipping, refund, and product information guidance" } } };
const terms$1 = { "title": "Terms & Conditions", "welcome": "Welcome to W Labs (operated by 주식회사 더블유랩스, Company Registration No. 387-87-03701). By accessing or using our website at https://wlabs.space/ and any related services, you agree to be bound by these Terms & Conditions. Please read them carefully before using our site.", "disclaimer": "If you do not agree with any part of these terms, please discontinue use of the website immediately.", "sections": { "services": { "title": "1. Services", "content": "W Labs provides software development, AI solutions, UI/UX design, and related digital services. The website is primarily an informational and marketing platform. Specific services are governed by separate agreements or service contracts entered into with clients." }, "intellectualProperty": { "title": "2. Intellectual Property", "content": "All content on this website — including text, graphics, logos, icons, images, and software — is the property of W Labs or its content suppliers and is protected under applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent." }, "useOfWebsite": { "title": "3. Use of the Website", "permittedUse": { "title": "3.1 Permitted Use", "description": "You may use this website for lawful purposes and in accordance with these Terms. You agree not to:", "items": { "item1": "Use the site in any way that violates applicable local, national, or international laws or regulations.", "item2": "Transmit any unsolicited or unauthorized advertising or promotional material.", "item3": "Attempt to gain unauthorized access to any part of our website or systems.", "item4": "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website." } }, "contactForm": { "title": "3.2 Contact Form", "content": "When you submit an inquiry through our contact form, you provide us with your information voluntarily. By submitting, you consent to being contacted by W Labs regarding your inquiry." } }, "disclaimer": { "title": "4. Disclaimer of Warranties", "content": 'This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. W Labs does not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.' }, "limitationOfLiability": { "title": "5. Limitation of Liability", "content": "To the fullest extent permitted by law, W Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of this website or our services." }, "thirdPartyLinks": { "title": "6. Third-Party Links", "content": "Our website may contain links to third-party websites. These links are provided for convenience only. W Labs has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them." }, "changesToTerms": { "title": "7. Changes to These Terms", "content": "We reserve the right to update or modify these Terms & Conditions at any time. Changes will be effective upon posting to the website with an updated effective date. Your continued use of the site following any changes constitutes your acceptance of the revised terms." }, "governingLaw": { "title": "8. Governing Law", "content": "These Terms & Conditions are governed by and construed in accordance with the laws of the Republic of Korea. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Korea." }, "contactUs": { "title": "9. Contact Us", "description": "For any questions about these Terms & Conditions, please contact:", "companyName": "W Labs (주식회사 더블유랩스)", "website": "Website: https://wsoft.space/contact-us", "duns": "D-U-N-S® Registered: 696568010" } } };
const privacy$1 = { "title": "Privacy Policy", "welcome": "W Labs (주식회사 더블유랩스) is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it when you visit https://wlabs.space/.", "compliance": "This policy is compliant with the Personal Information Protection Act (PIPA) of Korea and applicable international standards.", "sections": { "informationCollected": { "title": "1. Information We Collect", "provided": { "title": "1.1 Information You Provide", "description": "When you use our contact form or reach out to us, we may collect:", "items": { "item1": "Your name", "item2": "Email address", "item3": "Company name (if applicable)", "item4": "Message content and inquiry details" } }, "automated": { "title": "1.2 Automatically Collected Information", "description": "When you visit our website, we may automatically collect:", "items": { "item1": "IP address and general location data", "item2": "Browser type and version", "item3": "Pages visited and time spent on site", "item4": "Referring URLs" }, "note": "This data is collected through standard web server logs and analytics tools to help us understand how our site is used and improve user experience." } }, "howWeUse": { "title": "2. How We Use Your Information", "description": "We use the information we collect to:", "items": { "item1": "Respond to your inquiries and provide requested services", "item2": "Improve and optimize our website and services", "item3": "Communicate with you about our services and relevant updates", "item4": "Comply with legal obligations" }, "note": "We do not sell, rent, or trade your personal information to third parties for marketing purposes." }, "cookies": { "title": "3. Cookies", "description": "Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences. Note that disabling cookies may affect some features of the site.", "types": { "title": "Types of cookies we may use:", "items": { "item1": "Essential cookies: Required for the website to function properly.", "item2": "Analytics cookies: Help us understand how visitors interact with our site (e.g., page views, session duration)." } } }, "dataRetention": { "title": "4. Data Retention", "content": "We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Contact form submissions are retained for a reasonable period to manage business inquiries and follow-up communications." }, "dataSecurity": { "title": "5. Data Security", "content": "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security." }, "thirdPartyServices": { "title": "6. Third-Party Services", "content": "We may use third-party tools and services (such as analytics providers or hosting platforms) that may process data on our behalf. These service providers are contractually obligated to handle data securely and only as instructed by us." }, "yourRights": { "title": "7. Your Rights", "description": "Under applicable law, you may have the right to:", "items": { "item1": "Access the personal information we hold about you", "item2": "Request correction of inaccurate or incomplete data", "item3": "Request deletion of your personal information", "item4": "Withdraw consent to processing where applicable", "item5": "Lodge a complaint with the relevant data protection authority" }, "note": "To exercise any of these rights, please contact us using the details below." }, "internationalUsers": { "title": "8. International Users", "content": "This website is operated from the Republic of Korea. If you are accessing the site from outside Korea, please be aware that your information may be transferred to and processed in Korea, where data protection laws may differ from those in your country." }, "changesToPolicy": { "title": "9. Changes to This Policy", "content": "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date. We encourage you to review this policy periodically." }, "contactUs": { "title": "10. Contact Us", "description": "For any questions about this Privacy Policy, please contact:", "companyName": "W Labs (주식회사 더블유랩스)", "website": "Website: https://wsoft.space/contact-us", "duns": "D-U-N-S® Registered: 696568010" } } };
const enMessages = {
  ContactUs: ContactUs$1,
  OurProjects: OurProjects$1,
  Projects: Projects$1,
  ProductsServices: ProductsServices$1,
  NewsRoom: NewsRoom$1,
  "not-found": "Page Not Found",
  wizAssistant: wizAssistant$1,
  registrations: registrations$1,
  "duns-registered": "D-U-N-S® Registered",
  "duns-number": "D&B D-U-N-S® Number",
  "duns-verify": "Click to verify D-U-N-S® Registered company",
  "duns-valid-until": "Valid until",
  "not-found-text": "The page you're looking for doesn't exist or has been moved.",
  "go-home": "Go to Homepage",
  "go-back": "Go Back",
  "no-blogs": "We’re working on something amazing! Content will be up shortly.",
  "no-popular": "We’re just getting started! Our most popular stories are on the horizon. Check back soon.",
  Products: Products$1,
  "home-title": "Home",
  "home-description": "Elevate your business with W Labs’ AI and custom development.",
  "home-meta-keyword": "W Soft",
  "home-meta-keyword-1": "W Soft Website",
  "home-meta-keyword-2": "W Labs",
  "home-meta-keyword-3": "W Labs Website",
  "home-meta-keyword-4": "Web Application Development Services",
  "home-meta-keyword-5": "Web App Development",
  "home-meta-keyword-6": "Web Application Experts",
  "home-meta-keyword-7": "Web Service Construction",
  "home-meta-keyword-8": "Web Application Services",
  "home-meta-keyword-9": "Professional Website Development Customized for Business",
  "home-meta-keyword-10": "Custom Website Creation",
  "home-meta-keyword-11": "AI Utilization Services and Support South Korea",
  "home-meta-keyword-12": "Corporate Website Development",
  "home-meta-keyword-13": "Website Development",
  "home-meta-keyword-14": "UI/UX Design Services",
  "home-meta-keyword-15": "UI/UX Design",
  "home-meta-keyword-16": "User Experience Design Services",
  "home-meta-keyword-17": "UX Experts",
  "home-meta-keyword-18": "UI Design Specialists",
  "home-meta-keyword-19": "AI-Based Solutions and Integration Services",
  "home-meta-keyword-20": "AI Solutions",
  "home-meta-keyword-21": "Artificial Intelligence Integration Services",
  "home-meta-keyword-22": "AI Technology Utilization",
  "home-meta-keyword-23": "AI Services",
  "home-meta-keyword-24": "Comprehensive IT Maintenance and Support",
  "home-meta-keyword-25": "IT Maintenance",
  "home-meta-keyword-26": "IT Support",
  "home-meta-keyword-27": "Comprehensive IT Services",
  "home-meta-keyword-28": "IT Management Services",
  "home-meta-keyword-29": "Custom Web & App Development Specialists",
  "home-meta-keyword-30": "Custom Web Development",
  "home-meta-keyword-31": "App Development Experts",
  "home-meta-keyword-32": "Software Development",
  "home-meta-keyword-33": "Web & App Experts",
  "home-meta-keyword-34": "Innovative Technology Solutions for Businesses",
  "home-meta-keyword-35": "Innovative Technology Solutions",
  "home-meta-keyword-36": "Business Technology Support",
  "home-meta-keyword-37": "Business Innovation Services",
  "home-meta-keyword-38": "Corporate Technology Support",
  "home-meta-keyword-39": "AI-Driven Services and Support",
  "home-meta-keyword-40": "AI-Driven Support",
  "home-meta-keyword-41": "AI Services",
  "home-meta-keyword-42": "Artificial Intelligence Support Services",
  "home-meta-keyword-43": "AI Technology Implementation",
  "home-meta-keyword-44": "Trusted Software Development Company",
  "home-meta-keyword-45": "Software Development",
  "home-meta-keyword-46": "Trusted Software Company",
  "home-meta-keyword-47": "Software Development Specialists",
  "home-meta-keyword-48": "IT Service Providers",
  "home-meta-keyword-49": "Reliable IT Services and Web Solutions",
  "home-meta-keyword-50": "Reliable IT Services",
  "home-meta-keyword-51": "Web Solutions",
  "home-meta-keyword-52": "IT Solutions Provider",
  "home-meta-keyword-53": "Business IT",
  "home-meta-keyword-54": "WSoft Website",
  "home-meta-keyword-55": "W Labs",
  "home-meta-keyword-56": "W Labs Website",
  "about-title": "About Us",
  "products-title": "Products",
  "about-us-description": "W Labs delivers cutting-edge solutions to optimize business operations. Leveraging the latest IT advancements, we empower organizations efficiently. Stay competitive with us as your trusted technology partner.",
  "about-us-meta-keyword-1": "About W Labs in South Korea",
  "about-us-meta-keyword-2": "IT Services Company in South Korea",
  "about-us-meta-keyword-3": "Web and App Development Experts in South Korea",
  "about-us-meta-keyword-4": "Professional IT Company in South Korea",
  "about-us-meta-keyword-5": "About Our Web Development Team in South Korea",
  "about-us-meta-keyword-6": "Trusted Software Development Firm in South Korea",
  "about-us-meta-keyword-7": "Innovative Technology Solutions Provider in South Korea",
  "about-us-meta-keyword-8": "Our Mission and Values in IT Services",
  "about-us-meta-keyword-9": "AI and Web Development Expertise in South Korea",
  "about-us-meta-keyword-10": "W Soft – South Korea’s Reliable IT Partner",
  "services-title": "Services",
  "services-description": "Our skilled developers and designers will create a stunning, user-friendly website tailored to your specific company requirements.\nWe ensure an engaging user experience that captivates your audience, from adaptable designs to seamless functionality.",
  "services-meta-keyword-1": "Web Development Services in South Korea",
  "services-meta-keyword-2": "Professional IT Solutions in South Korea",
  "services-meta-keyword-3": "Web and App Development Services",
  "services-meta-keyword-4": "UI/UX Design and Development in South Korea",
  "services-meta-keyword-5": "AI Solutions and Integration in South Korea",
  "services-meta-keyword-6": "Comprehensive IT Maintenance Services",
  "services-meta-keyword-7": "Custom Software Development in South Korea",
  "services-meta-keyword-8": "Digital Transformation Services in South Korea",
  "services-meta-keyword-9": "W Soft Technology Solutions in South Korea",
  "services-meta-keyword-10": "South Korea’s Leading Web and AI Services",
  "works-title": "Our Works",
  "our-work-meta-keyword-1": "Web Development Portfolio South Korea",
  "our-work-meta-keyword-2": "Our Web and App Projects",
  "our-work-meta-keyword-3": "Completed IT Projects by W Soft",
  "our-work-meta-keyword-4": "Showcase of Web Solutions South Korea",
  "our-work-meta-keyword-5": "UI/UX Design Portfolio South Korea",
  "our-work-meta-keyword-6": "AI and Software Development Case Studies",
  "our-work-meta-keyword-7": "Our Successful Web Projects",
  "our-work-meta-keyword-8": "Professional IT Solutions Portfolio",
  "our-work-meta-keyword-9": "Web App Development Examples South Korea",
  "our-work-meta-keyword-10": "Innovative Technology Solutions by W Soft",
  "contact-title": "Contact Us",
  "contact-us-meta-keyword-1": "Contact W Soft Solutions Korea",
  "contact-us-meta-keyword-2": "IT Services Inquiry South Korea",
  "contact-us-meta-keyword-3": "Get in Touch with W Soft",
  "contact-us-meta-keyword-4": "Web Development Consultation Korea",
  "contact-us-meta-keyword-5": "Contact for Web and App Development",
  "contact-us-meta-keyword-6": "Professional IT Solutions Contact",
  "contact-us-meta-keyword-7": "Reach Out to W Soft South Korea",
  "contact-us-meta-keyword-8": "Business Inquiry Web Solutions Korea",
  "contact-us-meta-keyword-9": "Schedule a Consultation with W Soft",
  "contact-us-meta-keyword-10": "Contact for AI and Software Services Korea",
  "blogs-title": "Blogs",
  "blogs-description": "Discover the latest insights, trends, and expertise from W SoftLabs. Read our articles on AI, web development, and technology solutions.",
  "blogs-meta-keyword-1": "Blog",
  "blogs-meta-keyword-2": "Articles",
  "blogs-meta-keyword-3": "Insights",
  "blogs-meta-keyword-4": "Technology",
  "blogs-meta-keyword-5": "AI",
  "blogs-meta-keyword-6": "Web Development",
  "blogs-meta-keyword-7": "Machine Learning",
  "blogs-meta-keyword-8": "Software Solutions",
  "blogs-meta-keyword-9": "Tech Insights",
  "blogs-meta-keyword-10": "Industry Trends",
  English: English$1,
  Korean: Korean$1,
  Home: Home$1,
  "About Us": "About Us",
  Services: Services$1,
  "Our Works": "Our Works",
  Blogs: Blogs$1,
  "our-blogs": "Our Blogs",
  "find-blogs": "Build. Design. Inspire.",
  "blogs-text": "Welcome to the W Labs blog, where innovation meets creativity. Our developers, designers, and research teams share their expertise, experience, and ideas—bringing you a closer look at our technology and the stories behind it. Discover insights into our latest projects, product updates, and the cutting-edge solutions shaping the future of W Labs.",
  january: january$1,
  february: february$1,
  march: march$1,
  april: april$1,
  may: may$1,
  june: june$1,
  july: july$1,
  august: august$1,
  september: september$1,
  october: october$1,
  november: november$1,
  december: december$1,
  "read-more": "Read More",
  "popular-post": "Popular Post",
  "view-all": "View All",
  "Talk with an Expert": "Talk with an Expert",
  "start-project": "Start Your Project Today",
  "explore-more-projects": "Explore More Projects",
  "elevate-business": "Elevate your business with W Labs’ AI and custom development.",
  "project-success": "100% Projects Success Rate",
  "customer-retention": "95% Customer Retention Rate",
  "project-completed": "21 Projects Completed",
  "trusted-partner": "Smarter Business, Powered by AI",
  "delivers-cutting": "W Labs is a globally growth-driven IT partner that designs digital success for clients through AI and web/app development, grounded in innovative technology and a flexible organizational culture.",
  "web-dev": "Website Development",
  "create-website": "We create websites that work for you. Whether you’re a small business or a large enterprise, our team specializes in designing dynamic, user-friendly websites that reflect your brand and meet your needs. From beautiful designs to smooth functionality, we make sure your online presence grabs attention and connects with your audience.",
  "web-app": "Web Application Development",
  "build-innovative": "We build innovative web apps that help your business thrive. Our team creates custom solutions designed to simplify your operations, improve user experiences, and fuel growth. From the initial idea to final launch, we ensure your web applications are strong, scalable, and ready to support your future success.",
  "ui-design": "UI Design",
  "design-intuitive": "We design intuitive, user-friendly interfaces that make the digital world easier and more enjoyable. Our team focuses on creating smooth, engaging experiences that captivate users. From the first wireframe to the final design, we ensure every detail enhances usability and keeps your audience connected.",
  "ai-utilization": "AI Utilization Service",
  "cut-customer": "Cut customer service costs, speed up response times, and boost customer satisfaction with our AI solutions. We use advanced automation and smart technologies to streamline your operations. Whether it’s chatbots or predictive analytics, we help you work more efficiently and create a better experience for your customers.",
  "successful-projects": "Our Successful Projects",
  "dedicated-helping": "At W Labs, we’re dedicated to helping you grow your business with tailored solutions that boost productivity and efficiency.",
  "academic-administration": "Academic Administration Management System",
  "partner-growth": "Partner for Growth and Digital Transformation",
  "help-transform": "Let us help transform your online presence and support your business’s growth in the digital world.",
  "enter-email": "Enter your email",
  send: send$1,
  "all-rights": "All Rights Reserved",
  "about-text": "W Labs delivers cutting-edge solutions to optimize business operations. Leveraging the latest IT advancements, we empower organizations efficiently. Stay competitive with us as your trusted technology partner.",
  "innovating-business": "Innovating Business Operations with Technology",
  "dedicated-providing": "W Labs is dedicated to providing cutting-edge solutions that optimize business operations and drive success. Leveraging the latest advancements in information technology, we develop tailored solutions to streamline processes and empower organizations to achieve their goals efficiently.",
  "staying-ahead": "By staying ahead of emerging technologies and industry trends, W Labs ensures that our clients remain competitive in today's dynamic market landscape. With W Labs as your technology partner, you can trust that your business operations are in capable hands, allowing you to focus on what you do best while we take care of the rest.",
  "why-choose": "Why Choose Us?",
  "provide-more": "At W Labs, we provide more than just innovative solutions; we offer a collaborative partnership that drives your business forward. Here's why you should choose us:",
  "cutting-edge": "Cutting-edge Solutions",
  "specialize-developing": "We specialize in developing cutting-edge solutions that are tailored to your specific needs. Our team stays at the forefront of information technology, ensuring you receive the latest advancements that optimize your business operations and drive success.",
  "expertise-innovation": "Expertise and Innovation",
  "deep-understanding": "With a deep understanding of emerging technologies and industry trends, we bring expertise and innovation to every project. By leveraging our knowledge, we keep your business competitive in today's dynamic market landscape, helping you stay ahead of the curve.",
  "reliable-tech": "Reliable Technology Partner",
  "trust-paramount": "Trust is paramount in any partnership. With W Labs as your technology partner, you can rely on us to handle your business operations efficiently, allowing you to focus on your core competencies. Our commitment is to support your success, every step of the way.",
  "our-team": "Our Team",
  ceo: ceo$1,
  "senior-dev": "Senior Developer",
  "project-officer": "Project Officer",
  "full-stack": "Full Stack Developer",
  "marketing-specialist": "Marketing Specialist",
  developer: developer$1,
  designer: designer$1,
  "human-resource": "Human Resource Manager",
  "corporate-secretary": "Corporate Secretary",
  "services-text": "Our skilled developers and designers will create a stunning, user-friendly website tailored to your specific company requirements. We ensure an engaging user experience that captivates your audience, from adaptable designs to seamless functionality.",
  "ui-ai": "UI/UX & AI-Powered Solutions",
  "build-high": "We build high-performing websites and web applications tailored to your business needs. Whether it’s a dynamic website or a scalable web app, we ensure seamless functionality, engaging design, and smooth user experiences that drive growth.",
  "website-web": "Website & Web App Development",
  "intuitive-ai": "From intuitive UI design to AI-driven automation, we enhance digital experiences that keep users engaged. Our expertise in design and smart technologies, like chatbots and predictive analytics, helps businesses improve usability, efficiency, and customer satisfaction.",
  "maintenance-support": "Maintenance & Support",
  "keep-website": "Keep your website and applications running at peak performance with our reliable maintenance services. We handle updates, security checks, and optimizations, so you can focus on growing your business without worrying about technical issues.",
  "introduction-development": "Introduction to Development",
  "custom-design": "Custom Design & UI/UX",
  "custom-website": "Custom website & template-based designs",
  "responsive-user": "Responsive, user-friendly layouts",
  "engaging-ui": "Engaging UI/UX for better usability",
  "content-management": "Content Management & Media",
  "easy-use": "Easy-to-use content editor",
  "image-file": "Image, file, and video uploads (YouTube, audio, playback)",
  "auto-tagging": "Auto-tagging and data visualization",
  "admin-business": "Admin & Business Management",
  "inquiry-content": "Inquiry & content editing system",
  "inventory-order": "Inventory, order, and delivery tracking",
  "secure-payment": "Secure payment processing",
  "user-interaction": "User Interaction & Communication",
  "job-interaction": "Job requests & quotation calculator",
  "seller-company": "Seller & company dashboards",
  "messaging-questionnaires": "Messaging, questionnaires, and team collaboration",
  "advanced-features": "Advanced Features & Security",
  "interactive-calendar": "Interactive calendar UI & pop-ups",
  "location-based": "Location-based map integrations",
  recaptcha: recaptcha$1,
  "product-listing": "E-Commerce & Product Listings",
  "items-catalog": "Item catalogs with detailed pages",
  "wishlist-star": "Wishlist & star rating system",
  "smooth-checkout": "Smooth checkout & payment experience",
  "our-works-text": "We take pride in delivering high-quality, innovative digital solutions that drive success. From custom websites and powerful web applications to AI-driven platforms, our portfolio showcases a commitment to excellence, usability, and performance.",
  "content-managmeent": "Content Management System",
  blockchain: blockchain$1,
  "youtube-content": "YouTube Content Learning System",
  "project-management": "Project Management System",
  "foreign-language": "Foreign Language Learning System",
  "data-crawling": "Data Crawling",
  "ai-tarot": "AI Tarot Master",
  "ai-review": "AI Review Analyzer",
  "ai-powered": "AI-powered Language Learning App",
  "food-calorie": "Food Calorie Analyzer",
  "encouragement-generation": "Encouragement Generation Platform",
  "focused-task": "Focused Task Management",
  "audio-conversion": "Audio Conversion Platform",
  "ai-multilingual": "AI-Powered Multilingual Translation",
  "database-speed-test": "Database Speed Test",
  "project-overview": "Project Overview",
  "comprehensive-program": "This Academic Administration Management System is a comprehensive program designed to enhance academy management and teaching effectiveness. It consists of functional modules for progress management, achievement tracking, and support services such as payment management, attendance records, and statistical analysis. It aims to create a robust system supporting both the administrative and educational aspects of academy management, fostering an environment conducive to personalized and effective learning.",
  dashboard: dashboard$1,
  "dashboard-offers": "The dashboard offers a comprehensive overview of current student, teacher, and staff numbers, as well as financial revenues, enhanced by visually appealing designs.",
  organize: organize$1,
  "student-data": "Student data is organized into tables for convenient monitoring, offering easy access to crucial details like status, contract end dates, tuition fees, and more, with the added capability to search for specific information.",
  calendar: calendar$1,
  "calendar-feature": "The calendar feature aids administrators, teachers, and students in checking appointment dates, class start and end dates, and more, with sorting and color-coding for enhanced clarity.",
  "serves-engine": "The Content Management System (CMS) serves as the engine behind the scenes, ensuring that books are seamlessly available online while also facilitating the addition of subtitles to videos. This comprehensive system simplifies the process of digitizing and organizing book content, allowing administrators to manage everything from text and images to interactive elements with ease. The CMS streamlines the task of adding subtitles to videos, making them more accessible and enhancing the learning experience for users.",
  booklist: booklist$1,
  "diplaying-list": "Displaying your list of converted online books, which you can update anytime.",
  "video-enhanced": "Video-Enhanced",
  "creating-online": "Creating online books becomes more engaging when you integrate videos into your database for enhanced learning experiences.",
  create: create$1,
  "convert-offline": "Convert your offline books to online by adding courses and inputting content.",
  "design-project": "The Niftle Craft project focuses on designing a website that is both visually appealing and user-friendly, enhancing its presence in the virtual world. Emphasizing modern design principles, the website will feature an engaging and intuitive interface, ensuring that users have a seamless and enjoyable browsing experience. Key elements such as responsive design, attractive color schemes, and high-quality visuals will be incorporated to capture and retain users' attention. Additionally, the website will prioritize easy navigation, fast loading times, and accessibility across various devices and platforms.",
  color: color$1,
  "designing-website": "Designing the website with vibrant neon colors to transport you into the world of games, imagination, and fun.",
  design: design$1,
  "implementing-design": "Implementing 3D designs to enhance your viewing experience and immerse you fully in the captivating visuals and images.",
  font: font$1,
  "incorporating-sleek": "Incorporating sleek and futuristic font styles that are both easy to read and visually appealing, enhancing the overall user experience.",
  "revolutionizes-english": "The YouTube Content Learning System revolutionizes English language learning by offering a curated selection of video clips supplemented with interactive activities. This innovative platform provides learners with a diverse range of multimedia content, including movie clips, talk shows, lyric videos, and more, each carefully chosen to facilitate language acquisition in authentic contexts. What sets this apart is its integration of interactive learning activities seamlessly woven into the video-watching experience.",
  "video-selection": "Video Selection",
  "asking-choose": "Asking you to choose video clips you want to study and learn from, such as TED-Ed, talk shows, music videos, and more, making your learning experience fun.",
  "watch-learn": "Watch and Learn",
  "videos-english": "Watch YouTube videos with English subtitles or in any language of your choice, simplifying comprehension and making it easier to follow the content.",
  "developed-streamline": "The Project Management System is developed to streamline advertising marketing project management and enable real-time data monitoring for improved business processes. The development involved configuring a user-friendly dashboard, implementing various project management functions, and integrating client and cost management features. Major achievements included providing an intuitive interface and resolving issues identified during testing.",
  "dashboard-provides": "Dashboard provides a comprehensive overview of current clients, projects, revenue, and more, empowering business owners with valuable monitoring tools.",
  incorporate: incorporate$1,
  "easily-add": "Easily add projects, specify status, deadlines, pricing, and more, simplifying file monitoring for seamless management.",
  arrange: arrange$1,
  "effortlessly-organize": "Effortlessly organize projects according to your preferences, whether by company names, campaigns, deadlines, and more.",
  "endeavors-modernize": "The Foreign Language Learning System endeavors to modernize the educational experience by transitioning from traditional hard copy textbooks to dynamic online and interactive formats for Talking Plus and SLE books. Leveraging the power of Laravel API and Vue.js 2, this initiative aims to revolutionize learning by digitizing content and infusing it with interactivity. Through meticulous content digitization and backend development with Laravel API, the project ensures seamless data management and user interaction.",
  dialogue: dialogue$1,
  "watch-videos": "Watch videos to improve your dialogue skills, with translations available in both English and Korean.",
  expressions: expressions$1,
  "expressions-presented": "Today's expressions are presented in both English and Korean, with a guide on how to integrate them into your everyday life.",
  vocabulary: vocabulary$1,
  "translated-korean": "Vocabulary terms are translated into Korean and equipped with text-to-speech functionality for correct pronunciation, ensuring an easy learning experience for every student.",
  "advertising-marketing": "The Project Management System is developed to streamline advertising marketing project management and enable real-time data monitoring for improved business processes. The development involved configuring a user-friendly dashboard, implementing various project management functions, and integrating client and cost management features. Major achievements included providing an intuitive interface and resolving issues identified during testing.",
  "meticulously-crafted": "The AI Review Analyzer System is meticulously crafted to empower e-commerce sellers through the sophisticated utilization of artificial intelligence, enabling them to delve deep into extensive pools of customer reviews. With its cutting-edge technology, this system revolutionizes the process of analyzing customer feedback, providing a comprehensive understanding that empowers sellers to refine their existing products or unearth new avenues for sales.",
  input: input$1,
  "feature-allows": "This feature allows you to input the product link for analysis and review.",
  inquire: inquire$1,
  "integrating-gpt": "By integrating GPT into the program, you can inquire about the product link you submitted.",
  Reviews: Reviews$1,
  "various-shopping": "Reviews from various shopping sites will be displayed for you to read, allowing you to check other people's opinions about the item and making it easier for you to decide which product is best.",
  "versatile-mobile": "AI-based Language Learning App is a versatile mobile application that combines cultural experiences, social interaction, and marketplace functions into one integrated platform. Through this app, users can explore local cultural attractions, connect with community members, and access various services, with a particular focus on traditional Korean experiences.",
  "test-compare": "This project aims to test and compare the performance of different database systems for decision support. By running complex business queries, it measures how well each system handles large amounts of data in terms of speed, efficiency, and scalability. The goal is to identify performance issues, suggest improvements, and help organizations optimize their databases for better decision-making and faster data analysis.",
  accuracy: accuracy$1,
  "following-tpc": "Following TPC guidelines, using official tools, and verifying data integrity at each step ensures consistent and trustworthy performance measurements.",
  "partake-activities": "Partake in activities aimed at enhancing your vocabulary and expanding your range of expressions.",
  activity: activity$1,
  reviews: reviews$1,
  "get-started": "Let's Get Started With Your Idea",
  "reach-out": "Reach out to us using the form below, and our dedicated team will get back to you as soon as possible. Your input is valuable to us, so don't hesitate to get in touch. We look forward to hearing from you!",
  "contact-us": "Contact Us",
  "Contact Us": "Contact Us",
  "get-back": "We will get back to you asap!",
  "full-name": "Full Name",
  "first-name": "First Name",
  "last-name": "Last Name",
  "email-address": "Email Address",
  "phone-number": "Phone Number",
  "enter-phone": "Enter phone number",
  company: company$1,
  "footer-company": "Company",
  "footer-uedu": "U Education Inc.",
  "footer-wlabs": "W Labs Inc.",
  "footer-ceo": "CEO",
  "footer-matt": "Matt Jung",
  "footer-business-id": "Business ID",
  "enter-company": "Enter company",
  message: message$1,
  "enter-message": "Your message here",
  submit: submit$1,
  "our-office": "Our Office",
  address: address$1,
  "message-success": "Message Sent Successfully!",
  "message-failed": "Message failed to send!",
  "failed-to-load-blogs": "We’re working on something amazing! Content will be up shortly.",
  "first-name-required": "Please enter your first name",
  "last-name-required": "Please enter your last name",
  "email-required": "Please enter your email",
  "invalid-email": "Please enter a valid email",
  "phone-required": "Please enter your phone number",
  "invalid-phone": "Phone number must be entered as numbers only",
  "message-required": "Please enter your message",
  "dashboard-comprehensive": "The dashboard offers a comprehensive view of your projects, earnings, tasks, and more, simplifying the process of monitoring your business's progress.",
  "crawled-products": "Crawled Products",
  "products-have": "Products have been crawled from websites, allowing for easy checking of their specifications and more.",
  "database-update": "Database Update",
  "no-worry": "No need to worry if something is missed. You can simply add links to be included in the database for crawling.",
  "tarot-reading": "Tarot Reading Selection",
  "crafted-captivating": "Crafted with captivating designs and animations, users can choose between Western reading and personalized tarot reading based on their preference.",
  "card-selection": "Card Selection",
  "select-three": "Select three cards for a personalized reading. Watch them come alive with vibrant animation and changing colors, offering comprehensive insights and guidance for your journey.",
  "reading-result": "Reading Results",
  "experience-past": "Experience the past, present, and future unfold with captivating animations as you reveal each card, offering valuable insight into your journey ahead.",
  "innovative-application": "Experience the past, present, and future unfold with captivating animations as you reveal each card, offering valuable insight into your journey ahead.",
  "operation-manager": "Operations Manager",
  matt: matt$1,
  ricky: ricky$1,
  joseph: joseph$1,
  hoon: hoon$1,
  lin: lin$1,
  songyi: songyi$1,
  gale: gale$1,
  jaimie: jaimie$1,
  salve: salve$1,
  lora: lora$1,
  ben: ben$1,
  czedrix: czedrix$1,
  rj: rj$1,
  mon: mon$1,
  orland: orland$1,
  neil: neil$1,
  jason: jason$1,
  winona: winona$1,
  pola: pola$1,
  zyra: zyra$1,
  virnel: virnel$1,
  karlo: karlo$1,
  "matt-name": "WonSeok Jung",
  "ricky-name": "HyunSuk Lee",
  "gale-name": "Leslie Palmos",
  "joseph-name": "Kang Jun Lee",
  "hoon-name": "Hun-Jae Moon",
  "lin-name": "Hyelin Kang",
  "songyi-name": "Songyi Han",
  "jaimie-name": "Amron Florence Arda",
  "salve-name": "Salvacion Parreño",
  "lora-name": "Rhoda Grace Brito",
  "ben-name": "Benito Orbino",
  "czedrix-name": "Czedrix Barcena",
  "rj-name": "Raymond John Yorong",
  "mon-name": "Raymond De La Cruz",
  "orland-name": "Orland Salas",
  "neil-name": "Neil Christopher Gipaya",
  "jason-name": "Jason Lipreso",
  "winona-name": "Winona Thomas",
  "pola-name": "Pola Mei Dailo",
  "zyra-name": "Zyra Capilastique",
  "virnel-name": "Virnel Louise De Guzman",
  "karlo-name": "Karlo Miguel Perez",
  "qa-specialist": "QA Specialist",
  "see-more": "See More",
  "top-tool": "W Labs develops specialized solutions for various industries, leveraging AI-based technologies.",
  "bottom-tool": "We develop systems such as AI-powered video analysis platforms, enterprise capability assessment tools, and personalized educational systems that offer AI coaching based on students’ learning progress and patterns — all built using cutting-edge technologies like PyTorch, Hugging Face Transformers, LoRA, LangChain, and FastAPI.",
  "project-manager": "Project Manager",
  "system-architect": "System Architect",
  "administrative-officer": "Administrative Officer",
  "smart-video": "Smart Video Analysis and Behavior Tracking Solutions",
  "build-ai": "We build AI-powered systems that can understand what’s happening in videos in real time. From detecting people or objects to tracking movement and spotting unusual behavior, our technology helps you monitor more effectively. We combine video and sensor data, process live streams quickly, and make it easy to get useful insights for your business.",
  "deep-learning": "Deep learning-based object detection and behavior analysis",
  yolo: yolo$1,
  "optical-flow": "Motion tracking using Optical Flow and CAMShift",
  roi: roi$1,
  "precision-optimization": "Precision optimization of abnormal behavior classification model",
  "real-time": "Real-time streaming data processing technology",
  rtsp: rtsp$1,
  "web-socket": "Low-latency data transmission using WebSocket",
  "open-cv": "Real-time frame analysis using OpenCV",
  "multi-stream": "Multi-stream parallel processing architecture design",
  "ai-text": "AI data integration and automated learning system",
  multimodal: multimodal$1,
  outlier: outlier$1,
  "dynamic-roi": "Dynamic ROI auto-resetting algorithm",
  "incremental-learning": "Incremental learning framework for continuous learning",
  jumbotron: jumbotron$1,
  "meet-team": "Meet the W Labs Team — The Driving Force Behind Innovation and Growth",
  "team-experts": "W Labs is a team of experts leading technological innovation across diverse IT domains, including AI data integration and automated learning systems, AI-powered application solutions, and web and app IT maintenance. Each team member goes beyond simply fulfilling a role — they are strategic partners and creative problem solvers who shape project direction and design success alongside our clients.",
  "lead-developer": "Lead Developer",
  "junior-project": "Junior Project Manager",
  "operations-assistant": "Operations Assistant",
  "communications-manager": "Communications Manager",
  "technical-project": "Technical Project Manager",
  "front-end": "Front-end Developer",
  "ai-engineer": "AI Engineer",
  slogan: slogan$1,
  "action-detection": "Action detection based on real-time video analysis",
  "reading-behavior": "Reading Behavior in Real Time, Advancing Safety",
  "offers-advanced": "W Labs offers advanced AI solutions that automatically detect human behaviors and identify anomalies through real-time video analytics. Our technology enables rapid response and optimized operations across security, safety, and customer service scenarios.",
  rag: rag$1,
  "retrieving-knowledge": "Retrieving Knowledge, Generating Answers",
  "rag-technology": "W Labs leverages state-of-the-art RAG technology to deliver real-time, knowledge-augmented AI solutions. Designed for domains requiring high precision, our systems combine internal data with external sources to provide intelligent, reliable responses.",
  "hero-1": "We maximize work efficiency",
  "hero-2": "We connect possibilities",
  "hero-3": "We design a growth engine",
  "hero-4": "We innovate with AI",
  "hero-5": "We design trust",
  "hero-6": "We innovate with data",
  "hero-7": "We lead the future of technology",
  "full-pm": "Full Stack Developer / PM",
  "full-sa": "Full Stack Developer / SA",
  "full-tpm": "Full Stack Developer / TPM",
  "full-ai": "Full Stack Developer / AI Engineer",
  "data-driven": "Data-Driven Custom Platform Development",
  "reimagining-business": "Reimagining Your Business Through Technology",
  "data-driven-text": "At W Labs, we go beyond static websites to build data-centric platforms that empower smart decision-making. By integrating the latest front-end frameworks with cloud-native backend architectures, we deliver systems that are scalable, maintainable, and future-ready. Our approach focuses not just on today’s needs, but on designing technology that grows with your business.",
  "niftle-description": "Niftle Craft is a blockchain-based web application designed to enhance user immersion in the virtual world through a visually engaging and intuitive interface. Built on modern design principles, the platform offers a smooth and immersive user experience across various devices.",
  "niftle-title1": "Key Technical Achievements",
  "niftle-title1-sub": "Tech Stack & Architecture",
  "laravel-text": "Utilized as the backend framework to deliver scalable, secure, and modular APIs.",
  "vue-text": "Adopted for building responsive, real-time interactive user interfaces.",
  "bootstrap-text": "Ensures device compatibility and consistent styling for modern layout structures.",
  "niftle-title2": "Design-Driven Engineering",
  "neon-color": "Neon Color Themes",
  "neon-color-text": ":Designed to evoke creativity and enjoyment, enhancing visual immersion.",
  "3d-graphics": "3D Graphics Integration",
  "3d-graphics-text": "Implemented to elevate user immersion and distinguish the interface.",
  "futuristic-typo": "Futuristic Typography",
  "futuristic-typo-text": "Custom styles applied to reinforce readability and brand identity with a futuristic aesthetic.",
  "niftle-title3": "Outcomes & Value",
  "niftle-text3-1": "Successfully developed an immersive blockchain web application that enhances brand perception and increases user retention.",
  "niftle-text3-2": "Demonstrated strong technical capabilities in integrating blockchain logic with interactive UI/UX using a modern, modular tech stack.",
  "niftle-text3-3": "Established a scalable architecture ready for future feature expansions such as NFT marketplaces and real-time virtual economies.",
  "deep-learning-services-description": "Applies YOLOv5 and ResNet for accurate object recognition, integrates Optical Flow and CAMShift for motion tracking, and uses ROI-based sequence analysis to classify behaviors with optimized precision in abnormal activity detection.",
  "real-time-services-description": "Enables smooth handling of live video via RTSP, transmits data efficiently with WebSocket, performs frame-by-frame analysis using OpenCV, and supports multi-stream parallel processing for low-latency performance.",
  "ai-text-services-description": "Combines video and sensor inputs for multimodal analysis, cleanses data with Random Forest outlier detection, adjusts dynamically with ROI auto-resetting, and adopts incremental learning for ongoing model improvements.",
  "custom-design-services-description": "Delivers tailored website designs or template-based solutions with responsive layouts and engaging interfaces that enhance usability and user experience.",
  "content-management-services-description": "Features a simple editor for managing text, media uploads (images, video, audio), and includes auto-tagging with visualization for better content organization.",
  "admin-business-services-description": "Supports streamlined inquiry handling, content editing, inventory and order tracking, as well as secure systems for delivery and payment management.",
  "user-interaction-services-description": "Facilitates collaboration through job requests, quotation calculators, dashboards for sellers and companies, and built-in messaging with questionnaires.",
  "advanced-features-services-description": "Adds interactivity with calendar tools and pop-ups, integrates location-aware maps, and reinforces safety with reCAPTCHA-based security measures.",
  "product-listing-services-description": "Provides detailed product catalogs, wishlist and rating features, and ensures a smooth checkout with secure and convenient payment options.",
  "food-calorie-text": "Food Calorie Analyzer is a mobile app that identifies food through a photo and instantly estimates its calorie content. It helps users make healthier choices by providing quick, convenient nutrition insights.",
  "encouragement-generation-text": "KindleUp is your AI-powered companion for sharing genuine encouragement with anyone. It helps you craft warm, personalized messages in seconds — no stress, no generic templates. Whether you’re lifting someone’s spirits after a tough day, celebrating a win, or simply spreading a little positivity, KindleUp makes it effortless to share words that truly resonate.",
  "focused-task-text": "The MVP is a simple to-don't app designed to help users focus on their tasks without distractions. It keeps only the most important features so users can easily plan, track, and finish their work. The goal is to improve focus and task completion.",
  "audio-conversion-text": "AudioMint MVP is a web-based tool that turns text into clear and natural-sounding MP3 audio using AI text-to-speech technology. It helps users quickly create audio files from text without needing technical skills. The MVP focuses on fast conversion, simple controls, and basic batch processing.",
  "ai-multilingual-text": "Lingrid is a lightweight translation MVP designed to streamline multilingual content creation for both teams and developers. It enables efficient translation across multiple languages while supporting structured project management and developer-friendly integration. By leveraging advanced AI models, Lingrid helps ensure fast, scalable, and consistent translations for modern applications.",
  "food-calorie-title1": "Image-Based Detection",
  "food-calorie-text1": "Users can take a photo of their meal to automatically analyze calorie content.",
  "food-calorie-title2": "Instant Results",
  "food-calorie-text2": "The app quickly displays calorie estimates within seconds.",
  "food-calorie-title3": "Meal History",
  "food-calorie-text3": "Saves analyzed meals so users can track their eating habits over time.",
  "encouragement-generation-title1": "AI-Generated Encouragement Messages",
  "encouragement-generation-text1": "Generate uplifting, thoughtful, and personalized messages instantly — perfect for boosting morale or recognizing team milestones.",
  "encouragement-generation-title2": "Tone-Adaptive Messaging",
  "encouragement-generation-text2": "Choose your tone (inspiring, humorous, formal, or casual), and KindleUp adapts the message style to match your voice.",
  "encouragement-generation-title3": "Fast & Effortless Workflow",
  "encouragement-generation-text3": "Craft messages in seconds instead of minutes — especially handy during busy cycles, sprint reviews, or high-pressure deadlines.",
  "focused-task-title1": "Kanban Task Tracking",
  "focused-task-text1": "Tasks are organized using a simple Kanban board such as To Do, In Progress, and Done. This helps users clearly see their progress at a glance.",
  "focused-task-title2": "Motivational Messages",
  "focused-task-text2": "The app shows short motivational messages when users complete tasks. This encourages users to stay positive and keep going.",
  "focused-task-title3": "Distraction-Free Design",
  "focused-task-text3": "Only essential features are included to avoid clutter. This helps users stay focused on completing tasks instead of getting distracted.",
  "audio-conversion-title1": "Text to MP3 Conversion",
  "audio-conversion-text1": "Users can enter text and convert it into an MP3 audio file using AI voices. Voice speed, pitch, and language can be adjusted easily.",
  "audio-conversion-title2": "Batch Conversion (JSON & CSV)",
  "audio-conversion-text2": "Users can upload JSON or CSV files to convert many text entries into audio at once. All generated MP3 files are downloaded together as a ZIP file.",
  "audio-conversion-title3": "Voice Preview andUsage Tracking",
  "audio-conversion-text3": "Users can preview the voice before final conversion to check quality. The system also shows how many characters are used each day to avoid going over limits.",
  "ai-multilingual-title1": "Translation Project Management",
  "ai-multilingual-text1": "Organize and manage translation projects efficiently, allowing teams to track progress, updates, and language coverage in one place.",
  "ai-multilingual-title2": "Developer-Ready npm",
  "ai-multilingual-text2": "Provides an npm package that developers can easily integrate into their applications, enabling seamless translation workflows within existing tech stacks.",
  "ai-multilingual-title3": "AI-Powered Multilingual Translation",
  "ai-multilingual-text3": "Supports translation into multiple languages using Claude AI, delivering accurate and context-aware results across different use cases.",
  productsFooter: productsFooter$1,
  products: products$1,
  home: home$1,
  footer: footer$1,
  about: about$1,
  services: services$1,
  product: product$1,
  "our-projects": { "title": "Projects", "description": "We take pride in delivering high-quality, innovative digital solutions that drive success. From custom websites and powerful web applications to AI-driven platforms, our portfolio showcases a commitment to excellence, usability, and performance." },
  newsroom: newsroom$1,
  "contact-modal": { "title": "Let's Get Started With Your Idea", "description": "Reach out to us and our dedicated team will get back to you as soon as possible.", "description2": "Your input is valuable to us, so don't hesitate to get in touch. We look forward to hearing from you!", "schedule-text": "Schedule a consultation to discuss your challenges and explore how W Labs can help solve your problems.", "full-name": "Full Name", "first-name": "First Name", "last-name": "Last Name", "first-name-required": "First name is required", "last-name-required": "Last name is required", "email-address": "Email Address", "enter-email": "Enter your email", "email-required": "Email is required", "invalid-email": "Please enter a valid email address", "phone-number": "Phone Number", "enter-phone": "Enter your phone number", "phone-required": "Phone number is required", "invalid-phone": "Please enter a valid phone number", "company": "Company", "enter-company": "Enter your company name", "message": "Message", "enter-message": "Enter your message", "message-required": "Message is required", "privacy-agreement": "By checking this, you agree to the Privacy Policy, be contacted regarding the topic/subject you inquired on, and consent to receiving marketing communications", "submit": "Submit Inquiry", "email-label": "Email Address", "phone-label": "Phone Number", "office-label": "Our Office", "privacy-agreement-required": "Please agree to the privacy agreement to continue" },
  wiz: wiz$1,
  terms: terms$1,
  privacy: privacy$1,
  "optical-microscope": { "title": "LC-OCT Skin Structure Analysis", "description": "See beneath the skin's surface without invasive procedures. This cutting-edge imaging technology delivers microscopic views of skin structure in real-time, helping medical professionals diagnose conditions accurately and track treatment progress with unprecedented clarity.", "imageAlt": "LC-OCT Skin Structure Analysis Device" }
};
const ContactUs = "문의하기";
const OurProjects = "프로젝트";
const ProductsServices = "제품 및 서비스";
const Projects = "프로젝트";
const NewsRoom = "뉴스룸";
const wizAssistant = "WIZ 어시스턴트";
const registrations = "등록";
const Products = "제품";
const English = "영어";
const Korean = "한국어";
const Home = "홈";
const Services = "서비스";
const Blogs = "블로그";
const january = "1월";
const february = "2월";
const march = "3월";
const april = "4월";
const may = "5월";
const june = "6월";
const july = "7월";
const august = "8월";
const september = "9월";
const october = "10월";
const november = "11월";
const december = "12월";
const send = "보내기";
const ceo = "대표";
const developer = "개발자";
const designer = "UI / UX 디자이너";
const recaptcha = "reCAPTCHA 보안 보호";
const blockchain = "블록체인";
const dashboard = "대시보드";
const organize = "조직화";
const calendar = "캘린더";
const booklist = "도서 목록";
const create = "생성";
const color = "색상";
const design = "디자인";
const font = "폰트";
const incorporate = "통합";
const arrange = "정리";
const dialogue = "대화";
const expressions = "표현";
const vocabulary = "어휘";
const input = "입력";
const inquire = "문의";
const Reviews = "리뷰";
const accuracy = "정확성";
const activity = "활동";
const reviews = "리뷰";
const company = "회사";
const message = "메시지";
const submit = "제출";
const address = "대한민국 경기도 수원시 권선구 세권로 219, 3층";
const matt = "매트 ( Matt )";
const ricky = "리키 ( Ricky )";
const joseph = "조셉 ( Joseph )";
const hoon = "마일로 ( Milo )";
const lin = "린 ( Lin )";
const songyi = "송이 (Songyi)";
const gale = "게일 ( Gale )";
const jaimie = "제이미 ( Jaimie )";
const salve = "살베 ( Salve )";
const lora = "로라 ( Lora )";
const ben = "벤 ( Ben )";
const czedrix = "세드릭 ( Czedrix )";
const rj = "알제이 ( RJ )";
const mon = "레이먼드 ( Raymond )";
const orland = "올랜드 ( Orland )";
const neil = "닐 ( Neil )";
const jason = "제이슨 ( Jason )";
const winona = "위노나( Winona)";
const pola = "폴라 (Pola)";
const zyra = "자이라 (Zyra)";
const virnel = "버넬 (Virnel)";
const karlo = "카를로 (Karlo)";
const yolo = "YOLOv5, ResNet 기반 객체 인식";
const roi = "ROI 기반 행동 시퀀스 분석";
const rtsp = "RTSP 기반 영상 수집 및 전처리";
const multimodal = "영상+센서 데이터 멀티모달 통합";
const outlier = "랜덤 포레스트 기반 이상치 제거";
const jumbotron = "하다";
const slogan = "슬로건";
const rag = "RAG 기반 지식 생성형 AI";
const title3 = "성과 및 가치";
const productsFooter = { "contactInformation": "연락처 정보", "inquiryEmail": "문의 이메일", "inquiryType": "문의 유형", "inquiryTypeValue": "연구 제품 및 서비스 문의", "providerInformation": "제공자 정보", "serviceProvider": "서비스 제공자", "organizationType": "기관 유형", "organizationTypeValue": "소프트웨어 및 AI 연구 서비스 제공업체", "location": "위치", "locationValue": "대한민국", "registrations": "등록 정보", "dunsRegistered": "D-U-N-S® 등록" };
const products = { "pageTitle": "광학현미경 기반 피부 측정", "productSubtitle": "내장형 비주얼 인터페이스가 포함된 디지털 광학 관찰 시스템", "catalogueNumber": "카탈로그 번호", "productType": "제품 유형", "includedProgram": "포함 프로그램", "intendedUse": "사용 목적", "researchUseDisclaimer": "연구용 면책 조항", "packageComponents": "패키지 구성품", "pricing": "가격 정보", "leadTime": "리드 타임", "pricingUponRequest": "문의 시 가격 책정 (USD)", "leadTimeValue": "2-4주", "researchUseOnly": "연구용으로만 사용 가능합니다.", "notForMedical": "의료, 화장품 효능 입증 또는 임상 의사결정을 위한 용도가 아닙니다.", "notForCosmetic": "진단, 치료, 화장품 또는 임상 용도로 사용할 수 없습니다.", "notForCosmeticClaims": "진단, 치료, 화장품 주장 또는 임상 용도로 사용할 수 없습니다.", "notForCosmeticEfficacy": "진단, 치료, 화장품 효능 주장 또는 임상 용도로 사용할 수 없습니다.", "items": { "poreDensity": { "productName": "광학현미경 기반 모공 밀도 분석 시스템", "subText": "직접 모공 커버리지 측정", "catalogueNumber": "WSL-ODM-SKIN-S1", "productType": "연구용 제품, 장치 + 분석 소프트웨어 패키지", "descriptions": ["이 서비스는 고배율 디지털 광학현미경과 기본 이미지 분석 프로그램을 결합하여 피부 모공 밀도를 정량적으로 평가합니다.", "광학현미경 이미지 내에서 눈에 보이는 모공 유사 구조를 측정하고 연구 및 비교 평가를 위한 수치적 모공 밀도 지표를 제공합니다."], "programs": { "skinPoreDensityAnalysis": "피부 모공 밀도 분석", "features": ["단위 면적당 모공 수 (mm²)", "ROI 기반 정량적 결과", "비교 트렌드 지표"] }, "intendedUse": "이 서비스는 광학현미경 이미지를 사용한 피부 모공 밀도의 연구 및 실험적 평가를 위해 사용됩니다.", "packageComponents": ["디지털 광학현미경 (최대 1000배)", "PC 호환 이미지 획득 소프트웨어", "피부 모공 밀도 분석 프로그램", "기술 문서"] }, "skinFlake": { "productName": "광학현미경 기반 피부 각질 분석 시스템", "subText": "건조함 및 각질 평가", "catalogueNumber": "WSL-ODM-SKIN-S2", "productType": "연구용 제품, 장치 + 다중 측정 분석 패키지", "descriptions": ["이 서비스는 광학현미경 이미지를 사용하여 피부 모공 밀도와 피부 각질(박리) 면적 비율을 결합하여 분석합니다.", "모공 분포 및 표면 건조 관련 특성에 대한 비교 연구가 가능합니다."], "programs": { "skinPoreDensityAnalysis": "피부 모공 밀도 분석", "skinFlakeAreaRatioAnalysis": "피부 각질 면적 비율 분석" }, "intendedUse": "이 서비스는 광학현미경 이미지를 사용한 피부 모공 특성 및 표면 각질 분포의 연구 및 실험적 평가를 위해 사용됩니다.", "packageComponents": ["디지털 광학현미경 (최대 1000배)", "PC 호환 이미지 획득 소프트웨어", "모공 밀도 분석 프로그램", "각질 면적 비율 분석 프로그램", "기술 문서"] }, "skinTexture": { "productName": "광학현미경 기반 피부 텍스처 분석 시스템", "subText": "텍스처 매끄러움 평가", "catalogueNumber": "WSL-ODM-SKIN-S3", "productType": "연구용, 장치 + 종합 분석 패키지", "descriptions": ["이 서비스는 광학현미경 이미지를 기반으로 모공 밀도, 각질 면적 비율, 텍스처 거칠기 점수 분석을 결합하여 포괄적인 피부 표면 분석을 제공합니다.", "고급 피부 표면 연구 및 비교 연구를 위한 다차원 정량적 데이터를 제공합니다."], "programs": { "skinPoreDensityAnalysis": "피부 모공 밀도 분석", "skinFlakeAreaRatioAnalysis": "피부 각질 면적 비율 분석", "skinTextureRoughnessAnalysis": "피부 텍스처 거칠기 점수 분석" }, "intendedUse": "이 서비스는 광학현미경 이미지를 사용한 포괄적인 피부 표면 특성의 연구 및 실험적 평가를 위해 사용됩니다.", "packageComponents": ["디지털 광학현미경 (최대 1000배)", "PC 호환 이미지 획득 소프트웨어", "모공 밀도 분석 프로그램", "각질 면적 비율 분석 프로그램", "텍스처 거칠기 점수 분석 프로그램"] }, "skinTone": { "productName": "광학현미경 기반 피부 톤 및 다크니스 분석 시스템", "subText": "밝기 및 색소 침착 추적", "catalogueNumber": "WSL-ODM-SKIN-S4", "productType": "연구용 제품, 장치 + 비색 분석 소프트웨어 패키지", "descriptions": ["이 서비스는 광학현미경 이미지와 표준화된 비색 분석을 사용하여 피부 밝기 및 다크니스 수준을 정량적으로 평가합니다.", "RGB 이미지 데이터를 지각적 색 공간(예: CIE L*a*b*)으로 변환하여 고정된 관심 영역(ROI) 내에서 수치적 피부 톤 지수를 계산합니다.", "시간 경과에 따른 피부 톤 변화나 환경 노출 또는 처리 효과와 관련된 밝기 변화를 포함한 실험 조건 간의 객관적인 비교가 가능합니다."], "programs": { "skinDarknessAnalysis": "피부 다크니스 / 피부 톤 분석", "features": ["ROI 내 평균 피부 밝기(L*) 값", "피부 다크니스 지수 (정규화된 0–100 척도)", "선택적 개인 유형각(ITA°) 계산", "비교 트렌드 지표"] }, "intendedUse": "이 서비스는 통제된 이미징 조건 하에서 광학현미경 이미지를 사용한 피부 밝기 및 다크니스 특성의 연구 및 실험적 평가를 위해 사용됩니다.", "packageComponents": ["디지털 광학현미경 (최대 1000배)", "PC 호환 이미지 획득 소프트웨어", "피부 다크니스 / 피부 톤 분석 프로그램", "색상 보정 및 측정 가이드라인", "기술 문서"] } } };
const home = { "partnership": { "fortune100": { "text": "W Labs는 현재", "highlight": "포춘 100대 제약회사 중 상위 3개사", "text_end": "의 승인된 공급업체입니다." }, "scienceExchange": { "text": "W Labs는 현재 생명과학 분야 세계 최고의 R&D 마켓플레이스인", "highlight": "Science Exchange", "text_end": "의 인증된 공급업체입니다." }, "link": "https://www.scienceexchange.com/", "description": "글로벌 상위 5대 제약회사, 바이오텍 기업 및 연구 기관은 당사의 AI 기반 바이오메디컬 이미징 분석 소프트웨어를 활용하여 LC-OCT 및 3D 피부 분석과 같은 첨단 프로젝트를 가속화할 수 있습니다." }, "banner": { "title": "생산성을 재정의하는 글로벌 AI 퍼스트 개발 파트너", "subtitle": "우리는 단순히 소프트웨어를 구축하지 않습니다—조직의 작동 방식을 변화시키는 지능형 시스템을 설계합니다.", "description": "W Labs는 혁신적인 기술과 유연한 조직 문화를 기반으로 AI 및 웹/앱 개발을 통해 고객의 디지털 성공을 설계하는 글로벌 성장 중심 IT 파트너입니다.", "button": "회사 소개" }, "carousel": { "readMore": "더 보기", "slide1": { "title": { "line1": "W Labs에서는", "line2": "데이터와 AI로 혁신합니다" }, "description": { "line1": "최첨단 기술을 통해 효율성을 설계합니다: 범용 접근을 위한 PWA, 즉각적인 확장성을 위한 서버리스 인프라, 그리고 워크플로우 최적화를 위한 AI 자동화.", "line2": "기술의 미래를 이끈다는 것은 내일의 솔루션을 오늘 배포하는 것을 의미합니다—업무를 더 빠르고, 더 간단하고, 더 효과적으로 만듭니다." } }, "slide2": { "title": { "line1": "W Labs에서는", "line2": "성장 엔진과 신뢰를 설계합니다" }, "description": { "line1": "신뢰할 수 있고 확장 가능한 솔루션을 통해 비즈니스 성장을 촉진하고 지속적인 파트너십을 구축하는 플랫폼을 만듭니다.", "line2": "우리의 시스템은 아이디어를 측정 가능한 영향으로 전환하며, 일관되게 성과를 내는 기술을 제공함으로써 신뢰를 얻습니다—고객의 성장이 우리의 사명이기 때문입니다." } }, "slide3": { "title": { "line1": "W Labs에서는", "line2": "업무 효율성을 극대화하고 기술의 미래를 이끕니다" }, "description": { "line1": "우리의 혁신 DNA는 고급 AI 모델과 강력한 데이터 파이프라인을 결합합니다.", "line2": "사용과 함께 진화하는 머신러닝, 문맥을 이해하는 자연어 처리, 필요를 예측하는 예측 분석을 배포합니다—데이터의 복잡성을 우아한 단순함으로 전환합니다." } } }, "services": { "aiAutomation": { "title": "AI 자동화 프로젝트", "subtitle": "AI가 반복적인 작업을 처리하는 동안 팀은 전략에 집중하세요.", "description": "컴퓨터 비전, NLP, 머신러닝을 활용한 지능형 자동화를 구축하여 운영을 효율화하고 새로운 역량을 발휘할 수 있도록 합니다." }, "legacyModernization": { "title": "레거시 시스템 현대화", "subtitle": "구식 기술에 발목이 잡히지 마세요.", "description": "레거시 시스템을 현대적인 클라우드 네이티브 플랫폼으로 전환하여 성능을 향상시키고 비용을 절감하며 미래 성장을 위한 기반을 마련합니다." }, "saasDevelopment": { "title": "SaaS 및 맞춤형 플랫폼 개발", "subtitle": "스타트업부터 기업까지 확장 가능한 소프트웨어 제품을 구축하세요.", "description": "원활한 UX, 견고한 인프라, 비즈니스 요구에 맞게 진화할 수 있는 유연성을 갖춘 클라우드 기반 플랫폼을 만듭니다." }, "publicSector": { "title": "교육, 행정 및 공공 부문 시스템", "subtitle": "공공의 이익을 위한 기술.", "description": "교육 기관, 정부 기관, 비영리 단체를 위한 특화된 시스템을 구축하여 행정 효율성을 높이고 학습 경험을 특별하게 만듭니다." } }, "projects": { "title": "프로젝트", "description": "온라인 프레젠스 혁신과 비즈니스의 디지털 성장을 지원해 드리겠습니다." } };
const footer = { "title": "성장과 디지털 트랜스포메이션을 위한 파트너", "newsletter_text": "뉴스레터를 구독하고 혁신적인 디지털 생산성 솔루션을 정기적으로 받아보세요.", "home": "홈", "about_us": "회사 소개", "services": "서비스", "products": "제품", "projects": "프로젝트", "newsroom": "뉴스룸", "contact_us": "문의하기", "terms_conditions": "이용약관", "privacy_policy": "개인정보 처리방침", "copyright_text": "W Labs © 모든 권리 보유 2026. 버전 #.00", "company_name": "회사명", "business_id": "사업자등록번호", "subscribe": "구독하기" };
const about = { "title": "회사 소개", "description": "W Labs는 비즈니스 운영을 최적화하는 최첨단 솔루션을 제공합니다. 최신 IT 기술을 활용하여 조직의 효율적인 성장을 지원합니다. 신뢰할 수 있는 기술 파트너로서 경쟁력을 유지하세요.", "hero_words": { "hero-1": "혁신", "hero-2": "탁월함", "hero-3": "변혁", "hero-4": "기술", "hero-5": "파트너십", "hero-6": "성장", "hero-7": "솔루션" }, "services": { "action-detection": { "title": "행동 감지", "slogan": "읽기 행동 분석", "description": "사용자 행동과 상호작용을 이해하기 위한 고급 컴퓨터 비전 솔루션을 제공합니다." }, "rag": { "title": "RAG 기술", "slogan": "지식 검색", "description": "맥락적 정확성을 갖춘 향상된 AI 응답을 위한 검색 증강 생성 기술입니다." }, "data-driven": { "title": "데이터 기반 솔루션", "slogan": "비즈니스 재정의", "description": "데이터 분석을 활용하여 비즈니스 운영을 혁신하고 전략적 의사 결정을 주도합니다." }, "web-app": { "title": "웹 애플리케이션", "description": "탁월한 사용자 경험을 제공하는 혁신적이고 확장 가능한 웹 애플리케이션을 구축합니다." }, "ui-design": { "title": "UI/UX 디자인", "description": "사용자를 참여시키고 디지털 경험을 향상시키는 직관적인 인터페이스를 디자인합니다." }, "ai-utilization": { "title": "AI 활용", "description": "인공지능과 머신러닝을 활용한 최첨단 고객 솔루션입니다." } }, "animated_about": { "cutting_edge": { "title": "최첨단 솔루션", "description": "우리는 고객의 특정 요구에 맞춤화된 최첨단 솔루션 개발을 전문으로 합니다. 우리 팀은 정보 기술의 최전선에 서서 비즈니스 운영을 최적화하고 성공을 이끄는 최신 기술을 제공합니다.", "second_description": "W Labs는 비즈니스 운영을 최적화하고 성공을 이끄는 최첨단 솔루션을 제공하는 데 전념하고 있습니다. 최신 정보 기술의 발전을 활용하여 프로세스를 간소화하고 조직이 효율적으로 목표를 달성할 수 있도록 맞춤형 솔루션을 개발합니다." }, "expertise_innovation": { "title": "전문성과 혁신", "description": "신흥 기술과 산업 트렌드에 대한 깊은 이해를 바탕으로 모든 프로젝트에 전문성과 혁신을 제공합니다. 우리의 지식을 활용하여 오늘날의 역동적인 시장 환경에서 비즈니스 경쟁력을 유지하고 트렌드를 앞서나갈 수 있도록 돕습니다.", "second_description": "신흥 기술과 산업 트렌드를 선도하며 W Labs는 고객이 오늘날의 역동적인 시장 환경에서 경쟁력을 유지할 수 있도록 보장합니다. W Labs를 기술 파트너로 선택하시면 비즈니스 운영을 신뢰할 수 있는 전문가에게 맡기고 핵심 업무에 집중할 수 있습니다." }, "reliable_partner": { "title": "신뢰할 수 있는 기술 파트너", "description": "어떤 파트너십에서든 신뢰는 가장 중요합니다. W Labs를 기술 파트너로 선택하시면 비즈니스 운영을 효율적으로 처리할 수 있는 전문가에게 맡길 수 있으며, 핵심 역량에 집중할 수 있습니다. 우리는 모든 과정에서 고객의 성공을 지원하기 위해 노력합니다.", "second_description": "AI 기반 비디오 분석 플랫폼, 기업 역량 평가 도구, 학생의 학습 진행 상황과 패턴에 따라 AI 코칭을 제공하는 맞춤형 교육 시스템 등을 개발합니다. 이러한 시스템은 PyTorch, Hugging Face Transformers, LoRA, LangChain, FastAPI와 같은 최첨단 기술을 사용하여 구축됩니다." } }, "team": { "title": "혁신과 성장을 이끄는 원동력", "description_1": "W Labs는 AI 데이터 통합 및 자동화 학습 시스템, AI 기반 애플리케이션 솔루션, 웹 및 앱 IT 유지보수 등 다양한 IT 분야에서 기술 혁신을 선도하는 전문가 팀입니다.", "description_2": "각 팀원은 단순히 역할을 수행하는 것을 넘어 전략적 파트너이자 창의적인 문제 해결사로서 고객과 함께 프로젝트 방향을 설정하고 성공을 설계합니다.", "meet_team": "W Labs 팀 소개", "members": { "matt": { "name": "맷 G." }, "ricky": { "name": "리키 F." }, "joseph": { "name": "조셉 B." }, "hoon": { "name": "훈 L." }, "lin": { "name": "린 T." }, "songyi": { "name": "송이 L." }, "gale": { "name": "게일 B." }, "jaimie": { "name": "제이미 F." }, "salve": { "name": "살브 R." }, "lora": { "name": "로라 C." }, "ben": { "name": "벤 R." }, "czedrix": { "name": "체드릭스 M." }, "neil": { "name": "닐 P." }, "jason": { "name": "제이슨 D." }, "winona": { "name": "위노나 E." }, "pola": { "name": "폴라 F." }, "zyra": { "name": "자이라 G." }, "virnel": { "name": "버넬 C." }, "karlo": { "name": "카를로 M." } }, "positions": { "ceo": "최고경영자", "project-manager": "프로젝트 매니저", "full-pm": "풀스택 프로젝트 매니저", "full-sa": "풀스택 시스템 아키텍트", "administrative-officer": "행정 책임자", "designer": "디자이너", "operation-manager": "운영 매니저", "junior-project": "주니어 프로젝트 코디네이터", "corporate-secretary": "법인 비서", "communications-manager": "커뮤니케이션 매니저", "full-tpm": "풀스택 기술 프로젝트 매니저", "full-stack": "풀스택 개발자", "full-ai": "풀스택 AI 개발자", "marketing-specialist": "마케팅 전문가", "qa-specialist": "QA 전문가" } } };
const services = { "title": "서비스", "description": "숙련된 개발자와 디자이너가 귀사의 특정 요구사항에 맞춰 아름답고 사용자 친화적인 웹사이트를 제작합니다. 적응형 디자인부터 원활한 기능까지, 고객의 마음을 사로잡는 매력적인 사용자 경험을 보장합니다.", "product1Alt": "제품 개발 서비스 일러스트레이션", "product2Alt": "디자인 및 개발 서비스 일러스트레이션", "metaTitle": "전문 웹 개발 및 디자인 서비스 | 회사명", "metaDescription": "비즈니스 요구사항에 맞춘 전문 웹 개발 및 디자인 서비스. 원활한 기능과 매력적인 사용자 경험을 갖춘 아름답고 사용자 친화적인 웹사이트를 제공합니다.", "metaKeywords": "웹 개발, 웹 디자인, 전문 서비스, 웹사이트 개발, 맞춤형 웹 디자인, 사용자 경험, UI/UX 디자인, 반응형 디자인", "sections": { "deepLearning": { "title": "딥러닝 기반 객체 감지 및 행동 분석", "items": ["YOLOv5 및 ResNet 기반 객체 인식", "Optical Flow 및 CAMShift를 활용한 모션 트래킹", "ROI 기반 행동 시퀀스 분석", "이상 행동 분류 모델의 정밀도 최적화"], "imageAlt": "딥러닝 객체 감지 및 행동 분석 일러스트레이션" }, "realTimeStreaming": { "title": "실시간 스트리밍 데이터 처리 기술", "items": ["RTSP 기반 영상 수집 및 전처리", "WebSocket을 활용한 저지연 데이터 전송", "OpenCV를 이용한 실시간 프레임 분석", "멀티 스트림 병렬 처리 아키텍처 설계"], "imageAlt": "실시간 스트리밍 데이터 처리 기술 일러스트레이션" }, "aiDataIntegration": { "title": "AI 데이터 통합 및 자동화 학습 시스템", "items": ["영상 + 센서 데이터 멀티모달 통합", "Random Forest 기반 이상치 제거", "동적 ROI 자동 리셋 알고리즘", "지속적 학습을 위한 점진적 학습 프레임워크"], "imageAlt": "AI 데이터 통합 및 자동화 학습 시스템 일러스트레이션" }, "customDesign": { "title": "커스텀 디자인 & UI/UX", "items": ["맞춤형 웹사이트 및 템플릿 기반 디자인", "반응형, 사용자 친화적 레이아웃", "향상된 사용성을 위한 매력적인 UI/UX"], "imageAlt": "커스텀 디자인 및 UI/UX 서비스 일러스트레이션" }, "contentMedia": { "title": "콘텐츠 및 미디어 관리", "items": ["사용하기 쉬운 콘텐츠 편집기", "이미지, 파일, 동영상 업로드 (YouTube, 오디오, 재생)", "자동 태깅 및 데이터 시각화"], "imageAlt": "콘텐츠 및 미디어 관리 시스템 일러스트레이션" }, "adminBusiness": { "title": "관리자 및 비즈니스 관리", "items": ["문의 및 콘텐츠 편집 시스템", "재고, 주문 및 배송 추적", "안전한 결제 처리"], "imageAlt": "관리자 및 비즈니스 관리 대시보드 일러스트레이션" }, "userInteraction": { "title": "사용자 상호작용 및 커뮤니케이션", "items": ["작업 요청 및 견적 계산기", "판매자 및 회사 대시보드", "메시징, 설문조사 및 팀 협업"], "imageAlt": "사용자 상호작용 및 커뮤니케이션 기능 일러스트레이션" }, "advancedFeatures": { "title": "고급 기능 및 보안", "items": ["인터랙티브 캘린더 UI 및 팝업", "위치 기반 지도 통합", "reCAPTCHA 보안 보호"], "imageAlt": "고급 기능 및 보안 시스템 일러스트레이션" }, "ecommerce": { "title": "이커머스 및 상품 목록", "items": ["상세 페이지가 포함된 상품 카탈로그", "위시리스트 및 별점 평가 시스템", "원활한 결제 및 체크아웃 경험"], "imageAlt": "이커머스 및 상품 목록 플랫폼 일러스트레이션" } } };
const product = { "products-title": "제품", "products-description": "우리는 성공을 이끄는 고품질의 혁신적인 디지털 솔루션을 제공하는 데 자부심을 느끼고 있습니다. 맞춤형 웹사이트와 강력한 웹 애플리케이션부터 AI 기반 플랫폼까지, 우리의 포트폴리오는 탁월함, 사용성, 성능에 대한 약속을 보여줍니다.", "animatedProjects": { "lcOct": { "title": "LC-OCT 피부 구조 분석", "description": "비침습적 실시간 피부 미세구조 영상을 제공하는 고해상도 광간섭 단층촬영 기술로, 생검 없이도 세포 수준의 피부 정보를 피부과 전문의에게 제공합니다.", "cta": "LC-OCT 피부 구조 분석에 대해 문의하기" }, "aiMeasuring": { "title": "AI 피부 광학 측정 및 분석", "description": "진행 상황 추적, 성취도 모니터링, 결제 처리, 출석 기록 및 통계 분석을 통합한 종합 아카데미 관리 프로그램으로, 행정 운영과 개인 맞춤형 교육 효과를 지원합니다.", "cta": "AI 피부 광학 분석기에 대해 문의하기" }, "wizAssistant": { "title": "WIZ 어시스턴트", "description": "고객 질문에 즉시 답변하고, 서비스 절차를 설명하며, 문서 요청을 자동으로 처리하는 웹사이트 지능형 어시스턴트입니다. 응답 시간을 개선하면서 지원 부담을 줄여드립니다—잠들지 않는 유능한 직원과 같습니다.", "cta": "WIZ 어시스턴트에 대해 문의하기" }, "aiEncouragement": { "title": "AI 격려 생성 플랫폼", "description": "온라인 도서 디지털화와 비디오 자막 통합을 가능하게 하는 백엔드 CMS 엔진으로, 관리자가 중앙 집중식 플랫폼에서 텍스트, 이미지, 인터랙티브 요소 및 멀티미디어 접근성을 관리할 수 있습니다.", "cta": "WIZ 어시스턴트에 대해 문의하기" }, "aiDietTracker": { "title": "AI 기반 식단 및 칼로리 분석 트래커", "description": "통합 인터랙티브 활동과 함께 큐레이션된 비디오 클립(영화, 토크쇼, 가사)을 제공하는 영어 학습 플랫폼으로, 멀티미디어 콘텐츠와 원활한 영상 내 학습 활동을 통해 진정한 언어 습득을 촉진합니다." }, "aiTranslator": { "title": "AI 기반 다국어 번역기", "description": "실시간 데이터 모니터링이 가능한 광고 마케팅 프로젝트 관리 플랫폼으로, 사용자 친화적인 대시보드, 통합된 클라이언트/비용 관리 및 간소화된 비즈니스 프로세스 워크플로우를 갖추고 있습니다." }, "aiAudioGenerator": { "title": "AI 오디오 파일 생성", "description": "Laravel API와 Vue.js 2를 사용하여 Talking Plus 및 SLE 교과서를 하드 카피에서 인터랙티브 온라인 형식으로 디지털 전환하여 콘텐츠 디지털화와 원활한 백엔드 데이터 관리를 제공합니다." }, "aiSelfManagement": { "title": "AI 자기 관리 및 동기 부여", "description": "비즈니스 인텔리전스 및 분석을 위한 웹 기반 정보 수집, 처리 및 구성을 위한 자동화된 데이터 추출 및 수집 시스템입니다." }, "aiEvaluation": { "title": "AI 과제 평가 및 학습 시스템", "description": "복잡한 비즈니스 쿼리를 통해 데이터베이스 시스템을 테스트하고 비교하는 성능 벤치마킹 시스템으로, 의사 결정 및 데이터 분석을 최적화하기 위해 속도, 효율성 및 확장성을 측정합니다." }, "aiLanguageLearning": { "title": "AI 기반 언어 학습 플랫폼", "description": "정교한 알고리즘을 사용하여 대량의 고객 리뷰를 분석하는 전자상거래 AI 플랫폼으로, 판매자가 제품을 개선하고 새로운 판매 기회를 식별할 수 있도록 포괄적인 인사이트를 제공합니다." } } };
const newsroom = { "title": "뉴스룸", "welcome": "혁신과 창의성이 만나는 W Labs 블로그에 오신 것을 환영합니다.", "description1": "개발자, 디자이너, 연구팀이 전문성, 경험, 아이디어를 공유합니다. 우리의 기술과 그背后的 스토리를 더 가까이에서 만나보세요.", "description2": "최신 프로젝트, 제품 업데이트, 그리고 W Labs의 미래를 만들어가는 첨단 솔루션에 대한 인사이트를 발견하세요.", "readMore": "더 보기", "featuredArticle": { "title": "OpenAI, 향상된 비전 기능을 갖춘 GPT-4 Turbo 출시", "description": "새로운 AI 모델은 128K 컨텍스트 창과 향상된 멀티모달 이해력을 낮은 비용으로 제공" } };
const wiz = { "title": "WIZ 어시스턴트", "subtitle": "웹사이트에 내장된 스마트 정보 데스크 직원", "features": { "guide_users": "서비스 이용 방법 안내", "automatically_respond": "자주 묻는 질문에 자동 응답", "handle_document": "회의록, 요약본, 공지사항 등 문서 요청 처리", "provide_examples": "다양한 유형의 조직이 워크플로우에 적용할 수 있는 예시 제공", "automate_repetitive": "반복적인 문의 자동화", "extendable_future": "향후 예약, 문서 검색, 내부 리소스 탐색 등으로 확장 가능" }, "main_message": "WIZ 어시스턴트와 함께 고객 지원은 더 빨라지고 운영 부담은 더 가벼워집니다.", "ask_button": "WIZ 어시스턴트 문의하기", "availability": "*모든 화면과 브라우저에서 사용 가능", "pricing_tiers": "가격 정책", "tiers": { "lite": { "name": "라이트", "price": "월 29,000원부터 시작", "features": { "basic_guidance": "기본 안내", "faq_responses": "FAQ 응답" } }, "standard": { "name": "스탠다드", "price": "월 79,000원부터 시작", "features": { "basic_guidance": "기본 안내", "faq_responses": "FAQ 응답", "document_request": "문서 요청 처리", "operational_guidance": "실무 운영 안내" } }, "business": { "name": "비즈니스", "price": "월 149,000원부터 시작", "features": { "basic_guidance": "기본 안내", "faq_responses": "FAQ 응답", "document_request": "문서 요청 처리", "operational_guidance": "실무 운영 안내", "customized_responses": "조직 맞춤형 응답", "strengthened_support": "강화된 운영 지원" } }, "enterprise": { "name": "엔터프라이즈", "price": "맞춤 가격 문의", "features": { "basic_guidance": "기본 안내", "faq_responses": "FAQ 응답", "document_request": "문서 요청 처리", "operational_guidance": "실무 운영 안내", "customized_responses": "조직 맞춤형 응답", "strengthened_support": "강화된 운영 지원", "large_organizations": "대규모 조직용", "internal_integrations": "내부 시스템 통합", "custom_features": "맞춤형 기능 설계" } } }, "audience": { "businesses": { "title": "기업 / 중소기업", "description": "서비스 안내, 고객 문의 처리, 문서 작성, 내부 운영 지원" }, "hospitals": { "title": "병원 / 의료기관", "description": "검진 전 준비 안내, 서류 발급 절차, 행정 문의 처리" }, "schools": { "title": "학교 / 교육기관", "description": "강의 자료 안내, 학사 행정 Q&A, 과제 제출 안내" }, "associations": { "title": "협회 / 공익기관", "description": "민원 문의 안내, 신청 절차 설명, 서류 제출 요구사항" }, "online_stores": { "title": "온라인 스토어 / 이커머스", "description": "주문, 배송, 환불 및 상품 정보 안내" } } };
const terms = { "title": "이용약관", "welcome": "W Labs (주식회사 더블유랩스, 사업자등록번호 387-87-03701)에 오신 것을 환영합니다. https://wlabs.space/ 웹사이트 및 관련 서비스에 접속하거나 이용함으로써 귀하는 본 이용약관에 구속되는 것에 동의하게 됩니다. 사이트 이용 전 본 약관을 주의 깊게 읽어주시기 바랍니다.", "disclaimer": "본 약관의 일부에 동의하지 않으시는 경우, 즉시 웹사이트 이용을 중단해 주시기 바랍니다.", "sections": { "services": { "title": "1. 서비스", "content": "W Labs는 소프트웨어 개발, AI 솔루션, UI/UX 디자인 및 관련 디지털 서비스를 제공합니다. 본 웹사이트는 주로 정보 제공 및 마케팅 플랫폼입니다. 구체적인 서비스는 고객과 체결된 별도의 계약 또는 서비스 계약에 의해 규율됩니다." }, "intellectualProperty": { "title": "2. 지식재산권", "content": "본 웹사이트의 모든 콘텐츠(텍스트, 그래픽, 로고, 아이콘, 이미지, 소프트웨어 등)는 W Labs 또는 그 콘텐츠 공급자의 재산이며, 해당 지식재산권법에 의해 보호됩니다. 당사의 사전 서면 동의 없이 어떠한 콘텐츠도 복제, 배포, 수정 또는 2차적 저작물을 작성할 수 없습니다." }, "useOfWebsite": { "title": "3. 웹사이트 이용", "permittedUse": { "title": "3.1 허용된 이용", "description": "귀하는 합법적인 목적과 본 약관에 따라 본 웹사이트를 이용할 수 있습니다. 귀하는 다음 행위를 하지 않을 것에 동의합니다:", "items": { "item1": "해당 지역, 국가 또는 국제 법률이나 규정을 위반하는 방식으로 사이트를 이용하는 행위", "item2": "원치 않거나 승인되지 않은 광고 또는 판촉 자료를 전송하는 행위", "item3": "웹사이트나 시스템의 일부에 무단으로 접근을 시도하는 행위", "item4": "다른 사람의 웹사이트 이용이나 즐거움을 제한하거나 방해하는 행위" } }, "contactForm": { "title": "3.2 문의 양식", "content": "문의 양식을 통해 문의사항을 제출하시면, 귀하의 정보를 자발적으로 제공하게 됩니다. 제출함으로써 귀하는 문의사항에 관해 W Labs가 연락하는 것에 동의하게 됩니다." } }, "disclaimer": { "title": "4. 보증의 부인", "content": '본 웹사이트 및 그 콘텐츠는 명시적이든 묵시적이든 어떠한 종류의 보증 없이 "있는 그대로" 및 "이용 가능한 상태로" 제공됩니다. W Labs는 사이트가 중단 없이, 오류 없이, 또는 바이러스나 기타 유해한 구성요소가 없을 것임을 보증하지 않습니다.' }, "limitationOfLiability": { "title": "5. 책임의 제한", "content": "법이 허용하는 최대한도 내에서, W Labs는 본 웹사이트 또는 서비스 이용으로 인해 발생하거나 이와 관련된 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다." }, "thirdPartyLinks": { "title": "6. 제3자 링크", "content": "본 웹사이트에는 제3자 웹사이트에 대한 링크가 포함될 수 있습니다. 이러한 링크는 편의를 위해 제공됩니다. W Labs는 해당 사이트의 콘텐츠를 통제할 수 없으며, 이에 대해 책임을 지지 않습니다." }, "changesToTerms": { "title": "7. 약관의 변경", "content": "당사는 언제든지 본 이용약관을 업데이트하거나 수정할 권리를 보유합니다. 변경사항은 웹사이트에 게시되고 업데이트된 시행일자와 함께 효력이 발생합니다. 변경 후 사이트를 계속 이용하는 경우 변경된 약관에 동의하는 것으로 간주됩니다." }, "governingLaw": { "title": "8. 준거법", "content": "본 이용약관은 대한민국 법률에 따라 규율되고 해석됩니다. 본 약관과 관련하여 발생하는 모든 분쟁은 대한민국 법원의 전속적 관할에 따릅니다." }, "contactUs": { "title": "9. 문의처", "description": "본 이용약관에 관한 문의사항은 다음 연락처로 문의해 주시기 바랍니다:", "companyName": "W Labs (주식회사 더블유랩스)", "website": "웹사이트: https://wsoft.space/contact-us", "duns": "D-U-N-S® 등록번호: 696568010" } } };
const privacy = { "title": "개인정보처리방침", "welcome": "W Labs (주식회사 더블유랩스)는 귀하의 개인정보 보호를 위해 최선을 다하고 있습니다. 본 개인정보처리방침은 https://wlabs.space/를 방문할 때 당사가 수집하는 정보, 그 사용 방법 및 귀하의 권리에 대해 설명합니다.", "compliance": "본 방침은 대한민국의 개인정보보호법(PIPA) 및 해당 국제 기준을 준수합니다.", "sections": { "informationCollected": { "title": "1. 수집하는 정보", "provided": { "title": "1.1 귀하가 제공하는 정보", "description": "문의 양식을 사용하거나 당사에 연락하실 때, 당사는 다음 정보를 수집할 수 있습니다:", "items": { "item1": "이름", "item2": "이메일 주소", "item3": "회사명 (해당되는 경우)", "item4": "메시지 내용 및 문의 세부사항" } }, "automated": { "title": "1.2 자동으로 수집되는 정보", "description": "웹사이트를 방문하실 때, 당사는 다음 정보를 자동으로 수집할 수 있습니다:", "items": { "item1": "IP 주소 및 일반적인 위치 데이터", "item2": "브라우저 유형 및 버전", "item3": "방문한 페이지 및 사이트 체류 시간", "item4": "참조 URL" }, "note": "이 데이터는 표준 웹 서버 로그 및 분석 도구를 통해 수집되며, 사이트 이용 방식을 이해하고 사용자 경험을 개선하는 데 도움을 줍니다." } }, "howWeUse": { "title": "2. 정보 이용 방법", "description": "당사는 수집한 정보를 다음과 같이 이용합니다:", "items": { "item1": "문의사항에 응답하고 요청된 서비스 제공", "item2": "웹사이트 및 서비스 개선 및 최적화", "item3": "서비스 및 관련 업데이트에 관한 소통", "item4": "법적 의무 준수" }, "note": "당사는 마케팅 목적으로 귀하의 개인정보를 제3자에게 판매, 임대 또는 교환하지 않습니다." }, "cookies": { "title": "3. 쿠키", "description": "당사 웹사이트는 귀하의 브라우징 경험을 향상시키기 위해 쿠키 및 유사한 추적 기술을 사용할 수 있습니다. 쿠키는 귀하의 기기에 저장되는 작은 텍스트 파일입니다. 브라우저 설정을 통해 쿠키 설정을 제어할 수 있습니다. 쿠키를 비활성화하면 사이트의 일부 기능에 영향을 미칠 수 있습니다.", "types": { "title": "당사가 사용할 수 있는 쿠키 유형:", "items": { "item1": "필수 쿠키: 웹사이트가 제대로 작동하는 데 필요합니다.", "item2": "분석 쿠키: 방문자가 사이트와 상호작용하는 방식을 이해하는 데 도움을 줍니다(예: 페이지 조회수, 세션 시간)." } } }, "dataRetention": { "title": "4. 데이터 보유 기간", "content": "당사는 개인정보를 수집 목적을 달성하거나 법률에서 요구하는 기간 동안만 보유합니다. 문의 양식 제출물은 비즈니스 문의 및 후속 커뮤니케이션을 관리하기 위해 합리적인 기간 동안 보관됩니다." }, "dataSecurity": { "title": "5. 데이터 보안", "content": "당사는 귀하의 개인정보를 무단 접근, 변경, 공개 또는 파괴로부터 보호하기 위해 적절한 기술적 및 조직적 조치를 시행합니다. 그러나 인터넷을 통한 전송 방법은 100% 안전하지 않으며, 절대적인 보안을 보장할 수 없습니다." }, "thirdPartyServices": { "title": "6. 제3자 서비스", "content": "당사는 당사를 대신하여 데이터를 처리할 수 있는 제3자 도구 및 서비스(분석 제공업체 또는 호스팅 플랫폼 등)를 사용할 수 있습니다. 이러한 서비스 제공자는 계약상 데이터를 안전하게 처리하고 당사의 지시에 따라서만 처리할 의무가 있습니다." }, "yourRights": { "title": "7. 귀하의 권리", "description": "해당 법률에 따라 귀하는 다음과 같은 권리를 가질 수 있습니다:", "items": { "item1": "당사가 보유한 귀하의 개인정보에 접근", "item2": "부정확하거나 불완전한 데이터의 정정 요청", "item3": "귀하의 개인정보 삭제 요청", "item4": "해당되는 경우 처리에 대한 동의 철회", "item5": "관련 개인정보 보호 기관에 불만 제기" }, "note": "이러한 권리를 행사하려면 아래 연락처로 문의해 주시기 바랍니다." }, "internationalUsers": { "title": "8. 국제 사용자", "content": "본 웹사이트는 대한민국에서 운영됩니다. 한국 이외의 지역에서 사이트에 접속하는 경우, 귀하의 정보가 한국으로 전송되어 처리될 수 있으며, 이 경우 데이터 보호법이 귀하의 국가와 다를 수 있습니다." }, "changesToPolicy": { "title": "9. 방침 변경", "content": "당사는 수시로 본 개인정보처리방침을 업데이트할 수 있습니다. 업데이트된 버전은 개정된 시행일자와 함께 본 페이지에 게시됩니다. 정기적으로 본 방침을 검토하시기 바랍니다." }, "contactUs": { "title": "10. 문의처", "description": "본 개인정보처리방침에 관한 문의사항은 다음 연락처로 문의해 주시기 바랍니다:", "companyName": "W Labs (주식회사 더블유랩스)", "website": "웹사이트: https://wsoft.space/contact-us", "duns": "D-U-N-S® 등록번호: 696568010" } } };
const koMessages = {
  ContactUs,
  OurProjects,
  ProductsServices,
  Projects,
  NewsRoom,
  "not-found": "페이지를 찾을 수 없습니다",
  wizAssistant,
  registrations,
  "duns-registered": "D-U-N-S® 등록 기업",
  "duns-number": "D&B D-U-N-S® 번호",
  "duns-verify": "D-U-N-S® 등록 기업 인증 확인하기",
  "duns-valid-until": "유효기간",
  "not-found-text": "찾으시는 페이지가 존재하지 않거나 이동되었습니다.",
  "go-home": "홈페이지로 이동",
  "go-back": "뒤로 가기",
  "no-blogs": "우리는 멋진 것을 준비하고 있어요! 곧 콘텐츠가 올라올 예정입니다.",
  "no-popular": "이제 막 시작했어요! 가장 인기 있는 이야기들이 곧 올라올 예정이에요. 잠시만 기다려 주세요.",
  Products,
  "home-title": "홈",
  "home-description": "W Soft Labs의 AI와 맞춤형 개발로 비즈니스를 성장시키세요.",
  "home-meta-keyword": "W Soft",
  "home-meta-keyword-1": "W Soft 웹사이트",
  "home-meta-keyword-2": "W Soft 랩스",
  "home-meta-keyword-3": "W Soft 랩스 웹사이트",
  "home-meta-keyword-4": "웹 애플리케이션 개발 서비스",
  "home-meta-keyword-5": "웹 앱 개발",
  "home-meta-keyword-6": "웹 애플리케이션 전문가",
  "home-meta-keyword-7": "웹 서비스 구축",
  "home-meta-keyword-8": "웹 애플리케이션 서비스",
  "home-meta-keyword-9": "비즈니스 맞춤형 전문 웹사이트 개발",
  "home-meta-keyword-10": "비즈니스 웹 개발",
  "home-meta-keyword-11": "맞춤형 웹사이트 제작",
  "home-meta-keyword-12": "기업 웹사이트 구축",
  "home-meta-keyword-13": "웹사이트 개발",
  "home-meta-keyword-14": "UI/UX 디자인 서비스",
  "home-meta-keyword-15": "UI/UX 디자인",
  "home-meta-keyword-16": "사용자 경험 디자인 서비스",
  "home-meta-keyword-17": "UX 전문가",
  "home-meta-keyword-18": "UI 디자인 전문",
  "home-meta-keyword-19": "AI 기반 솔루션 및 통합 서비스",
  "home-meta-keyword-20": "AI 솔루션",
  "home-meta-keyword-21": "인공지능 통합 서비스",
  "home-meta-keyword-22": "AI 기술 활용",
  "home-meta-keyword-23": "AI 서비스",
  "home-meta-keyword-24": "포괄적인 IT 유지보수 및 지원",
  "home-meta-keyword-25": "IT 유지보수",
  "home-meta-keyword-26": "IT 지원",
  "home-meta-keyword-27": "포괄적 IT 서비스",
  "home-meta-keyword-28": "IT 관리 서비스",
  "home-meta-keyword-29": "맞춤형 웹 & 앱 개발 전문가",
  "home-meta-keyword-30": "맞춤형 웹 개발",
  "home-meta-keyword-31": "앱 개발 전문가",
  "home-meta-keyword-32": "소프트웨어 개발",
  "home-meta-keyword-33": "웹 & 앱 전문가",
  "home-meta-keyword-34": "기업을 위한 혁신적인 기술 솔루션",
  "home-meta-keyword-35": "혁신 기술 솔루션",
  "home-meta-keyword-36": "비즈니스 기술 지원",
  "home-meta-keyword-37": "비즈니스 혁신 서비스",
  "home-meta-keyword-38": "기업 기술 지원",
  "home-meta-keyword-39": "AI 활용 서비스 및 지원",
  "home-meta-keyword-40": "AI 활용 지원",
  "home-meta-keyword-41": "AI 서비스",
  "home-meta-keyword-42": "인공지능 지원 서비스",
  "home-meta-keyword-43": "AI 기술 도입",
  "home-meta-keyword-44": "신뢰받는 소프트웨어 개발 회사",
  "home-meta-keyword-45": "소프트웨어 개발",
  "home-meta-keyword-46": "신뢰 소프트웨어 회사",
  "home-meta-keyword-47": "소프트웨어 개발 전문가",
  "home-meta-keyword-48": "IT 서비스 제공",
  "home-meta-keyword-49": "믿을 수 있는 IT 서비스 및 웹 솔루션",
  "home-meta-keyword-50": "믿을 수 있는 IT 서비스",
  "home-meta-keyword-51": "웹 솔루션",
  "home-meta-keyword-52": "IT 솔루션 제공",
  "home-meta-keyword-53": "비즈니스 IT",
  "home-meta-keyword-54": "WSoft Website",
  "home-meta-keyword-55": "WSoft Labs",
  "home-meta-keyword-56": "WSoft Labs Website",
  "about-title": "회사 소개",
  "products-title": "제품",
  "about-us-description": "W Soft Labs는 비즈니스 운영을 최적화하기 위한 최첨단 솔루션을 제공합니다. 최신 IT 발전을 활용하여 조직의 효율성을 높입니다. 신뢰할 수 있는 기술 파트너로서 저희와 함께 경쟁력을 유지하세요.",
  "about-us-meta-keyword-1": "한국 W Soft 솔루션 소개",
  "about-us-meta-keyword-2": "한국 IT 서비스 회사",
  "about-us-meta-keyword-3": "웹 및 앱 개발 전문가 한국",
  "about-us-meta-keyword-4": "한국의 전문 IT 회사",
  "about-us-meta-keyword-5": "한국 웹 개발 팀 소개",
  "about-us-meta-keyword-6": "신뢰할 수 있는 소프트웨어 개발 회사 한국",
  "about-us-meta-keyword-7": "한국 혁신 기술 솔루션 제공업체",
  "about-us-meta-keyword-8": "IT 서비스 분야에서 우리의 사명과 가치",
  "about-us-meta-keyword-9": "AI 및 웹 개발 전문성 한국",
  "about-us-meta-keyword-10": "W Soft – 한국의 신뢰할 수 있는 IT 파트너",
  "services-title": "서비스",
  "services-description": "저희 숙련된 개발자와 디자이너들이 귀사의 특정 요구 사항에 맞춘 멋지고 사용자 친화적인 웹사이트를 제작합니다.\n적응 가능한 디자인에서 원활한 기능까지, 관객을 매료시키는 매력적인 사용자 경험을 보장합니다.",
  "services-meta-keyword-1": "한국 웹 개발 서비스",
  "services-meta-keyword-2": "한국 전문 IT 솔루션",
  "services-meta-keyword-3": "웹 및 앱 개발 서비스",
  "services-meta-keyword-4": "한국 UI/UX 디자인 및 개발",
  "services-meta-keyword-5": "한국 AI 솔루션 및 통합",
  "services-meta-keyword-6": "종합 IT 유지보수 서비스",
  "services-meta-keyword-7": "맞춤형 소프트웨어 개발 한국",
  "services-meta-keyword-8": "한국 디지털 전환 서비스",
  "services-meta-keyword-9": "W Soft 기술 솔루션 한국",
  "services-meta-keyword-10": "한국 최고의 웹 및 AI 서비스",
  "works-title": "진행된 프로젝트",
  "our-work-meta-keyword-1": "한국 웹 개발 포트폴리오",
  "our-work-meta-keyword-2": "우리의 웹 및 앱 프로젝트",
  "our-work-meta-keyword-3": "W Soft의 완료된 IT 프로젝트",
  "our-work-meta-keyword-4": "한국 웹 솔루션 사례",
  "our-work-meta-keyword-5": "한국 UI/UX 디자인 포트폴리오",
  "our-work-meta-keyword-6": "AI 및 소프트웨어 개발 사례 연구",
  "our-work-meta-keyword-7": "우리의 성공적인 웹 프로젝트",
  "our-work-meta-keyword-8": "전문 IT 솔루션 포트폴리오",
  "our-work-meta-keyword-9": "한국 웹 앱 개발 예시",
  "our-work-meta-keyword-10": "W Soft의 혁신 기술 솔루션",
  "contact-title": "문의하기",
  "contact-us-meta-keyword-1": "W Soft 솔루션 한국 문의",
  "contact-us-meta-keyword-2": "한국 IT 서비스 문의",
  "contact-us-meta-keyword-3": "W Soft에 연락하기",
  "contact-us-meta-keyword-4": "한국 웹 개발 상담",
  "contact-us-meta-keyword-5": "웹 및 앱 개발 문의",
  "contact-us-meta-keyword-6": "전문 IT 솔루션 연락처",
  "contact-us-meta-keyword-7": "한국 W Soft에 문의하기",
  "contact-us-meta-keyword-8": "비즈니스 문의 – 한국 웹 솔루션",
  "contact-us-meta-keyword-9": "W Soft와 상담 예약",
  "contact-us-meta-keyword-10": "한국 AI 및 소프트웨어 서비스 문의",
  "blogs-title": "블로그",
  "blogs-description": "W SoftLabs의 최신 인사이트, 트렌드, 그리고 전문 지식을 만나보세요. AI, 웹 개발, 그리고 기술 솔루션에 관한 다양한 글을 읽어보세요.",
  "blogs-meta-keyword-1": "블로그",
  "blogs-meta-keyword-2": "기사",
  "blogs-meta-keyword-3": "인사이트",
  "blogs-meta-keyword-4": "기술",
  "blogs-meta-keyword-5": "인공지능",
  "blogs-meta-keyword-6": "웹 개발",
  "blogs-meta-keyword-7": "머신러닝",
  "blogs-meta-keyword-8": "소프트웨어 솔루션",
  "blogs-meta-keyword-9": "기술 인사이트",
  "blogs-meta-keyword-10": "산업 트렌드",
  English,
  Korean,
  Home,
  "About Us": "회사 소개",
  Services,
  "Our Works": "프로젝트",
  Blogs,
  "our-blogs": "우리의 블로그",
  "find-blogs": "빌드. 디자인. 인스파이어.",
  "blogs-text": "혁신이 창의성과 만나는 공간, 더블유랩스 블로그에 오신 것을 환영합니다. 우리의 개발자, 디자이너, 리서치팀은 전문 지식과 경험, 그리고 아이디어를 공유하며 우리의 기술과 그 뒤에 숨은 이야기를 전합니다. 최신 프로젝트, 제품 업데이트, 그리고 더블유랩스의 미래를 이끌어가는 최첨단 솔루션에 대한 인사이트를 만나보세요.",
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december,
  "read-more": "더보기",
  "popular-post": "인기 게시물",
  "view-all": "모두 보기",
  "Talk with an Expert": "상담하기",
  "start-project": "지금 프로젝트를 시작하세요",
  "explore-more-projects": "더 많은 프로젝트 탐색",
  "elevate-business": "W Soft Labs의 AI 및 맞춤 개발로 비즈니스를 향상시키세요.",
  "project-success": "100% 프로젝트 성공률",
  "customer-retention": "95% 고객 유지율",
  "project-completed": "21개 프로젝트 완료",
  "trusted-partner": "AI로 더 똑똑한 비즈니스를 만듭니다",
  "delivers-cutting": "“WSoft Labs는 혁신적인 기술과 유연한 조직문화를 바탕으로, AI와 웹·앱 개발을 통해 고객의 디지털 성공을 설계하는 글로벌 성장 지향형 IT 파트너입니다.",
  "web-dev": "웹사이트 개발",
  "create-website": "우리는 귀하를 위한 웹사이트를 만듭니다. 소규모 기업이든 대기업이든, 당사는 동적이고 사용자 친화적인 웹사이트 디자인을 전문으로 하며 귀하의 브랜드와 요구를 반영합니다. 아름다운 디자인에서 원활한 기능까지, 귀하의 온라인 존재감을 돋보이게 하고 청중과 연결되도록 합니다.",
  "web-app": "웹 애플리케이션 개발",
  "build-innovative": "우리는 귀하의 비즈니스가 성장하도록 돕는 혁신적인 웹 애플리케이션을 만듭니다. 당사의 팀은 운영을 간소화하고 사용자 경험을 개선하며 성장을 촉진하는 맞춤형 솔루션을 제공합니다. 초기 아이디어에서 최종 출시까지, 웹 애플리케이션이 강력하고 확장 가능하며 미래의 성공을 지원할 수 있도록 보장합니다.",
  "ui-design": "UI 디자인",
  "design-intuitive": "우리는 디지털 세계를 더 쉽고 즐겁게 만드는 직관적이고 사용자 친화적인 인터페이스를 설계합니다. 우리의 팀은 사용자가 몰입할 수 있는 원활하고 매력적인 경험을 만드는 데 집중합니다. 첫 번째 와이어프레임에서 최종 디자인까지, 모든 세부 사항이 사용성을 향상시키고 청중과의 연결을 유지하도록 합니다.",
  "ai-utilization": "AI 활용 서비스",
  "cut-customer": "고객 서비스 비용을 절감하고 응답 시간을 단축하며 고객 만족도를 높이는 AI 솔루션을 제공합니다. 우리는 고급 자동화 및 스마트 기술을 사용하여 운영을 간소화합니다. 챗봇이나 예측 분석 등, 더 효율적으로 작업하고 고객에게 더 나은 경험을 제공할 수 있도록 돕습니다.",
  "successful-projects": "프로젝트",
  "dedicated-helping": "W Soft Labs에서는 생산성과 효율성을 높이는 맞춤형 솔루션을 통해 귀하의 비즈니스 성장에 도움을 주는 데 전념하고 있습니다.",
  "academic-administration": "학사 관리 시스템",
  "partner-growth": "성장 및 디지털 변환의 파트너",
  "help-transform": "온라인 존재감을 변화시키고 비즈니스 성장을 지원하는 데 도움을 주겠습니다.",
  "enter-email": "이메일을 입력하세요",
  send,
  "all-rights": "모든 권리 보유",
  "about-text": "W Soft Labs는 최첨단 솔루션을 제공하여 비즈니스 운영을 최적화합니다. 최신 IT 혁신을 활용하여 조직의 효율성을 극대화합니다. 신뢰할 수 있는 기술 파트너로서 우리와 함께 경쟁력을 유지하세요.",
  "innovating-business": "기술을 활용한 비즈니스 운영 혁신",
  "dedicated-providing": "W Soft Labs는 비즈니스 운영을 최적화하고 성공을 이끄는 최첨단 솔루션을 제공하는 데 전념하고 있습니다. 최신 정보 기술 혁신을 활용하여 맞춤형 솔루션을 개발하고 프로세스를 간소화하여 조직이 목표를 효율적으로 달성할 수 있도록 지원합니다.",
  "staying-ahead": "W Soft Labs는 최신 기술과 산업 트렌드를 앞서 나가며, 고객이 오늘날의 역동적인 시장 환경에서 경쟁력을 유지할 수 있도록 보장합니다. W Soft Labs와 함께라면 비즈니스 운영을 신뢰할 수 있는 전문가에게 맡기고, 핵심 업무에 집중할 수 있습니다.",
  "why-choose": "왜 W Soft Labs를 선택해야 할까요 ?",
  "provide-more": "W Soft Labs는 단순한 혁신적인 솔루션을 제공하는 것이 아니라, 비즈니스 성장을 위한 협력적인 파트너십을 제공합니다. 우리가 특별한 이유는 다음과 같습니다:",
  "cutting-edge": "최첨단 솔루션",
  "specialize-developing": "당사는 귀사의 특정 요구 사항에 맞춘 최첨단 솔루션 개발을 전문으로 합니다. 최신 정보 기술을 선도적으로 활용하여 비즈니스 운영을 최적화하고 성공을 이끌어냅니다.",
  "expertise-innovation": "전문성과 혁신",
  "deep-understanding": "최신 기술과 산업 동향에 대한 깊은 이해를 바탕으로, 모든 프로젝트에 전문성과 혁신을 제공합니다. 우리의 전문 지식을 활용하여 귀사의 경쟁력을 유지하고 시장에서 앞서 나갈 수 있도록 지원합니다.",
  "reliable-tech": "신뢰할 수 있는 기술 파트너",
  "trust-paramount": "어떤 파트너십에서도 신뢰는 가장 중요합니다. W Soft Labs와 함께라면 비즈니스 운영을 효과적으로 관리하며, 귀사는 핵심 역량에 집중할 수 있습니다. 우리는 항상 귀사의 성공을 위해 함께합니다.",
  "our-team": "우리 팀",
  ceo,
  "senior-dev": "수석 개발자",
  "project-officer": "프로젝트 매니저",
  "full-stack": "풀스택개발자",
  "marketing-specialist": "마케팅 담당",
  developer,
  designer,
  "human-resource": "인사 관리자",
  "corporate-secretary": "기업 비서",
  "services-text": "숙련된 개발자와 디자이너가 귀사의 요구 사항에 맞춘 멋지고 사용자 친화적인 웹사이트를 제작합니다. 유연한 디자인부터 매끄러운 기능까지, 사용자 경험을 극대화하여 고객의 관심을 사로잡습니다.",
  "ui-ai": "UI/UX 및 AI 기반 솔루션",
  "build-high": "귀사의 비즈니스 요구에 맞춘 고성능 웹사이트 및 웹 애플리케이션을 개발합니다. 동적인 웹사이트든 확장 가능한 웹 애플리케이션이든, 원활한 기능, 매력적인 디자인, 부드러운 사용자 경험을 보장하여 비즈니스 성장을 지원합니다.",
  "website-web": "웹사이트 및 웹 앱 개발",
  "intuitive-ai": "직관적인 UI 디자인부터 AI 기반 자동화까지, 사용자를 지속적으로 참여시키는 디지털 경험을 제공합니다. 챗봇, 예측 분석과 같은 스마트 기술을 활용하여 사용성, 효율성, 고객 만족도를 향상시킵니다.",
  "maintenance-support": "유지보수 및 지원",
  "keep-website": "웹사이트와 애플리케이션이 최상의 성능을 유지하도록 신뢰할 수 있는 유지보수 서비스를 제공합니다. 업데이트, 보안 점검, 최적화를 관리하여 기술적인 문제 없이 비즈니스 성장에 집중할 수 있도록 지원합니다.",
  "introduction-development": "소개",
  "custom-design": "맞춤형 디자인 및 UI/UX",
  "custom-website": "맞춤형 웹사이트 및 템플릿 기반 디자인",
  "responsive-user": "반응형, 사용자 친화적인 레이아웃",
  "engaging-ui": "더 나은 사용성을 위한 매력적인 UI/UX",
  "content-management": "콘텐츠 관리 및 미디어",
  "easy-use": "사용하기 쉬운 콘텐츠 편집기",
  "image-file": "이미지, 파일, 동영상 업로드 (YouTube, 오디오, 재생 기능 포함)",
  "auto-tagging": "자동 태그 지정 및 데이터 시각화",
  "admin-business": "관리 및 비즈니스 운영",
  "inquiry-content": "문의 및 콘텐츠 편집 시스템",
  "inventory-order": "재고, 주문 및 배송 추적",
  "secure-payment": "안전한 결제 처리",
  "user-interaction": "사용자 상호작용 및 커뮤니케이션",
  "job-interaction": "구인 요청 및 견적 계산기",
  "seller-company": "판매자 및 기업 대시보드",
  "messaging-questionnaires": "메시징, 설문조사 및 팀 협업",
  "advanced-features": "고급 기능 및 보안",
  "interactive-calendar": "인터랙티브 캘린더 UI 및 팝업",
  "location-based": "위치 기반 지도 통합",
  recaptcha,
  "product-listing": "전자상거래 및 제품 목록",
  "items-catalog": "상세 페이지가 포함된 제품 카탈로그",
  "wishlist-star": "위시리스트 및 별점 시스템",
  "smooth-checkout": "매끄러운 결제 및 체크아웃 경험",
  "our-works-text": "우리는 성공을 이끄는 고품질의 혁신적인 디지털 솔루션을 제공하는 데 자부심을 갖고 있습니다. 맞춤형 웹사이트와 강력한 웹 애플리케이션부터 AI 기반 플랫폼까지, 당사의 포트폴리오는 탁월한 품질, 사용성 및 성능에 대한 헌신을 보여줍니다.",
  "content-managmeent": "콘텐츠 관리 시스템",
  blockchain,
  "youtube-content": "유튜브 콘텐츠 학습 시스템",
  "project-management": "프로젝트 관리 시스템",
  "foreign-language": "외국어 학습 시스템",
  "data-crawling": "데이터 크롤링",
  "ai-tarot": "AI 타로 마스터",
  "ai-review": "AI 리뷰 분석기",
  "ai-powered": "AI 기반 언어 학습 앱",
  "food-calorie": "음식 칼로리 분석기",
  "encouragement-generation": "격려 메시지 생성 플랫폼",
  "focused-task": "집중형 작업 관리",
  "audio-conversion": "오디오 변환 플랫폼",
  "ai-multilingual": "AI 기반 다국어 번역",
  "database-speed-test": "데이터베이스 속도 테스트",
  "project-overview": "프로젝트 개요",
  "comprehensive-program": "이 학사 행정 관리 시스템은 학원 관리 및 교수 효과성을 향상시키기 위해 설계된 종합 프로그램입니다. 진행 관리, 성과 추적 및 결제 관리, 출석 기록, 통계 분석과 같은 지원 서비스를 포함하는 기능 모듈로 구성됩니다. 이 시스템은 학원의 행정 및 교육적 측면을 모두 지원하는 강력한 시스템을 구축하여 개인 맞춤형 및 효과적인 학습 환경을 조성하는 것을 목표로 합니다.",
  dashboard,
  "dashboard-offers": "대시보드는 현재 학생, 교사 및 직원 수뿐만 아니라 재정 수익을 한눈에 확인할 수 있으며, 시각적으로도 매력적인 디자인을 제공합니다.",
  organize,
  "student-data": "학생 데이터는 표 형식으로 정리되어 있어 편리한 모니터링이 가능하며, 상태, 계약 종료일, 수업료 등의 중요한 정보를 쉽게 확인할 수 있으며 특정 정보를 검색할 수도 있습니다.",
  calendar,
  "calendar-feature": "캘린더 기능은 관리자, 교사 및 학생이 약속 날짜, 수업 시작 및 종료 날짜 등을 확인할 수 있도록 도와주며, 정렬 및 색상 코딩을 통해 명확성을 높입니다.",
  "serves-engine": "콘텐츠 관리 시스템(CMS)은 책을 온라인에서 원활하게 제공하고 동영상에 자막을 추가하는 기능을 지원하는 핵심 엔진 역할을 합니다. 이 종합 시스템은 도서 콘텐츠의 디지털화 및 정리를 간소화하여 관리자들이 텍스트, 이미지 및 인터랙티브 요소까지 손쉽게 관리할 수 있도록 합니다. 또한, CMS는 동영상에 자막을 추가하는 작업을 간편하게 만들어 접근성을 향상시키고 학습 경험을 개선합니다.",
  booklist,
  "diplaying-list": "변환된 온라인 도서 목록을 표시하며 언제든지 업데이트할 수 있습니다.",
  "video-enhanced": "영상 강화",
  "creating-online": "온라인 도서를 만들 때 데이터베이스에 동영상을 통합하여 학습 경험을 향상시킬 수 있습니다.",
  create,
  "convert-offline": "오프라인 도서를 온라인으로 변환하여 강좌를 추가하고 콘텐츠를 입력하세요.",
  "design-project": "Niftle Craft 프로젝트는 시각적으로 매력적이고 사용자 친화적인 웹사이트를 디자인하여 가상 세계에서의 존재감을 강화하는 것을 목표로 합니다. 현대적인 디자인 원칙을 강조하며, 웹사이트는 매력적이고 직관적인 인터페이스를 제공하여 사용자가 원활하고 즐거운 탐색 경험을 할 수 있도록 합니다. 반응형 디자인, 매력적인 색상 조합, 고품질 비주얼과 같은 주요 요소를 통합하여 사용자의 관심을 끌고 유지할 것입니다. 또한, 쉬운 내비게이션, 빠른 로딩 속도, 다양한 기기 및 플랫폼에서의 접근성을 우선시할 것입니다.",
  color,
  "designing-website": "네온 색상을 활용하여 게임, 상상력, 재미의 세계로 안내하는 웹사이트를 디자인합니다.",
  design,
  "implementing-design": "3D 디자인을 적용하여 시각적 경험을 강화하고 몰입감을 높입니다.",
  font,
  "incorporating-sleek": "세련되고 미래지향적인 폰트 스타일을 적용하여 가독성을 높이고 전체적인 사용자 경험을 향상시킵니다.",
  "revolutionizes-english": "YouTube 콘텐츠 학습 시스템은 영화 클립, 토크쇼, 가사 영상 등 다양한 멀티미디어 콘텐츠를 제공하여 영어 학습을 혁신적으로 변화시킵니다. 이 혁신적인 플랫폼은 비디오 시청 경험과 인터랙티브 학습 활동을 원활하게 통합하여 학습자가 실제 맥락에서 효과적으로 언어를 습득할 수 있도록 돕습니다.",
  "video-selection": "영상 선택",
  "asking-choose": "TED-Ed, 토크쇼, 뮤직비디오 등 학습하고 싶은 영상 클립을 선택하여 재미있게 학습하세요.",
  "watch-learn": "시청 및 학습",
  "videos-english": "YouTube 영상을 영어 자막 또는 원하는 언어로 시청하여 이해를 돕고 학습을 쉽게 만드세요.",
  "developed-streamline": "프로젝트 관리 시스템은 광고 마케팅 프로젝트 관리를 간소화하고 실시간 데이터 모니터링을 통해 비즈니스 프로세스를 개선하기 위해 개발되었습니다. 사용이 편리한 대시보드를 구성하고 다양한 프로젝트 관리 기능을 구현하며, 클라이언트 및 비용 관리 기능을 통합했습니다. 주요 성과로는 직관적인 인터페이스 제공 및 테스트 과정에서 발견된 문제 해결이 포함됩니다.",
  "dashboard-provides": "대시보드는 현재 클라이언트, 프로젝트, 수익 등을 종합적으로 제공하여 비즈니스 운영자에게 유용한 모니터링 도구를 제공합니다.",
  incorporate,
  "easily-add": "프로젝트를 쉽게 추가하고 상태, 마감일, 가격 등을 지정하여 파일 모니터링을 간소화하세요.",
  arrange,
  "effortlessly-organize": "회사명, 캠페인, 마감일 등 다양한 기준에 따라 프로젝트를 손쉽게 정리하세요.",
  "endeavors-modernize": "외국어 학습 시스템은 Talking Plus 및 SLE 교재를 기존 종이책에서 동적이고 인터랙티브한 온라인 포맷으로 전환하여 교육 경험을 현대화하는 것을 목표로 합니다. Laravel API 및 Vue.js 2를 활용하여 콘텐츠를 디지털화하고 상호작용 요소를 추가하여 학습을 혁신적으로 변화시킵니다. 콘텐츠의 철저한 디지털화 및 백엔드 개발을 통해 원활한 데이터 관리 및 사용자 상호작용을 보장합니다.",
  dialogue,
  "watch-videos": "영상을 시청하며 대화 능력을 향상시키고, 영어 및 한국어 번역을 함께 제공합니다.",
  expressions,
  "expressions-presented": "오늘의 표현이 영어와 한국어로 제공되며, 실생활에서 활용하는 방법을 안내합니다.",
  vocabulary,
  "translated-korean": "어휘가 한국어로 번역되며 텍스트 음성 변환 기능이 제공되어 올바른 발음을 익힐 수 있습니다.",
  "advertising-marketing": "프로젝트 관리 시스템은 광고 마케팅 프로젝트를 체계적으로 관리하고 실시간 데이터 모니터링을 통해 비즈니스 프로세스를 개선하기 위해 개발되었습니다. 사용자 친화적인 대시보드 구성, 다양한 프로젝트 관리 기능 구현, 클라이언트 및 비용 관리 통합이 포함됩니다.",
  "meticulously-crafted": "AI 리뷰 분석 시스템은 인공지능을 활용하여 전자상거래 판매자가 방대한 고객 리뷰를 심층 분석할 수 있도록 정밀하게 설계되었습니다. 이 최첨단 기술을 통해 고객 피드백을 분석하는 방식을 혁신하고, 판매자가 기존 제품을 개선하거나 새로운 판매 기회를 발굴할 수 있도록 지원합니다.",
  input,
  "feature-allows": "이 기능을 통해 분석 및 검토를 위한 제품 링크를 입력할 수 있습니다.",
  inquire,
  "integrating-gpt": "GPT를 통합하여 제출한 제품 링크에 대한 질문을 할 수 있습니다.",
  Reviews,
  "various-shopping": "다양한 쇼핑 사이트의 리뷰가 표시되며, 다른 사람들의 의견을 확인하고 최적의 제품을 선택하는 데 도움을 줍니다.",
  "versatile-mobile": "AI 기반 언어 학습 앱은 문화 체험, 사회적 상호작용 및 마켓플레이스 기능을 통합한 다목적 모바일 애플리케이션입니다. 이 앱을 통해 사용자는 지역 문화 명소를 탐방하고, 커뮤니티 구성원과 연결되며, 한국 전통 체험을 포함한 다양한 서비스를 이용할 수 있습니다.",
  "test-compare": "이 프로젝트는 의사결정 지원을 위한 다양한 데이터베이스 시스템의 성능을 테스트하고 비교하는 것을 목표로 합니다. 복잡한 비즈니스 쿼리를 실행하여 대량 데이터를 처리하는 속도, 효율성, 확장성을 측정하며, 성능 문제를 식별하고 개선 방안을 제안합니다.",
  accuracy,
  "following-tpc": "TPC 가이드라인을 준수하고 공식 도구를 사용하며 각 단계에서 데이터 무결성을 확인하여 신뢰할 수 있는 성능 측정을 보장합니다.",
  "partake-activities": "활동에 참여하여 어휘를 향상시키고 표현 범위를 확장하세요.",
  activity,
  reviews,
  "get-started": "당신의 아이디어로 시작해 보세요",
  "reach-out": "아래 양식을 사용하여 문의해 주세요. 저희 전담 팀이 최대한 빠르게 답변을 드리겠습니다. 여러분의 의견은 저희에게 소중하므로 언제든지 연락 주세요. 여러분의 소식을 기다리고 있습니다!",
  "contact-us": "문의하기",
  "Contact Us": "문의하기",
  "get-back": "최대한 빨리 답변드리겠습니다!",
  "full-name": "성명",
  "first-name": "이름",
  "last-name": "성",
  "email-address": "이메일 주소",
  "phone-number": "전화번호",
  "enter-phone": "전화번호 입력",
  company,
  "footer-company": "상호명",
  "footer-uedu": "(주)유에듀케이션",
  "footer-wlabs": "(주)더블유랩스",
  "footer-ceo": "대표이사",
  "footer-matt": "정원석",
  "footer-business-id": "사업자등록번호",
  "enter-company": "회사 입력",
  message,
  "enter-message": "여기에 메시지를 입력하세요",
  submit,
  "our-office": "저희 사무실",
  address,
  "message-sent-success": "메시지가 성공적으로 전송되었습니다!",
  "message-send-fail": "메시지 전송에 실패했습니다!",
  "failed-to-load-blogs": "멋진 콘텐츠를 준비 중입니다! 곧 업데이트될 예정입니다.",
  "first-name-required": "이름을 입력해주세요",
  "last-name-required": "성을 입력해주세요",
  "email-required": "이메일을 입력해주세요",
  "invalid-email": "유효한 이메일을 입력해주세요",
  "phone-required": "전화번호를 입력해주세요",
  "invalid-phone": "전화번호는 숫자로만 입력해야 합니다",
  "message-required": "메시지를 입력해주세요",
  "dashboard-comprehensive": "대시보드는 프로젝트, 수익, 작업 등을 종합적으로 보여주어 비즈니스 진행 상황을 쉽게 모니터링할 수 있도록 도와줍니다.",
  "crawled-products": "크롤링된 제품",
  "products-have": "웹사이트에서 제품이 크롤링되어 사양 등을 쉽게 확인할 수 있습니다.",
  "database-update": "데이터베이스 업데이트",
  "no-worry": "누락된 항목이 있어도 걱정하지 마세요. 크롤링할 링크를 추가하면 간단히 포함할 수 있습니다.",
  "tarot-reading": "타로 리딩 선택",
  "crafted-captivating": "매력적인 디자인과 애니메이션으로 제작되어, 사용자는 취향에 따라 서양식 리딩 또는 개인 맞춤형 타로 리딩을 선택할 수 있습니다.",
  "card-selection": "카드 선택",
  "select-three": "개인 맞춤형 리딩을 위해 세 장의 카드를 선택하세요. 생동감 넘치는 애니메이션과 변화하는 색상을 통해 종합적인 통찰과 가이드를 제공합니다.",
  "reading-result": "리딩 결과",
  "experience-past": "각 카드를 펼치며 과거, 현재, 미래가 애니메이션과 함께 펼쳐지는 경험을 통해 앞으로 나아갈 여정을 위한 소중한 통찰을 얻으세요.",
  "innovative-application": "각 카드를 펼치며 과거, 현재, 미래가 매력적인 애니메이션과 함께 펼쳐지는 경험을 통해 앞으로 나아갈 여정에 대한 소중한 통찰을 얻으세요.",
  "operation-manager": "운영 관리자 (OM )",
  matt,
  ricky,
  joseph,
  hoon,
  lin,
  songyi,
  gale,
  jaimie,
  salve,
  lora,
  ben,
  czedrix,
  rj,
  mon,
  orland,
  neil,
  jason,
  winona,
  pola,
  zyra,
  virnel,
  karlo,
  "matt-name": "정원석",
  "ricky-name": "이현석",
  "gale-name": "레슬리",
  "joseph-name": "이강준",
  "hoon-name": "문훈재",
  "lin-name": "강혜린",
  "songyi-name": "한송이",
  "jaimie-name": "앰런 플러렌스 아르다",
  "salve-name": "살바시언 파레뇨",
  "lora-name": "로다 그레이스 브리토",
  "ben-name": "베니토 오비노",
  "czedrix-name": "세드릭 바세나",
  "rj-name": "레이몬드 존 요롱",
  "mon-name": "레이먼드 델라 크루즈",
  "orland-name": "올랜드 살라스",
  "neil-name": "닐 크리스토퍼 지파야",
  "jason-name": "제이슨 리프레소",
  "winona-name": "위노나 토마스",
  "pola-name": "폴라 메이 다일로",
  "zyra-name": "자이라 카필라스틱",
  "virnel-name": "버넬 루이즈 데 구즈만",
  "karlo-name": "카를로 미겔 페레스",
  "qa-specialist": "QA 전문가",
  "see-more": "더 보기",
  "top-tool": "W Soft Labs는 AI 기반 기술을 바탕으로 다양한 산업 분야에 특화된 솔루션을 개발하고 있습니다.",
  "bottom-tool": "PyTorch, Hugging Face Transformers, LoRA, LangChain, FastAPI 등의 최신 기술을 활용하여, AI를 활용한 영상 분석 시스템, 기업 역량 AI 분석 시스템, 학생의 학습 진도와 패턴을 기반으로 맞춤형 AI 코칭을 제공하는 교육 시스템 등을 개발하고 있습니다.",
  "project-manager": "프로젝트 매니저",
  "system-architect": "시스템 아키텍트",
  "administrative-officer": "행정 담당자",
  "smart-video": "유지보수 및 지원",
  "build-ai": "신뢰할 수 있는 유지보수 서비스를 통해 웹사이트와 애플리케이션을 최상의 성능으로 운영하세요. 업데이트, 보안 점검, 최적화를 철저히 관리하여 기술적인 걱정 없이 비즈니스 성장에 집중할 수 있도록 지원합니다.",
  "deep-learning": "딥러닝 기반 객체 탐지 및 행동 분석",
  yolo,
  "optical-flow": "Optical Flow, CAMShift 활용한 이동 추적",
  roi,
  "precision-optimization": "이상행동 분류 모델 정밀도 최적화",
  "real-time": "실시간 스트리밍 데이터 처리 기술",
  rtsp,
  "web-socket": "WebSocket 기반 저지연 데이터 송수신",
  "open-cv": "OpenCV 활용 실시간 프레임 분석",
  "multi-stream": "다중 스트림 병렬 처리 아키텍처 구성",
  "ai-text": "AI 데이터 융합 및 자동화 학습 시스템",
  multimodal,
  outlier,
  "dynamic-roi": "동적 ROI 자동 재설정 알고리즘",
  "incremental-learning": "지속적 학습을 위한 Incremental Learning 구조",
  jumbotron,
  "meet-team": "함께 성장하는 혁신의 주역들, W Soft Labs 팀을 소개합니다",
  "team-experts": "WSoft Labs는 AI 데이터 융합 및 자동화 학습 시스템,  AI 응용 솔루션, 웹 및 앱 IT 유지보수 등 다양한 IT 분야에서 기술 혁신을 이끄는 전문가들로 구성된 팀입니다. 각 멤버는 단순한 역할 수행자를 넘어, 프로젝트의 방향을 결정하고 고객의 성공을 함께 설계하는 비즈니스 파트너이자 창의적 문제 해결사입니다.",
  "lead-developer": "수석 개발자",
  "junior-project": "프로젝트 매니저 (JPM)",
  "operations-assistant": "운영지원담당당",
  "communications-manager": "커뮤니케이션 매니저",
  "technical-project": "기술 프로젝트 매니저 ( TPM )",
  "front-end": "프런트엔드 개발자",
  "ai-engineer": "AI 엔지니어",
  slogan,
  "action-detection": "실시간 영상 분석 기반 행동 감지",
  "reading-behavior": "실시간 영상으로 행동을 읽다, 안전을 앞서가다",
  "offers-advanced": "WSoft Labs는 고도화된 실시간 영상 분석 기술을 바탕으로, 사람의 행동을 자동 감지하고 이상 징후를 즉시 탐지하는 AI 솔루션을 제공합니다. 당사의 행동 인식 AI는 CCTV·IP카메라 등 실시간 영상 스트림을 분석하여 보안, 안전, 고객 서비스 분야에서 즉각적인 대응과 운영 효율화를 가능하게 합니다.",
  rag,
  "retrieving-knowledge": "데이터를 검색하고, 정답을 생성하다",
  "rag-technology": "WSoft Labs는 최신 RAG(Retrieval-Augmented Generation) 기술을 활용하여, 방대한 지식 기반을 실시간으로 참조하며 정밀한 답변과 의사결정을 지원하는 AI 솔루션을 제공합니다. 금융, 법률, 상담 분야에서 신뢰도 높은 결과를 제공하며, 내부 문서와 외부 데이터를 통합해 지식의 가치를 극대화합니다.",
  "hero-1": "업무 효율을 극대화",
  "hero-2": "가능성을 연결",
  "hero-3": "성장 엔진을 설계",
  "hero-4": "인공지능으로 혁신",
  "hero-5": "신뢰를 설계",
  "hero-6": "데이터로 혁신",
  "hero-7": "기술의 미래를 선도",
  "full-pm": "풀스택개발자 / PM",
  "full-sa": "풀스택개발자 / 시스템 아키텍트",
  "full-tpm": "풀스택개발자 / TPM",
  "full-ai": "풀스택개발자",
  "data-driven": "데이터 중심의 맞춤형 플랫폼 개발",
  "reimagining-business": "비즈니스를 기술로 재해석하다",
  "data-driven-text": "W Soft Labs는 단순한 홈페이지 제작을 넘어, 데이터 기반으로 의사결정이 가능한 맞춤형 웹 플랫폼을 개발합니다. 최신 프론트엔드 프레임워크와 클라우드 네이티브 백엔드 아키텍처를 통합하여, 높은 확장성과 유연한 유지보수가 가능한 시스템을 구축합니다. 우리는 단기적인 요구만이 아니라, 비즈니스의 미래 성장을 내다보는 기술 설계를 실현합니다.",
  "niftle-description": "프로젝트 개요 Niftle Craft는 시각적으로 매력적이고 직관적인 인터페이스를 통해 가상 세계에서의 사용자 몰입을 강화하기 위해 설계된 블록체인 기반 웹 애플리케이션입니다. 최신 디자인 원칙을 바탕으로 구축되어, 다양한 기기에서 매끄럽고 몰입감 있는 사용자 경험을 제공합니다.",
  "niftle-title1": "주요 기술 성과",
  "niftle-title1-sub": "기술 스택 & 아키텍처",
  "laravel-text": "확장성과 보안성을 갖춘 모듈형 API를 제공하는 백엔드 프레임워크로 사용",
  "vue-text": "실시간 상호작용이 가능한 반응형 UI 개발을 위한 프론트엔드 프레임워크",
  "bootstrap-text": "기기 간 호환성과 일관된 스타일을 제공하여 현대적인 레이아웃 구현",
  "niftle-title2": "디자인 중심의 엔지니어링",
  "neon-color": "네온 컬러 테마",
  "neon-color-text": "창의성과 즐거움을 불러일으키는 시각적 몰입 요소로 설계",
  "3d-graphics": "3D 그래픽 통합",
  "3d-graphics-text": "사용자의 몰입도를 높이고, 인터페이스의 차별화를 위해 구현",
  "futuristic-typo": "미래지향적 타이포그래피",
  "futuristic-typo-text": "가독성과 브랜드 정체성을 강화하는 커스텀 스타일 적용",
  title3,
  "niftle-text3-1": "브랜드 인식을 높이고 사용자 재방문율을 향상시키는 몰입형 블록체인 웹 앱을 성공적으로 구축",
  "niftle-text3-2": "모던하고 모듈형 기술 스택을 통해 블록체인 로직과 상호작용 UI/UX의 통합 기술 역량을 입증",
  "niftle-text3-3": "향후 NFT 마켓플레이스, 실시간 가상 경제 시스템 등의 기능 확장을 위한 확장 가능한 구조 확보",
  "deep-learning-services-description": "YOLOv5와 ResNet을 적용하여 정확한 객체 인식을 수행하고, Optical Flow와 CAMShift를 통합하여 동작 추적을 지원하며, ROI 기반 시퀀스 분석을 통해 이상 행동 탐지에서 최적화된 정밀도로 행동을 분류합니다.",
  "real-time-services-description": "RTSP를 통한 실시간 영상 처리를 원활하게 지원하고, WebSocket으로 데이터를 효율적으로 전송하며, OpenCV를 사용한 프레임 단위 분석과 다중 스트림 병렬 처리를 통해 저지연 성능을 제공합니다.",
  "ai-text-services-description": "영상과 센서 입력을 결합한 멀티모달 분석을 수행하고, 랜덤 포레스트 이상치 탐지를 통한 데이터 정제, ROI 자동 리셋으로 동적 조정, 점진적 학습을 통한 지속적인 모델 개선을 적용합니다.",
  "custom-design-services-description": "맞춤형 웹사이트 디자인 또는 템플릿 기반 솔루션을 제공하며, 반응형 레이아웃과 몰입감 있는 인터페이스로 사용성과 사용자 경험을 향상시킵니다.",
  "content-management-services-description": "텍스트 관리용 간단한 에디터, 미디어 업로드(이미지, 영상, 오디오)를 지원하고, 자동 태깅 및 시각화를 통해 콘텐츠 조직을 개선합니다.",
  "admin-business-services-description": "문의 처리, 콘텐츠 편집, 재고 및 주문 추적을 간소화하고, 안전한 배송 및 결제 관리 시스템을 지원합니다.",
  "user-interaction-services-description": "업무 요청, 견적 계산기, 판매자와 기업용 대시보드, 설문이 포함된 내장 메시징 기능을 통해 협업을 촉진합니다.",
  "advanced-features-services-description": "캘린더 도구와 팝업으로 상호작용을 강화하고, 위치 기반 지도를 통합하며, reCAPTCHA 보안 기능으로 안전성을 강화합니다.",
  "product-listing-services-description": "상세한 제품 카탈로그, 위시리스트 및 평점 기능을 제공하며, 안전하고 편리한 결제 옵션으로 원활한 체크아웃을 보장합니다.",
  "food-calorie-text": "Food Calorie Analyzer는 사진을 통해 음식을 인식하고 즉시 칼로리를 추정해 주는 모바일 앱입니다. 빠르고 편리한 영양 정보를 제공하여 사용자가 더 건강한 선택을 할 수 있도록 도와줍니다.",
  "encouragement-generation-text": "KindleUp은 진심 어린 격려를 쉽게 전할 수 있도록 도와주는 AI 기반 동반자입니다. 부담 없이 몇 초 만에 따뜻하고 개인화된 메시지를 작성할 수 있습니다. 힘든 하루를 보낸 사람을 위로하거나, 성취를 축하하거나, 작은 긍정을 나누고 싶을 때 KindleUp은 진정으로 공감되는 말을 손쉽게 전달할 수 있게 해줍니다.",
  "focused-task-text": "이 MVP는 사용자가 방해 요소 없이 작업에 집중할 수 있도록 설계된 간단한 할 일(to-do) 앱입니다. 꼭 필요한 기능만 유지하여 작업을 쉽게 계획하고, 추적하고, 완료할 수 있도록 돕습니다. 목표는 집중력과 작업 완료율을 높이는 것입니다.",
  "audio-conversion-text": "AudioMint MVP는 AI 텍스트 음성 변환 기술을 사용해 텍스트를 선명하고 자연스러운 MP3 오디오로 변환하는 웹 기반 도구입니다. 기술적인 지식 없이도 빠르게 오디오 파일을 만들 수 있도록 도와줍니다. 이 MVP는 빠른 변환, 간단한 조작, 기본적인 일괄 처리 기능에 초점을 맞춥니다.",
  "ai-multilingual-text": "Lingrid는 팀과 개발자를 위한 다국어 콘텐츠 제작을 간소화하도록 설계된 경량 번역 MVP입니다. 구조화된 프로젝트 관리와 개발자 친화적인 연동을 지원하며, 여러 언어 간 효율적인 번역을 가능하게 합니다. 고급 AI 모델을 활용해 현대적인 애플리케이션에 필요한 빠르고 확장 가능하며 일관된 번역을 제공합니다.",
  "food-calorie-title1": "이미지 기반 인식",
  "food-calorie-text1": "사용자는 식사 사진을 촬영하여 자동으로 칼로리 정보를 분석할 수 있습니다.",
  "food-calorie-title2": "즉각적인 결과",
  "food-calorie-text2": "앱은 몇 초 내로 칼로리 추정 결과를 빠르게 표시합니다.",
  "food-calorie-title3": "식사 기록",
  "food-calorie-text3": "분석된 식사를 저장하여 사용자가 시간에 따른 식습관을 추적할 수 있습니다.",
  "encouragement-generation-title1": "AI가 생성한 응원 메시지",
  "encouragement-generation-text1": "사기를 높이거나 팀의 성과를 인정하는 데 완벽한, 따뜻하고 세심하며 개인화된 메시지를 즉시 생성합니다.",
  "encouragement-generation-title2": "톤에 맞춰 조정되는 메시지",
  "encouragement-generation-text2": "영감을 주는 톤, 유머러스한 톤, 공식적인 톤, 캐주얼한 톤 중에서 선택하면 KindleUp이 사용자의 목소리에 맞게 메시지 스타일을 조정합니다.",
  "encouragement-generation-title3": "빠르고 간편한 작업 흐름",
  "encouragement-generation-text3": "몇 분이 아닌 몇 초 만에 메시지를 작성하세요 — 특히 바쁜 일정, 스프린트 리뷰, 또는 높은 압박의 마감 기한에 유용합니다.",
  "focused-task-title1": "칸반 작업 관리",
  "focused-task-text1": "작업은 할 일, 진행 중, 완료와 같은 간단한 칸반 보드를 사용해 정리됩니다. 이를 통해 사용자는 한눈에 진행 상황을 확인할 수 있습니다.",
  "focused-task-title2": "동기 부여 메시지",
  "focused-task-text2": "사용자가 작업을 완료하면 짧은 동기 부여 메시지가 표시됩니다. 이는 긍정적인 마음을 유지하고 계속 나아가도록 돕습니다.",
  "focused-task-title3": "집중을 방해하지 않는 디자인",
  "focused-task-text3": "불필요한 요소를 줄이기 위해 핵심 기능만 포함했습니다. 이를 통해 사용자는 방해 요소 없이 작업 완료에 집중할 수 있습니다.",
  "audio-conversion-title1": "텍스트 → MP3 변환",
  "audio-conversion-text1": "사용자는 텍스트를 입력해 AI 음성을 사용한 MP3 오디오 파일로 변환할 수 있습니다. 음성 속도, 음높이, 언어를 쉽게 조정할 수 있습니다.",
  "audio-conversion-title2": "일괄 변환 (JSON & CSV)",
  "audio-conversion-text2": "JSON 또는 CSV 파일을 업로드하여 여러 텍스트 항목을 한 번에 오디오로 변환할 수 있습니다. 생성된 모든 MP3 파일은 ZIP 파일로 함께 다운로드됩니다.",
  "audio-conversion-title3": "음성 미리보기 및 사용량 추적",
  "audio-conversion-text3": "최종 변환 전에 음성을 미리 들어 품질을 확인할 수 있습니다. 또한 하루에 사용된 문자 수를 표시하여 사용 한도를 초과하지 않도록 도와줍니다.",
  "ai-multilingual-title1": "번역 프로젝트 관리",
  "ai-multilingual-text1": "번역 프로젝트를 효율적으로 구성하고 관리하여, 팀이 진행 상황, 업데이트, 언어 범위를 한곳에서 추적할 수 있습니다.",
  "ai-multilingual-title2": "개발자 친화적인 npm 패키지",
  "ai-multilingual-text2": "개발자가 애플리케이션에 쉽게 통합할 수 있는 npm 패키지를 제공하여 기존 기술 스택 내에서 원활한 번역 워크플로를 구현할 수 있습니다.",
  "ai-multilingual-title3": "AI 기반 다국어 번역",
  "ai-multilingual-text3": "Claude AI를 활용해 여러 언어로의 번역을 지원하며, 다양한 사용 사례에서 정확하고 맥락을 고려한 결과를 제공합니다.",
  productsFooter,
  products,
  home,
  footer,
  about,
  services,
  product,
  "our-projects": { "title": "프로젝트", "description": "우리는 성공을 이끄는 고품질의 혁신적인 디지털 솔루션을 제공하는 데 자부심을 가지고 있습니다. 맞춤형 웹사이트와 강력한 웹 애플리케이션부터 AI 기반 플랫폼까지, 우리의 포트폴리오는 탁월함, 사용성, 성능에 대한 헌신을 보여줍니다." },
  newsroom,
  "contact-modal": { "title": "아이디어를 실현하세요", "description": "저희에게 연락해 주시면 전담 팀이 가능한 한 빨리 답변해 드리겠습니다.", "description2": "여러분의 의견은 저희에게 소중합니다. 주저하지 마시고 연락해 주세요. 여러분의 연락을 기다리겠습니다!", "schedule-text": "상담을 예약하여 당면 과제에 대해 논의하고 W Labs가 어떻게 문제 해결을 도울 수 있는지 알아보세요.", "full-name": "성명", "first-name": "이름", "last-name": "성", "first-name-required": "이름을 입력해 주세요", "last-name-required": "성을 입력해 주세요", "email-address": "이메일 주소", "enter-email": "이메일을 입력하세요", "email-required": "이메일을 입력해 주세요", "invalid-email": "유효한 이메일 주소를 입력해 주세요", "phone-number": "전화번호", "enter-phone": "전화번호를 입력하세요", "phone-required": "전화번호를 입력해 주세요", "invalid-phone": "유효한 전화번호를 입력해 주세요", "company": "회사명", "enter-company": "회사명을 입력하세요", "message": "메시지", "enter-message": "메시지를 입력하세요", "message-required": "메시지를 입력해 주세요", "privacy-agreement": "이를 확인함으로써 귀하는 개인정보 처리방침에 동의하고, 문의하신 주제에 대해 연락을 받으며 마케팅 커뮤니케이션 수신에 동의하게 됩니다.", "submit": "문의 제출", "email-label": "이메일 주소", "phone-label": "전화번호", "office-label": "오피스", "privacy-agreement-required": "계속하려면 개인정보 처리방침에 동의해주세요" },
  wiz,
  terms,
  privacy,
  "optical-microscope": { "title": "LC-OCT 피부 구조 분석", "description": "침습적 절차 없이 피부 표면 아래를 볼 수 있습니다. 이 최첨단 이미징 기술은 실시간으로 피부 구조의 현미경적 뷰를 제공하여 의료 전문가가 질환을 정확하게 진단하고 전례 없는 명확성으로 치료 진행 상황을 추적할 수 있도록 도와줍니다.", "imageAlt": "LC-OCT 피부 구조 분석 장비" }
};
const i18n_SMdHjDdqIId1QK07LHAPEyr3HZfMyKcn2rAtnZisyJE = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  let locale = "ko";
  {
    const event = useRequestEvent?.();
    if (event) {
      const headers = event.node.req.headers;
      const cookieLang = getCookie(event, "lang");
      if (cookieLang && (cookieLang === "ko" || cookieLang === "en")) {
        locale = cookieLang;
        console.log("[i18n Server] Using cookie language:", cookieLang);
      } else {
        const acceptLanguage = headers["accept-language"];
        if (acceptLanguage) {
          const preferredLang = acceptLanguage.split(",")[0].split("-")[0];
          if (preferredLang === "ko" || preferredLang === "en") {
            locale = preferredLang;
            console.log("[i18n Server] Using Accept-Language:", preferredLang);
          }
        }
        console.log("[i18n Server] Using language:", locale);
      }
    }
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale,
    fallbackLocale: "ko",
    messages: {
      en: enMessages,
      ko: koMessages
    }
  });
  if (!nuxtApp.vueApp.config.globalProperties.$i18n) {
    nuxtApp.vueApp.use(i18n);
  }
});
function getCookie(event, name) {
  const cookieHeader = event.node.req.headers.cookie;
  if (!cookieHeader) return null;
  const cookies = cookieHeader.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  {
    return;
  }
});
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  i18n_SMdHjDdqIId1QK07LHAPEyr3HZfMyKcn2rAtnZisyJE,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];
const _sfc_main$9 = /* @__PURE__ */ Object.assign({
  name: "NuxtErrorBoundary",
  inheritAttrs: false
}, {
  __name: "nuxt-error-boundary",
  __ssrInlineRender: true,
  emits: ["error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const error = shallowRef(null);
    function clearError() {
      error.value = null;
    }
    __expose({ error, clearError });
    return (_ctx, _push, _parent, _attrs) => {
      if (error.value) {
        ssrRenderSlot(_ctx.$slots, "error", { error: error.value, clearError }, null, _push, _parent);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Language",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const languages = [
      { code: "en", display: "EN" },
      { code: "ko", display: "KO" }
    ];
    computed(() => {
      return languages.find((lang) => lang.code === locale.value) || languages[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_ClientOnly, mergeProps({
        "fallback-tag": "div",
        fallback: ""
      }, _attrs), {}, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Language.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input2 = "") {
  if (typeof input2 === "number") {
    return input2;
  }
  if (typeof input2 === "string") {
    if (input2.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input2, 10);
    }
  }
}
function parseDensities(input2 = "") {
  if (input2 === void 0 || !input2.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input2.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input2) {
  const sizes = {};
  if (typeof input2 === "string") {
    for (const entry2 of input2.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input2);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input2, options = {}) => {
    const image = resolveImage(ctx, input2, options);
    return image;
  };
  const $img = (input2, modifiers = {}, options = {}) => {
    return getImage2(input2, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input2, options) => getMeta(ctx, input2, options);
  $img.getSizes = (input2, options) => getSizes(ctx, input2, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input2, options) {
  const image = resolveImage(ctx, input2, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input2, options) {
  if (input2 && typeof input2 !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input2}: ${JSON.stringify(input2)})`);
  }
  if (!input2 || input2.startsWith("data:")) {
    return {
      url: input2
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input2 = hasProtocol(input2) ? input2 : withLeadingSlash(input2);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input2.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input2 = joinURL(alias, input2.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input2)) {
    const inputHost = parseURL(input2).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input2
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if (_options.modifiers?.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if (_options.modifiers?.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input2, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input2, opts) {
  const width = parseSize(opts.modifiers?.width);
  const height = parseSize(opts.modifiers?.height);
  const sizes = parseSizes(opts.sizes);
  const densities = opts.densities?.trim() ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input2, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input2, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input2, opts, variant, density) {
  return ctx.$img(
    input2,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$sqU9wPfR34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$sqU9wPfR34, defaults: {} }
};
const useImage = () => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: props.placeholder && !placeholderLoaded.value ? props.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function useContact() {
  const { t } = useI18n();
  const { errors, defineField, handleSubmit, resetForm } = useForm({
    validationSchema: yup.object({
      first_name: yup.string().required(t("first-name-required")),
      last_name: yup.string().required(t("last-name-required")),
      email: yup.string().email(t("invalid-email")).required(t("email-required")),
      phone: yup.string().matches(/^\d+$/, t("invalid-phone")).required(t("phone-required")),
      message: yup.string().required(t("message-required"))
    })
  });
  const [first_name] = defineField("first_name");
  const [last_name] = defineField("last_name");
  const [email] = defineField("email");
  const [phone] = defineField("phone");
  const [company2] = defineField("company");
  const [message2] = defineField("message");
  const submitForm = handleSubmit(async (values) => {
    console.log("Submitting form with values:", values);
    const templateParams = {
      name: `${values.first_name} ${values.last_name}`,
      email: values.email,
      phone: values.phone,
      company: values.company,
      message: values.message
    };
    try {
      console.log("Sending email...");
      await emailjs.send(
        "service_hgcmb0c",
        "template_uqqouop",
        templateParams,
        "yIL5xLn_QSTMWUXp8"
      );
      console.log("Email sent successfully!");
      Swal.fire({
        icon: "success",
        title: "Message sent successfully!",
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: {
          popup: "toast-success"
        },
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true
      });
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Message failed to send!",
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: {
          popup: "toast-error"
        },
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true
      });
    }
  });
  return {
    first_name,
    last_name,
    email,
    phone,
    company: company2,
    message: message2,
    submitForm,
    errors
  };
}
const _sfc_main$6 = {
  __name: "ContactModal",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const details = [
      { labelKey: "email-label", icon: "mail.png", value: "contact@wsoft.space" },
      { labelKey: "phone-label", icon: "phone.png", value: "+82 10 5067 8800" },
      {
        labelKey: "office-label",
        icon: "location.png",
        value: "3F, 219, Segwon-ro, Gwonseon-gu, Suwon-si, Gyeonggi-do, Republic of Korea"
      }
    ];
    const {
      first_name,
      last_name,
      email,
      phone,
      company: company2,
      message: message2,
      errors: originalErrors,
      isSubmitting
    } = useContact();
    const privacyAgreed = ref(false);
    const errors = computed(() => ({
      ...originalErrors.value,
      privacyAgreement: !privacyAgreed.value && submitted ? true : false
    }));
    const submitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.modelValue) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.modelValue) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="bg-[#20252CE5] text-white rounded-[28px] shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"><div class="flex justify-end p-2"><button class="btn btn-circle btn-ghost btn-sm"> ✕ </button></div><div class="px-8 pt-0 pb-14"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8"><div class="col-span-12 lg:col-span-5"><h2 class="text-[48px] font-[300] leading-tight bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(_ctx.$t("contact-modal.title"))}</h2><div class="mt-8 space-y-5"><p class="font-semibold text-[14px]">${ssrInterpolate(_ctx.$t("contact-modal.description"))}</p><p class="font-semibold text-[14px]">${ssrInterpolate(_ctx.$t("contact-modal.description2"))}</p></div><div class="mt-8"><div class="bg-[#64748B] w-full" style="${ssrRenderStyle({ "height": "1px" })}"></div></div><div class="mt-8 space-y-6"><!--[-->`);
        ssrRenderList(details, (detail) => {
          _push(`<div class="flex gap-5 items-center">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            width: "40",
            height: "40",
            src: `/images/revamp/contact-us/${detail.icon}`
          }, null, _parent));
          _push(`<div><p class="text-[14px] font-semibold mb-0">${ssrInterpolate(_ctx.$t(`contact-modal.${detail.labelKey}`))}</p><p class="text-[24px] mb-0">${ssrInterpolate(detail.value)}</p></div></div>`);
        });
        _push(`<!--]--></div></div><div class="col-span-12 lg:col-span-7 mt-20"><p class="text-[#64748B] text-[14px] font-semibold mb-2">${ssrInterpolate(_ctx.$t("contact-modal.schedule-text"))}</p><form><div class="grid grid-cols-1 md:grid-cols-2 gap-5"><div class="mb-0 col-span-12"><label class="block text-sm mb-2">${ssrInterpolate(_ctx.$t("full-name"))}</label><div class="grid grid-cols-2 gap-5"><div><input type="text"${ssrRenderAttr("value", unref(first_name))} class="${ssrRenderClass([
          "w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black bg-white text-black",
          unref(errors).first_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
        ])}"${ssrRenderAttr("placeholder", _ctx.$t("first-name"))}><div class="h-[1rem]">`);
        if (unref(errors).first_name) {
          _push(`<p class="text-red-500 text-sm mb-0 mt-1">${ssrInterpolate(_ctx.$t("first-name-required"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div><input type="text"${ssrRenderAttr("value", unref(last_name))} class="${ssrRenderClass([
          "w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black",
          unref(errors).last_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
        ])}"${ssrRenderAttr("placeholder", _ctx.$t("last-name"))}><div class="h-[1rem]">`);
        if (unref(errors).last_name) {
          _push(`<p class="text-red-500 text-sm mb-0 mt-1">${ssrInterpolate(_ctx.$t("last-name-required"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div><div class="mb-0 col-span-12"><div class="grid grid-cols-2 gap-5"><div><label class="block text-sm mb-2">${ssrInterpolate(_ctx.$t("email-address"))}</label><input type="email"${ssrRenderAttr("value", unref(email))} class="${ssrRenderClass([
          "w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black",
          unref(errors).email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
        ])}"${ssrRenderAttr("placeholder", _ctx.$t("enter-email"))}><div class="h-[1rem]">`);
        if (unref(errors).email) {
          _push(`<p class="text-red-500 text-sm mb-0 mt-1">${ssrInterpolate(unref(errors).email.includes("required") ? _ctx.$t("email-required") : _ctx.$t("invalid-email"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div><label class="block text-sm mb-2">${ssrInterpolate(_ctx.$t("phone-number"))}</label><input type="tel"${ssrRenderAttr("value", unref(phone))} class="${ssrRenderClass([
          "w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black",
          unref(errors).phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
        ])}"${ssrRenderAttr("placeholder", _ctx.$t("enter-phone"))}><div class="h-[1rem]">`);
        if (unref(errors).phone) {
          _push(`<p class="text-red-500 text-sm mb-0 mt-1">${ssrInterpolate(unref(errors).phone.includes("required") ? _ctx.$t("phone-required") : _ctx.$t("invalid-phone"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div><div class="mb-0 col-span-12"><div class="grid grid-cols-2 gap-5"><div><label class="block text-sm mb-2">${ssrInterpolate(_ctx.$t("company"))}</label><input type="text"${ssrRenderAttr("value", unref(company2))} class="w-full px-4 py-2 bg-white text-black border border-[#475766] rounded-lg focus:border-[#2375E9] focus:ring-2"${ssrRenderAttr("placeholder", _ctx.$t("enter-company"))}></div></div></div><div class="mb-0 col-span-12"><label class="block text-sm mb-2">${ssrInterpolate(_ctx.$t("message"))}</label><textarea rows="4" class="${ssrRenderClass([
          "w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black",
          unref(errors).message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
        ])}"${ssrRenderAttr("placeholder", _ctx.$t("enter-message"))}>${ssrInterpolate(unref(message2))}</textarea><div class="h-[1rem]">`);
        if (unref(errors).message) {
          _push(`<p class="text-red-500 text-sm mb-0 mt-1">${ssrInterpolate(_ctx.$t("message-required"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="mb-8"><label class="flex items-start gap-3 cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(privacyAgreed.value) ? ssrLooseContain(privacyAgreed.value, null) : privacyAgreed.value) ? " checked" : ""} class="${ssrRenderClass([{
          "border-red-500": unref(errors).privacyAgreement
        }, "mt-1 w-4 h-4 text-[#2375E9] bg-transparent border-[#475766] rounded focus:ring-[#2375E9] focus:ring-2"])}"><div class="flex-1"><p class="text-[#64748B] text-[14px] font-semibold">${ssrInterpolate(_ctx.$t("contact-modal.privacy-agreement"))}</p>`);
        if (unref(errors).privacyAgreement) {
          _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(_ctx.$t("contact-modal.privacy-agreement-required"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></label></div><button type="submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="group w-auto rounded-[22px] py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed relative inline-flex items-center justify-center gap-2 px-12"><div class="absolute inset-0 rounded-[22px] p-[1px] bg-gradient-to-r from-[#2376e9] to-[#02c7d0]"><div class="w-full h-full rounded-[22px] bg-[#20252CE5] group-hover:bg-transparent transition-all"></div></div><span class="relative z-10 bg-gradient-to-r from-[#2376e9] to-[#02c7d0] bg-clip-text text-transparent group-hover:text-white transition-all">${ssrInterpolate(_ctx.$t("contact-modal.submit"))}</span>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/mail-submit-icon.svg",
          width: "24",
          height: "24",
          class: "relative z-10 transition-all"
        }, null, _parent));
        _push(`</button></form></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/images/logos/w-labs-default.png");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const { t } = useI18n();
    const isMenuOpen = ref(false);
    const showContactModal = ref(false);
    const navLinks = [
      {
        title: "Home",
        to: "/",
        isModal: false
      },
      {
        title: "About Us",
        to: "/revamp/about-us",
        isModal: false
      },
      {
        title: "Services",
        to: "/revamp/services",
        isModal: false
      },
      {
        title: "Products",
        to: "/revamp/products",
        isModal: false
      },
      {
        title: "Projects",
        to: "/revamp/our-projects",
        isModal: false
      },
      {
        title: "NewsRoom",
        to: "/revamp/newsroom",
        isModal: false
      },
      {
        title: "ContactUs",
        to: "/revamp/contact-us",
        isModal: true
      }
    ];
    const handleNavigation = (path) => {
      isMenuOpen.value = false;
    };
    const isActiveLink = (linkPath) => {
      const link = navLinks.find((l) => l.to === linkPath);
      if (link?.isModal) return false;
      if (linkPath === "/") {
        return route.path === "/";
      }
      return route.path.startsWith(linkPath) && linkPath !== "/";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Language = _sfc_main$8;
      const _component_ContactModal = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6b0c1672><div data-v-6b0c1672><div class="navbar text-black py-5 px-4 lg:px-8" data-v-6b0c1672><div class="navbar-start" data-v-6b0c1672>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        onClick: ($event) => handleNavigation()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} height="100%" class="w-[150px] lg:w-[190px]" alt="W Soft Logo" data-v-6b0c1672${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                height: "100%",
                class: "w-[150px] lg:w-[190px]",
                alt: "W Soft Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-center hidden lg:flex" data-v-6b0c1672><ul class="menu menu-horizontal px-2" data-v-6b0c1672><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<li data-v-6b0c1672>`);
        if (link.isModal) {
          _push(`<button class="${ssrRenderClass([[
            isActiveLink(link.to) ? "bg-gradient-to-r from-[#2375E9] to-[#02C7D0] text-white shadow-cyan-500/50" : "bg-transparent text-black hover:bg-gray-100"
          ], "mx-3 text-[14px] nav-slot overflow-hidden lg:text-[16px] xl:text-[18px] font-[400] font-inter transition-all !shadow-none duration-300 btn btn-sm border-0"])}" data-v-6b0c1672><span class="nav-slot-inner" data-v-6b0c1672><span data-v-6b0c1672>${ssrInterpolate(_ctx.$t(link.title))}</span><span aria-hidden="true" data-v-6b0c1672>${ssrInterpolate(_ctx.$t(link.title))}</span></span></button>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.to,
            onClick: ($event) => handleNavigation(link.to),
            class: ["mx-3 text-[14px] nav-slot overflow-hidden lg:text-[16px] xl:text-[18px] font-[400] border-0 font-inter transition-all !shadow-none duration-300 btn btn-sm border-0`", [
              isActiveLink(link.to) ? "bg-gradient-to-r from-[#2375E9] to-[#02C7D0] text-white shadow-cyan-500/50" : "bg-transparent text-black hover:bg-gray-100"
            ]]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="nav-slot-inner" data-v-6b0c1672${_scopeId}><span data-v-6b0c1672${_scopeId}>${ssrInterpolate(_ctx.$t(link.title))}</span><span aria-hidden="true" data-v-6b0c1672${_scopeId}>${ssrInterpolate(_ctx.$t(link.title))}</span></span>`);
              } else {
                return [
                  createVNode("span", { class: "nav-slot-inner" }, [
                    createVNode("span", null, toDisplayString(_ctx.$t(link.title)), 1),
                    createVNode("span", { "aria-hidden": "true" }, toDisplayString(_ctx.$t(link.title)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="navbar-end hidden lg:flex" data-v-6b0c1672>`);
      _push(ssrRenderComponent(_component_Language, null, null, _parent));
      _push(`</div><div class="navbar-end lg:hidden" data-v-6b0c1672><button class="btn btn-ghost btn-circle" data-v-6b0c1672><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6b0c1672><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-6b0c1672></path></svg></button></div></div></div>`);
      if (isMenuOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black lg:hidden" data-v-6b0c1672><button class="absolute top-5 right-5 btn btn-circle btn-ghost" data-v-6b0c1672> ✕ </button><div class="text-center" data-v-6b0c1672>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: ($event) => isMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-[180px] mb-3" alt="W Soft Logo" loading="lazy" data-v-6b0c1672${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$1,
                  class: "w-[180px] mb-3",
                  alt: "W Soft Logo",
                  loading: "lazy"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mb-6" data-v-6b0c1672>`);
        _push(ssrRenderComponent(_component_Language, null, null, _parent));
        _push(`</div><ul class="menu mb-3 flex flex-col items-center gap-y-3" data-v-6b0c1672><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(`<li class="text-[18px] font-[400] active:!bg-transparent active:!border-0 active:!text-black" data-v-6b0c1672>`);
          if (link.isModal) {
            _push(`<button class="w-full text-center" data-v-6b0c1672>${ssrInterpolate(_ctx.$t(link.title))}</button>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              onClick: ($event) => isMenuOpen.value = false,
              to: link.to
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t(link.title))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul><div class="text-center" data-v-6b0c1672><button class="relative font-[400] text-[18px] px-8 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90" data-v-6b0c1672><span class="relative z-10" data-v-6b0c1672>${ssrInterpolate(_ctx.$t("Talk with an Expert"))}</span><span class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10" data-v-6b0c1672></span><span class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px]" data-v-6b0c1672></span></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ContactModal, {
        modelValue: showContactModal.value,
        "onUpdate:modelValue": ($event) => showContactModal.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6b0c1672"]]);
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _imports_0 = publicAssetsURL("/images/revamp/facebook.png");
const _imports_1 = publicAssetsURL("/images/revamp/instagram.png");
const _sfc_main$4 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const showContactModal = ref(false);
    const footerLinks = computed(() => [
      {
        label: "footer.home",
        to: "/",
        isModal: false
      },
      {
        label: "footer.about_us",
        to: "/revamp/about-us",
        isModal: false
      },
      {
        label: "footer.services",
        to: "/revamp/services",
        isModal: false
      },
      {
        label: "footer.products",
        to: "/revamp/products",
        isModal: false
      },
      {
        label: "footer.projects",
        to: "/revamp/our-projects",
        isModal: false
      },
      {
        label: "footer.newsroom",
        to: "/revamp/newsroom",
        isModal: false
      },
      {
        label: "footer.contact_us",
        to: "/revamp/contact",
        isModal: true
      }
    ]);
    const additionalLinks = computed(() => [
      {
        label: t("footer.terms_conditions"),
        to: "/revamp/terms-conditions"
      },
      {
        label: t("footer.privacy_policy"),
        to: "/revamp/privacy-policy"
      }
    ]);
    computed(() => [
      { name: t("products.pageTitle"), to: "/optical-microscope" },
      { name: t("wizAssistant"), to: "/wiz-assistant" }
    ]);
    const isUedu = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ContactModal = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-[14px] mb-8 p-8 text-white bg-[radial-gradient(213.33%_134.04%_at_50%_-20.22%,#2376E9_0%,#0A1628_17.54%,#000000_100%)]" }, _attrs))}><div class="grid grid-cols-2 lg:grid-cols-12 gap-8"><div class="col-span-12 lg:col-span-4 order-2 lg:order-1"><div class="lg:max-w-md"><h4 class="text-[24px] leading-tight bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(_ctx.$t("footer.title"))}</h4><div class="mt-8"><p class="text-[16px] font-semibold text-[#64748B]">${ssrInterpolate(_ctx.$t("footer.newsletter_text"))}</p></div><div class="lg:px-5 mt-5"><div><label class="block text-sm mb-2">${ssrInterpolate(_ctx.$t("email-address"))}</label><input type="email" class="${ssrRenderClass([
        "w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black",
        "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
      ])}"${ssrRenderAttr("placeholder", _ctx.$t("enter-email"))}></div><div class="mt-5 flex justify-end"><button type="submit" class="group w-auto rounded-[22px] py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed relative inline-flex items-center justify-center gap-2 px-12"><div class="absolute inset-0 rounded-[22px] p-[1px] bg-gradient-to-r from-[#2376e9] to-[#02c7d0]"><div class="w-full h-full rounded-[22px] bg-[#07101d] group-hover:bg-transparent transition-all"></div></div><span class="relative z-10 bg-gradient-to-r from-[#2376e9] to-[#02c7d0] bg-clip-text text-transparent group-hover:text-white transition-all">${ssrInterpolate(_ctx.$t("footer.subscribe"))}</span>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/mail-submit-icon.svg",
        width: "24",
        height: "24",
        class: "relative z-10 transition-all"
      }, null, _parent));
      _push(`</button></div></div></div></div><div class="col-span-12 lg:col-span-7 lg:col-start-6 order-1 lg:order-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/home/footer/img-footer.png",
        width: "1025",
        height: "auto",
        alt: "icon-2"
      }, null, _parent));
      _push(`</div></div><div class="my-8"><div class="bg-[#F8FAFC] h-[1px]"></div></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/footer-logo.png",
        width: "118",
        height: "auto"
      }, null, _parent));
      _push(`<div class="mt-5"><div class="lg:px-5 grid grid-cols-1 lg:grid-cols-12"><div class="col-span-12 lg:col-span-6"><div class="flex flex-col md:flex-row gap-5"><!--[-->`);
      ssrRenderList(unref(footerLinks), (link) => {
        _push(`<!--[-->`);
        if (link.isModal) {
          _push(`<button class="text-[#64748B] font-semibold text-[16px] hover:underline text-left">${ssrInterpolate(_ctx.$t(link.label))}</button>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.to,
            class: "text-[#64748B] font-semibold text-[16px] hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t(link.label))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t(link.label)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="flex mt-2 flex-col md:flex-row gap-5 lg:px-3"><!--[-->`);
      ssrRenderList(unref(additionalLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: "text-[#64748B] font-semibold text-[16px] hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(link.label))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(link.label)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div><div class="mt-8"><div class="grid grid-cols-1 lg:grid-cols-12 gap-5"><div class="col-span-12 lg:col-span-3"><div class="flex items-center gap-5"><img${ssrRenderAttr("src", _imports_0)} width="24" height="auto"><img${ssrRenderAttr("src", _imports_1)} width="24" height="auto"></div><div class="mt-7"><span class="text-[#64748B] text-[16px] font-semibold">${ssrInterpolate(_ctx.$t("footer.copyright_text"))}</span></div></div><div class="col-span-12 lg:col-span-5"><div><a href="https://www.dunsregistered.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-[14px] text-white font-inter border border-white hover:text-[#2375E9] transition-colors duration-300 rounded-md px-4 py-1 relative bg-transparent group">${ssrInterpolate(_ctx.$t("duns-registered"))}: 696568010 <div class="text-white">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/duns-arrow.svg",
        class: "h-[16px] w-[16px] brightness-0 invert",
        alt: "arrow"
      }, null, _parent));
      _push(`</div></a></div><div class="mt-3"><div class="flex flex-col md:flex-row items-center font-inter gap-2 md:gap-2"><p class="font-inter text-[#64748B] font-semibold text-uppercase">${ssrInterpolate(_ctx.$t("footer.company_name"))}: <span class="font-semibold text-white">${ssrInterpolate(isUedu.value ? _ctx.$t("footer-uedu") : _ctx.$t("footer-wlabs"))}</span></p><span class="hidden md:inline">|</span><p class="font-inter text-[#64748B] font-semibold">${ssrInterpolate(_ctx.$t("footer-ceo"))}: <span class="font-semibold text-white">${ssrInterpolate(_ctx.$t("footer-matt"))}</span></p><span class="hidden md:inline">|</span><p class="font-inter text-[#64748B] font-semibold text-uppercase">${ssrInterpolate(_ctx.$t("footer.business_id"))}: <span class="font-semibold text-white">${ssrInterpolate(isUedu.value ? "124-87-33297" : "387-87-03701")}</span></p></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ContactModal, {
        modelValue: showContactModal.value,
        "onUpdate:modelValue": ($event) => showContactModal.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProductsFooter",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="pt-10 pb-3 px-[2rem] lg:px-[5rem] bg-[#64748B]"><div><div class="flex justify-center lg:justify-start mb-5 md:mb-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/logos/w-labs-white.png",
              alt: "W Soft Logo",
              class: "w-[134px]"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/images/logos/w-labs-white.png",
                alt: "W Soft Logo",
                class: "w-[134px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"><div><h3 class="text-lg font-semibold mb-4 text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("productsFooter.contactInformation"))}</h3><div><div class="flex items-center gap-3 text-[14px] mt-3"><span class="text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("productsFooter.inquiryEmail"))}</span><span class="text-white">contact@wsoft.space</span></div><div class="flex items-center gap-3 text-[14px] mt-3"><span class="text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("productsFooter.inquiryType"))}</span><span class="text-white">${ssrInterpolate(_ctx.$t("productsFooter.inquiryTypeValue"))}</span></div></div></div><div><h3 class="text-lg font-semibold mb-4 text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("productsFooter.providerInformation"))}</h3><div><div class="flex items-center gap-3 text-[14px]"><span class="text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("productsFooter.serviceProvider"))}</span><span class="text-white">W Labs Inc.</span></div><div class="flex items-center gap-3 text-[14px] mt-3"><span class="text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("productsFooter.organizationType"))}</span><span class="text-white">${ssrInterpolate(_ctx.$t("productsFooter.organizationTypeValue"))}</span></div><div class="flex items-center gap-3 text-[14px] mt-3"><span class="text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("productsFooter.location"))}</span><span class="text-white">${ssrInterpolate(_ctx.$t("productsFooter.locationValue"))}</span></div></div></div><div><h3 class="text-lg font-semibold mb-4 text-[#F8FAFC99]">${ssrInterpolate(_ctx.$t("registrations"))}</h3><div><a href="https://www.dunsregistered.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-[14px] text-white font-inter hover:text-white/80 transition-colors duration-300 rounded-md px-4 py-2 border border-white group">${ssrInterpolate(_ctx.$t("duns-registered"))}: 696568010 <div class="text-white group-hover:text-white/80 transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/duns-arrow-white.svg",
        class: "h-[16px] w-[16px]",
        alt: "arrow"
      }, null, _parent));
      _push(`</div></a></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductsFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const route = useRoute();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const isProductsPage = computed(() => {
      return route.path.startsWith("/optical-microscope");
    });
    const isWizAssistantPage = computed(() => {
      return route.path.startsWith("/wiz-assistant");
    });
    const canonicalUrl = computed(() => {
      const baseUrl = config.public.baseUrl || "https://wsoft-v2.vercel.app";
      const path = route.path.replace(/\/+/g, "/");
      return `${baseUrl}${path}`;
    });
    useHead({
      htmlAttrs: {
        lang: computed(() => locale.value)
      },
      link: [
        {
          rel: "canonical",
          href: computed(() => canonicalUrl.value)
        }
      ],
      meta: [
        {
          name: "robots",
          content: "index, follow"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtErrorBoundary = _sfc_main$9;
      const _component_Navbar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_Footer = _sfc_main$4;
      const _component_ProductsFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtErrorBoundary, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white overflow-hidden"${_scopeId}><div class="sticky top-0 z-50 bg-[#f9fbfc]"${_scopeId}><div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Navbar, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            if (!unref(isProductsPage) && !unref(isWizAssistantPage)) {
              _push2(`<div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto px-2 md:px-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isProductsPage) || unref(isWizAssistantPage)) {
              _push2(ssrRenderComponent(_component_ProductsFooter, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white overflow-hidden" }, [
                createVNode("div", { class: "sticky top-0 z-50 bg-[#f9fbfc]" }, [
                  createVNode("div", { class: "md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto" }, [
                    createVNode(_component_Navbar)
                  ])
                ]),
                createVNode(_component_NuxtPage),
                !unref(isProductsPage) && !unref(isWizAssistantPage) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto px-2 md:px-0"
                }, [
                  createVNode(_component_Footer)
                ])) : createCommentVNode("", true),
                unref(isProductsPage) || unref(isWizAssistantPage) ? (openBlock(), createBlock(_component_ProductsFooter, { key: 1 })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const route = useRoute();
    const isProductsPage = computed(() => {
      return route.path.startsWith("/optical-microscope");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#ebf0f7] min-h-screen" }, _attrs))}><div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto">`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`</div><div class="flex flex-col items-center justify-center min-h-[70vh] px-4"><div class="text-center max-w-2xl">`);
      if (__props.error.statusCode === 404) {
        _push(`<div class="mb-8"><h1 class="text-6xl md:text-8xl font-bold font-poppins text-[#0b1552] mb-4"> 404 </h1><h2 class="text-3xl md:text-4xl font-semibold font-inter text-gray-800 mb-4">${ssrInterpolate(_ctx.$t("not-found"))}</h2><p class="text-lg text-gray-600 font-inter mb-8">${ssrInterpolate(_ctx.$t("not-found-text"))}</p></div>`);
      } else {
        _push(`<div class="mb-8"><h1 class="text-6xl md:text-8xl font-bold text-red-600 mb-4">${ssrInterpolate(__props.error.statusCode || "Error")}</h1><h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"> Something went wrong </h2><p class="text-lg text-gray-600 mb-8">${ssrInterpolate(__props.error.message || "An unexpected error occurred")}</p></div>`);
      }
      _push(`<div class="flex flex-col sm:flex-row gap-4 justify-center"><button class="px-6 py-3 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white font-medium rounded-lg hover:bg-[#2c5282] transition-colors">${ssrInterpolate(_ctx.$t("go-home"))}</button><button class="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors">${ssrInterpolate(_ctx.$t("go-back"))}</button></div></div></div>`);
      if (!unref(isProductsPage)) {
        _push(`<div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto">`);
        _push(ssrRenderComponent(_component_Footer, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, _sfc_main$7 as a, useNuxtApp as b, __nuxt_component_0$2 as c, __nuxt_component_0$1 as d, entry_default as default, useContact as e, useRoute as f, useRuntimeConfig as g, asyncDataDefaults as h, createError as i, useHead as u };
