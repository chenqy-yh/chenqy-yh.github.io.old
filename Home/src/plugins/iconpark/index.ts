import { install } from '@icon-park/vue-next/es/all'
import { App } from 'vue'

export function setupIconpark(app: App) {
  install(app, 'i')
}
