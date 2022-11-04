import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import DataViz from './components/DataViz.vue';
import Home from './pages/Home.vue';

const app = createApp(App);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/projects/:title',
    component: DataViz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  bridge: true,
  routes,
});

app.use(router);

app.use(StoryblokVue, {
  accessToken: 'czMKQ6F0SWZkkO98FY2e1wtt',
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

app.mount('#app');
