<template>
  <footer class="mt-5 flex justify-around py-5 shadow-xl bg-white fixed bottom-0 left-0 right-0 max-w-[500px] mx-auto">
    <router-link v-for="link in links" :key="link.name" :to="{ name: link.name }" :class="{ 'text-green-500': shouldHighlight(link) }">
    <i class="text-2xl" :class="[ link.icon ]"></i>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [
        { name: 'Home', icon: 'icon ion-md-home' },
        { name: 'Discover', icon: 'icon ion-ios-book' },
        { name: 'LearningActivity', icon: 'icon ion-ios-timer' },
        { name: 'MessageBox', icon: 'icon ion-ios-chatbubbles' },
      ]
    }
  },

  methods: {
    shouldHighlight(link) {
      return this.$route.name === link.name;
    }
  }
}
</script>