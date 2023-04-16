import { RouteLocationNormalized } from 'vue-router'
import { isHome } from '@/utils/common'

export function checkIsHome(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  isHome.value = to.name?.toString().split('.').includes('home') || false
}
