<template>
  <!-- 主体内容 -->
  <div class="home-main-content h-[2200px] flex flex-col items-center py-[2rem] gap-[2rem]">
    <CommonBlock
      height="auto"
      width="70%"
      color="#fff"
      class="mx-[1rem] md:mx-[3rem] mt-[1rem] border-2">
      <div class="flex flex-col items-center px-[10%] py-[2rem]">
        <div class="tag-title text-[2rem] font-bold text-gray-700">《消愁》</div>
        <div class="tag-body text-gray-500">
          当你走进这欢乐场/背上所有的梦与想/各色的脸上各色的妆/没人记得你的模样/三巡酒过你在角落/固执地唱着苦涩的歌/听他在喧嚣里被淹没/你拿起酒杯对自己说/一杯敬朝阳，一杯敬月光/唤醒我的向往，温柔了寒窗/于是可以不回头地逆风飞翔/不怕心头有雨，眼底有霜/一杯敬故乡，一杯敬远方/守着我的善良，催着我成长/所以南北的路从此不再漫长/灵魂不再无处安放/一杯敬明天，一杯敬过往/支撑我的身体，厚重了肩膀/虽然从不相信所谓山高水长/人生苦短何必念念不忘/一杯敬自由，一杯敬死亡/宽恕我的平凡，驱散了迷惘/好吧天亮之后总是潦草离场/清醒的人最荒唐/好吧天亮之后总是潦草离场/清醒的人最荒唐
        </div>
      </div>
    </CommonBlock>
    <Articles
      class="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center"></Articles>
  </div>
</template>

<script setup lang="ts">
import Articles from '@/views/home/articles.vue'
</script>

<style lang="scss"></style>
