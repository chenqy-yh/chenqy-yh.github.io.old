import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { BuildOptions } from 'vite'

export function setupBuildOptions() {
  return {
    afterBuild: async (buildResult) => {
      const outputPath = buildResult.outputDir
      const filePath = resolve('D:/test/outputPath.txt')
      writeFileSync(filePath, outputPath)
    },
  } as BuildOptions
}
