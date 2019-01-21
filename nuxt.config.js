import path from 'path'
import { colors } from './tailwind'

export default {
  mode: 'universal',

  loading: { color: colors.blue },

  css: [
    'assets/global'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-purgecss', { mode: 'postcss', whitelistPatterns: [/pulse/] }],
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
        tailwindcss: path.join(__dirname, './tailwind.js')
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
