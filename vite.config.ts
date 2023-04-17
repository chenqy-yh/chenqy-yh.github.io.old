import path from 'path'
import { ConfigEnv, UserConfigExport, defineConfig, loadEnv } from 'vite'

// 自动导入
import { setupVitePlugins } from './vite/plugins/index'
// build 配置
import { setupBuildOptions } from './vite/build'
import { ImportMetaEnv } from './src/types/viteEnv'
import { parseEnv } from './vite/plugins'

//动态分配接口地址
import envCompatible from 'vite-plugin-env-compatible'


function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root) as unknown as ImportMetaEnv)

  return {
    plugins: [...setupVitePlugins(command === 'serve')],
    resolve: {
      alias: {
        '@': _resolve('src'),
      },
    },
    build: setupBuildOptions(),
    
  }
}
