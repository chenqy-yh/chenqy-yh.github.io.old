<template>
  <div>
    {{ tt }}
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const tt = ref({})

nextTick(async () => {
  axios
    .get('//47.99.54.217:3000')
    .then((res) => {
      console.log(res)
      tt.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<style lang="scss">
.item:nth-last-child(2) {
  @apply mt-[100px];
}
</style>
