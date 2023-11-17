// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
      Poppins: [400, 500, 600, 800, 900],
      Montserrat: [400, 500],
    },
  },
});
