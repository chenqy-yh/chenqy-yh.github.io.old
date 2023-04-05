import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/home.vue'),
  },
  {
    path: '/test',
    name: 'testPage',
    component: () => import('../layouts/testPage.vue'),
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../layouts/articles.vue'),
  },
]

export default routes
