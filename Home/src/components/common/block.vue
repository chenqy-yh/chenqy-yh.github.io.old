<template>
  <div
    :ref="getDivRef"
    class="block-content rounded-xl duration-500 min-w-[400px]"
    :style="{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      opacity: isShow ? '1' : '0',
      scale: isShow ? '1' : '0',
    }">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.block-content {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition: all 2s;
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
  }>(),
  {
    color: '#fff',
    width: 'auto',
    height: '10rem',
  },
)

nextTick(() => {
  const el = rootRef.value as any as HTMLElement
  const a = 1
  observerElIntoView(
    el,
    function (a) {
      a = 1
      let b = a
      isShow.value = true
    },
    function () {
      isShow.value = false
    },
  )
  // 监听el进入view
})
</script>
