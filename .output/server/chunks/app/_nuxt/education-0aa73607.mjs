import { _ as __nuxt_component_0 } from './calendar-c251e5d9.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_7 } from './arrow-right-e0f00725.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
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
import 'adhan';
import '../server.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'firebase/app';

const _sfc_main = {
  __name: "education",
  __ssrInlineRender: true,
  setup(__props) {
    const kids = [
      {
        title: "Learn to make wudu with dua",
        link: [
          "https://youtu.be/LZWe0Xh-Hfc?feature=shared",
          "https://youtu.be/ygKwEMilawk?feature=shared "
        ],
        slug: ["Learn with Amina", "Learn with Zain"]
      },
      {
        title: "Learn to pray salah",
        link: [
          " https://youtu.be/XG35X4fMmoc?feature=shared ",
          "https://youtu.be/_-qGjf2xvPI?feature=shared "
        ],
        slug: ["Learn with Amina", "Learn with Zain"]
      },
      {
        title: "Learn the Arabic alphabet",
        link: "https://youtu.be/mEwMPZVayG4?feature=shared "
      },
      {
        title: "Stories of the Prophets",
        link: "https://youtu.be/lZu173pTldI?feature=shared "
      },
      {
        title: "Got questions about why Muslims pray 5 times per day and more?",
        link: "https://youtu.be/pCJ_FrVqscs?si=VNmaILpDneWT2AzP "
      }
    ];
    const adults = [
      {
        title: "Learn to make wudu with dua",
        link: "https://youtu.be/CO5O3JBjgGI?si=pBRySikiRJ1p4fqX "
      },
      {
        title: "Learn to pray",
        link: "https://youtu.be/zalLv2NY98k?si=RFwKtK-qBLSE2QlS "
      },
      {
        title: "More information on prayers, including ghusl",
        link: "https://prayerinislam.com/e-books-on-prayer/an-introduction-to-prayer-in-islam/ "
      },
      {
        title: "Find Islamic Research and much more about Islam at Yaqeen Institute for Islamic Research",
        link: "https://yaqeeninstitute.ca/ "
      },
      {
        title: "Learn about the companions of Prophet Muhammad (SAW) ",
        link: "https://youtu.be/vJH3-g-h3ak?si=GYymcu-yQCJOMxOP "
      },
      {
        title: "Educational Content from Br. Shazaman Karmoeddien",
        link: "https://youtu.be/9voCVK0EfT8?feature=shared "
      },
      {
        title: "Educational Content from Mufti Menk",
        link: "https://youtu.be/x84QrnjIu8g?si=VGbVCKdcdHpzZ3nX "
      },
      {
        title: "Islamic podcasts, Arabic lessons, Duas, Quran recitation and memorization and FREE courses",
        link: "https://muslimcentral.com/ "
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Calendar = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4">`);
      _push(ssrRenderComponent(_component_Calendar, null, null, _parent));
      _push(`</div><div class="mb-8"><div class="text-2xl md:text-3xl font-semibold text-center pt-8 pb-8 px-8"> Learning Resources For Kids </div><!--[-->`);
      ssrRenderList(kids, (entry) => {
        _push(`<div${ssrRenderAttr("to", entry.link)} class="w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4">`);
        if (Array.isArray(entry.link)) {
          _push(`<div tabindex="0" class="collapse collapse-open border border-base-300 bg-amber-100 rounded-lg pb-2"><div class="p-4 text-sm font-semibold text-center">${ssrInterpolate(entry.title)}</div><div class="collapse-content flex flex-col items-center md:flex-row gap-8 justify-center"><!--[-->`);
          ssrRenderList(entry.link, (link, index) => {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: link,
              target: "_blank"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex gap-2 text-sm font-semibold ring-2 ring-slate-600 pl-2 pr-2 pt-1 pb-1 rounded-sm"${_scopeId}><span${_scopeId}>${ssrInterpolate(entry.slug[index])}</span><img${ssrRenderAttr("src", _imports_7)}${_scopeId}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-2 text-sm font-semibold ring-2 ring-slate-600 pl-2 pr-2 pt-1 pb-1 rounded-sm" }, [
                      createVNode("span", null, toDisplayString(entry.slug[index]), 1),
                      createVNode("img", { src: _imports_7 })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: entry.link,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="btn normal-case w-full h-fit p-4 leading-5 bg-amber-100"${_scopeId}>${ssrInterpolate(entry.title)} <img${ssrRenderAttr("src", _imports_7)}${_scopeId}></button>`);
              } else {
                return [
                  createVNode("button", { class: "btn normal-case w-full h-fit p-4 leading-5 bg-amber-100" }, [
                    createTextVNode(toDisplayString(entry.title) + " ", 1),
                    createVNode("img", { src: _imports_7 })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mb-16"><div class="text-2xl md:text-3xl font-semibold text-center pt-8 pb-8 px-8"> Learning Resources For Adults </div><!--[-->`);
      ssrRenderList(adults, (entry) => {
        _push(`<div${ssrRenderAttr("to", entry.link)} class="w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: entry.link,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="btn normal-case w-full h-fit p-4 leading-5 bg-amber-100"${_scopeId}>${ssrInterpolate(entry.title)} <img${ssrRenderAttr("src", _imports_7)}${_scopeId}></button>`);
            } else {
              return [
                createVNode("button", { class: "btn normal-case w-full h-fit p-4 leading-5 bg-amber-100" }, [
                  createTextVNode(toDisplayString(entry.title) + " ", 1),
                  createVNode("img", { src: _imports_7 })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/education.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=education-0aa73607.mjs.map
