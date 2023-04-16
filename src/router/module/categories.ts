import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/category',
  name: 'category',
  component: () => import('@/layouts/home.vue'),
  children: [
    {
      path: '',
      name: 'category.content',
      component: () => import('@/views/categories/content.vue'),
      children: [
        {
          path: '/category/:categoryName',
          name: 'category.disciplineList',
          component: () => import('@/views/categories/disciplineList.vue'),
        },
      ],
    },
  ],
} as RouteRecordRaw
