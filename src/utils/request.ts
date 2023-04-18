import axios from 'axios'
import { isProd } from './common'
console.log(isProd)
const service = axios.create({
  baseURL: isProd ? 'http://120.26.58.94/api' : 'http://localhost:3333/api',
  timeout: 5000,
})

export default service
