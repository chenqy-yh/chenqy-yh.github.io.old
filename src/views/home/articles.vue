<template>
  <div class="articles">
    <CommonBlock v-for="discipline in disciplines">
      <CommonCard :discipline="(discipline as any)"></CommonCard>
    </CommonBlock>

    <!-- <CommonCard></CommonCard> -->
  </div>
</template>

<script setup lang="ts">
import categoryService from '@/composable/category'

const disciplines = ref([] as Discipline[])
categoryService.initDisplines().then(({ data }) => {
  disciplines.value = data
})
</script>

<style lang="scss"></style>
