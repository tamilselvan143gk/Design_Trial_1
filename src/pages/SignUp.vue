<template>
    <section class="bg-gray-200 h-screen px-7">
      <div class="flex justify-between pt-5 text-xl">
          <i class="icon ion-ios-arrow-back font-medium"></i>
          <p class="font-bold">Sign Up</p>
          <p class="w-5"></p>
      </div>
      <div class="mt-10">
        <form action="">
          <div>
              <input class="w-full h-12 outline-none px-5 placeholder:text-gray-500 placeholder:font-medium rounded-lg" placeholder="User Name" type="text">
          </div>
          <div>
              <input class="w-full h-12 outline-none px-5 placeholder:text-gray-500 placeholder:font-medium rounded-lg mt-3" placeholder="Email Address" type="email">
          </div>
          <div class="mt-3 bg-white flex rounded-lg">
              <input :type="passwordVisible ? 'text' : 'password'" class="w-full h-12 outline-none px-5 placeholder:text-gray-500 rounded-lg placeholder:font-medium" placeholder="Password">
              <i v-if="!passwordVisible" class="icon ion-md-eye-off cursor-pointer pt-3 pr-3 text-xl" @click="togglePasswordVisibility"></i>
              <i v-if="passwordVisible" class="icon ion-md-eye cursor-pointer pt-3 pr-3 text-xl" @click="togglePasswordVisibility"></i>
          </div>
          <div class="mt-3 ml-2 flex gap-4">
            <input class="h-4 w-4 mt-1 accent-green-500" type="checkbox">
            <p class="text-gray-500">By creating an account, you agree our <span class="text-green-500">terms</span> and <span class="text-green-500">condition</span></p>
          </div>
          <div class="text-center mt-7">
            <button class="bg-green-500 text-white font-medium w-full py-3 rounded-lg">Login</button>
          </div>
          <div class="mt-3 text-center">
            <p class="text-gray-500">Already have an account? <span class="text-green-500">login</span></p>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        passwordVisible: false
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
      }
    }
  }
  </script>