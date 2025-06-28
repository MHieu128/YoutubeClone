<template>
  <div class="relative cursor-pointer group">
      <img :src="thumbnail || 'https://via.placeholder.com/360x202'" alt="Video Thumbnail" class="w-full rounded-lg group-hover:opacity-90">
      <div class="flex mt-2">
        <img :src="channelThumbnail" alt="PFP" class="w-10 h-10 rounded-full mr-3">
        <div class="">
          <h3 class="text-white font-semibold text-sm">{{ title || 'No Title' }}</h3>
          <p class="text-gray-400 text-sm">{{ user || 'Unknown Channel' }}</p>
          <p class="text-gray-400 text-sm">{{ views || '0 Views' }}</p>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  defineProps({
    title : {
      type: String,
      default: ''
    },
    user : {
      type: String,
      default: ''
    },
    views : {
      type: String,
      default: ''
    },
    channelThumbnail : {
      type: String,
      default: ''
    },
    thumbnail : {
      type: String,
      default: ''
    },
  });
</script>

<style lang="scss" scoped>

</style>