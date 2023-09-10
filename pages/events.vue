<template>
  <div>
    <!-- <ContentDoc path="/events/masjidopening" class="masjid prose p-10">
  </ContentDoc> -->
    <ContentRenderer :value="masjidOpeningData">
      <ContentRendererMarkdown
        :value="masjidOpeningData"
        class="prose prose-base max-w-none md:w-[60%] md:shadow-xl mx-auto mt-12 p-12"
      ></ContentRendererMarkdown>
    </ContentRenderer>

    <div class="pt-24 pb-24 pl-8 pr-8">
      <div class="text-3xl font-bold pb-12 text-center">Browse Articles</div>
      <div
        class="flex flex-col items-center text-center md:justify-around md:flex-row"
      >
        <div v-for="article in allArticles" :key="article.title">
          <NuxtLink :to="article._path">
            <div
              class="card border-2 border-primary p-4 m-4 w-[20vw] h-[200px] shadow-lg bg-white"
            >
              <div class="card-title mx-auto text-primary font-semibold">
                {{ article.title }}
              </div>
              <div class="card-body font-semibold">
                {{ article.description }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- <ContentRenderer
    v-for="event in events"
    :key="event.title"
    :value="event"
    class="w-[80%] mx-auto prose masjid"
  ></ContentRenderer> -->
  </div>
</template>

<script setup>
const getMasjidOpeningQuery = await useAsyncData("masjidopening", () =>
  queryContent("events").where({ title: "Masjid Opening" }).findOne()
);

const masjidOpeningData = getMasjidOpeningQuery.data;

const getAllArticlesQuery = await useAsyncData("allarticles", () =>
  queryContent("events").find()
);

const allArticles = getAllArticlesQuery.data;
//console.log(allArticles);

// const events = data;
// console.log("events", events.value);
</script>

<style scoped>
.masjid:deep(table) {
  color: red;
}
</style>
