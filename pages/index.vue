<template>
  <div class="sm:-mt-[6.5rem]">
    <div class="h-fit xl:h-screen 2xl:h-screen pt-24 pb-24 sm:pt-32 flex flex-col relative justify-center items-center">
      <picture>
        <source srcset="/images/hero-portrait.jpg" media="(max-width:640px)" alt="hero"
          class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] brightness-50" />
        <source srcset="/images/hero.jpg" media="(min-width:640px)" alt="hero"
          class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] brightness-50 contrast-150" />
        <img src="/images/dawah.svg" alt="hero"
          class="absolute top-0 left-0 z-[-1] w-[100%] h-[100%] object-cover brightness-50 contrast-100" />
      </picture>
      <div class="flex flex-col">
        <div :class="$style.arabic"
          class="flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-3xl xs:text-4xl text-center justify-center text-white">
          رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا
          مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ
        </div>
        <div
          class="flex w-[90%] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[60vw] pt-8 pb-8 pl-4 pr-2 mx-auto text-xl xs:text-2xl text-center font-semibold italic text-white">
          " They say, Our Lord! Do not let our hearts deviate after you have
          guided us. Grant us Your mercy. You are indeed the Giver of all
          bounties. S3, V8."
        </div>
        <div
          class="flex w-[100%] pt-8 pb-8 pl-4 pr-2 text-3xl sm:text-4xl mmd:text-5xl font-bold text-primary md:break-all justify-center text-center">
          Stichting Aruba Islamic Foundation
        </div>
      </div>
    </div>


    <div class="hero pb-[10vh] p-8 flex flex-col bg-primary">
      <div class="text-3xl font-bold m-6">Our History</div>
      <div class="hero-content flex-col lg:flex-row">
        <img src="/images/history-img.jpeg" alt="history"
          class="max-w-[75vw] xs:max-w-xs md:max-w-md rounded-lg shadow-2xl lg:mr-8" />
        <p class="p-4 font-semibold leading-10">
          With the muslim population increasing steadily in Aruba over the past few years, the Aruba Islamic Foundation
          was formed. A group of brothers and sisters came together with the vision of constructing the first masjid in
          Aruba. Masha Allah this vision has been realized as the majority of construction on the masjid has been
          completed and salat, nikkahs and other events have been held so far in the masjid.
          The goal of Aruba Islamic Foundation is to work together with society to create peace, harmony and
          prosperity in our community.
        </p>
      </div>
    </div>

    <div class="h-fit p-8 pb-20 bg-base-200">

      <div class="text-3xl font-bold text-center m-6 mb-12">Our Services</div>

      <div class="flex flex-col justify-center items-center mb-8 gap-x-12 gap-y-8 lg:flex-row">

        <div class="w-full max-w-xs overflow-hidden bg-white rounded-md mx-5">
          <img class="object-cover w-full h-56" src="/images/edu.svg" alt="education" loading="lazy">

          <div class="py-5 text-center">
            <p class="block text-xl font-bold text-gray-800" tabindex="0" role="link">Educational
              Activities</p>
          </div>
        </div>

        <div class="w-full max-w-xs overflow-hidden bg-white rounded-md">
          <img class="object-cover w-full h-56" src="/images/community-service.svg" alt="community-service"
            loading="lazy">

          <div class="py-5 text-center">
            <p class="block text-xl font-bold text-gray-800" tabindex="0" role="link">Help to those in need</p>
          </div>
        </div>

        <div class="w-full max-w-xs overflow-hidden bg-white rounded-md">
          <img class="object-cover w-full h-56" src="/images/social.svg" alt="social" loading="lazy">

          <div class="py-5 text-center">
            <p class="block text-xl font-bold text-gray-800" tabindex="0" role="link">Social Activities</p>
          </div>
        </div>

        <div class="w-full max-w-xs overflow-hidden bg-white rounded-md">
          <img class="object-cover w-full h-56" src="/images/dawah.svg" alt="dawah" loading="lazy">

          <div class="py-5 text-center">
            <p class="block text-xl font-bold text-gray-800" tabindex="0" role="link">Progressive da'wah and culture</p>
          </div>
        </div>

        <!-- <div class="card bg-primary mt-8 md:mr-4 md:ml-4 w-[75vw] sm:max-w-sm max-h-[400px] self-center">
          <img src="/images/edu.svg" alt="education" loading="lazy" />

          <div class="card-body">
            <div class="card-title justify-center">Educational Activities</div>
            <p class="text-center">Educational activities</p>
          </div>
        </div>

        <div class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center">
          <img src="/images/social.svg" alt="social" loading="lazy" />
          <div class="card-body">
            <div class="card-title justify-center">Social Activities</div>
            <p class="text-center">Social Activities</p>
          </div>
        </div>

        <div class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center">
          <img src="/images/dawah.svg" alt="dawah" loading="lazy" />
          <div class="card-body">
            <div class="card-title justify-center">
              Progressive da'wah and culture
            </div>
            <p class="text-center">Progressive da'wah and culture</p>
          </div>
        </div>

        <div class="card bg-primary mt-8 w-[75vw] sm:max-w-sm max-h-[400px] md:mr-4 md:ml-4 self-center">
          <img src="/images/community-service.svg" alt="community-service" loading="lazy" />

          <div class="card-body">
            <div class="card-title justify-center">Help to those in need</div>
            <p class="text-center">Community service to those in need</p>
          </div>
        </div> -->

      </div>

    </div>

    <!-- <div class="h-fit p-8 pb-10">
      <div class="text-3xl font-bold text-center m-6 pb-12">Explore Islam</div>

      <div class="flex flex-col lg:flex-row justify-center items-center lg:mx-auto lg:p-8">
        <Calendar class="mb-8 lg:mb-0 mx-auto lg:mx-0 w-[100%] xs:w-[400px] shrink-0"></Calendar>

        <div class="flex flex-col md:flex-row lg:flex-col lg:ml-8 md:gap-8">
          <div
            class="card lg:card-compact lg:card-side max-w-xs lg:max-w-none lg:w-[100%] mb-8 md:mb-0 mx-auto md:ml-auto md:mx-0 shadow-md">
            <img src="/images/pray.png" alt="hero" loading="lazy"
              class="xs:max-w-xs shadow-md rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" />
            <div class="card-body text-sm">
              <p class="card-title text-sm">
                Learn to pray, research Islam and more
              </p>
              <p>Content for both kids and adults</p>
              <div class="card-actions justify-end pt-2">
                <button class="btn btn-sm btn-primary text-xs" @click="router.push({ path: '/education' })">
                  Read
                  <img src="/icons/arrow-right.svg" alt="arrow-right" />
                </button>
              </div>
            </div>
          </div>

          <div
            class="card lg:card-compact lg:card-side max-w-xs lg:max-w-none lg:w-[100%] mx-auto shadow-md md:mr-auto md:mx-0">
            <img src="/images/events.png" alt="hero" loading="lazy"
              class="xs:max-w-xs shadow-md rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" />
            <div class="card-body text-sm">
              <p class="card-title text-sm">
                Ongoing, upcoming and past Masjid events
              </p>
              <p>
                Keep updated with activities <br />
                happening in the Masjid
              </p>
              <div class="card-actions justify-end pt-2">
                <button class="btn btn-sm btn-primary text-xs" @click="router.push({ path: '/events' })">
                  Browse
                  <img src="/icons/arrow-right.svg" alt="arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> -->

    <div class="p-8 pb-20 bg-base-100">
      <div class="flex justify-center">

        <section class="bg-white">
          <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
              Help us sustain our <span class="text-primary">masjid costs</span>
            </h2>

            <p class="max-w-4xl mt-6 text-center text-gray-500 ">
              Some of our monthly costs include, utilities and water, land tax, Imam's monthly salary, building
              maintenance, and insurance. Any help will be greatly appreciated.
            </p>

            <div class="inline-flex w-full mt-6 sm:w-auto">
              <NuxtLink to="https://www.launchgood.com/campaign/support_monthly__yearly_cost#!/" target="_blank">
                <button class="inline-flex items-center justify-center w-full px-6 py-2 rounded-md bg-primary"> Make a
                  contribution
                </button>
              </NuxtLink>
            </div>

          </div>
        </section>

      </div>

    </div>

  </div>
</template>

<script setup>
import { onMounted, inject } from "vue";
import { getApps } from "firebase/app";

const router = useRouter();

useSeoMeta({
  title: "Aruba Islamic Foundation",
  ogTitle: "Aruba Islamic Foundation",
  description: "Welcome to the Stichting Aruba Islamic Foundation's website, here you can connect with us and learn about Islam",
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
