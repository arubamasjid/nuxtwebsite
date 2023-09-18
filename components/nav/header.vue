<template>
  <div
    :class="[
      $style.header,
      route == '/'
        ? 'hidden pointer-events-none sm:flex sm:justify-between sm:pointer-events-auto text-white'
        : 'opacity-0 pointer-events-none flex flex-nowrap sm:pointer-events-auto sm:opacity-100 p-10 sm:justify-between text-black ',
    ]"
  >
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/">
        <span
          class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Home</span
        >
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/events">
        <span
          class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Events</span
        >
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/education">
        <span
          class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Learn
        </span>
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/about">
        <span
          class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >About
        </span>
      </NuxtLink>
    </div>

    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/contact">
        <span
          class="sm:pl-[3vw] sm:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Contact</span
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
console.log("header rendered");
const router = ref(useRouter());
const route = ref();

watchEffect(() => {
  console.log(router.value.currentRoute.fullPath);
  route.value = router.value.currentRoute.fullPath;
  console.log("route", route.value);
});
</script>

<style module>
.header {
  padding: 2rem 2rem 2rem 2rem;
  z-index: 10;
}

.header > div {
  /* outline: 1px solid black; */
  padding: 0.5rem 3vw 0.5rem 3vw;
  z-index: 10;
  width: 100%;
}
</style>
