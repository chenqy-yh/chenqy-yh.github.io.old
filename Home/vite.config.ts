import path from 'path'
import { ConfigEnv, UserConfigExport, defineConfig } from 'vite'

// 自动导入
import { setupVitePlugins } from './vite/plugins/index'
// build 配置
import { setupBuildOptions } from './vite/build'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: setupVitePlugins(command === 'serve'),
    resolve: {
      alias: {
        '@': _resolve('src'),
      },
    },
    build: setupBuildOptions(),
  }
}
