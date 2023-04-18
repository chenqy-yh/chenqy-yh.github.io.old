<template>
  <div class="content z-40 flex flex-col justify-center items-center gap-6">
    <div class="category-head w-full px-5 flex justify-center">
      <CommonBlock width="90%" color="#fff" class="category-head-block p-6 max-w-[70rem]">
        <div class="block-title flex justify-center text-[#3C4858] pb-3">
          <i class="iconfont icon-tag text-[1.8rem]"> </i>
          <span class="text-[1.8rem]">Post Categories</span>
        </div>
        <div class="block-body flex justify-center items-center gap-[2rem] flex-wrap">
          <CommonSmallBlock
            v-for="category in categoryList"
            :active="category.active"
            @click="handleCategoryClick(category)">
            <span
              :class="{
                'text-white': category.active,
              }"
              class="mr-3 text-[#3C4858] text-[0.85rem] group-hover:text-white duration-200 font-bold"
              >{{ category.title_en }}</span
            >
            <span
              :class="{
                'text-white': category.active,
              }"
              class="text-[red]"
              >{{ category.categoryList.length }}</span
            >
          </CommonSmallBlock>
        </div>
      </CommonBlock>
    </div>
    <div class="category-container w-full px-5 flex justify-center" v-if="!showCategory">
      <CommonBlock
        width="90%"
        height="auto"
        color="#fff"
        class="category-head-block max-w-[70rem] flex justify-center py-5">
        <div id="category_chart" class="h-[300px] w-[400px]"></div>
      </CommonBlock>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import categoryService from '@/composable/category'
import { echarts_Radar_category } from '@/plugins/echarts'
import { ToLink, removeNonNumericAndtoLower } from '@/utils/function'
import { watch } from 'vue'
import { RouteRecordRaw, useRoute } from 'vue-router'

const categoryList = ref([] as categoryMate[])
const showCategory = ref(false)
const route = useRoute()
watch(
  () => route.fullPath,
  async () => {
    const { data } = await categoryService.initCategories()
    categoryList.value = data
    createEcharts()
    const categoryName = route.fullPath.split('/').pop()!
    categoryList.value.forEach((item) => {
      if (removeNonNumericAndtoLower(item.title_en) == categoryName) {
        item.active = true
      } else {
        item.active = false
      }
    })
    if (route.fullPath != '/category') {
      showCategory.value = true
    } else {
      showCategory.value = false
    }
  },
  {
    immediate: true,
  },
)

function handleCategoryClick(category: categoryMate) {
  ToLink(
    '',
    false,
    {
      path: '/category/' + category.route,
    } as RouteRecordRaw,
    undefined,
  )
}

function createEcharts() {
  setTimeout(() => {
    if (!showCategory.value) echarts_Radar_category('#category_chart', categoryList.value)
  }, 100)
}
</script>

<style lang="scss"></style>
