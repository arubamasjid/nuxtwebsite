import _sfc_main$1 from './ContentRenderer-8d88ec7e.mjs';
import _sfc_main$2 from './ContentRendererMarkdown-8421f998.mjs';
import { useSSRContext, withAsyncContext, unref, withCtx, createVNode } from 'vue';
import { u as useAsyncData, q as queryContent } from './query-d736c54c.mjs';
import { a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'destr';
import 'scule';
import 'property-information';
import './preview-541dbe89.mjs';
import 'cookie-es';
import 'h3';
import 'ohash';
import './ssr-07e22ebd.mjs';
import 'ufo';
import './utils-e2429121.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
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

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const path = useRoute().fullPath;
    console.log(path);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${path}`, () => {
      return queryContent().where({ _path: path }).findOne();
    })), __temp = await __temp, __restore(), __temp);
    console.log(data, "test");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_ContentRendererMarkdown = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-ef3b5f34>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(data) }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-ef3b5f34${_scopeId}>Something went wrong getting this article</p>`);
          } else {
            return [
              createVNode("p", null, "Something went wrong getting this article")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ContentRendererMarkdown, {
              value: unref(data),
              class: "prose p-12 mt-12 mb-16 masjid max-w-none md:w-[60%] mx-auto shadow-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ContentRendererMarkdown, {
                value: unref(data),
                class: "prose p-12 mt-12 mb-16 masjid max-w-none md:w-[60%] mx-auto shadow-xl"
              }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef3b5f34"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-ad1fc997.mjs.map
