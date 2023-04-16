import { RouteRecordRaw } from 'vue-router'
import { loadModuleRoutes } from '@/router/module'

const env = import.meta.env

const routes: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'testPage',
    component: () => import('@/layouts/testPage.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import('@/views/errors/404.vue'),
  },
]

function formatRoutes(routes: RouteRecordRaw[]) {
  loadModuleRoutes()
  return routes.map((route) => {
    route.path = route.path
    return route
  })
}

export default formatRoutes(routes)
