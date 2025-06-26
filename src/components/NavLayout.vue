<template>
  <div class="relative top-0">
    <div class="w-[100%] h-[60px] fixed bg-black z-20 flex items-center justify-between" id="TopNav">
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

    <!--Main Navigation-->
    <div v-if="!isMobile"
      class="h-[100%] fixed bg-black z-0" id="SideNav"
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
          <div class="border-b border-b-gray-700 my-2.5"></div>
          <div class="text-gray-400 text-[14px] font-extrabold">
            Terms Privacy Policy & Safety
            <div class="">How YouTube works</div>
          </div>
        </div>
      </ul>
    </div>

    <!--Mobile Navigation-->
    <div class="fixed inset-0 z-40 bg-black w-[240px] top-[55px] h-full transition-transform duration-300"v-if="openSideNav && isMobile">
      <ul class="mt-[20px] w-full px-5 pb-2 pt-[7px]">
        <div class="flex items-center rounded-full bg-[#222222] mb-3">
          <input type="text"
          v-model="searchText"
          class="form-control w-full text-gray-200 px-5 py-1.5 bg-black placeholder-gray-400 rounded-l-full"
          placeholder="Search..."/>
          <div class="mx-6 cursor-pointer flex item-center">
            <MagnifyIcon fillcolor="#ffffff" :size="23"/>
          </div>
        </div>
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
          <div class="border-b border-b-gray-700 my-2.5"></div>
          <div class="text-gray-400 text-[14px] font-extrabold">
            Terms Privacy Policy & Safety
            <div class="">How YouTube works</div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
  import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
  import { computed, ref } from 'vue';
  import SideNavItem from './SideNavItem.vue';

  const openSideNav = ref(false);
  const tonggleSideNav = () => {
    openSideNav.value = !openSideNav.value;
  }

  const isMobile = computed(() => {
    return window.innerWidth < 768;
  });

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

  const searchText = ref('');
</script>

<style lang="scss" scoped>

</style>