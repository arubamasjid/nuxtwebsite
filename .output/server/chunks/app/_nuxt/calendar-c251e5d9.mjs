import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, defineComponent, createElementBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';

const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0 = "" + publicAssetsURL("icons/calendar-backarrow.svg");
const _imports_1 = "" + publicAssetsURL("icons/calendar-forwardarrow.svg");
const _sfc_main = {
  __name: "calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const coordinates = new Coordinates(12.510052, -70.009354);
    const params = CalculationMethod.MoonsightingCommittee();
    const date = ref(/* @__PURE__ */ new Date());
    const prayerTimes = ref(new PrayerTimes(coordinates, date.value, params));
    ref(0);
    console.log(prayerTimes);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card border-2 border-primary p-6 shadow-xl" }, _attrs))}><div class="text-center text-xl font-semibold mb-6"> Daily Salat Timings </div><div class="card-actions mx-auto"><div class="join join-vertical sm:join-horizontal"><button class="btn join-item bg-primary mb-2 sm:mr-2 sm:mb-2"><img${ssrRenderAttr("src", _imports_0)} class="w-6 sm:w-8"><span class="text-xs sm:text-md"> Previous Day</span></button><button class="btn join-item bg-primary mt-2 sm:ml-2 sm:mt-0"><span class="text-xs sm:text-md"> Following Day</span><img${ssrRenderAttr("src", _imports_1)} class="w-6 sm:w-8"></button></div></div><div class="card-body p-4">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="loading loading-spinner text-primary mx-auto my-auto pt-64 w-12"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "loading loading-spinner text-primary mx-auto my-auto pt-64 w-12" })
            ];
          }
        })
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=calendar-c251e5d9.mjs.map
