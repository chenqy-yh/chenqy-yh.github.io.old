<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
    <CommonCard :discipline="discipline" v-for="discipline in disciplines"></CommonCard>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getDisciplineByCategoryName } from '@/apis/category'
import { watch } from 'vue'

const disciplines = ref([] as Discipline[])
const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    const categoryName = route.fullPath.split('/').pop()!
    const { data } = await getDisciplineByCategoryName(categoryName)
    disciplines.value = data.data
  },
  {
    immediate: true,
  },
)
</script>

<style lang="scss"></style>
