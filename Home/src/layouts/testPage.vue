<template>
  <div>
    <el-popover placement="right" width="200" trigger="hover" :show-arrow="false">
      <template #reference>
        <el-button>hover 激活</el-button>
      </template>
      <div class="w-[200px] h-[200px] bg-red-300">this is a demo</div>
    </el-popover>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.el-popover {
  padding: 0 !important;
}
</style>
