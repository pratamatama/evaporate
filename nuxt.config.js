export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Evaporate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  // https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    credentials: true,
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        'X-Requested-With': 'XMLHttpRequest',
      },
    },
  },
  proxy: {
    '/auth': {
      target: process.env.API_URL,
      pathRewrite: { '^/auth': '/' },
    },
    '/api': {
      target: `${process.env.API_URL}/api`,
      pathRewrite: { '^/api': '/' },
    },
  },
  auth: {
    strategies: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: '/api/auth/google/callback',
          userInfo: '/api/user',
        },
      },
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: '/auth',
        endpoints: {
          login: { url: '/api/login' },
        },
      },
    },
  },
  router: {
    middleware: ['auth'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
