import { colors } from './tailwind'

export default {
  mode: 'universal',

  head: {
    title: 'VueJS Dublin',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: colors['orange-light'] },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/global.pcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-purgecss'
  ],

  purgeCSS: {
    mode: 'postcss'
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.js'
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
