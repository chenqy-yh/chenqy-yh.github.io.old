<template>
  <el-popover effect="dark" trigger="hover" :auto-close="5000" v-for="icon in iconClassList">
    <template #reference>
      <a @click="icon?.link && ToLink(icon.link, true)">
        <i class="iconfont text-[1.5rem] text-white cursor-pointer" :class="icon.class"></i>
      </a>
    </template>
    <div class="bg-gray-800 text-white min-h-7 leading-5 text-center py-1 px-2">
      {{ icon.message }}
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ToLink } from '@/utils/function'

const iconClassList = [
  {
    class: 'icon-github',
    message: '访问我的github',
    link: 'https://github.com/chenqy-yh',
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
    class: 'icon-zhihu',
    message: '关注我的知士荟https://www.learnerhub.net/#/users/12178/spaces',
    link: 'https://www.learnerhub.net/#/users/12178',
  },
]
</script>

<style lang="scss"></style>
