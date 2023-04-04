interface KV {
  key: string
  value: string
}

function formatCssText(cssText: string) {
  const commonButton: HTMLElement = document.querySelector('.common-button')!
  console.log(commonButton.style.cssText)
  const cssList = commonButton.style.cssText.split(';')
  cssList.pop()
  const cssArr = cssList.map((item) => {
    const [key, value] = item.split(':')
    return { key, value } as KV
  })
  return cssArr as KV[]
}

function compositeCss(cssArr: KV[]) {
  const cssList = cssArr.map((item) => {
    return `${item.key}:${item.value};`
  })
  return cssList.join('')
}

export { formatCssText, compositeCss }
