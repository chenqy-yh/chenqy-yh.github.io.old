<template>
  <div class="content z-40 flex flex-col justify-center items-center gap-3">
    <div class="category-head w-full px-5 flex justify-center">
      <CommonBlock width="90%" color="#fff" class="category-head-block p-6 max-w-[70rem]">
        <div class="block-title flex justify-center text-[#3C4858] pb-3">
          <i class="iconfont icon-tag text-[1.8rem]"> </i>
          <span class="text-[1.8rem]">Post Categories</span>
        </div>
        <div class="block-body flex justify-center items-center gap-[2rem]">
          <div
            v-for="category in categoryList"
            class="category-item-tag common-shadow duration-200 py-1 px-3 rounded-md group cursor-pointer"
            :style="{
              backgroundColor: getRandomLightColor(),
            }"
            @click="handleCategoryClick(category)">
            <span
              class="mr-3 text-[#3C4858] text-[0.85rem] group-hover:text-white duration-200 font-bold"
              >{{ category.title_en }}</span
            >
            <span class="text-[red]">{{ category.categoryList.length }}</span>
          </div>
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
import { getRandomLightColor } from '@/utils/function'
import { echarts_Radar_category } from '@/plugins/echarts'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const categoryList = ref([] as categoryMate[])
const showCategory = ref(false)
const route = useRoute()
watch(
  route,
  () => {
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

function handleCategoryClick(category: categoryMate) {}

nextTick(async () => {
  const { data } = await categoryService.initCategories()
  categoryList.value = data
  if (!showCategory.value) echarts_Radar_category('#category_chart', categoryList.value)
})
</script>

<style lang="scss">
.category-item-tag {
  &:hover {
    background: linear-gradient(to right, #00bc10, #0c8a00);
  }
}

.category-head {
  .category-head-block {
  }
}
</style>
