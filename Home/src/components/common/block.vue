<template>
  <div
    class="block-content rounded-xl"
    :style="{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
    }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
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
// const props = withDefaults(
//   defineProps({
//     color: String,
//     width: String,
//     height: String,
//   }),
//
// )
</script>

<style lang="scss">
.block-content {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
</style>
