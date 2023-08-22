<template>
  <div
    :class="hideDrawer ? 'opacity-0' : [$style.menu_icon]"
    @click="toggleDrawer"
  ></div>
  <div
    :class="[
      $style.drawer,
      drawerState ? $style.drawer_open : $style.drawer_closed,
    ]"
  >
    <div :class="$style.links">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div @click="toggleDrawer">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";

const emit = defineEmits(["drawerstate", "hidedrawer"]);

let drawerState = ref(false);
let hideDrawer = ref();

function toggleDrawer() {
  drawerState.value = !drawerState.value;
  console.log("toggle");
  emit("drawerstate", drawerState.value);
}

function setToggleOnResize() {
  if (window.innerWidth >= 768) {
    hideDrawer.value = true;
    drawerState.value = false;
  } else hideDrawer.value = false;

  emit("hidedrawer", hideDrawer.value);
}

if (process.client) {
  window.addEventListener("resize", setToggleOnResize);
}

// console.log("drawer");

onMounted(() => {
  setToggleOnResize();
});
</script>

<style module>
.drawer {
  background-color: aquamarine;
  position: absolute;
  top: 0;
  left: 0;
}
.drawer_open {
  display: flex;
  flex-direction: column;
  width: min(100%, 300px);
  height: 100vh;
  transition: transform, 0.3s ease-in, box-shadow, 0.3s ease-in;
  box-shadow: 2px 0px 10px 0px rgb(208, 200, 200);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.drawer_closed {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  transform: translateX(-300px);
  transition: transform, 0.3s ease-out, box-shadow, 0.3s ease-out;
}

.menu_icon {
  background-image: url("/icons/menu.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px;
  background-color: none;
  position: absolute;
  left: 25px;
  top: 20px;
}

.menu_icon:hover {
  cursor: pointer;
}

.links {
  padding: 20px;
  padding-top: 60px;
  border: 1px solid red;
}

.links div {
  padding: 20px;
}

.links > div:last-child {
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-left: 120px;
  padding-right: 120px;
}

.links > div:last-child > div {
  background-image: url("/icons/arrow-back.svg");
  background-size: cover;
  background-repeat: repeat;
  padding: 30px;
}

.links > div:last-child:hover {
  border-bottom-right-radius: 10px;
  outline: 2px solid aqua;
  cursor: pointer;
}
</style>
