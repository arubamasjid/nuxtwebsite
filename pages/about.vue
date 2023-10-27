<template>
  <div class="mb-16">
    <div class="image-grid h-fit gap-4 p-4 xs:p-8">
      <div class="item-1 flex"><img src="/images/about/1.jpeg" width="100%" height="100%"></div>
      <div class="item-2 flex"><img src="/images/about/2.jpeg" width="100%" height="100%"></div>
      <div class="item-3 flex"><img src="/images/about/3.jpeg" width="100%" height="100%"></div>
      <div class="item-4 flex"><img src="/images/about/4-alt.jpeg" width="100%" height="100%"></div>
      <div class="item-5 flex"><img src="/images/about/7.jpeg" width="100%" height="100%"></div>
    </div>

    <div class="px-8">
      <p class="my-4 font-medium"> "Guided by Faith, United in Community". </p>

      <p class="my-4 font-medium"> The labor of love continued as we witnessed the mosque's growth, brick by brick, pillar
        by pillar.
        The
        dedication
        of
        countless volunteers and the generosity of our community made this vision a reality.
        Our journey began with a dream, fueled by the profound sense of community and spirituality that binds us together.
        In the early stages of construction, we laid the foundation upon which this sacred place now rests.
      </p>

      <p class="my-4 font-medium"> As we approached the final stages of construction, our excitement and gratitude knew no
        bounds. The
        completion
        of
        our mosque is a testament to the strength of our faith and the unity of our community.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 xs:p-8">
      <div class="flex"><img src="/images/about/5.jpg" width="100%" height="80%"></div>
      <div class="flex"><img src="/images/about/6.jpg" width="100%" height="100%"></div>
    </div>

    <div>
      <div class="text-center text-2xl font-bold py-8"> OUR MISSION </div>
      <div class="grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 md:grid-cols-4 md:grid-rows-none">
        <div class="px-8 py-8">
          <div class="pb-2 w-20">
            <img src="/images/about/peace.svg" width="100%">
          </div>
          <div class="font-bold text-lg pb-2">Promoting Peace</div>
          Our mosque serves as a hub for peaceful dialogue, understanding, and community outreach, where people from all
          walks of life are welcome.
        </div>
        <div class="px-8 py-8">
          <div class="pb-2 w-20">
            <img src="/images/about/growth.svg" width="100%">
          </div>
          <div class="font-bold text-lg pb-2">Spiritual Growth
          </div>
          We offer educational programs and services that empower individuals to deepen their connection with their faith
          and spirituality.
        </div>
        <div class="px-8 py-8">
          <div class="pb-2 w-20">
            <img src="/images/about/community.svg" width="100%">
          </div>
          <div class="font-bold text-lg pb-2">
            Community Engagement
          </div>
          We actively engage with our local community, working together to address societal challenges and make a positive
          impact.
        </div>
        <div class="px-8 py-8">
          <div class="pb-2 w-20">
            <img src="/images/about/interfaith.svg" width="100%">
          </div>
          <div class="font-bold text-lg pb-2">
            Interfaith Dialogue
          </div>
          We believe in fostering harmony among different faiths and encouraging open dialogue to build bridges of
          understanding.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

useSeoMeta({
  title: "History - About the Stichting Aruba Islamic Foundation",
  ogTitle: "History of the Stichting Aruba Islamic Foundation",
  description: "See where we came from, and how we got here today. Let's take you through the history of our foundation",
  ogDescription: "History of the Stichting Aruba Islamic Foundation.",
  ogImage: "/images/hero.jpg",
});

</script>

<style scoped>
@media only screen and (max-width: 639px) {
  .image-grid {
    grid-template-columns: 1fr;
  }

  .item-1,
  .item-2,
  .item-3,
  .item-4,
  .item-5 {
    margin-bottom: 1rem;
  }

  .item-1 {
    height: 500px;
  }
}


@media only screen and (min-width: 640px) {
  .image-grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "a a a b b b e e e"
      "a a a b b b e e e"
      "a a a c c c d d d"
      "a a a c c c d d d"
  }
}

.item-1 {
  grid-area: a;
}

.item-2 {
  grid-area: b
}

.item-3 {
  grid-area: c
}

.item-4 {
  grid-area: d
}

.item-5 {
  grid-area: e
}
</style>
