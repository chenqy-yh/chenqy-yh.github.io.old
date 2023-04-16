<template>
  <div
    :ref="getRef"
    class="menu-container h-16 w-screen flex items-center justify-center select-none">
    <div class="bg-cover common-gradient-color fixed top-0 left-0 h-16 w-full z-[-1]"></div>
    <div class="menu-main-container w-[90%] flex items-center justify-between">
      <div
        class="left-container lg:hidden"
        @click="menuService.showLeftMenu.value = !menuService.showLeftMenu.value">
        <i class="iconfont icon-List text-white cursor-pointer"></i>
      </div>
      <div class="mid-container flex items-center justify-between">
        <img :src="Menu_left_pic_url" class="w-10" />
        <div class="text-[25px] ml-3 text-white">CHENの温柔乡</div>
      </div>
      <div class="right-container flex items-center justify-around">
        <div
          class="right-container-content items-center h-16 px-2 z-0 relative group cursor-pointer hidden lg:flex"
          v-show="menu.active == undefined || menu.active == true"
          v-for="(menu, i1) in menuService.menuTags"
          @click="
            menu?.children == undefined && handleMenuClick({ name: menu.route } as RouteRecordRaw)
          ">
          <i class="text-white z-1" :class="menu.icon"></i>
          <div class="text-white leading-[30px] z-100 ml-1 text-[14px]">{{ menu.name }}</div>
          <i
            class="iconfont icon-down text-white z-100 group-hover:rotate-180 duration-200 text-[20px]"
            :class="{
              hidden: !menu?.children,
            }"></i>
          <div
            class="item-cover absolute left-0 top-0 w-full h-full z-[-1] bg-slate-600 opacity-0 group-hover:opacity-20 duration-[0.4s]"></div>
          <menu-bubble
            :bubble-list="menu.children"
            v-show="menu?.children"
            class="hidden group-hover:block"></menu-bubble>
        </div>
        <div class="sousuo flex items-center h-16 px-2 z-0 relative group cursor-pointer">
          <i class="iconfont icon-sousuo text-white z-1"></i>
          <div
            class="item-cover absolute left-0 top-0 w-full h-full z-[-1] bg-slate-600 opacity-0 group-hover:opacity-20 duration-[0.4s]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.menu-container {
  .bg-cover {
    opacity: 0;
    transition: all 0.4s;
    &.active {
      opacity: 1;
    }
  }
  .menu-main-container {
    .mid-container {
      .text {
      }
    }
    .right-container {
      .right-container-content {
      }
    }
  }
}
</style>

<script setup lang="ts">
import { CommonEnum } from '@/enum/commonEnum'
import menuService from '@/composable/menu'
import common from '@/store/common'
import { ToLink } from '@/utils/function'
import { RouteRecordRaw } from 'vue-router'

const commonStore = common()
const rootRef = ref(null)
const Menu_left_pic_url = CommonEnum.MENU_LEFT_PIC_URL

function handleMenuClick(route: RouteRecordRaw) {
  // commonStore.isHome = route.name == 'home'
  ToLink('', false, route, undefined)
}

function getRef(el: any) {
  rootRef.value = el
}

function scrollhandler(el: HTMLElement) {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop >= 1) {
    el.classList.add('active')
  } else {
    el.classList.remove('active')
  }
}

nextTick(() => {
  const el = document.querySelector('.bg-cover') as HTMLElement
  window.addEventListener('scroll', () => {
    scrollhandler(el)
  })
})
</script>
