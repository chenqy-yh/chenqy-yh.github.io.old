<template>
  <div>
    <TransitionGroup name="scaleOpacity">
      <div v-show="show" class="bg-red-500 w-[100px] h-[100px]" key="1"></div>
    </TransitionGroup>
    <button @click="show = !show" class="border border-black fixed top-[200px]">change</button>
  </div>
</template>

<script setup lang="ts">
const show = ref(true)
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
