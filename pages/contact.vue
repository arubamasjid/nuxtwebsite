<template>
  <div>
    <div class="text-2xl md:text-3xl font-semibold text-center pt-8 pb-8 px-8">
      Our Contact Information
    </div>
    <div class="flex flex-col mx-auto text-center p-4">
      <div class="p-2">
        <span class="font-semibold sm:text-lg"> Phone </span>
        +297-735-5471 or +297-641-8361
      </div>
      <div class="p-2">
        <span class="font-semibold sm:text-lg"> Masjid address </span>
        Sabana Basora 32J
      </div>
      <div class="p-2">
        <span class="font-semibold sm:text-lg">
          Aruba Islamic Foundation address
        </span>
        Cumana 103-A
      </div>
      <div class="p-2 break-all">
        <span class="font-semibold sm:text-lg"> Email </span>
        aruba.islamic.foundation@gmail.com
      </div>
    </div>

    <div class="text-2xl md:text-3xl font-semibold text-center pt-12 pb-8 px-8">
      Quick Links
    </div>
    <div
      class="grid gap-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 xl:grid-cols-8 px-4 md:px-8 mmd:px-16 lg:px-24 mb-28">

      <NuxtLink to="tel:+2977355471" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/telephone.svg" alt="telephone" width="40" />
          <div>Phone 1</div>
        </div>
      </NuxtLink>

      <NuxtLink to="tel:+2976418361" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/mobile.svg" alt="mobile" width="30" />
          <div>Phone 2</div>
        </div>
      </NuxtLink>

      <NuxtLink to="mailto:aruba.islamic.foundation@gmail.com" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/email.svg" alt="email" width="40" />
          <div>Email</div>
        </div>
      </NuxtLink>

      <NuxtLink to="https://www.facebook.com/arubamuslims?mibextid=nW3QTL" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/facebook.svg" alt="facebook" width="40" />
          <div>Facebook</div>
        </div>
      </NuxtLink>

      <NuxtLink to="https://www.google.com/maps/?q=12.474870940788554,-69.9568012647943" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/maps.svg" alt="maps" width="35" />
          <div>Foundation</div>
        </div>
      </NuxtLink>

      <NuxtLink to="https://www.google.com/maps/?q=12.474746543756178,-69.9565746181403" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/maps.svg" alt="maps" width="35" />
          <div>Masjid</div>
        </div>
      </NuxtLink>

      <NuxtLink to="https://wa.me/+2977355471" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/whatsapp.svg" alt="whatsapp" width="45" />
          <div>WhatsApp 1</div>
        </div>
      </NuxtLink>

      <NuxtLink to="https://wa.me/+2976418361" target="_blank">
        <div class="flex flex-col justify-center items-center text-sm p-4 h-full">
          <img src="/icons/whatsapp.svg" alt="whatsapp" width="45" />
          <div>Whatsapp 2</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Contact the Stichting Aruba Islamic Foundation",
  ogTitle: "Contact the Stichting Aruba Islamic Foundation",
  description: "Contact us for inquiries, support or services. Get in touch with us to discuss your needs and questions.",
  ogDescription: "Contact us for inquiries, support or services. Get in touch with us to discuss your needs and questions.",
  ogImage: "/images/hero.jpg",
});
</script>

<style module></style>
