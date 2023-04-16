<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
    <CommonCard :discipline="discipline" v-for="discipline in disciplines"></CommonCard>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getDisciplineByCategoryName } from '@/apis/category'

const route = useRoute()
const categoryName = route.fullPath.split('/')

const disciplines = ref([] as Discipline[])

onMounted(async () => {
  const { data } = await getDisciplineByCategoryName('math')
  disciplines.value = data.data
})
</script>

<style lang="scss"></style>
