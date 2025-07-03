// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/i18n"],

  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'am', name: 'Amharic', file: 'am.json' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
  },

  compatibilityDate: "2024-04-03",
  // Other configurations
  devServer: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 3000, // Specify the port (default: 3000)
  },
  image: {
    provider: "ipx", // Default provider for local assets
  },
  app: {
    head: {
      title: "Etcare SACCOs Ltd",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon-logo.png' },
      ],
    },
  },
});