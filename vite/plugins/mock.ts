import { comment } from 'postcss'
import { PluginOption } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

function setupMockPlugin(plugins: PluginOption[], isServe: boolean) {
  plugins.push(
    viteMockServe({
      mockPath: 'mock',
      localEnabled: isServe,
    }),
  )
}

export { setupMockPlugin }
