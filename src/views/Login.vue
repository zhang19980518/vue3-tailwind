<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <!-- Login left banner -->
    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="../assets/bg.jpg" class="w-full h-full object-cover" alt="">
    </div>
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
      <div class="w-full h-100">
        <h1 class="text-xl font-bold">Tailwind 登录页面</h1>
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log to your account</h1>
        <login-comp></login-comp>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import LoginComp from "../components/LoginComp.vue";



</script>

<style scoped>

</style>