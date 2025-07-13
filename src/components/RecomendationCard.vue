<template>
  <div class="flex flex-col lg:flex-row md:gap-3 sm:items-start mt-[15px]">
    <div class="relative lg:w-full flex md:flex-row flex-col gap-2 sm:gap-3">
      <img
        src="https://placehold.co/600x400"
        class="aspect-video cursor-pointer rounded-lg w-full sm:w-[50%]"
        alt=""
      />
      <div class="md:px-1 px-3 mt-2 sm:mt-3 ml-2 sm:w-1/2 text-white">
        <div class="text-[15px] pb-1.5 font-bold w-full cursor-pointer">
          Sample video Title
        </div>
        <div class="text-[14px] text-gray-300 font-extrabold flex gap-1 items-center cursor-pointer">
          Channel Name
          <CheckCircle fillcolor="#888888" :size="17" />
        </div>
        <div class="text-sm mb-2 text-white cursor-pointer">
          1.4k views • 1 day ago
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckCircle from 'vue-material-design-icons/CheckCircle.vue';
</script>

<style lang="scss" scoped>

</style>