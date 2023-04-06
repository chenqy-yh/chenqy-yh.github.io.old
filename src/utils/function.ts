import router from '@/router'
import { RouteRecordRaw } from 'vue-router'

function ToLink(link: string, isWebLink: boolean, route?: RouteRecordRaw, selector?: string) {
  if (isWebLink) {
    location.href = link
  } else {
    router.push(route!).then(() => {
      AnchorJump(selector!)
    })
  }
  return true
}

function AnchorJump(selector: string) {
  const el = document.querySelector(selector)!
  el.scrollIntoView({
    behavior: 'smooth',
  })
}

export { ToLink, AnchorJump }
