import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import App from './App.vue'

const app = createApp(App)

app.use(StoryblokVue, {
  accessToken: 'INSERT TOKEN HERE',
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
})

app.mount('#app')
