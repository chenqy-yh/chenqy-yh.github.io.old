import vue from '@vitejs/plugin-vue'
import { PluginOption } from 'vite'
import { setupElementplus } from './elementplus'
import { setupMockPlugin } from './mock'

function setupVitePlugins(isServe: boolean) {
  const plugins: PluginOption[] = []
  plugins.push(vue())
  setupElementplus(plugins)
  setupMockPlugin(plugins, isServe)
  return plugins
}

export { setupVitePlugins }
