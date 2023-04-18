<template>
  <div class="bubble absolute top-full left-1/2 translate-x-[-50%] flex justify-center">
    <i
      class="iconfont icon-sanjiaoxing_shang absolute -top-[1.75rem] text-[2rem] left-1/2 translate-x-[-50%]"></i>
    <div class="container w-[8rem] flex flex-col overflow-hidden">
      <div
        @click="
          handleMenuClick({
            name: menuItem.route,
          } as RouteRecordRaw)
        "
        v-for="menuItem in (props.bubbleList as MenuTag[])"
        class="text-center pl-3 hover:bg-[#0000001c] py-[.5rem] px-2 duration-200 z-[9999999999]">
        <i :class="(menuItem as MenuTag).icon" class="text-[14px]"></i>
        <span class="text-center text-[15px] ml-1">{{ (menuItem as MenuTag).name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bubble {
  .icon-sanjiaoxing_shang {
    color: #ffffffb7;
  }
  .container {
    background: #ffffffb7;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
</style>

<script setup lang="ts">
import { ToLink } from '@/utils/function'
import { RouteRecordRaw } from 'vue-router'

function handleMenuClick(route: RouteRecordRaw) {
  ToLink('', false, route, undefined)
}

const props = defineProps({
  bubbleList: {
    type: Array,
    default: () =>
      [
        {
          name: 'Tags',
          icon: 'iconfont icon-tags-fill',
        },
        {
          name: 'Categories',
          icon: 'iconfont icon-Category',
        },
        {
          name: 'Achieves',
          icon: 'iconfont icon-star',
        },
      ] as MenuTag[],
  },
})
</script>
