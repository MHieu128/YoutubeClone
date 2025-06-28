<template>
  <NavLayout>
    <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 p-4">
      <VideoCard
        v-for="(video, index) in videoMockData"
        :key="index"
        :title="video.title"
        :thumbnail="video.thumbnail"
        :channelTitle="video.channelTitle"
        :views="video.views"
        :channelThumbnail="video.channelThumbnail"
      />
    </div>
  </NavLayout>
</template>

<script setup lang="ts">
import NavLayout from '../components/NavLayout.vue';
import VideoCard from '../components/VideoCard.vue';

const videoMockData = [
  {
    title: 'Build a YouTube Clone with Vue.js',
    thumbnail: 'https://placehold.co/600x400',
    channelThumbnail: 'https://placehold.co/400',
    channelTitle: 'Nfdev guidelines',
    views: '1.5M views',
  },
  {
    title: 'Build a YouTube Clone with Vue.js',
    thumbnail: 'https://placehold.co/600x400',
    channelThumbnail: 'https://placehold.co/400',
    channelTitle: 'Nfdev guidelines',
    views: '1.5M views',
  },
  {
    title: 'Build a YouTube Clone with Vue.js',
    thumbnail: 'https://placehold.co/600x400',
    channelThumbnail: 'https://placehold.co/400',
    channelTitle: 'Nfdev guidelines',
    views: '1.5M views',
  }
]

</script>

<style lang="scss" scoped>
</style>
