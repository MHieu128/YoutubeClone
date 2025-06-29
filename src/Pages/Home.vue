<template>
  <NavLayout>
    <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 mt-[60px]">
      <VideoCard
        v-for="(video, index) in videoData"
        :key="video.videoId"
        :title="video.title"
        :thumbnail="video.thumbnail?.[0].url"
        :channelTitle="video.channelTitle"
        :views="video.viewCount"
        :channelThumbnail="video.channelThumbnail?.[0].url"
      />
    </div>
  </NavLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavLayout from '../components/NavLayout.vue';
import VideoCard from '../components/VideoCard.vue';
import { getHomeVideos } from '../Services/API';
import { HomeVideo } from '../Services/DataService';
const loading = ref<Boolean>(true);
const error = ref<string | null>(null);
const videoData = ref<HomeVideo[]>([]);

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

const fetchHomeVideos = async () => {
  try {
    loading.value = true;
    const data = await getHomeVideos();
    videoData.value = data;
    console.log('Fetched home videos:', videoData.value);
  } catch (error) {
    error.value='Failed to fetch data'
    console.error('Error fetching home videos:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchHomeVideos);

</script>

<style lang="scss" scoped>
</style>
