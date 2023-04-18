<template>
  <div
    class="common-card overflow-hidden flex flex-col bg-white hover:scale-105 duration-500 max-w-[23rem] min-w-[22rem]">
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
        <div
          class="flex items-center hover:scale-110 duration-200 cursor-pointer"
          @click="
            router.push({
              path: '/category/' + removeNonNumericAndtoLower(props.discipline.belongCategory),
            })
          ">
          <i class="iconfont icon-tag text-[1.2rem] mr-1"></i>
          <span>{{ props.discipline.belongCategory }}</span>
        </div>
      </div>
      <div class="card-footer flex justify-between items-center">
        <div class="card-content-tags border-t-[1.3px] border-gray-200 py-2 flex flex-wrap">
          <span
            @click="
              router.push({
                path: '/tags/' + removeNonNumericAndtoLower(tag.title_en),
              })
            "
            class="border h-[1.5rem] py-[0.15rem] px-2 common-gradient-color text-[12px] text-white cursor-pointer mx-1 my-[2px] max-w-[140px] whitespace-nowrap overflow-hidden overflow-ellipsis"
            v-for="tag in displayTagList"
            >{{ tag.title_en }}</span
          >
        </div>
        <div class="cursor-pointer" v-if="!showAllTags" @click="showAllTags = !showAllTags">
          <i class="iconfont icon-shenglve text-[1.6rem]"></i>
        </div>
      </div>
    </div>
    <!-- TODO hover底部会出现白边 -->
    <div
      v-if="showAllTags"
      @click="showAllTags = !showAllTags"
      class="absolute bottom-[-0.5rem] left-[50%] translate-x-[-50%] rounded-full cursor-pointer">
      <i class="iconfont icon-iconfontzhizuobiaozhun023128 text-[1.2rem] text-[#374154]"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { removeNonNumericAndtoLower } from '@/utils/function'
import { getTagsByDisciplineId } from '@/apis/tags'

const props = defineProps<{
  discipline: Discipline
}>()

const showAllTags = ref(false)
const tagList = ref<Tag[]>()

const displayTagList = ref<Tag[]>()

watch(
  () => props.discipline,
  async (newVal) => {
    const { data } = await getTagsByDisciplineId(newVal.id)
    tagList.value = data.data
    displayTagList.value = showAllTags.value ? tagList.value : tagList.value!.slice(0, 2)
  },
  {
    immediate: true,
  },
)

watch(
  () => showAllTags.value,
  (newVal) => {
    displayTagList.value = newVal ? tagList.value : tagList.value!.slice(0, 2)
  },
)

onMounted(() => {
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
