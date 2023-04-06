import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/home.vue'),
    children: [
      {
        path: '/article',
        name: 'home.article',
        component: () => import('../views/home/articles.vue'),
      },
    ],
  },
  {
    path: '/test',
    name: 'testPage',
    component: () => import('../layouts/testPage.vue'),
  },
]

export default routes
