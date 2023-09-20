import _sfc_main$1 from './ContentRenderer-8d88ec7e.mjs';
import _sfc_main$2 from './ContentRendererMarkdown-8421f998.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { useSSRContext, withAsyncContext, ref, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { u as useAsyncData, q as queryContent } from './query-d736c54c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_7 } from './arrow-right-e0f00725.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'destr';
import 'scule';
import 'property-information';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'firebase/app';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
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
import './preview-541dbe89.mjs';
import 'cookie-es';
import './ssr-07e22ebd.mjs';
import './utils-e2429121.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const _sfc_main = {
  __name: "events",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const getMasjidOpeningQuery = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "masjidopening",
      () => queryContent("events").where({ title: "Masjid Official Opening Event" }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const masjidOpeningData = getMasjidOpeningQuery.data;
    console.log("masjid data", masjidOpeningData);
    const getAllArticlesQuery = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "allarticles",
      () => queryContent("events").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    let articles = ref([]);
    const allArticles = getAllArticlesQuery.data;
    console.log("all articles", allArticles.value);
    articles.value = allArticles.value;
    ref();
    const dateToday = /* @__PURE__ */ new Date();
    console.log(dateToday);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_ContentRendererMarkdown = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-660c0b68>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(masjidOpeningData) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ContentRendererMarkdown, {
              value: unref(masjidOpeningData),
              class: "prose prose-base max-w-none w-[90%] md:w-[60%] shadow-xl mx-auto mt-12 mb-16 p-12"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ContentRendererMarkdown, {
                value: unref(masjidOpeningData),
                class: "prose prose-base max-w-none w-[90%] md:w-[60%] shadow-xl mx-auto mt-12 mb-16 p-12"
              }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-16 pb-24 bg-yellow-200" data-v-660c0b68><div class="text-3xl font-bold pb-12 text-center" data-v-660c0b68>Browse Events</div><div class="flex dropdown justify-center mb-8" data-v-660c0b68><label tabindex="0" class="btn m-1 bg-primary" data-v-660c0b68>Filter Events</label><ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52" data-v-660c0b68><li class="p-2 hover:cursor-pointer hover:bg-base-300" data-v-660c0b68> Past Events </li><li class="p-2 hover:cursor-pointer hover:bg-base-300" data-v-660c0b68> Upcoming Events </li><li class="p-2 hover:cursor-pointer hover:bg-base-300" data-v-660c0b68> All Events </li></ul></div><div class="grid auto-cols-max grid-cols-1 xs:w-[80%] sm:w-[60%] md:grid-cols-2 md:w-[80%] mmd:w-[70%] lg:grid-cols-3 lg:w-[80%] xl:w-[60%] mx-auto gap-8 px-8 items-stretch" data-v-660c0b68><!--[-->`);
      ssrRenderList(unref(articles), (article) => {
        _push(`<div class="card shadow-lg bg-white" data-v-660c0b68><div class="card-body text-center justify-center" data-v-660c0b68><div class="card-title justify-center mb-auto pb-2" data-v-660c0b68>${ssrInterpolate(article.title)}</div><div class="mb-auto" data-v-660c0b68>${ssrInterpolate(article.description)}</div><div class="card-actions justify-end pt-4" data-v-660c0b68>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: article._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="btn btn-primary btn-sm" data-v-660c0b68${_scopeId}> Read <img${ssrRenderAttr("src", _imports_7)} data-v-660c0b68${_scopeId}></button>`);
            } else {
              return [
                createVNode("button", { class: "btn btn-primary btn-sm" }, [
                  createTextVNode(" Read "),
                  createVNode("img", { src: _imports_7 })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const events = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-660c0b68"]]);

export { events as default };
//# sourceMappingURL=events-924ff744.mjs.map
