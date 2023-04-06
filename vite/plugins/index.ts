import vue from '@vitejs/plugin-vue'
import { PluginOption } from 'vite'
import { setupElementplus } from './elementplus'
import { setupMockPlugin } from './mock'
import { ImportMetaEnv } from '../../src/types/viteEnv'
import _ from 'lodash'

function setupVitePlugins(isServe: boolean) {
  const plugins: PluginOption[] = []
  plugins.push(vue())
  setupElementplus(plugins)
  setupMockPlugin(plugins, isServe)
  return plugins
}

function parseEnv(env: ImportMetaEnv): ImportMetaEnv {
  const envs = _.cloneDeep(env)

  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true' ? true : false
    } else if (value == 'null') {
      envs[key] = null
    } else if (value == 'undefined') {
      envs[key] = undefined
    } else if (/^\d+$/.test(value)) {
      envs[key] = Number(value)
    }
  })
  return envs
}

export { setupVitePlugins, parseEnv }
