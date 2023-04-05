<template>
  <TransitionGroup name="tt" appear> <slot></slot> </TransitionGroup>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.tt-enter-active,
.tt-leave-active {
  // transition: all 4s;
  // scale: 1;
  // opacity: 1;
}
.tt-enter-from,
.tt-leave-to {
  // scale: 0;
  // opacity: 0;
}
</style>
