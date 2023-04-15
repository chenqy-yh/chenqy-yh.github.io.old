<template>
  <div class="index-left-menu">
    <div
      class="index-left-menu-content fixed top-0 left-[-15rem] w-[15rem] h-full bg-white overflow-y-auto overflow-x-hidden select-none"
      :class="{
        active: menuService.showLeftMenu.value,
      }">
      <div class="left-menu-content">
        <div class="h-[11.5rem] common-gradient-color grid grid-rows-[60%_1fr_1fr] items-center">
          <img src="/images/menu_left_pic.png" class="h-[3rem] ml-2" />
          <div class="ml-6 text-[1.5rem] text-white">CHENの温柔乡</div>
          <div class="ml-6 text-gray-200">记录我的生活与希望</div>
        </div>
        <div class="left-menu-items">
          <div
            class="left-menu-item h-[3rem] grid grid-cols-[35%_1fr_10%] items-center cursor-pointer group hover:bg-gray-100 pl-6 pr-2 duration-200"
            v-for="menu in menuService.menuTags">
            <i
              class="text-gray-500 z-1 text-[20px] duration-200 group-hover:text-black"
              :class="menu.icon"></i>
            <div class="text-black leading-[30px] z-100 ml-1 text-[14px]">
              {{ menu.name }}
            </div>
            <i
              class="iconfont icon-right text-black z-100 group-hover:rotate-180 duration-200 text-[16px]"
              :class="{
                hidden: !menu?.children,
              }"></i>
          </div>
          <!-- <div
            class="follow-me pl-6 py-3 grid grid-cols-[35%_1fr_10%] items-center cursor-pointer group hover:bg-gray-100 border border-black duration">
            <i class="iconfont icon-githubsquare"></i>
            <span>Follow Me</span>
          </div> -->
        </div>
      </div>
    </div>
    <div
      @click="menuService.showLeftMenu.value = !menuService.showLeftMenu.value"
      :class="{
        hidden: !menuService.showLeftMenu.value,
      }"
      class="fixed top-0 left-0 index-left-menu-cover w-full h-screen bg-black opacity-50 z-[-1]"></div>
  </div>
</template>

<script setup lang="ts">
import menuService from '@/composable/menu'
import { ToLink } from '@/utils/function'
import { RouteRecordRaw } from 'vue-router'
import common from '@/store/common'

const commonStore = common()

watch(
  menuService.showLeftMenu,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  },
  {
    deep: true,
    immediate: true,
  },
)

function handleMenuClick(route: RouteRecordRaw) {
  commonStore.isHome = route.name == 'home'
  ToLink('', false, route, undefined)
}

nextTick(() => {
  const leftMenuItems: HTMLElement[] = document.querySelectorAll('.left-menu-item') as any
  for (let i = 0; i < leftMenuItems.length; i++) {
    if (menuService.menuTags[i].route != undefined) {
      leftMenuItems[i].onclick = () => {
        menuService.showLeftMenu.value = false
        handleMenuClick({
          name: menuService.menuTags[i].route,
        } as RouteRecordRaw)
      }
    } else {
      leftMenuItems[i].onclick = () => {
        menuService.showLeftMenu.value = false
        ToLink(menuService.menuTags[i].link!, true)
      }
    }
  }
  // const followMe: HTMLElement = leftMenuItem[leftMenuItem.length - 1] as any
  // followMe.onclick = () => {
  //   ToLink('https://github.com/chenqy-yh', true)
  // }
})
</script>

<style lang="scss">
.left-menu-item:nth-last-child(1) {
  border-top: 1px solid;
  border-image: linear-gradient(to right, #000, #ccc, #666) 30;
}

.index-left-menu {
  .index-left-menu-content {
    transition: all 0.2s ease-in;
    &:-webkit-scrollbar {
      display: none;
    }
    &.active {
      left: 0;
    }
  }

  .index-left-menu-cover {
  }
}
</style>
