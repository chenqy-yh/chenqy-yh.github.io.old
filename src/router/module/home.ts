import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/',
  name: 'home',
  component: () => import('@/layouts/home.vue'),
  children: [
    {
      path: '',
      name: 'home.content',
      component: () => import('@/views/home/content.vue'),
    },
  ],
} as RouteRecordRaw
