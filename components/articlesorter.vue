<template>
  <div
    class="grid auto-cols-max grid-cols-1 xs:w-[80%] sm:w-[60%] md:grid-cols-2 md:w-[80%] mmd:w-[70%] lg:grid-cols-3 lg:w-[80%] xl:w-[60%] mx-auto gap-8 px-8 items-stretch"
  >
    <div
      v-for="article in allArticles"
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
</template>

<script setup></script>

<style lang="scss" scoped></style>
