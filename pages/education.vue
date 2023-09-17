<template>
  <div>
    <div class="mb-8 w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4"><Calendar></Calendar></div>
    <!-- <div>
      <div
        class="text-2xl md:text-3xl font-semibold text-center pt-8 pb-8 px-8"
      >
        Learning Resources For Kids
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 items-stretch xs:px-[18vw] sm:px-[5vw] md:px-[8vw] mmd:px-[12vw] lg:px-[6vw] xl:px-[12vw] 2xl:px-[20vw]"
      >
        <div class="card border border-red-500">
          <img
            src="/images/wudu-kids.png"
            alt="wudu for kids"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Learn to make wudu with dua
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <NuxtLink
                to="https://youtu.be/LZWe0Xh-Hfc?feature=shared"
                target="_blank"
              >
                <button class="btn btn-sm btn-primary">
                  Learn Now <img src="/icons/arrow-right.svg" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/praying-kids.png"
            alt="prayer for kids"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">Learn to Pray salah</div>
            <div class="card-actions justify-end mt-auto pt-4">
              <NuxtLink
                to="https://youtu.be/XG35X4fMmoc?feature=shared"
                target="_blank"
              >
                <button class="btn btn-sm btn-primary">
                  Learn Now <img src="/icons/arrow-right.svg" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/alphabet-kids.png"
            alt="arabic alphabet"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Learn the Arabic alphabet
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <NuxtLink
                to="https://youtu.be/mEwMPZVayG4?feature=shared"
                target="_blank"
              >
                <button class="btn btn-sm btn-primary">
                  Learn Now <img src="/icons/arrow-right.svg" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/prophet-kids.png"
            alt="stories of prophet"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">Stories of the Prophets</div>
            <div class="card-actions justify-end mt-auto pt-4">
              <NuxtLink
                to="https://youtu.be/lZu173pTldI?feature=shared"
                target="_blank"
                ><button class="btn btn-sm btn-primary">
                  Learn Now <img src="/icons/arrow-right.svg" /></button
              ></NuxtLink>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/questions-kids.png"
            alt="why pray alot?"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Got questions about why Muslims pray 5x per day and more?
            </div>
            <div class="card-actions justify-end pt-4 mt-auto">
              <NuxtLink
                to="https://youtu.be/pCJ_FrVqscs?si=VNmaILpDneWT2AzP"
                target="_blank"
                ><button class="btn btn-sm btn-primary">
                  Learn Now <img src="/icons/arrow-right.svg" /></button
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div> -->

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
          class="collapse collapse-open border border-base-300 bg-slate-300 rounded-lg pb-2"
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
                  <img src="/icons/arrow-right.svg" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink :to="entry.link" target="_blank" v-else>
          <button
            class="btn normal-case w-full h-fit p-4 leading-5 bg-slate-300"
          >
            {{ entry.title }} <img src="/icons/arrow-right.svg" />
          </button>
        </NuxtLink>
      </div>

      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 items-stretch xs:px-[18vw] sm:px-[5vw] md:px-[8vw] mmd:px-[12vw] lg:px-[6vw] xl:px-[12vw] 2xl:px-[20vw]"
      >
        <div class="card border border-red-500">
          <img
            src="/images/wudu-adult.png"
            alt="wudu for adults"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Learn to make wudu with dua
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/praying-kids.png"
            alt="prayer for kids"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">Learn to pray</div>
            <div class="card-actions justify-end mt-auto pt-4">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/alphabet-kids.png"
            alt="arabic alphabet"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              More on prayers including ghusl visit
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/prophet-kids.png"
            alt="stories of prophet"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Islamic research and more about Islam at Yaqeen Institute
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <NuxtLink to="https://youtu.be/lZu173pTldI?feature=shared"
                ><button class="btn btn-sm btn-primary">
                  Learn Now <img src="/icons/arrow-right.svg" /></button
              ></NuxtLink>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/questions-kids.png"
            alt="why pray alot?"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Learn about the companions of Prophet Muhammad (SAW)
            </div>
            <div class="card-actions justify-end pt-4 mt-auto">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/questions-kids.png"
            alt="why pray alot?"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              For more Islamic educational content
            </div>
            <div class="card-actions justify-end pt-4 mt-auto">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>
        
      </div> -->
    </div>

    <div>
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
            class="btn normal-case w-full h-fit p-4 leading-5 bg-slate-300"
          >
            {{ entry.title }} <img src="/icons/arrow-right.svg" />
          </button>
        </NuxtLink>
      </div>

      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 items-stretch xs:px-[18vw] sm:px-[5vw] md:px-[8vw] mmd:px-[12vw] lg:px-[6vw] xl:px-[12vw] 2xl:px-[20vw]"
      >
        <div class="card border border-red-500">
          <img
            src="/images/wudu-adult.png"
            alt="wudu for adults"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Learn to make wudu with dua
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/praying-kids.png"
            alt="prayer for kids"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">Learn to pray</div>
            <div class="card-actions justify-end mt-auto pt-4">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/alphabet-kids.png"
            alt="arabic alphabet"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              More on prayers including ghusl visit
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/prophet-kids.png"
            alt="stories of prophet"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Islamic research and more about Islam at Yaqeen Institute
            </div>
            <div class="card-actions justify-end mt-auto pt-4">
              <NuxtLink to="https://youtu.be/lZu173pTldI?feature=shared"
                ><button class="btn btn-sm btn-primary">
                  Learn Now <img src="/icons/arrow-right.svg" /></button
              ></NuxtLink>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/questions-kids.png"
            alt="why pray alot?"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              Learn about the companions of Prophet Muhammad (SAW)
            </div>
            <div class="card-actions justify-end pt-4 mt-auto">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="card border border-red-500">
          <img
            src="/images/questions-kids.png"
            alt="why pray alot?"
            loading="lazy"
            class="rounded-t-2xl h-[200px]"
          />
          <div class="card-body">
            <div class="font-semibold text-center">
              For more Islamic educational content
            </div>
            <div class="card-actions justify-end pt-4 mt-auto">
              <button class="btn btn-sm btn-primary">
                Learn Now <img src="/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>
        
      </div> -->
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
    title: "Educational Content from Br. Mufti Menk",
    link: "https://youtu.be/x84QrnjIu8g?si=VGbVCKdcdHpzZ3nX ",
  },
  {
    title:
      "Islamic podcasts, Arabic lessons, Duas, Quran recitation and memorization and FREE courses",
    link: "https://muslimcentral.com/ ",
  },
];
</script>

<style lang="scss" scoped></style>
