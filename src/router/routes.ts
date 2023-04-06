import { RouteRecordRaw } from 'vue-router'

const env = import.meta.env

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

function formatRoutes(routes: RouteRecordRaw[]) {
  return routes.map((route) => {
    route.path = env.VITE_BASE_URL + route.path
    return route
  })
}

export default formatRoutes(routes)
