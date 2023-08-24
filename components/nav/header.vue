<template>
  <div
    :class="$style.header"
    class="hidden sm:flex sm:justify-between bg-red-200"
  >
    <div
      class="hover:border-primary hover:border-b-4 hover:-mb-[4px] hover:scale-125 transition-transform"
    >
      Home
    </div>
    <div
      class="hover:border-primary hover:border-b-4 hover:-mb-[4px] hover:scale-125 transition-transform"
    >
      Events
    </div>
    <div
      class="hover:border-primary hover:border-b-4 hover:-mb-[4px] hover:scale-125 transition-transform"
    >
      Learn
    </div>
    <div
      class="hover:border-primary hover:border-b-4 hover:-mb-[4px] hover:scale-125 transition-transform"
    >
      Donate
    </div>
    <div
      class="hover:border-primary hover:border-b-4 hover:-mb-[4px] hover:scale-125 transition-transform"
    >
      Login
    </div>
  </div>
</template>

<script setup>
console.log("header rendered");
</script>

<style module>
.header {
  padding: 2rem 2rem 2rem 20vw;
}

.header > div {
  /* outline: 1px solid black; */
  padding: 0.5rem 3vw 0.5rem 3vw;
}
</style>
