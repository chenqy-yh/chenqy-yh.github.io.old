<template>
  <div
    class="common-card rounded-lg overflow-hidden flex flex-col bg-white hover:scale-105 duration-500 max-w-[23rem] min-w-[22rem]">
    <div class="bg-img relative">
      <img
        :src="props.discipline.pic"
        class="testpic h-[13rem] w-[23rem] object-cover object-bottom cursor-pointer" />
      <div class="absolute text-white text-[1.4rem] top-[75%] left-[8%] font-[300]">
        {{ props.discipline.title_zh }}
      </div>
    </div>

    <div class="common-card-content text-gray-700 px-4 pt-3 pb-2">
      <!-- TODO 优化过长隐藏特效 -->
      <div class="card-content-title">{{ props.discipline.description }}</div>
      <div class="card-content-info flex justify-between items-center">
        <div class="card-info-time flex items-center">
          <i class="iconfont icon-time text-[1.5rem]"></i>
          <span>{{ props.discipline.last_update }}</span>
        </div>
        <div class="flex items-center hover:scale-110 duration-200 cursor-pointer">
          <i class="iconfont icon-tag text-[1.2rem] mr-1"></i>
          <span>{{ props.discipline.belongCategory }}</span>
        </div>
      </div>
      <div class="card-content-tags border-t-[1.3px] border-gray-200 py-2">
        <span
          class="border h-[1.5rem] py-[0.2rem] px-3 common-gradient-color rounded-[0.75rem] text-[12px] text-white cursor-pointer"
          >{{ props.discipline.title_en }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  discipline: Discipline
}>()

nextTick(() => {
  const testpic: HTMLImageElement = document.querySelector('.testpic') as any
})

const card_url = '/images/1.webp'
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}
</style>
