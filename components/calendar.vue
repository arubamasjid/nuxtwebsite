<template>
  <div class="card border-2 border-primary p-6 shadow-xl">
    <div class="text-center text-xl font-semibold mb-6">
      Daily Salat Timings
    </div>

    <div class="card-actions mx-auto">
      <div class="join join-vertical sm:join-horizontal">
        <button
          @click="lastDay"
          class="btn join-item bg-primary mb-2 sm:mr-2 sm:mb-2"
        >
          <img src="/icons/calendar-backarrow.svg" alt="back-arrow" class="w-6 sm:w-8" />
          <span class="text-xs sm:text-md"> Previous Day</span>
        </button>
        <button
          @click="nextDay"
          class="btn join-item bg-primary mt-2 sm:ml-2 sm:mt-0"
        >
          <span class="text-xs sm:text-md"> Following Day</span>
          <img src="/icons/calendar-forwardarrow.svg" alt="forward-arrow" class="w-6 sm:w-8" />
        </button>
      </div>
    </div>
    <div class="card-body p-4">
      <ClientOnly>
        <div class="test font-bold text-lg text-center p-2">
          {{ date.toDateString() }}
        </div>

        <template #fallback>
          <span
            class="loading loading-spinner text-primary mx-auto my-auto pt-64 w-12"
          ></span>
        </template>

        <table class="table table-sm text-center">
          <thead>
            <tr>
              <th>Prayer</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-semibold">Fajr</td>

              <td :key="prayerTimes.fajr">
                {{
                  prayerTimes.fajr
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(/\b0(\d)/, "$1")
                }}
              </td>
            </tr>
            <tr class="italic">
              <td>sunrise</td>
              <td>
                {{
                  prayerTimes.sunrise
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(/\b0(\d)/, "$1")
                }}
              </td>
            </tr>
            <tr>
              <td class="font-semibold">Dhuhr</td>
              <td>
                {{
                  prayerTimes.dhuhr
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(/\b0(\d)/, "$1")
                }}
              </td>
            </tr>

            <tr>
              <td class="font-semibold">Asr</td>
              <td>
                {{
                  prayerTimes.asr
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(/\b0(\d)/, "$1")
                }}
              </td>
            </tr>
            <tr class="italic">
              <td>sunset</td>
              <td>
                {{
                  prayerTimes.sunset
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(/\b0(\d)/, "$1")
                }}
              </td>
            </tr>
            <tr>
              <td class="font-semibold">Maghrib</td>
              <td>
                {{
                  prayerTimes.maghrib
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(/\b0(\d)/, "$1")
                }}
              </td>
            </tr>

            <tr>
              <td class="font-semibold">Isha</td>
              <td>
                {{
                  prayerTimes.isha
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(/\b0(\d)/, "$1")
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
// useHead({
//   script: [{ src: "adhan.umd.min.js" }],
// });

import { Coordinates, CalculationMethod, PrayerTimes } from "adhan";

const coordinates = new Coordinates(12.510052, -70.009354);
const params = CalculationMethod.MoonsightingCommittee();
const date = ref(new Date());
const prayerTimes = ref(new PrayerTimes(coordinates, date.value, params));
const count = ref(0);

console.log(prayerTimes);

function nextDay() {
  date.value.setDate(date.value.getDate() + 1);
  console.log(date.value, "date");
  prayerTimes.value = new PrayerTimes(coordinates, date.value, params);
  count.value++;
}

function lastDay() {
  date.value.setDate(date.value.getDate() - 1);
  console.log(date.value, "date");
  prayerTimes.value = new PrayerTimes(coordinates, date.value, params);
  count.value++;
}
</script>

<style scoped></style>
