<template>
  <div class="bg-gray-200 px-7 pt-5 pb-24">
    <div class="flex gap-36">
      <i class="icon ion-ios-arrow-back text-2xl" @click="goBack"></i>
      <p class="text-lg">LearningActivity</p>
    </div>
    <div class="bg-white mx-4 mt-10 p-4 rounded-xl shadow-md">
      <div class="flex justify-between">
        <p>Weekly Session</p>
        <div class="flex gap-2 text-sm bg-green-100 text-green-600 font-medium py-1 px-2 rounded-full">
          <p>See all</p>
          <i class="icon ion-ios-arrow-forward"></i>
        </div>
      </div>
      <div class="flex justify-between mt-5">
        <div v-for="session in sessions" :key="session" class="text-center">
          <p class="text-sm pb-2">{{ session.day }}</p>
          <div class="h-7 w-7 bg-gray-200 rounded-full" :class="{ 'bg-green-500 h-7 w-7 rounded-full': session.day === 'W' || session.day === 'Sa' }"></div>
        </div>
      </div>
    </div>
    <div class="mt-7">
      <p>This Week</p>
      <div class="bg-white mt-2 p-5">
        <div v-for="thisWeek in thisWeeks" :key="thisWeek" class="mb-3">
          <div class="flex gap-5">
            <div class="text-sm font-medium text-gray-500">
              <p>{{ thisWeek.date }}</p>
              <p class="text-xs">{{ thisWeek.month }}</p>
            </div>
            <div>
              <p class="text-sm font-medium">{{ thisWeek.day }}</p>
              <p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="mt-5">
            <img :src="thisWeek.img" class="w-full h-52 rounded-xl">
          </div>
          <div class="flex justify-between">
            <div class="flex gap-5 mt-3">
              <div>
                <i class="icon ion-md-contact text-5xl"></i>
              </div>
              <div>
                <p class="font-medium">Tamilselvan</p>
                <p class="text-xs">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div class="mt-5">
              <p class="text-sm font-medium bg-green-100 text-green-500 py-1 px-3 rounded-full">Event Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import { mixins } from '@/utils/mixins';

export default {
  components: { Footer },
  name: 'LearningActivty',
  mixins: [ mixins ],
  data() {
    return {
      sessions: [
        { day: 'M' },
        { day: 'Tu' },
        { day: 'W' },
        { day: 'Th' },
        { day: 'F' },
        { day: 'Sa' },
        { day: 'Su' },
      ],
      thisWeeks: [
        { date: 22, month: 'May', day: 'Wednesday', img: '../../public/img/photography.jpg' },
        { date: 25, month: 'May', day: 'Saturday', img: '../../public/img/camera_handling.jpg' },
      ]
    }
  },
}
</script>