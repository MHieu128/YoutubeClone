<template>
  <div class="relative top-0">
    <div class="w-[100%] h[60px] fixed bg-black z-20 flex items-center justify-between" id="TopNav">
      <div class="flex items-center">
        <button class="p-2 ml-3 rounded-full hover:bg-gray-500 cursor-pointer">
          <MenuIcon fillcolor="#ffffff" :size="26"/>
        </button>
        <div class="mx-2"></div>
        <div class="flex items-center text-white cursor-pointer">
          <h3>YouTube</h3>
        </div>
      </div>
      <div class="w-[600px] hidden md:block">
        <div class="rounded-full flex items-center bg-[#222222]">
          <input
          type="text"
          class="form-control w-full text-gray-200 px-5 py-1.5 bg-[#1a1a1a] placeholder-gray-400 rounded-l-full"
          placeholder="Search..."/>
          <div class="mx-6 cursor-pointer flex item-center">
            <MagnifyIcon fillcolor="#ffffff" :size="23"/>
          </div>
        </div>
      </div>
      <div class="">
        <img src="https://placehold.co/400" class="rounded-full mx-8" width="35" alt="Profile"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
  import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
</script>

<style lang="scss" scoped>

</style>