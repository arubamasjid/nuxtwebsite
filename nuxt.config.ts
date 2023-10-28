// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "nuxt-security",
  ],
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  routeRules: {
    "/": { prerender: true },
  },
  security: {
    headers: {
      xXSSProtection: "1",
      contentSecurityPolicy: false,
    },
  },
});
