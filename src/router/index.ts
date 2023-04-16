import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { App } from 'vue'
import { autoload } from '@/router/autoload'
import { checkIsHome } from './validate/isHome'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  checkIsHome(to, from)
})

export default router

export function setupRouter(app: App) {
  autoload(router)
  app.use(router)
}
