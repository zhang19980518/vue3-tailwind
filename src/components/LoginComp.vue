<template>
  <form class="mt-6" action="#" method="post">
    <div>
      <label class="block text-gray-700">Email Addressm</label>
      <input
          class="w-full bg-white-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"
          autocomplete autofocus required type="email" placeholder="Enter Email Address">
    </div>

    <div class="mt-4">
      <label class="block text-gray-700">Password</label>
      <input type="password" minlength="6" placeholder="Enter Password" name=""
             class="w-full bg-white-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"
             required>
    </div>

    <div class="text-right mt-2">
      <a href="#"
         class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none">忘记密码</a>
    </div>

    <button @click="onLogin"
            class="w-full block bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
            type="submit">登录
    </button>
    <button
        class="w-full block bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
        type="submit">注册
    </button>
    <!--    <hr class="my-6 border-gray-300 w-full">-->
    <!--    <button type="button" class="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border">-->
    <!--      <div class="flex items-center justify-center">-->
    <!--        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>-->
    <!--        <span class="ml-4">Log in with Google</span>-->
    <!--      </div>-->
    <!--    </button>-->
    <!--    <p class="mt-8">-->
    <!--      Need an account?-->
    <!--      <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Create an account </a>-->
    <!--    </p>-->
    <p class="text-sm block text-gray-500 mt-48">
      &copy; 2021 Tailwind Login Landing Page
    </p>
  </form>
</template>

<script setup>
import {ref} from "vue";

const onLogin = (() => {
  ElMessage.success("登录成功")
})
</script>

<style scoped>

</style>