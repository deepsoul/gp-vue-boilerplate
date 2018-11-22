// process.env.DEBUG = 'webpack-virtual-modules';

const path = require('path');
require('dotenv').config();

module.exports = {
  dev: process.env.NODE_ENV === 'development',
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  env: {
    URL: 'http: //172.20.20.54/',
    BASE_URL: 'http://172.20.20.54/',
    EMPLOYEES_API_URL: 'http://172.20.20.54/api/collections/get/Employees?token=account-e8c4868fb7661ecb2c548fa9034b36',
    PROJECTS_API_URL: 'http://172.20.20.54/api/collections/get/Projects?token=account-e8c4868fb7661ecb2c548fa9034b36',
    API_TOKEN: 'account-e8c4868fb7661ecb2c548fa9034b36'
  },
  build: {
    analyze: false,
    // analyze: {
    //   analyzerMode: 'static',
    //   reportFilename: path.resolve('reports/webpack-bundle-analyzer.html'),
    //   openAnalyzer: false
    // },
    parallel: true,
    transpile: []
  },
  render: {
    http2: {
      push: true
    }
  },

  router: {
    base: '/'
  },

  plugins: [{
      src: '@/plugins/intersectionObserver'
    },
    {
      src: '@/plugins/baseComponents'
    },
    {
      src: '@/plugins/vuetify'
    }
  ],

  vendor: ['default-passive-events'],

  modules: [
    '@/modules/fix/postcss',
    '@/modules/fix/image',
    '@/modules/virtual',
    '@/modules/svg',
    '@/modules/webp',
    '@/modules/image',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
    [
      'nuxt-i18n',
      {
        locales: [{
            code: 'en',
            iso: 'en-US'
          },
          {
            code: 'de',
            iso: 'de-DE'
          }
        ],
        defaultLocale: 'de',
        strategy: 'prefix_except_default',
        seo: true,
        vueI18n: {
          fallbackLocale: 'de',
          messages: {
            en: require(path.resolve('src/globals/locales/en.json')),
            de: require(path.resolve('src/globals/locales/de.json'))
          }
        },
        vueI18nLoader: true
      }
    ],
    [
      '@nuxtjs/pwa',
      {
        dev: process.env.NODE_ENV === 'development',
        icon: {
          iconSrc: 'src/static/favicon.png',
          sizes: [16, 120, 144, 152, 192, 384, 512]
        },
        meta: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          mobileApp: true,
          mobileAppIOS: true,
          appleStatusBarStyle: 'default',
          favicon: true,
          name: 'TITLE',
          author: '',
          description: '',
          theme_color: 'black',
          lang: 'de',
          ogType: 'website',
          ogSiteName: 'ogSITE_NAME',
          ogTitle: 'ogTITLE',
          ogDescription: 'ogDESCRIPTION',
          ogHost: undefined,
          ogImage: true
        },
        manifest: {
          name: 'Sample MANIFEST',
          short_name: 'Sample',
          lang: 'de'
        }
      }
    ],

  ],

  vuetify: {
    // Vuetify options
    css: true,
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },

  head: {
    meta: [],
    link: [{
      href: 'https://fonts.googleapis.com/css?family=Roboto',
      rel: 'stylesheet'
    }, {
      href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',
      rel: 'stylesheet'
    }],
    script: [{
        src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=HTMLPictureElement',
        defer: true
      },

      {
        innerHTML: 'document.createElement( "picture" );document.createElement( "source" );'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
};
