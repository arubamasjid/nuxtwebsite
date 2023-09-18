<template>
  <div>
    <!-- <ContentDoc path="/events/masjidopening" class="masjid prose p-10">
  </ContentDoc> -->
    <ContentRenderer :value="masjidOpeningData">
      <ContentRendererMarkdown
        :value="masjidOpeningData"
        class="prose prose-base max-w-none w-[90%] md:w-[60%] shadow-xl mx-auto mt-12 mb-16 p-12"
      ></ContentRendererMarkdown>
    </ContentRenderer>

    <div class="pt-16 pb-24 bg-yellow-200">
      <div class="text-3xl font-bold pb-12 text-center">Browse Events</div>

      <div class="flex dropdown justify-center mb-8">
        <label tabindex="0" class="btn m-1 bg-primary">Filter Events</label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          ref="filter"
        >
          <li
            class="p-2 hover:cursor-pointer hover:bg-base-300"
            @click="sortPast"
          >
            Past Events
          </li>
          <li
            class="p-2 hover:cursor-pointer hover:bg-base-300"
            @click="sortUpcoming"
          >
            Upcoming Events
          </li>
          <li
            class="p-2 hover:cursor-pointer hover:bg-base-300"
            @click="sortAll"
          >
            All Events
          </li>
        </ul>
      </div>

      <div
        class="grid auto-cols-max grid-cols-1 xs:w-[80%] sm:w-[60%] md:grid-cols-2 md:w-[80%] mmd:w-[70%] lg:grid-cols-3 lg:w-[80%] xl:w-[60%] mx-auto gap-8 px-8 items-stretch"
      >
        <div
          v-for="article in articles"
          :key="article.title"
          class="card shadow-lg bg-white"
        >
          <div class="card-body text-center justify-center">
            <div class="card-title justify-center mb-auto pb-2">
              {{ article.title }}
            </div>

            <div class="mb-auto">
              {{ article.description }}
            </div>

            <div class="card-actions justify-end pt-4">
              <NuxtLink :to="article._path">
                <button class="btn btn-primary btn-sm">
                  Read <img src="/icons/arrow-right.svg" /></button
              ></NuxtLink>
            </div>
          </div>
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
  queryContent("events")
    .where({ title: "Masjid Official Opening Event" })
    .findOne()
);

const masjidOpeningData = getMasjidOpeningQuery.data;

console.log("masjid data", masjidOpeningData);

const getAllArticlesQuery = await useAsyncData("allarticles", () =>
  queryContent("events").sort({ date: -1 }).find()
);

let articles = ref([]);

const allArticles = getAllArticlesQuery.data;
console.log("all articles", allArticles.value);
articles.value = allArticles.value;

let pastArticles = [],
  upcomingArticles = [];

const filter = ref();

function closeFilter() {
  filter.value.blur();
}

const dateToday = new Date();
console.log(dateToday);

function sortPast() {
  if (pastArticles.length > 0) {
    pastArticles = [];
  }
  for (const article of allArticles.value) {
    let tempDate = new Date(article.date);
    console.log(tempDate, dateToday);
    if (tempDate < dateToday) {
      console.log("past event");
      pastArticles.push(article);
    }
  }
  articles.value = Array.from(pastArticles);
  console.log(articles);
  closeFilter();
}

function sortUpcoming() {
  if (upcomingArticles.length > 0) {
    upcomingArticles = [];
  }
  for (const article of allArticles.value) {
    let tempDate = new Date(article.date);
    if (tempDate >= dateToday) {
      console.log("upcoming event");
      upcomingArticles.push(article);
    }
  }
  console.log(articles.value);
  articles.value = Array.from(upcomingArticles);
  closeFilter();
}

function sortAll() {
  articles.value = allArticles.value;
  closeFilter();
}
</script>

<style scoped>
.masjid:deep(table) {
  color: red;
}
</style>
