<template>
  <h1 class="text-3xl font-bold underline">
    {{message}}
  </h1>
</template>

<script setup>
import {ref} from "vue";
const message=ref('About')
</script>

<style scoped>

</style>