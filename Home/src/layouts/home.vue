<template>
  <div class="home-content bg-gray-200 flex flex-col">
    <!-- 菜单 -->
    <index-top-menu class="z-[100] fixed top-0 left-0"></index-top-menu>
    <!-- 顶部图片部分 -->
    <div class="top-bg-content z-0 h-screen flex justify-center items-center select-none">
      <img :src="indexBgUrl" class="h-screen w-full object-cover absolute top-0 left-0 z-[-1]" />
      <div class="index-bg-div absolute top-0 left-0 z-1 w-full h-screen opacity-[0.5]"></div>
      <div class="top-main-content z-[5]">
        <!-- home title -->
        <div class="container w-screen flex flex-col items-center h-[14rem] relative">
          <div class="text-white text-[3.6rem]">随便聊聊~</div>
          <!-- typejs -->
          <div class="flex justify-center text-gray-100 mt-2">
            <div class="left-info"></div>
            <div class="right-info">相寻梦里路，飞雨落花中。</div>
          </div>

          <!-- button group -->
          <div
            class="flex items-center justify-center gap-[2rem] mt-[5rem] absolute top-1/2 z-[10000000000]">
            <CommonButton>
              <i class="iconfont icon-xiashuangjiantou text-white"></i>
              <span class="text-[1rem] ml-[.2rem] text-white">START </span>
            </CommonButton>
            <CommonButton>
              <i class="iconfont icon-githubalt text-white"></i>
              <span class="text-[1rem] ml-[.2rem] text-white">GITHUB </span>
            </CommonButton>
          </div>
          <!-- links -->
          <div class="flex items-center gap-[2.5rem] justify-center mt-[6rem] absolute top-full">
            <el-popover effect="dark" trigger="hover" v-for="icon in iconClassList">
              <template #reference>
                <a href="#">
                  <i class="iconfont text-[1.5rem] text-white" :class="icon.class"></i>
                </a>
              </template>
              <div class="bg-gray-800 text-white h-7 leading-5 text-center py-1 px-2">
                {{ icon.message }}
              </div>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="home-main-content h-[2200px] flex flex-col items-center py-[2rem]">
      <TransitionFade>
        <CommonBlock height="auto" width="70%" class="mx-[1rem] md:mx-[3rem] mt-[200px]">
          <div class="flex flex-col items-center px-[10%] py-[2rem]">
            <div class="tag-title text-[2rem] font-bold text-gray-700">《消愁》</div>
            <div class="tag-body text-gray-500">
              当你走进这欢乐场/背上所有的梦与想/各色的脸上各色的妆/没人记得你的模样/三巡酒过你在角落/固执地唱着苦涩的歌/听他在喧嚣里被淹没/你拿起酒杯对自己说/一杯敬朝阳，一杯敬月光/唤醒我的向往，温柔了寒窗/于是可以不回头地逆风飞翔/不怕心头有雨，眼底有霜/一杯敬故乡，一杯敬远方/守着我的善良，催着我成长/所以南北的路从此不再漫长/灵魂不再无处安放/一杯敬明天，一杯敬过往/支撑我的身体，厚重了肩膀/虽然从不相信所谓山高水长/人生苦短何必念念不忘/一杯敬自由，一杯敬死亡/宽恕我的平凡，驱散了迷惘/好吧天亮之后总是潦草离场/清醒的人最荒唐/好吧天亮之后总是潦草离场/清醒的人最荒唐
            </div>
          </div>
        </CommonBlock>
      </TransitionFade>
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
  .index-bg-div {
  }
}
</style>

<script setup lang="ts">
import { CommonEnum } from '@/enum/commonEnum'
import Typed from 'typed.js'
import { nextTick } from 'vue'
import _ from 'lodash'

// testlodash

const charSet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const res = _.sampleSize(charSet, 10).join().replace(/\,/g, '')

const indexBgUrl = CommonEnum.INDEX_BG_URL
const colorList = ['#ff4c06', '#ff0606', '#ff0672', '#ff0909']

const iconClassList = [
  {
    class: 'icon-github',
    message: '访问我的github',
  },
  {
    class: 'icon-xinxi',
    message: '邮件联系我',
  },
  {
    class: 'icon-QQ',
    message: 'QQ联系我1140710816',
  },
  {
    class: 'icon-codepen-circle-fill',
    message: '关注我的知士荟https://www.learnerhub.net/#/users/12178/spaces',
  },
]

// typedjs 实现动态输入效果
nextTick(() => {
  const typed = new Typed('.left-info', {
    strings: ['以蝼蚁之行,展鸿鹄之志', 'To fly ants, show lofty ambitions'],
    typeSpeed: 70,
    backSpeed: 20,
    startDelay: 2000,
    loop: true,
  })
})

function pageInit() {
  changeBgColor()
}
pageInit()

function getRandomColor() {
  const index = Math.floor(Math.random() * colorList.length)
  return colorList[index]
}

function changeBgColor() {
  nextTick(() => {
    const imgBgDiv: HTMLDivElement = document.querySelector('.index-bg-div')!
    imgBgDiv.style.backgroundColor = `${getRandomColor()}`
    setInterval(() => {
      imgBgDiv.style.backgroundColor = `${getRandomColor()}`
    }, Math.random() * 10000 + 10000)
  })
}
</script>
