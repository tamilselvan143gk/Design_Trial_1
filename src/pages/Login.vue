<template>
    <section class="bg-gray-200 h-screen px-7">
      <div class="flex justify-between pt-5 text-xl">
          <i class="icon ion-ios-arrow-back font-medium"></i>
          <p class="font-bold">Login</p>
          <p class="w-5"></p>
      </div>
      <div class="mt-10">
        <form action="">
          <div>
              <input class="w-full h-12 outline-none px-5 placeholder:text-gray-500 placeholder:font-medium rounded-lg" placeholder="Email Address" type="email">
          </div>
          <div class="mt-3 bg-white flex rounded-lg">
              <input :type="passwordVisible ? 'text' : 'password'" class="w-full h-12 outline-none px-5 placeholder:text-gray-500 rounded-lg placeholder:font-medium" placeholder="Password">
              <i v-if="!passwordVisible" class="icon ion-md-eye-off cursor-pointer pt-3 pr-3 text-xl" @click="togglePasswordVisibility"></i>
              <i v-if="passwordVisible" class="icon ion-md-eye cursor-pointer pt-3 pr-3 text-xl" @click="togglePasswordVisibility"></i>
          </div>
          <div class="text-right pt-3 text-green-500 font-medium">
            <p>Forgot Password?</p>
          </div>
          <div class="text-center mt-7">
            <button class="bg-green-500 text-white font-medium w-full py-3 rounded-lg">Login</button>
          </div>
          <div class="mt-3 text-center">
            <p class="text-gray-500">Don't have an account? <span class="text-green-500">signup</span></p>
          </div>
        </form>
      </div>
      <div class="flex items-center my-6">
        <hr class="flex-grow border-t border-gray-500">
        <span class="mx-4 text-gray-500">OR</span>
        <hr class="flex-grow border-t border-gray-500">
      </div>
      <div class="">
        <div class="flex mt-10 gap-28 px-5 py-3 bg-white rounded-lg">
            <img src="../../public/img/google.png" height="10" width="30">
            <p class="text-lg">Sign in with Google</p>
        </div>
        <div class="flex mt-10 gap-28 px-5 py-3 bg-white rounded-lg">
            <i class="icon ion-logo-apple text-2xl"></i>
            <p class="text-lg">Sign in with Apple</p>
        </div>
        <div class="flex mt-10 gap-28 px-5 py-3 bg-white rounded-lg">
            <img class="w-5 h-5 mt-1" src="../../public/img/fb.png">
            <p class="text-lg">Sign in with facebook</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Login',
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