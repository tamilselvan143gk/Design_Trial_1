<template>
  <section class="bg-gray-200 px-7 pb-20">
    <div class="py-5 flex justify-between">
      <div>
        <p class="font-bold text-2xl">Welcome, {{ userName }}</p>
        <p class="text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet</p>
      </div>
      <div class="flex gap-10 mt-2">
        <i class="icon ion-md-notifications text-2xl text-gray-700"></i>
        <i class="icon ion-md-contact text-4xl -mt-2 text-gray-700"></i>
      </div>
    </div>
    <DashboardSearch></DashboardSearch>
    <interest class="flex flex-nowrap overflow-x-scroll gap-5"></interest>
    <RecentClasses></RecentClasses>
    <RecommentedClasses></RecommentedClasses>
    <Footer></Footer>
  </section>
</template>

<script>
import DashboardSearch from '@/components/DashboardSearch.vue';
import Interest from '@/components/Interest.vue';
import RecentClasses from '@/components/RecentClasses.vue';
import RecommentedClasses from '@/components/RecommentedClasses.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: { DashboardSearch, Interest, RecentClasses, RecommentedClasses, Footer },
  data() {
    return {
      userName: 'Tamilselvan'
    }
  },
}
</script>