<template>
  <div class="divs">
    <div class="item w-40 h-40 bg-black m-3" v-for="item in 4"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.item:nth-last-child(2) {
  @apply mt-[100px];
}
</style>
