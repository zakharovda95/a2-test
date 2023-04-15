export default {
  head: {
    title: 'a2test',

    htmlAttrs: {
      lang: 'ru',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    BACK_API: process.env.BACK_API,
    X_API_KEY: process.env.X_APY_KEY,
  },

  publicRuntimeConfig: {
    BACK_API: process.env.BACK_API,
    X_API_KEY: process.env.X_APY_KEY,
  },
  css: [],

  plugins: [
    { src: '~/plugins/tooltip.js', ssr: false },
    { src: '~/plugins/select.js' },
    { src: '~/plugins/requester.js' },
  ],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', 'nuxt-user-agent'],

  axios: {
    baseURL: '/',
  },

  build: {},
};
