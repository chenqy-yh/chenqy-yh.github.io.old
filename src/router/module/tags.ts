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
      children: [
        {
          path: '/tags/:categoryName',
          name: 'tags.detail',
          component: () => import('@/views/tags/tagsDetail.vue'),
          props:true,
        }
      ],
    },
    
  ],
} as RouteRecordRaw
