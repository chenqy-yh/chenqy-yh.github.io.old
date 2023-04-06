import { createPinia } from 'pinia'
import { App } from 'vue'

function setupPinia(app: App) {
  const pinia = createPinia()
  app.use(pinia)
}

export { setupPinia }
