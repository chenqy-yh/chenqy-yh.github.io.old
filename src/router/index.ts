import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { App } from 'vue'
import { autoload } from '@/router/autoload'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

export function setupRouter(app: App) {
  autoload(router)
  app.use(router)
}
