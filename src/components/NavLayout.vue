<template>
  <div class="relative top-0">
    <div class="w-[100%] h[60px] fixed bg-black z-20 flex items-center justify-between" id="TopNav">
      <div class="flex items-center">
        <button class="p-2 ml-3 rounded-full hover:bg-gray-500 cursor-pointer" @click="tonggleSideNav">
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
    <div class="h-[100%] fixed bg-black z-0" id="SideNav"
      :class="[!openSideNav ? 'w-[70px]' : 'w-[240px]'], 'hidden sm:block'">
      <ul class="sm:mt-[60px] mt-[30px] w-full" :class="[!openSideNav? 'p-2': 'px-5 pb-2 pt-[7px]']">
        <SideNavItem v-for="(item, index) in SideNavItems" :key="index" :openSideNav="openSideNav" :iconString="item.iconString"/>
        <div class="border-b border-b-gray-700 my-2.5"></div>
        <SideNavItem v-for="(item, index) in SideNavItems2" :key="index" :openSideNav="openSideNav" :iconString="item.iconString"/>
        <div class="" v-if="openSideNav">
          <div class="border-b border-b-gray-700 my-2.5"></div>
          <div class="text-gray-400 text-[14px] font-extrabold">
            More from YouTube
            <div class="">Contact us</div>
            Creator Advertise Developers
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
  import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
  import { ref } from 'vue';
  import SideNavItem from './SideNavItem.vue';

  const openSideNav = ref(false);
  const tonggleSideNav = () => {
    openSideNav.value = !openSideNav.value;
  }

  const SideNavItems = [
    { iconString: 'Home' },
    { iconString: 'Trending' },
    { iconString: 'Gaming' },
    { iconString: 'Music' },
    { iconString: 'News' }
  ];

  const SideNavItems2 = [
    { iconString: 'Subscription' },
    { iconString: 'Library' },
    { iconString: 'Liked' },
    { iconString: 'History' }
  ];
</script>

<style lang="scss" scoped>

</style>