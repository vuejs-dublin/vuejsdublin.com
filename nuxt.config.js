import { colors } from './tailwind'

export default {
  mode: 'universal',

  /*
  ** Customize the progress-bar color
  */
  loading: { color: colors.blue },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/global.pcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-purgecss', { mode: 'postcss' }],
    'nuxt-svg-loader'
  ],

  // Meta data

  meta: {
    name: 'VueJS Dublin Meetup',
    author: 'VueJS Dublin Team',
    ogHost: 'https://vuejsdublin.netlify.com/', // TODO: Change after official domain points to the build
    twitterCard: 'summary',
    twitterCreator: '@vuejsdublin',
    twitterSite: '@vuejsdublin'
    // TODO: Add description
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
