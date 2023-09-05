<template>
  <div class="card border-2 border-accent p-6 w-fit mx-auto shadow-lg">
    <div class="card-title mx-auto mb-6">Daily Salat Timings</div>

    <div class="card-actions mx-auto">
      <div class="join join-vertical sm:join-horizontal p-4">
        <button
          @click="lastDay"
          class="btn join-item bg-accent mb-2 sm:mr-2 sm:mb-0"
        >
          <img src="/icons/calendar-backarrow.svg" width="40px" /> Last Day
        </button>
        <button
          @click="nextDay"
          class="btn join-item bg-accent mt-2 sm:ml-2 sm:mt-0"
        >
          Next Day
          <img src="/icons/calendar-forwardarrow.svg" width="40px" />
        </button>
      </div>
    </div>
    <div class="card-body p-4">
      <ClientOnly>
        <div class="test font-bold text-lg">
          {{ date.toDateString() }}
        </div>

        <template #fallback>
          <span
            class="loading loading-spinner text-accent mx-auto my-auto pt-64 w-12"
          ></span>
        </template>
        <table class="table table-sm">
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

<style scoped>
.fade-enter-active {
  transition: all 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
