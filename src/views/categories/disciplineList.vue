<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
    <CommonCard :discipline="discipline" v-for="discipline in disciplines"></CommonCard>
  </div>
</template>

<script setup lang="ts">
import { getDisciplineByCategoryName } from '@/apis/category'
import { useRoute } from 'vue-router'

const disciplines = ref([] as Discipline[])
const route = useRoute()

async function onRouteChange() {
  const categoryName = route.fullPath.split('/').pop()!
  const { data } = await getDisciplineByCategoryName(categoryName)
  disciplines.value = data.data
}

onMounted(() => {
  onRouteChange()
})

onBeforeRouteUpdate(() => {
  onRouteChange()
})
</script>

<style lang="scss"></style>
