<template>
  <div class="content z-40 flex flex-col justify-center items-center gap-6">
    <div class="category-head w-full px-5 flex justify-center">
      <CommonBlock width="90%" color="#fff" class="category-head-block p-6 max-w-[70rem]">
        <div class="block-title flex justify-center text-[#3C4858] pb-3">
          <i class="iconfont icon-tag text-[1.8rem]"> </i>
          <span class="text-[1.8rem]">Post Tags</span>
        </div>
        <div class="block-body flex justify-center items-center gap-[2rem]">
          <div
            v-for="discipline in disciplineList"
            class="category-item-tag common-shadow duration-200 py-1 px-3 rounded-md group cursor-pointer"
            :style="{
              backgroundColor: getRandomLightColor(),
            }"
            @click="handleDisciplineClick(discipline)">
            <span
              class="mr-3 text-[#3C4858] text-[0.85rem] group-hover:text-white duration-200 font-bold"
              >{{ discipline.title_en }}</span
            >
          </div>
        </div>
      </CommonBlock>
    </div>
    <div class="category-container w-full px-5 flex justify-center">
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
import { getRandomLightColor } from '@/utils/function'
import { useRoute } from 'vue-router'
import { getDisciplineList } from '@/apis/category'

const disciplineList = ref([] as Discipline[])
const route = useRoute()

onMounted(async () => {
  const aa = await getDisciplineList()
  console.log(aa);
  const { data } = aa
  disciplineList.value = data.data
  const tt = [] as any[]
  disciplineList.value.forEach((item) => {
    tt.push(item.title_zh)
  })
  console.log(tt)
})

function handleDisciplineClick(discipline: Discipline) {
  console.log(discipline)
}
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
