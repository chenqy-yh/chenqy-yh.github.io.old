import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/tags',
  name: 'tags',
  component: () => import('@/layouts/home.vue'),
  children: [
    {
      path: '',
      name: 'tags.content',
      component: () => import('@/views/tags/content.vue'),
    },
  ],
} as RouteRecordRaw
