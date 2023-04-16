import router from '@/router'
import { RouteRecordRaw } from 'vue-router'
import { colorList } from './common'

export function getRandomColor() {
  const index = Math.floor(Math.random() * colorList.length)
  return colorList[index]
}

export function getRandomLightColor() {
  var letters = '0123456789ABCDEF'
  var hexColor = '#'
  // Generate a random extra light color with high saturation and very low brightness
  for (var i = 0; i < 3; i++) {
    var channelValue = Math.floor(192 + Math.random() * 64).toString(16)
    if (channelValue.length < 2) {
      channelValue = '0' + channelValue
    }
    hexColor += channelValue
  }
  return hexColor
}

function ToLink(link: string, isWebLink: boolean, route?: RouteRecordRaw, selector?: string) {
  if (isWebLink) {
    location.href = link
  } else {
    router.push(route!).then(() => {
      if (selector != undefined) {
        AnchorJump(selector!)
      }
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

function hexToCSSColor(hex: number) {
  // 将16进制数字转换为字符串，并剪切掉前两个字符 "0x"
  let hexStr = hex.toString(16).substring(2)

  // 如果字符串长度不足6位，则在其前面填充0
  while (hexStr.length < 6) {
    hexStr = '0' + hexStr
  }

  // 添加 # 前缀并返回结果
  return '#' + hexStr
}

export { ToLink, AnchorJump, hexToCSSColor }
