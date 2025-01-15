// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL,
    }
  },

  app: {
    htmlAttrs: {
        lang: 'no',
    },
    name: 'Aka24',
  },

  siteConf: {
    name: 'Aka24',
    description: 'Akademiet største og mest populære næringslivavis',
    url: 'https://aka24.no',
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
  }
})
