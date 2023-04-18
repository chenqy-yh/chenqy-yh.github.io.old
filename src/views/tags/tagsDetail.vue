<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-3">
    <CommonCard
      :discipline="discipline"
      v-for="discipline in disciplineListByTag"
      class="scale-90"></CommonCard>
  </div>
</template>

<script setup lang="ts">
import { getDisciplineByCategoryName } from '@/apis/tags'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
const disciplineListByTag = ref([])

async function onRouteChange() {
  const tagName = route.fullPath.split('/').pop()!
  if (tagName == 'tags') return
  const { data } = await getDisciplineByCategoryName(tagName)
  disciplineListByTag.value = data.data
}

onMounted(() => {
  onRouteChange()
})

onBeforeRouteUpdate(() => {
  onRouteChange()
})
</script>

<style lang="scss"></style>
