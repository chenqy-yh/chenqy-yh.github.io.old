<template>
  <div class="home-content min-h-screen bg-gray-200 flex flex-col pb-[5rem]">
    <!-- 菜单 -->
    <!-- top menu -->
    <index-top-menu class="z-[100] fixed top-0 left-0"></index-top-menu>
    <!-- left menu -->
    <index-left-menu class="z-[110] fixed top-0 left-0"></index-left-menu>
    <!-- 顶部图片部分 -->
    <div
      :class="{
        'h-[24.5rem]': !isHome,
        'h-screen': isHome,
      }"
      class="top-bg-content z-0 flex justify-center items-center select-none">
      <div class="dimback absolute w-full top-0 left-0 z-[-1]">
        <img
          :src="indexBgUrl"
          :class="{
            'h-[28.5rem]': !isHome,
            'h-screen': isHome,
          }"
          class="dim w-full object-cover z-10" />
      </div>
      <div class="top-main-content z-[5]">
        <!-- home title -->
        <div class="container flex flex-col items-center h-[14rem] relative">
          <div class="text-white text-[3.6rem]">尽在不言中</div>
          <!-- typejs -->
          <div class="flex flex-col lg:flex-row justify-center gap-3 text-gray-100 mt-2">
            <div class="left-info"></div>
            <div class="right-info">相寻梦里路，飞雨落花中。</div>
          </div>

          <!-- button group -->
          <div
            v-if="isHome"
            class="flex items-center justify-center gap-[2rem] mt-[5rem] absolute top-1/2 z-[10000]">
            <CommonButton @click="AnchorJump('.articles')">
              <i class="iconfont icon-xiashuangjiantou text-white"></i>
              <span class="text-[1rem] ml-[.2rem] text-white">START </span>
            </CommonButton>
            <CommonButton @click="ToLink('https://github.com/chenqy-yh', true)">
              <i class="iconfont icon-githubalt text-white"></i>
              <span class="text-[1rem] ml-[.2rem] text-white">GITHUB </span>
            </CommonButton>
          </div>
          <!-- links -->
          <div
            v-if="isHome"
            class="flex items-center gap-[2.5rem] justify-center mt-[6rem] absolute top-full">
            <LinkGroup></LinkGroup>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <RouterView></RouterView>
    <!-- footer -->
    <div class="index-footer">
      <Progressbar></Progressbar>
    </div>
  </div>
</template>

<style lang="scss">
.el-popover {
  padding: 0 !important;
  border-radius: 0px !important;
  width: auto !important;
}

.home-content {
  .top-bg-content {
    .dimback {
      .dim {
        opacity: 0.5;
        filter: alpha(opacity=60);
      }
    }
  }
}
</style>

<script setup lang="ts">
import Progressbar from '@/components/common/progressbar.vue'
import { CommonEnum } from '@/enum/commonEnum'
import { isHome } from '@/utils/common'
import { AnchorJump, ToLink, getRandomColor } from '@/utils/function'
import Typed from 'typed.js'
import { nextTick } from 'vue'

const indexBgUrl = CommonEnum.INDEX_BG_URL

//listener
// typedjs 实现动态输入效果
nextTick(() => {
  pageInit()
  const typed = new Typed('.left-info', {
    strings: ['以蝼蚁之行,展鸿鹄之志', 'To fly ants, show lofty ambitions'],
    typeSpeed: 70,
    backSpeed: 20,
    startDelay: 2000,
    loop: true,
    cursorChar: '',
  })
})

function pageInit() {
  changeBgColor()
}

function changeBgColor() {
  const imgBgDiv: HTMLDivElement = document.querySelector('.dimback')!
  imgBgDiv.style.backgroundColor = `${getRandomColor()}`
  setInterval(() => {
    imgBgDiv.style.backgroundColor = `${getRandomColor()}`
  }, Math.random() * 10000 + 10000)
}
</script>
