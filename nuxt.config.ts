// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Urbanist: true,
    },
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              // Brand Color
              primary: "#007BFF",
            },
          },
        },
      },
    },
  },
});
