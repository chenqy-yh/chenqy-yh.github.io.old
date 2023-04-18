<template>
  <div
    class="small-block common-shadow duration-200 py-1 px-4 group cursor-pointer"
    :class="{
      active: props.active,
    }"
    :style="{
      backgroundColor: getRandomLightColor(),
    }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { getRandomLightColor } from '@/utils/function'

const props = withDefaults(
  defineProps<{
    active: boolean
  }>(),
  {
    active: false,
  },
)
</script>

<style lang="scss">
.small-block {
  &:hover {
    background: linear-gradient(to right, #00bc10, #0c8a00);
  }
  &.active {
    background: linear-gradient(135deg, #ff5c3d, #ff2d65);
  }
}
</style>
