<template>
  <div>events</div>
  <ContentRenderer
    v-for="event in events"
    :key="event.title"
    :value="event"
    class="w-[80%] mx-auto prose"
  ></ContentRenderer>
</template>

<script setup>
const { data } = await useAsyncData("events", () =>
  queryContent("events").find()
);

const events = data;
console.log("events", events.value);
</script>

<style scoped>
::v-deep table {
  color: red;
}
</style>
