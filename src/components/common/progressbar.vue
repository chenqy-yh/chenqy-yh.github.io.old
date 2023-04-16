<template>
  <div class="progressbar fixed bottom-0 left-0 h-[7px] bg-[#1abc9c] z-[9999999]"></div>
</template>

<script setup lang="ts">
const dis = ref(0)
const maxH = ref(0)
const initColor = 0x1abc9c
const finialColor = 0xf1c40f
const colorDiff = 50

nextTick(() => {
  maxH.value = document.body.scrollHeight - window.innerHeight
  const progressbar = document.querySelector('.progressbar') as HTMLElement
  window.addEventListener('scroll', () => {
    dis.value = document.documentElement.scrollTop || document.body.scrollTop
    progressbar.style.width = (dis.value / maxH.value) * 100 + '%'
    //TODO 优化颜色渐变
  })
})
</script>

<style lang="scss"></style>
