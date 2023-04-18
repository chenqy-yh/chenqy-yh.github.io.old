<template>
  <div class="content z-40 flex flex-col justify-center items-center gap-6">
    <div class="category-head w-full px-5 flex justify-center">
      <CommonBlock width="90%" color="#fff" class="category-head-block p-6 max-w-[70rem]">
        <div class="block-title flex justify-center text-[#3C4858] pb-3">
          <i class="iconfont icon-tag text-[1.8rem]"> </i>
          <span class="text-[1.8rem]">Post Tags</span>
        </div>
        <div class="block-body gap-[1rem] flex flex-wrap">
          <CommonSmallBlock
            v-for="tag in tagList"
            @click="handleDisciplineClick(tag)"
            :active="tag.active">
            <span
              :class="{
                'text-white': tag.active,
              }"
              class="mr-2 text-[#3C4858] text-[0.85rem] group-hover:text-white duration-200 font-bold whitespace-nowrap"
              >{{ tag.title_en }}</span
            >
            <span
              :class="{
                'text-white': tag.active,
              }"
              class="text-[red] text-[0.9rem]"
              >{{ tag.connected_num }}</span
            >
          </CommonSmallBlock>
        </div>
      </CommonBlock>
    </div>
    <div class="category-container w-full px-5 flex justify-center" v-if="!showTagDetail">
      <CommonBlock
        width="90%"
        height="auto"
        color="#fff"
        class="category-head-block max-w-[70rem] flex justify-center py-5">
        <div class="tags-wordcloud w-full h-[300px]"></div>
      </CommonBlock>
    </div>
    <RouterView v-else></RouterView>
  </div>
</template>

<script setup lang="ts">
import { getTagsByDisciplineId } from '@/apis/tags'
import { echart_wordcloud_tags } from '@/plugins/echarts'
import router from '@/router'
import { removeNonNumericAndtoLower } from '@/utils/function'
import { useRoute } from 'vue-router'

import 'echarts-wordcloud'

const tagList = ref([] as Tag[])
const route = useRoute()
const showTagDetail = ref(false)

watch(
  () => route.fullPath,
  async () => {
    const { data: tagData } = await getTagsByDisciplineId(undefined)
    tagList.value = tagData.data.filter((item: Tag) => item.connected_num > 0)
    const tagName = route.fullPath.split('/').pop()!
    tagList.value.forEach((item) => {
      if (removeNonNumericAndtoLower(item.title_en) == tagName) {
        item.active = true
      } else {
        item.active = false
      }
    })
    if (route.fullPath != '/tags') {
      showTagDetail.value = true
    } else {
      showTagDetail.value = false
      createWordCloud()
    }
  },
  {
    immediate: true,
  },
)

function createWordCloud() {
  if (!showTagDetail.value)
    setTimeout(() => {
      echart_wordcloud_tags('.tags-wordcloud', tagList.value)
    }, 100)
}

onMounted(async () => {})

function handleDisciplineClick(tag: Tag) {
  router.push({
    path: '/tags/' + removeNonNumericAndtoLower(tag.title_en),
  })
}
</script>

<style lang="scss">
.tag-item {
  &.active {
    span: {
      color: #fff;
    }
  }
}
</style>
