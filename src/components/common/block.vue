<template>
  <div
    :ref="getDivRef"
    class="block-content rounded-xl duration-500"
    :style="{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      opacity: props.animate ? (isShow ? '1' : '0') : '1',
      scale: props.animate ? (isShow ? '1' : '0.7') : '1',
    }">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.block-content {
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -5px;
  transition: all 0.5s;
}
</style>

<script setup lang="ts">
import { observerElIntoView } from '@/utils/observer'

const rootRef = ref(null)

const getDivRef = (el: any) => {
  rootRef.value = el
}
const isShow = ref(false)

const props = withDefaults(
  defineProps<{
    color?: string
    width?: string
    height?: string
    animate?: boolean
  }>(),
  {
    color: 'transparent',
    width: 'auto',
    height: 'auto',
    animate: true,
  },
)

nextTick(() => {
  const el = rootRef.value as any as HTMLElement
  observerElIntoView(
    el,
    function () {
      isShow.value = true
    },
    function () {
      isShow.value = false
    },
  )
  // 监听el进入view
})
</script>
