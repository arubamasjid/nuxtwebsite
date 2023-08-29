<template>
  <div>asd</div>
</template>

<script setup>
// useHead({
//   script: [{ src: "adhan.umd.min.js" }],
// });

import { Coordinates, CalculationMethod, PrayerTimes } from "adhan";

const coordinates = new Coordinates(12.510052, -70.009354);
const params = CalculationMethod.MoonsightingCommittee();
const date = new Date(2023, 12, 1);
const prayerTimes = new PrayerTimes(coordinates, date, params);

console.log(prayerTimes);
</script>

<style module></style>
