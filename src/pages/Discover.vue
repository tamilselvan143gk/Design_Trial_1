<template>
  <div class="bg-gray-200 px-7 pt-5">
    <div>
      <p class="text-2xl font-medium">Discover</p>
      <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="my-2 mt-5 flex bg-gray-100 gap-3 py-1 px-3 rounded-lg shadow-lg">
      <i class="icon ion-ios-search text-2xl pt-1 text-gray-500"></i>
      <input class="h-10 w-full outline-none bg-gray-100 placeholder:text-gray-500" type="search" name="search" placeholder="Search classes or mentor ">
    </div>
    <Interest class="grid grid-cols-2 gap-x-3 gap-y-1"></Interest>
    <div class="mt-5 pb-20">
      <p class="font-medium">Popular Mentors</p>
      <p class="text-sm">Lorem ipsum dolor sit amet</p>
      <div class="flex flex-nowrap overflow-x-scroll gap-3 pt-3">
        <div v-for="mentor in mentors" :key="mentor" class="pb-3">
          <img :src="mentor.img" class="h-32 min-w-32 object-cover rounded-xl">
          <div>
            <p class="text-base">{{ mentor.name }}</p>
            <p class="text-xs">{{ mentor.subject }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Interest from '@/components/Interest.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Interest, Footer },
  name: 'Discover',
  data() {
    return {
      mentors: [
        { name: 'Walter White', img: '../../public/img/team-1.jpg', subject: 'Chemistry' },
        { name: 'Maxine', img: '../../public/img/team-2.jpg', subject: 'Psychologist' },
        { name: 'Dustin', img: '../../public/img/team-3.jpg', subject: 'Science' },
        { name: 'Nancy Wheelar', img: '../../public/img/team-4.jpg', subject: 'Photographer' },
      ]
    }
  },
}
</script>