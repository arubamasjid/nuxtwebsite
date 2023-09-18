<template>
  <main>
    <!-- <ContentDoc class="prose p-6 masjid"></ContentDoc> -->
    <ContentRenderer :value="data">
      <template #empty>
        <p>Something went wrong getting this article</p></template
      >
      <ContentRendererMarkdown
        :value="data"
        class="prose p-12 mt-12 mb-16 masjid max-w-none md:w-[60%] mx-auto shadow-xl"
      >
      </ContentRendererMarkdown>
    </ContentRenderer>
  </main>
</template>

<script setup>
const path = useRoute().fullPath;
console.log(path);

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

console.log(data, "test");
</script>

<style scoped>
.masjid:deep(table) {
  color: red;
}
</style>
