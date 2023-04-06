<template>
  <div :ref="getRef" name="scaleOpacity">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { observerElIntoView } from '@/utils/observer'

const isShow = ref(false)
const rootRef = ref(null)

async function getRef(el: any) {
  rootRef.value = await el!
}

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

<style lang="scss">
.scaleOpacity-enter-active,
.scaleOpacity-leave-active {
  transition: all 1s;
}
.scaleOpacity-enter-from,
.scaleOpacity-leave-to {
  transform: scale(0.3);
  opacity: 0;
}
</style>
