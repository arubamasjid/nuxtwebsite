import l from"./ContentRendererMarkdown.c5dfefde.js";import m from"./ContentRenderer.462ba4a2.js";import{u,q as d}from"./query.a61c6288.js";import{f as i,g as f,c as h,b as s,w as _,h as r,o as w,p as g,e as x,a as v}from"./entry.bcb616db.js";import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.a6ef77ff.js";import"./preview.4f768dc6.js";import"./utils.e3c4a72d.js";const C=e=>(g("data-v-ef3b5f34"),e=e(),x(),e),b=C(()=>v("p",null,"Something went wrong getting this article",-1)),I={__name:"[...slug]",async setup(e){let t,a;const o=i().fullPath;console.log(o);const{data:n}=([t,a]=f(()=>u(`content-${o}`,()=>d().where({_path:o}).findOne())),t=await t,a(),t);return console.log(n,"test"),(R,S)=>{const c=l,p=m;return w(),h("main",null,[s(p,{value:r(n)},{empty:_(()=>[b]),default:_(()=>[s(c,{value:r(n),class:"prose p-12 mt-12 mb-16 masjid max-w-none md:w-[60%] mx-auto shadow-xl"},null,8,["value"])]),_:1},8,["value"])])}}},E=y(I,[["__scopeId","data-v-ef3b5f34"]]);export{E as default};
