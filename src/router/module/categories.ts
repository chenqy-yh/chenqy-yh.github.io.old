import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/categories',
  name: 'categories',
  component: () => import('@/layouts/categories.vue'),
} as RouteRecordRaw
