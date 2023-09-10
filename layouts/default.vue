<template>
  <div>
    <navDrawer @drawerstate="drawerState" @hidedrawer="hideDrawer"></navDrawer>
    <navHeader></navHeader>

    <slot> </slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const route = useRoute();
useHead({
  meta: [{ property: "og:title", content: `App Name - ${route.meta.title}` }],
});

let drawerStateOpen = ref();
let hideDrawerTrue = ref();
let windowWidth = ref();

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    console.log(windowWidth.value);
  }
});

function drawerState(value) {
  console.log("drawerstate", value);
  drawerStateOpen.value = value;
}

function hideDrawer(value) {
  console.log("hidedrawer", value);
  hideDrawerTrue.value = value;
}

function getWindowWidth() {
  windowWidth.value = window.innerWidth;
  // console.log(windowWidth.value);
}

if (process.client) {
  window.addEventListener("resize", getWindowWidth);
}
</script>

<style module>
.drawer {
  margin-top: calc(6rem);
}
</style>
