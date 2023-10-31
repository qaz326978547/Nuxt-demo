// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Nuxt3 高效入門全攻略",
      "meta": [
          { "name": "description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
    { "property": "og:title", "content": "Nuxt3 高效入門全攻略" },
    { "property": "og:image", "content": "https://autos.yahoo.com.tw/p/r/w1200/car-trim/April2019/befce61c873c3f839566218f88c99085.jpeg"},
    { "property": "og:url", "content": "http://localhost:3000/" },
    { "property": "og:description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
      ],
       
    }
  },
 
  devtools: { enabled: true },
  'imports':{
      "dirs":['stores']
  },
  "modules": ['@pinia/nuxt','@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/css/tailwind.css'],
})
