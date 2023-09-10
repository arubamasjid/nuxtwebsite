<template>
  <div
    :class="$style.menu_icon"
    class="opacity-100 sm:opacity-0 sm:pointer-events-none"
    @click="toggleDrawer"
  ></div>
  <div
    :class="[
      $style.drawer,
      drawerState ? $style.drawer_open : $style.drawer_closed,
    ]"
  >
    <div :class="$style.links">
      <div
        class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"
      >
        Home
      </div>
      <div
        class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"
      >
        Events
      </div>
      <div
        class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"
      >
        Learn
      </div>
      <div
        class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"
      >
        About
      </div>
      <div
        class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg text-center"
      >
        Contact
      </div>
      <div @click="toggleDrawer">
        <div
          class="hover:border-b-4 hover:-mb-[4px] hover:border-primary text-lg hover:scale-125 transition-transform"
        ></div>
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
  @apply bg-slate-200;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
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
  z-index: 10;
}

.menu_icon:hover {
  cursor: pointer;
}

.links {
  padding: 20px;
  padding-top: 60px;
}

.links div {
  padding: 20px;
}

.links > div:last-child {
  position: absolute;
  bottom: 50px;
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
  cursor: pointer;
}
</style>
