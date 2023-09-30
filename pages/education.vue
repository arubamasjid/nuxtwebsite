<template>
  <div>
    <div class="mb-8 w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4">
      <Calendar></Calendar>
    </div>

    <div class="mb-8">
      <div
        class="text-2xl md:text-3xl font-semibold text-center pt-8 pb-8 px-8"
      >
        Learning Resources For Kids
      </div>

      <div
        v-for="entry in kids"
        :key="entry.title"
        :to="entry.link"
        class="w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4"
      >
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 bg-amber-100 rounded-lg pb-2"
          v-if="Array.isArray(entry.link)"
        >
          <div class="p-4 text-sm font-semibold text-center">
            {{ entry.title }}
          </div>
          <div
            class="collapse-content flex flex-col items-center md:flex-row gap-8 justify-center"
          >
            <div v-for="(link, index) in entry.link" :key="entry.title">
              <NuxtLink :to="link" target="_blank">
                <div
                  class="flex gap-2 text-sm font-semibold ring-2 ring-slate-600 pl-2 pr-2 pt-1 pb-1 rounded-sm"
                >
                  <span> {{ entry.slug[index] }} </span>
                  <img src="/icons/arrow-right.svg" alt="arrow-right" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink :to="entry.link" target="_blank" v-else>
          <button
            class="btn normal-case w-full h-fit p-4 leading-5 bg-amber-100"
          >
            {{ entry.title }} <img src="/icons/arrow-right.svg" alt="arrow-right" />
          </button>
        </NuxtLink>
      </div>
    </div>

    <div class="mb-16">
      <div
        class="text-2xl md:text-3xl font-semibold text-center pt-8 pb-8 px-8"
      >
        Learning Resources For Adults
      </div>

      <div
        v-for="entry in adults"
        :key="entry.title"
        :to="entry.link"
        class="w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4"
      >
        <NuxtLink :to="entry.link" target="_blank">
          <button
            class="btn normal-case w-full h-fit p-4 leading-5 bg-amber-100"
          >
            {{ entry.title }} <img src="/icons/arrow-right.svg" alt="arrow-right" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const kids = [
  {
    title: "Learn to make wudu with dua",
    link: [
      "https://youtu.be/LZWe0Xh-Hfc?feature=shared",
      "https://youtu.be/ygKwEMilawk?feature=shared ",
    ],
    slug: ["Learn with Amina", "Learn with Zain"],
  },
  {
    title: "Learn to pray salah",
    link: [
      " https://youtu.be/XG35X4fMmoc?feature=shared ",
      "https://youtu.be/_-qGjf2xvPI?feature=shared ",
    ],
    slug: ["Learn with Amina", "Learn with Zain"],
  },
  {
    title: "Learn the Arabic alphabet",
    link: "https://youtu.be/mEwMPZVayG4?feature=shared ",
  },
  {
    title: "Stories of the Prophets",
    link: "https://youtu.be/lZu173pTldI?feature=shared ",
  },
  {
    title: "Got questions about why Muslims pray 5 times per day and more?",
    link: "https://youtu.be/pCJ_FrVqscs?si=VNmaILpDneWT2AzP ",
  },
];

const adults = [
  {
    title: "Learn to make wudu with dua",
    link: "https://youtu.be/CO5O3JBjgGI?si=pBRySikiRJ1p4fqX ",
  },
  {
    title: "Learn to pray",
    link: "https://youtu.be/zalLv2NY98k?si=RFwKtK-qBLSE2QlS ",
  },
  {
    title: "More information on prayers, including ghusl",
    link: "https://prayerinislam.com/e-books-on-prayer/an-introduction-to-prayer-in-islam/ ",
  },
  {
    title:
      "Find Islamic Research and much more about Islam at Yaqeen Institute for Islamic Research",
    link: "https://yaqeeninstitute.ca/ ",
  },
  {
    title: "Learn about the companions of Prophet Muhammad (SAW) ",
    link: "https://youtu.be/vJH3-g-h3ak?si=GYymcu-yQCJOMxOP ",
  },
  {
    title: "Educational Content from Br. Shazaman Karmoeddien",
    link: "https://youtu.be/9voCVK0EfT8?feature=shared ",
  },
  {
    title: "Educational Content from Mufti Menk",
    link: "https://youtu.be/x84QrnjIu8g?si=VGbVCKdcdHpzZ3nX ",
  },
  {
    title:
      "Islamic podcasts, Arabic lessons, Duas, Quran recitation and memorization and FREE courses",
    link: "https://muslimcentral.com/ ",
  },
];

useSeoMeta({
  title: "Learn Islam with Aruba Islamic Foundation",
  ogTitle: "Learn Islam with Aruba Islamic Foundation",
  description:
    "Learn about Islam with our educational resources, for both kids and adults. Learn to pray, make dua, learn arabic, find research and more",
  ogDescription:
    "Learn about Islam with our educational resources, for both kids and adults.",
});
</script>

<style lang="scss" scoped></style>
