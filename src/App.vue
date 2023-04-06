<template>
  <div>
    <Suspense>
      <RouterView></RouterView>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { listenScrollTop, scrollToStorePosition } from '@/utils/observer'

listenScrollTop()
onMounted(async () => {
  scrollToStorePosition()
})
</script>

<style lang="scss"></style>
