import { App } from 'vue'
import { setupTaiwindcss } from './tailwindcss/index'
import { setupIconpark } from './iconpark'
import { setupPinia } from './pinia'

export function setupPlugins(app: App) {
  setupPinia(app)
  setupTaiwindcss()
  setupIconpark(app)
}
