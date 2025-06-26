<template>
  <div>
    <!-- <NavLayout /> -->
     <!-- <router-link to="/home">
      <h1 class="text-3xl font-bold underline">
        Home Page
      </h1>
    </router-link> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import router from './Router/index';
</script>

<style lang="sass" scoped>

</style>