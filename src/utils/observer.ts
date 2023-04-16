import { CommonEnum } from '@/enum/commonEnum'
import router from '@/router'
import store from '@/utils/store'

interface ScrollRecord {
  pos: number
  path: string
}

function observerElIntoView(
  el: HTMLElement,
  intoFn: (...intoArgs: unknown[]) => void,
  outFn: (...outArgs: unknown[]) => void,
) {
  const intoArgs = arguments[1]
  const outArgs = arguments[2]
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intoFn.apply(null, intoArgs)
      } else {
        outFn.apply(null, outArgs)
      }
    })
  })
  observer.observe(el)
}

function listenScrollTop() {
  const debounce = () => {
    let timer: null | NodeJS.Timer = null
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        const nowPosition = document.documentElement.scrollTop || document.body.scrollTop
        store.set(CommonEnum.SCROLL_LAST_POS, {
          pos: nowPosition,
          path: router.currentRoute.value.path,
        })
      }, 300)
    }
  }
  const scrollFn = debounce()
  window.addEventListener('scroll', () => {
    scrollFn()
  })
}

async function scrollToStorePosition() {
  const scrollRecord: ScrollRecord = await store.get<ScrollRecord>(CommonEnum.SCROLL_LAST_POS)
  if (scrollRecord && scrollRecord.path === router.currentRoute.value.path) {
    window.scroll({
      top: scrollRecord.pos, // 禁用滚动效果
    })
  } else {
    store.remove(CommonEnum.SCROLL_LAST_POS)
  }
}

export { observerElIntoView, listenScrollTop, scrollToStorePosition }
