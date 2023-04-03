<template>
  <div class="menu-container h-16 w-screen flex items-center justify-center">
    <div class="menu-main-container w-[80%] flex items-center justify-between">
      <div class="left-container flex items-center justify-between">
        <img :src="Menu_left_pic_url" class="w-10" />
        <div class="text-[30px] font-bold ml-3 text-white">CHENの陋室</div>
      </div>
      <div class="right-container flex items-center justify-around">
        <div
          class="right-container-content flex items-center h-16 px-2 z-0 relative group"
          v-for="(menu, i1) in right_container_list">
          <i class="text-white z-1" :class="menu.icon"></i>
          <div class="text-white leading-[30px] z-100">{{ menu.name }}</div>
          <i
            class="iconfont icon-down text-white z-100"
            :class="{
              hidden: !menu?.children,
            }"></i>
          <div
            class="item-cover absolute left-0 top-0 w-full h-full z-[-1] bg-slate-600 opacity-0 group-hover:opacity-20 duration-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.menu-container {
  .menu-main-container {
    .left-container {
      .text {
      }
    }
    .right-container {
      .right-container-content {
        // .item-cover {
        //   transition: 0s;
        // }
        // .itme-cover:hover {
        //   transition: 1s;
        // }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { CommonEnum } from '@/enum/commonEnum'
const Menu_left_pic_url = CommonEnum.MENU_LEFT_PIC_URL

const right_container_list = [
  {
    name: 'index',
    icon: 'iconfont icon-home',
    children: [{}],
  },
  {
    name: 'post',
    icon: 'iconfont icon-list',
    children: [{}],
  },
  {
    name: 'about',
    icon: 'iconfont icon-user-filling',
  },
  {
    name: 'about',
    icon: 'iconfont icon-user-filling',
  },
  {
    name: 'about',
    icon: 'iconfont icon-user-filling',
  },
  {
    name: 'about',
    icon: 'iconfont icon-user-filling',
  },
  {
    name: 'about',
    icon: 'iconfont icon-user-filling',
  },
] as MenuTag[]
</script>
