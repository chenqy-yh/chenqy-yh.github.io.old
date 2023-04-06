import { App } from 'vue'
import { setupTaiwindcss } from './tailwindcss/index'
import { setupIconpark } from './iconpark'

export function setupPlugins(app: App) {
  setupTaiwindcss()
  setupIconpark(app)
}
