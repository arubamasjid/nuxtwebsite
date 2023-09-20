import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { useSSRContext, ref, unref, withCtx, createVNode, watchEffect, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { a as useRoute, u as useHead, b as useRouter } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'firebase/app';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'ipx';
import 'http-graceful-shutdown';

const drawer$1 = "_drawer_dttif_3";
const drawer_open = "_drawer_open_dttif_17";
const drawer_closed = "_drawer_closed_dttif_39";
const menu_icon = "_menu_icon_dttif_57";
const links = "_links_dttif_89";
const style0$2 = {
  drawer: drawer$1,
  drawer_open,
  drawer_closed,
  menu_icon,
  links
};
const _sfc_main$2 = {
  __name: "drawer",
  __ssrInlineRender: true,
  emits: ["drawerstate", "hidedrawer"],
  setup(__props, { emit }) {
    let drawerState = ref(false);
    ref();
    function toggleDrawer() {
      drawerState.value = !drawerState.value;
      console.log("toggle");
      emit("drawerstate", drawerState.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="${ssrRenderClass([_ctx.$style.menu_icon, "opacity-100 sm:opacity-0 sm:pointer-events-none"])}"></div><div class="${ssrRenderClass([
        _ctx.$style.drawer,
        unref(drawerState) ? _ctx.$style.drawer_open : _ctx.$style.drawer_closed
      ])}"><div class="${ssrRenderClass(_ctx.$style.links)}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"${_scopeId}> Home </div>`);
          } else {
            return [
              createVNode("div", {
                class: "hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center",
                onClick: toggleDrawer
              }, " Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/events" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"${_scopeId}> Events </div>`);
          } else {
            return [
              createVNode("div", {
                onClick: toggleDrawer,
                class: "hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"
              }, " Events ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/education" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"${_scopeId}> Learn </div>`);
          } else {
            return [
              createVNode("div", {
                class: "hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center",
                onClick: toggleDrawer
              }, " Learn ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"${_scopeId}> About </div>`);
          } else {
            return [
              createVNode("div", {
                class: "hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center",
                onClick: toggleDrawer
              }, " About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"${_scopeId}> Contact </div>`);
          } else {
            return [
              createVNode("div", {
                class: "hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center",
                onClick: toggleDrawer
              }, " Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg hover:scale-125 transition-transform"></div></div></div></div><!--]-->`);
    };
  }
};
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/drawer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const header = "_header_11z7c_3";
const style0$1 = {
  header
};
const _sfc_main$1 = {
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    console.log("header rendered");
    const router = ref(useRouter());
    const route = ref();
    watchEffect(() => {
      console.log(router.value.currentRoute.fullPath);
      route.value = router.value.currentRoute.fullPath;
      console.log("route", route.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          _ctx.$style.header,
          unref(route) == "/" ? "hidden pointer-events-none sm:flex sm:justify-between sm:pointer-events-auto text-white" : "opacity-0 pointer-events-none flex flex-nowrap sm:pointer-events-auto sm:opacity-100 p-10 sm:justify-between text-black "
        ]
      }, _attrs))}><div class="hover:-mb-[4px] hover:scale-125 transition-transform text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"${_scopeId}>Home</span>`);
          } else {
            return [
              createVNode("span", { class: "sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hover:-mb-[4px] hover:scale-125 transition-transform text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/events" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"${_scopeId}>Events</span>`);
          } else {
            return [
              createVNode("span", { class: "sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4" }, "Events")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hover:-mb-[4px] hover:scale-125 transition-transform text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/education" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"${_scopeId}>Learn </span>`);
          } else {
            return [
              createVNode("span", { class: "sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4" }, "Learn ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hover:-mb-[4px] hover:scale-125 transition-transform text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"${_scopeId}>About </span>`);
          } else {
            return [
              createVNode("span", { class: "sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4" }, "About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hover:-mb-[4px] hover:scale-125 transition-transform text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"${_scopeId}>Contact</span>`);
          } else {
            return [
              createVNode("span", { class: "sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4" }, "Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const drawer = "_drawer_sp9as_3";
const style0 = {
  drawer
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useHead({
      meta: [{ property: "og:title", content: `App Name - ${route.meta.title}` }]
    });
    let drawerStateOpen = ref();
    let hideDrawerTrue = ref();
    ref();
    function drawerState(value) {
      console.log("drawerstate", value);
      drawerStateOpen.value = value;
    }
    function hideDrawer(value) {
      console.log("hidedrawer", value);
      hideDrawerTrue.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navDrawer = __nuxt_component_0;
      const _component_navHeader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_navDrawer, {
        onDrawerstate: drawerState,
        onHidedrawer: hideDrawer
      }, null, _parent));
      _push(ssrRenderComponent(_component_navHeader, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);

export { _default as default };
//# sourceMappingURL=default-9a4af34c.mjs.map
