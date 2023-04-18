import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/archives',
  name: 'archives',
  component: () => import('@/layouts/home.vue'),
  children: [
    {
      path: '',
      name: 'archives.content',
      component: () => import('@/views/archives/content.vue'),
    },
  ],
} as RouteRecordRaw
