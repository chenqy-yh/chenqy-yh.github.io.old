import { PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function setupElementplus(plugins: PluginOption[]) {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      resolvers: [ElementPlusResolver()],
      dts: 'types/components.d.ts',
      deep: true,
      directoryAsNamespace: true,
    }),
  )
}
