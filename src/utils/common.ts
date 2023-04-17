export { isHome, colorList,isProd }

//判断是否是生产环境
const isProd = import.meta.env.NODE_ENV === 'production'

const isHome = ref(true)
const colorList = ['#ff4c06', '#ff0606', '#ff0672', '#ff0909']
