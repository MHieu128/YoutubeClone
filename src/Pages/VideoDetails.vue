<template>
  <div v-if="loading" class="w-[90vw] h-[90vh] flex items-center justify-center">
      <img :src="loader" alt="Loading..." sizes="30" />
    </div>
  <NavLayout>
    <div v-if="!loading" class="xl:flex w-full mt-[20px]">
      <div class="p-3 lg:w-[65%] w-full">
        <div class="w-full h-[300px] md:h-[400px] lg:h-[560px] xl:h-[600px] 2xl:h-[620px] bg-gray-800 rounded-lg flex items-center justify-center">
          <span class="text-white">
            VIDEO PLAYER
          </span>
          <!-- <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->
        </div>

        <div class="text-white text-2xl font-bold mt-4">
          Sample video Title
        </div>
        <div class="flex items-center mb-4 cursor-pointer mt-2">
          <img src="https://placehold.co/400" class="rounded-full w-10 h-10" alt="" />
          <div class="pl-2 text-white">
            <div class="text-lg font-bold flex items-center">
              Channel Name
              <CheckCircle fillcolor="#888888" :size="17" class="ml-2" />
            </div>
            <div class="text-sm text-gray-400">1.4M subscribers</div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-[35%] xl:flex flex-col gap-3 p-3 mt-[20px]">
        <RecomendationCard />
        <RecomendationCard />
        <RecomendationCard />
      </div>
    </div>
  </NavLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavLayout from '../components/NavLayout.vue';
import loader from '../assets/loader.gif';
import CheckCircle from 'vue-material-design-icons/CheckCircle.vue';
import RecomendationCard from '../components/RecomendationCard.vue';

const loading = ref<Boolean>(false);


</script>

<style lang="scss" scoped>

</style>