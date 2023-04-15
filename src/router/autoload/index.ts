import { RouteRecordRaw } from 'vue-router'
import { loadModuleRoutes } from '@/router/module'
import { Router } from 'vue-router'

let routes: RouteRecordRaw[] = loadModuleRoutes()

export function autoload(router: Router) {
  routes.forEach((route) => {
    router.addRoute(route)
  })
}
