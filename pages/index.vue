<template>
  <div class="sm:-mt-[6.5rem]">
    <div
      class="h-fit xl:h-screen 2xl:h-screen pt-24 pb-24 sm:pt-32 flex flex-col relative justify-center items-center"
    >
      <picture>
        <source
          srcset="/images/hero-portrait.jpg"
          media="(max-width:640px)"
          class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] brightness-50"
        />
        <source
          srcset="/images/hero.jpg"
          media="(min-width:640px)"
          alt="hero"
          class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] brightness-50 contrast-150"
        />
        <img
          src="/images/dawah.svg"
          alt="hero"
          class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] object-cover brightness-50 contrast-100"
        />
      </picture>
      <div class="flex flex-col">
        <div
          :class="$style.arabic"
          class="flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-5xl xs:text-6xl text-center text-white"
        >
          رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا
          مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ
        </div>
        <div
          class="flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-2xl xs:text-3xl text-center font-semibold italic text-white"
        >
          " They say, Our Lord! Do not let our hearts deviate after you have
          guided us. Grant us Your mercy. You are indeed the Giver of all
          bounties. "
        </div>
        <div
          class="flex w-[100%] pt-8 pb-8 pl-4 pr-2 mx-auto text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center md:break-all"
        >
          Stichting Aruba Islamic Foundation
        </div>
      </div>
    </div>

    <!-- <div
      class="h-fit 2xl:h-screen pt-24 pb-24 sm:pt-32 flex relative justify-center items-center bg-yellow-100"
    >
      <div class="flex flex-col">
        <div
          :class="$style.arabic"
          class="flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-5xl xs:text-6xl text-center"
        >
          رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا
          مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ
        </div>
        <div
          class="flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-2xl xs:text-3xl text-center font-semibold italic"
        >
          " They say, Our Lord! Do not let our hearts deviate after you have
          guided us. Grant us Your mercy. You are indeed the Giver of all
          bounties. "
        </div>
        <div
          class="flex w-[100%] pt-8 pb-8 pl-4 pr-2 mx-auto text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center md:break-all"
        >
          Stichting Aruba Islamic Foundation
        </div>
      </div>
      <picture>
        <source
          srcset="/images/hero-portrait.jpg"
          media="(max-width:640px)"
          class="z-[-1] w-[20%] h-[20%]"
        />
        <source
          srcset="/images/mosque.png"
          media="(min-width:640px)"
          alt="hero"
          class="z-[-1] w-[30vw] h-[30vh]"
        />
        <img
          src="/images/dawah.svg"
          alt="hero"
          class="z-[-1] w-[50vw] h-[50vh]"
        />
      </picture>
    </div> -->

    <div class="hero h-fit pb-[10vh] p-8 flex flex-col bg-primary">
      <div class="text-3xl font-bold m-6">Our History</div>
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="/images/history-img.jpeg"
          class="max-w-[75vw] xs:max-w-xs md:max-w-md rounded-lg shadow-2xl lg:mr-8"
        />
        <p class="p-4 text-lg font-semibold leading-10">
          The population of Muslims has been increasing with each year in Aruba,
          so we formed the Aruba Islamic Foundation. The Foundation works
          towards forming a peaceful and prosperous society for muslims and the
          Aruban people alike.
        </p>
      </div>
    </div>

    <div class="h-fit p-8 pb-20">
      <div class="text-3xl font-bold text-center m-6">Our Services</div>

      <div
        class="flex flex-col w-[50%] mb-8 gap-4 mx-auto md:flex-row md:flex-wrap md:w-[100%] md:justify-center"
      >
        <div
          class="card bg-primary mt-8 md:mr-4 md:ml-4 w-[75vw] sm:max-w-sm max-h-[400px] self-center"
        >
          <img src="/images/edu.svg" loading="lazy" />

          <div class="card-body">
            <div class="card-title justify-center">Educational Activities</div>
            <p class="text-center">Educational activities</p>
          </div>
        </div>

        <div
          class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center"
        >
          <img src="/images/social.svg" loading="lazy" />
          <div class="card-body">
            <div class="card-title justify-center">Social Activities</div>
            <p class="text-center">Social Activities</p>
          </div>
        </div>

        <div
          class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center"
        >
          <img src="/images/dawah.svg" loading="lazy" />
          <div class="card-body">
            <div class="card-title justify-center">
              Progressive da'wah and culture
            </div>
            <p class="text-center">Progressive da'wah and culture</p>
          </div>
        </div>

        <div
          class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center"
        >
          <img src="/images/community-service.svg" loading="lazy" />

          <div class="card-body">
            <div class="card-title justify-center">Help to those in need</div>
            <p class="text-center">Community service to those in need</p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-fit p-8 pb-20">
      <div class="text-3xl font-bold text-center m-6 pb-6">Explore Islam</div>
      <div class="flex flex-col justify-evenly lg:flex-row">
        <Calendar class="mx-auto mb-8 lg:mb-auto"></Calendar>

        <NuxtLink
          to="/education"
          class="card border-4 border-accent my-auto mx-auto mb-8 lg:mb-auto p-6 shadow-lg font-semibold"
        >
          <div>
            Learn to pray, <br />
            research islam and more
            <img src="icons/arrow-right-fill.svg" class="w-8 mx-auto mt-2" />
          </div>
        </NuxtLink>

        <NuxtLink
          to="/events"
          class="card border-4 border-accent my-auto mx-auto mb-8 lg:mb-auto p-6 shadow-lg font-semibold"
        >
          <div>
            Upcoming and past<br />
            Masjid events <br />
            <img src="icons/arrow-right-fill.svg" class="w-8 mx-auto mt-2" />
          </div>
        </NuxtLink>
      </div>
    </div>

    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, inject } from "vue";
import { getApps } from "firebase/app";

useSeoMeta({
  title: "Stichting Aruba Islamic Foundation",
  ogTitle: "Stichting Aruba Islamic Foundation",
  description: "This is the website for the Stichting Aruba Islamic Foundation",
  ogDescription: "Welcome to the Stichting Aruba Islamic Foundation.",
  ogImage: "/images/hero.jpg",
});

console.log("home rendered");
onMounted(() => {
  const { $firebaseApp } = useNuxtApp();
  // console.log($firebaseApp);
});
</script>

<style module>
.arabic {
  direction: rtl;
}
</style>
