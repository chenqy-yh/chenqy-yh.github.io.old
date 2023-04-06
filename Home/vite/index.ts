import { ConfigEnv, UserConfigExport } from 'vite'

import { setupVitePlugins } from './plugins/index'

export default ({ command }: ConfigEnv): UserConfigExport => {
  console.log(command)
  return {
    plugins: setupVitePlugins(command === 'serve'),
  }
}
