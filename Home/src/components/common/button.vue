<template>
  <button
    :class="componentId"
    class="common-button border-[1px] border-white w-[8rem] h-[3rem] rounded-[1.5rem] hover:bg-[--hoverColor] duration-300 hover:border-[--hoverColor]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { compositeCss } from '@/utils/style'
import { nextTick } from 'process'
import { ref } from 'vue'
let componentId = ref(getComponentId())

function getComponentId() {
  return 'component' + Math.round(Math.random() * 10000000000000)
}
const props = withDefaults(
  defineProps<{
    color?: string
    scale?: number
    hoverColor?: string
  }>(),
  {
    modelValue: 'button',
    color: '#fff',
    scale: 1,
    hoverColor: '#e74c3c',
  },
)
nextTick(() => {
  const classId = componentId

  let commonButtonArr = document.getElementsByClassName(classId.value) as any
  while (commonButtonArr.length > 1) {
    componentId.value = getComponentId()
    commonButtonArr = document.getElementsByClassName(classId.value)
  }
  const commonButton: HTMLElement = commonButtonArr[0]
  commonButton.style.backgroundColor = props.color
  commonButton.style.width = `${props.scale * 8}rem`
  commonButton.style.height = `${props.scale * 3}rem`
  commonButton.style.borderRadius = `${props.scale * 1.5}rem`
  commonButton.style.borderWidth = `${props.scale * 1}px`
  commonButton.style.cssText = compositeCss([
    {
      key: '--hoverColor',
      value: props.hoverColor,
    },
  ])
})
</script>

<style lang="scss">
.common-button:hover {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>
