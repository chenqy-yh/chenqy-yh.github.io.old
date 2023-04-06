/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_BASE_URL: string
  readonly VITE_PORT: number
  readonly VITE_IS_DEV: boolean
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
