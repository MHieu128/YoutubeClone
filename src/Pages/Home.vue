<template>
  <NavLayout>
    <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 mt-[60px]">
      <VideoCard
        v-for="(video, index) in videoData"
        :key="video.videoId"
        :title="video.title"
        :thumbnail="video.thumbnail?.[0].url"
        :channelTitle="video.channelTitle"
        :views="`${formatNumber(Number(video.viewCount))} ${video.publishedTimeText}`"
        :channelThumbnail="video.channelThumbnail?.[0].url"
        @click="goToVideo(video.videoId)"
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
import { useRouter } from 'vue-router';

const loading = ref<Boolean>(true);
const error = ref<string | null>(null);
const videoData = ref<HomeVideo[]>([]);
const router = useRouter();

const formatNumber = (value: number): string => {
  if (value !== null) {
    if (value > 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value > 1000) {
      return (value / 1000).toFixed(1) + 'K';
    } else {
      return value.toString();
    }
  } else {
    return '0';
  }
};

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

const goToVideo = (videoId: string) => {
  router.push({ name: 'Video', params: { id: videoId } });
};

onMounted(fetchHomeVideos);

</script>

<style lang="scss" scoped>
</style>
