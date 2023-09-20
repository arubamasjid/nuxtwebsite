import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const container = "_container_y9oo9_3";
const form = "_form_y9oo9_19";
const style0 = {
  container,
  form
};
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    let password, email;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.container
      }, _attrs))}><form><div class="${ssrRenderClass(_ctx.$style.form)}"><div class="text-2xl font-bold">Login your account</div><div><label for="email" class="text-sm mb-1">Email</label><input type="email" name="email"${ssrRenderAttr("value", unref(email))} class="input input-bordered input-sm input-accent rounded-sm shadow-md"></div><div><label for="password" class="text-sm mb-1">Password</label><input type="password" name="password"${ssrRenderAttr("value", unref(password))} class="input input-bordered input-sm input-accent rounded-sm shadow-md"></div><div><button class="btn btn-accent rounded-sm shadow-md"> Login </button></div><div><a class="text-xs text-accent"> Forgot your password? </a></div><div><button class="btn btn-secondary rounded-sm shadow-md"> Login with Google </button></div></div></form></div>`);
    };
  }
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);

export { login as default };
//# sourceMappingURL=login-9349f8d6.mjs.map
