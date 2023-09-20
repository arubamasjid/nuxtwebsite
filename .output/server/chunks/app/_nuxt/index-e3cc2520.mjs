import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './calendar-c251e5d9.mjs';
import { ref, watchEffect, useSSRContext, mergeProps } from 'vue';
import { unpackMeta, composableNames } from 'unhead';
import { r as resolveUnrefHeadInput, u as useHead, b as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_7 } from './arrow-right-e0f00725.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import '@unhead/shared';
import 'firebase/app';

function useSeoMeta(input, options) {
  const headInput = ref({});
  watchEffect(() => {
    const resolvedMeta = resolveUnrefHeadInput(input);
    const { title, titleTemplate, ...meta } = resolvedMeta;
    headInput.value = {
      title,
      titleTemplate,
      meta: unpackMeta(meta)
    };
  });
  return useHead(headInput, options);
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

const _imports_0 = "" + publicAssetsURL("images/hero-portrait.jpg");
const _imports_1 = "" + publicAssetsURL("images/hero.jpg");
const _imports_2 = "" + publicAssetsURL("images/dawah.svg");
const _imports_3 = "" + publicAssetsURL("images/history-img.jpeg");
const _imports_4 = "" + publicAssetsURL("images/edu.svg");
const _imports_5 = "" + publicAssetsURL("images/social.svg");
const _imports_6 = "" + publicAssetsURL("images/community-service.svg");
const arabic = "_arabic_139zd_3";
const style0 = {
  arabic
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "Stichting Aruba Islamic Foundation",
      ogTitle: "Stichting Aruba Islamic Foundation",
      description: "This is the website for the Stichting Aruba Islamic Foundation",
      ogDescription: "Welcome to the Stichting Aruba Islamic Foundation.",
      ogImage: "/images/hero.jpg"
    });
    console.log("home rendered");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Calendar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:-mt-[6.5rem]" }, _attrs))}><div class="h-fit xl:h-screen 2xl:h-screen pt-24 pb-24 sm:pt-32 flex flex-col relative justify-center items-center"><picture><source${ssrRenderAttr("srcset", _imports_0)} media="(max-width:640px)" class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] brightness-50"><source${ssrRenderAttr("srcset", _imports_1)} media="(min-width:640px)" alt="hero" class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] brightness-50 contrast-150"><img${ssrRenderAttr("src", _imports_2)} alt="hero" class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] object-cover brightness-50 contrast-100"></picture><div class="flex flex-col"><div class="${ssrRenderClass([_ctx.$style.arabic, "flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-3xl xs:text-4xl text-center justify-center text-white"])}"> \u0631\u064E\u0628\u0651\u064E\u0646\u064E\u0627 \u0644\u064E\u0627 \u062A\u064F\u0632\u0650\u063A\u06E1 \u0642\u064F\u0644\u064F\u0648\u0628\u064E\u0646\u064E\u0627 \u0628\u064E\u0639\u06E1\u062F\u064E \u0625\u0650\u0630\u06E1 \u0647\u064E\u062F\u064E\u064A\u06E1\u062A\u064E\u0646\u064E\u0627 \u0648\u064E\u0647\u064E\u0628\u06E1 \u0644\u064E\u0646\u064E\u0627 \u0645\u0650\u0646 \u0644\u0651\u064E\u062F\u064F\u0646\u0643\u064E \u0631\u064E\u062D\u06E1\u0645\u064E\u0629\u064B\u06DA \u0625\u0650\u0646\u0651\u064E\u0643\u064E \u0623\u064E\u0646\u062A\u064E \u0671\u0644\u06E1\u0648\u064E\u0647\u0651\u064E\u0627\u0628\u064F </div><div class="flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-xl xs:text-2xl text-center font-semibold italic text-white"> &quot; They say, Our Lord! Do not let our hearts deviate after you have guided us. Grant us Your mercy. You are indeed the Giver of all bounties. S3, V8.&quot; </div><div class="flex w-[100%] pt-8 pb-8 pl-4 pr-2 text-3xl sm:text-4xl mmd:text-5xl font-bold text-primary md:break-all justify-center text-center"> Stichting Aruba Islamic Foundation </div></div></div><div class="hero h-fit pb-[10vh] p-8 flex flex-col bg-primary"><div class="text-3xl font-bold m-6">Our History</div><div class="hero-content flex-col lg:flex-row"><img${ssrRenderAttr("src", _imports_3)} class="max-w-[75vw] xs:max-w-xs md:max-w-md rounded-lg shadow-2xl lg:mr-8"><p class="p-4 text-lg font-semibold leading-10"> The population of Muslims has been increasing with each year in Aruba, so we formed the Aruba Islamic Foundation. The Foundation works towards forming a peaceful and prosperous society for muslims and the Aruban people alike. </p></div></div><div class="h-fit p-8 pb-20 bg-base-200"><div class="text-3xl font-bold text-center m-6">Our Services</div><div class="flex flex-col w-[50%] mb-8 gap-4 mx-auto md:flex-row md:flex-wrap md:w-[100%] md:justify-center"><div class="card bg-primary mt-8 md:mr-4 md:ml-4 w-[75vw] sm:max-w-sm max-h-[400px] self-center"><img${ssrRenderAttr("src", _imports_4)} loading="lazy"><div class="card-body"><div class="card-title justify-center">Educational Activities</div><p class="text-center">Educational activities</p></div></div><div class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center"><img${ssrRenderAttr("src", _imports_5)} loading="lazy"><div class="card-body"><div class="card-title justify-center">Social Activities</div><p class="text-center">Social Activities</p></div></div><div class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center"><img${ssrRenderAttr("src", _imports_2)} loading="lazy"><div class="card-body"><div class="card-title justify-center"> Progressive da&#39;wah and culture </div><p class="text-center">Progressive da&#39;wah and culture</p></div></div><div class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center"><img${ssrRenderAttr("src", _imports_6)} loading="lazy"><div class="card-body"><div class="card-title justify-center">Help to those in need</div><p class="text-center">Community service to those in need</p></div></div></div></div><div class="h-fit p-8 pb-20"><div class="text-3xl font-bold text-center m-6 pb-12">Explore Islam</div><div class="flex flex-col lg:flex-row justify-center lg:mx-auto lg:p-8">`);
      _push(ssrRenderComponent(_component_Calendar, { class: "mb-8 lg:mb-0 mx-auto lg:mx-0 w-[100%] xs:w-[400px] shrink-0" }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row lg:flex-col lg:ml-8 md:gap-8"><div class="card lg:card-compact lg:card-side lg:h-[50%] max-w-xs lg:max-w-none lg:w-[100%] mb-8 md:mb-0 mx-auto md:ml-auto md:mx-0 shadow-md"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" class="xs:max-w-xs shadow-md rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"><div class="card-body text-sm"><p class="card-title text-sm"> Learn to pray, research Islam and more </p><p>Content for both kids and adults</p><div class="card-actions justify-end pt-2"><button class="btn btn-sm btn-primary text-xs"> Read <img${ssrRenderAttr("src", _imports_7)}></button></div></div></div><div class="card lg:card-compact lg:card-side lg:h-[50%] max-w-xs lg:max-w-none lg:w-[100%] mx-auto shadow-md md:mr-auto md:mx-0"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" class="xs:max-w-xs shadow-md rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"><div class="card-body text-sm"><p class="card-title text-sm"> Ongoing, upcoming and past Masjid events </p><p> Keep updated with activities <br> happening in the Masjid </p><div class="card-actions justify-end pt-2"><button class="btn btn-sm btn-primary text-xs"> Browse <img${ssrRenderAttr("src", _imports_7)}></button></div></div></div></div></div></div></div>`);
    };
  }
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);

export { index as default };
//# sourceMappingURL=index-e3cc2520.mjs.map
