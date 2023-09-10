<template>
  <NuxtLayout> <NuxtPage></NuxtPage> </NuxtLayout>
</template>

<script setup>
console.log("app.vue");
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
