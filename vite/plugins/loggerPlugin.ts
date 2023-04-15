export default function loggerPlugin() {
  return {
    name: 'log-plugin',
    apply: 'serve',
    configureServer({ logger }) {},
  }
}
