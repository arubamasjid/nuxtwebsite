/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      a: ["IBM Plex Sans Arabic", "sans-serif"],
      s: ["Lora", "serif"],
      p: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "480px",
        mmd: "896px",
        mlg: "1152px",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fbbf24",
          secondary: "#0ea5e9",
          accent: "#14b8a6",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#8b5cf6",
          success: "#22c55e",
          warning: "#fb923c",
          error: "#ef4444",
        },
      },
    ],
  },
};
