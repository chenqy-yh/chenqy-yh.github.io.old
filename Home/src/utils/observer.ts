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

export { observerElIntoView }
