<template>
  <div class="bg-primary">home</div>
</template>

<script setup>
import { onMounted, inject } from "vue";
import { getApps } from "firebase/app";

console.log("home rendered");

onMounted(() => {
  const { $firebaseApp } = useNuxtApp();
  // console.log($firebaseApp);
});
</script>

<style module></style>
