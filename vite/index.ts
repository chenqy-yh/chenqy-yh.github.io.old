import { ConfigEnv, UserConfigExport } from 'vite'

import { setupVitePlugins } from './plugins/index'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: setupVitePlugins(command === 'serve'),
  }
}
