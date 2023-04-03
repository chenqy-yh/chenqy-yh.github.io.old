<template>
  <div class="home-content relative">
    <!-- 菜单 -->
    <index-menu class="z-[100] fixed top-0 left-0"></index-menu>
    <!-- 顶部图片部分 -->
    <div class="top-content z-0">
      <img :src="indexBgUrl" class="h-screen w-full object-cover absolute top-0 left-0 z-[-1]" />
      <div class="index-bg-div absolute top-0 left-0 z-3 w-screen h-screen"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CommonEnum } from '@/enum/commonEnum'
const indexBgUrl = CommonEnum.INDEX_BG_URL
const colorList = ['#ffea00', '#ff9d00', '#ff4c06', '#ff0606', '#ff0672', '#ea06ff']

function pageInit() {
  changeBgColor()
}
pageInit()

function getRandomColor() {
  const index = Math.floor(Math.random() * colorList.length)
  return colorList[index]
}

function changeBgColor() {
  setInterval(() => {
    const imgBgDiv: HTMLDivElement = document.querySelector('.index-bg-div')!
    imgBgDiv.style.backgroundColor = `${getRandomColor()}`
  }, Math.random() * 10000 + 10000)
}
</script>

<style lang="scss">
.home-content {
  .index-bg-div {
    @apply bg-[#ff0606] opacity-50;
  }
}
</style>
