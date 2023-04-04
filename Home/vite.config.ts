import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementUiResolver()],
      imports: ['vue', 'vue-router'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      resolvers: [ElementUiResolver()],
      extensions: ['vue'],
      dts: 'types/components.d.ts',
      deep: true,
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
})
