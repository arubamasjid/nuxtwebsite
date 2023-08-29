<template>
  <div :class="$style.header" class="hidden sm:flex pt-sm:justify-between">
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/">
        <span
          class="xl:pl-[3vw] xl:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Home</span
        >
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/events">
        <span
          class="xl:pl-[3vw] xl:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Events</span
        >
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/education">
        <span
          class="xl:pl-[3vw] xl:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Learn
        </span>
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/charity/admin">
        <span
          class="xl:pl-[3vw] xl:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Charity</span
        >
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center"
    >
      <NuxtLink to="/contact">
        <span
          class="xl:pl-[3vw] xl:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Contact</span
        >
      </NuxtLink>
    </div>
    <div
      class="hover:-mb-[4px] hover:scale-125 transition-transform text-center hover:cursor-pointer"
    >
      <NuxtLink to="/auth/login">
        <span
          class="xl:pl-[3vw] xl:pr-[3vw] pt-2 pb-2 hover:border-primary hover:border-b-4"
          >Login</span
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
console.log("header rendered");
</script>

<style module>
.header {
  padding: 2rem 2rem 2rem 2rem;
}

.header > div {
  /* outline: 1px solid black; */
  padding: 0.5rem 3vw 0.5rem 3vw;
  z-index: 10;
  width: 100%;
}
</style>
