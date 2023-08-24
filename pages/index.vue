<template>
  <div class="sm:-mt-[6.5rem]">
    <div
      class="h-fit xs:h-[100vh] pt-[15vh] sm:pt-[18vh] md:pt-[21vh] lg:pt-[24vh] pb-[10vh] p-6 bg-[url('/images/hero-portrait.jpg')] bg-cover bg-no-repeat md:bg-[url('/images/hero.jpg')] md:bg-cover md:bg-center flex flex-col"
    >
      <div class="backdrop-blur-sm">
        <div
          class="flex h-fit w-[90vw] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-6xl text-primary text-center"
        >
          رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا
          مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ
        </div>
        <div
          class="flex h-fit w-[90vw] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-3xl text-primary text-center"
        >
          " They say, Our Lord! Do not let our hearts deviate after you have
          guided us. Grant us Your mercy. You are indeed the Giver of all
          bounties. "
        </div>
        <div
          class="flex h-fit w-[90vw] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-16 pb-8 pl-4 pr-2 mx-auto text-5xl font-bold text-primary justify-center md:break-all"
        >
          Stichting Aruba Islamic Foundation
        </div>
      </div>
    </div>

    <div class="hero h-fit pb-[10vh] p-8 flex flex-col bg-primary">
      <div class="text-3xl font-bold m-6">Our History</div>
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="/images/history-img.jpeg"
          class="max-w-sm md:max-w-md rounded-lg shadow-2xl lg:mr-8"
        />
        <p class="p-4 text-lg font-semibold leading-10">
          The population of Muslims has been increasing with each year in Aruba,
          so we formed the Aruba Islamic Foundation. The Foundation works
          towards forming a peaceful and prosperous society for muslims and the
          Aruban people alike.
        </p>
      </div>
    </div>

    <div class="h-fit p-8 pb-20 bg-slate-300">
      <div class="text-3xl font-bold text-center m-6">Our Services</div>

      <div
        class="flex flex-col w-[80%] mb-8 gap-4 mx-auto md:flex-row md:flex-wrap md:w-[100%] md:justify-center"
      >
        <div
          class="card bg-primary mt-8 md:mr-4 md:ml-4 shadow-xl max-w-sm max-h-[400px] self-center"
        >
          <figure>
            <img src="/images/edu.svg" />
          </figure>
          <div class="card-body">
            <div class="card-title justify-center">Educational Activities</div>
            <p class="text-center">Educational activities</p>
          </div>
        </div>

        <div
          class="card bg-primary mt-8 max-w-sm max-h-[400px] md:mr-4 md:ml-4 shadow-xl self-center"
        >
          <figure>
            <img src="/images/social.svg" />
          </figure>
          <div class="card-body">
            <div class="card-title justify-center">Social Activities</div>
            <p class="text-center">Social Activities</p>
          </div>
        </div>

        <div
          class="card bg-primary mt-8 max-w-sm max-h-[400px] md:mr-4 md:ml-4 shadow-xl self-center"
        >
          <figure>
            <img src="/images/dawah.svg" />
          </figure>
          <div class="card-body">
            <div class="card-title justify-center">
              Progressive da'wah and culture
            </div>
            <p class="text-center">Progressive da'wah and culture</p>
          </div>
        </div>

        <div
          class="card bg-primary mt-8 max-w-sm max-h-[400px] md:mr-4 md:ml-4 shadow-xl self-center"
        >
          <figure>
            <img src="/images/community-service.svg" />
          </figure>
          <div class="card-body">
            <div class="card-title justify-center">Help to those in need</div>
            <p class="text-center">Community service to those in need</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="h-[100vh] p-6">Give online in the way of Allah</div> -->
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, inject } from "vue";
import { getApps } from "firebase/app";

console.log("home rendered");
onMounted(() => {
  const { $firebaseApp } = useNuxtApp();
  // console.log($firebaseApp);
});
</script>

<style module></style>
