<template>
  <div :class="$style.layout">
    <div :class="windowWidth < 768 ? 'mt-[6rem]' : 'margin-top: 0 '">
      <navDrawer @drawerstate="drawerState" @hidedrawer="hideDrawer"></navDrawer>
    </div>
    <div v-if="hideDrawerTrue">
      <navHeader></navHeader>
    </div>
    <div
      :class="
        drawerStateOpen ? [$style.routerview] : [$style.routerview_closed]
      "
    ></div>
  </div>

  <div>
    <slot> </slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

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
  console.log('hidedrawer', value)
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
