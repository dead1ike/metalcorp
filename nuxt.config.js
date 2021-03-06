// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  resourceHints: false,

  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '«МЕТАЛЛКОРП»',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.8, maximum-scale=0.8, minimum-scale=0.8' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' },
    { src: '~/plugins/DateTime' },
    { src: '~/plugins/Duration' },
    { src: '~/plugins/Interval' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    ['nuxt-storm', { nested: true, alias: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // prefix: '/api/',
    credentials: true,
    proxy: false,
    baseURL: process.env.API_URL || 'https://local-api/',
  },

  router: {
    trailingSlash: false,
  },

  auth: {
    redirect: {
      login: '/manager/login',
      logout: '/',
      callback: '/manager/login',
      home: '/manage/manage',
    },
    watchLoggedIn: false,
    token: {
      prefix: '_token.',
    },
    localStorage: {
      prefix: 'auth.',
    },
    cookie: false,
    vuex: {
      namespace: 'auth',
    },
    scopeKey: 'data',

    strategies: {
      local: {
        token: {
          property: false,
          required: true,
          type: 'Bearer',
        },
        user: {
          autoFetch: false,
          property: false,
        },
        clientId: process.env.PASSPORT_CLIENT_GRANT_ID,
        clientSecret: process.env.PASSPORT_CLIENT_GRANT_SECRET,
        grantType: 'password',
        endpoints: {
          login: {
            baseURL: process.env.API_URL,
            url: '/oauth/token',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: {
            baseURL: process.env.API_URL,
            url: '/api/auth/logout',
            method: 'post',
          },
          user: {
            baseURL: process.env.API_URL,
            url: '/api/auth/user',
            method: 'get',
            propertyName: 'user',
          },
        },
      },
    },
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
    // components: ['BIcon', 'BIconAlertFill', 'BIconCalendar', 'BIconGears'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: '«МЕТАЛЛКОРП»',
      short_name: '«МЕТАЛЛКОРП»',
      description: '«МЕТАЛЛКОРП»',
      lang: 'ru',
      background_color: '#5472f9',
      theme_color: '#5472f9',
      // start_url: '/',
    },
  },

  server: {
    host: '0.0.0.0',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
  },
}
