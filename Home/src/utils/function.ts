let throttleTimer: NodeJS.Timer | null = null

// 节流
const throttle = (fn: (el: HTMLElement) => void, delay: number): Function => {
  return (el: HTMLElement) => {
    if (throttleTimer) return
    fn(el)
    throttleTimer = setTimeout(() => {
      throttleTimer = null
    }, delay)
  }
}

export { throttle }
