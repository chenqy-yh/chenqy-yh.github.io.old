import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/about',
  name: 'about',
  component: () => import('@/layouts/home.vue'),
  children: [
    {
      path: '',
      name: 'about.content',
      component: () => import('@/views/about/content.vue'),
    },
  ],
} as RouteRecordRaw
