import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f06f6b0c><div class="chat-notification" data-v-f06f6b0c><div class="chat-notification-logo-wrapper" data-v-f06f6b0c></div><div class="chat-notification-content" data-v-f06f6b0c><h4 class="chat-notification-title" data-v-f06f6b0c>ChitChat</h4><p class="chat-notification-message" data-v-f06f6b0c>You have a new message!</p></div></div>`);
  ssrRenderSlot(_ctx.$slots, "test", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "email", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const card = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f06f6b0c"]]);

export { card as default };
//# sourceMappingURL=card-bd920bf4.mjs.map
