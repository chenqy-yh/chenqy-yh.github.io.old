import axios from 'axios'
import { isProd } from './common'
const service = axios.create({
  baseURL: !isProd?'http://47.99.54.217:3333/api':'http://localhost:3333/api',
  timeout: 5000,
})

export default service
