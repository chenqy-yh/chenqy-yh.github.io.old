<template>
  <div class="bubble absolute top-full left-1/2 translate-x-[-50%] flex justify-center">
    <i
      class="iconfont icon-sanjiaoxing_shang absolute -top-[1.75rem] text-[2rem] left-1/2 translate-x-[-50%]"></i>
    <div class="container w-[8rem] rounded-xl flex flex-col overflow-hidden">
      <div
        v-for="menuItem in bubbleList"
        class="grid grid-cols-[auto_1fr] pl-3 hover:bg-[#0000001c] py-[.5rem] px-2 duration-200">
        <i :class="menuItem.icon"></i>
        <span class="text-center">{{ menuItem.name }}</span>
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
const bubbleList = ref([
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
] as MenuTag[])
</script>
