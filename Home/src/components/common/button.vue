<template>
  <button
    :ref="getDivRef"
    :style="{
      backgroundColor: props.color,
      width: `${props.scale * 8}rem`,
      height: `${props.scale * 3}rem`,
      borderRadius: `${props.scale * 1.5}rem`,
      borderWidth: `${props.scale * 1}px`,
    }"
    class="common-button border-[1px] border-white w-[8rem] h-[3rem] rounded-[1.5rem] hover:bg-[--hoverColor] duration-200 hover:border-[--hoverColor]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { compositeCss } from '@/utils/style'

let rootRef = ref(null)

const getDivRef = (el: any) => {
  rootRef.value = el
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
  const commonButton: HTMLElement = rootRef.value as any
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
