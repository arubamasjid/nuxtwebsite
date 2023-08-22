<template>
  <div :class="$style.header" class="bg-red-200">
    <div>Home</div>
    <div>Events</div>
    <div>Learn</div>
    <div>Donate</div>
    <div>Login</div>
  </div>
</template>

<script setup>
console.log("header rendered");
</script>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 20vw;
}

.header > div {
  /* outline: 1px solid black; */
  padding: 0.5rem 3vw 0.5rem 3vw;
}
</style>
