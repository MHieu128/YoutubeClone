<template>
  <li class="text-white text-sm font-semibold text-center hover:bg-gray-600 rounded-lg cursor-pointer" 
  :class="[!opensideNav ? 'p-2' : 'flex items-center p-2']">
    <div :class="[!opensideNav ? 'w-full flex justify-center' : '']">
      <component :is="icon"/>
    </div>
     <div :class="[!opensideNav ? '': 'mt-1 ml-4']">
      <span v-if="!opensideNav">
        {{ iconString.substring(0, 4) }}
      </span>
      <span v-else>
        {{ iconString }}
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
  import { defineProps, toRefs, computed } from 'vue';

</script>

<style lang="scss" scoped>

</style>