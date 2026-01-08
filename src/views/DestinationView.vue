<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getDestinationById } from '../data/destinations'
import { getHotelsByDestination } from '../data/hotels'
import TrapRating from '../components/destinations/TrapRating.vue'
import TrapBadge from '../components/destinations/TrapBadge.vue'
import UrgencyIndicator from '../components/destinations/UrgencyIndicator.vue'

const route = useRoute()

const destination = computed(() => {
  const id = route.params.id as string
  return getDestinationById(id)
})

const hotels = computed(() => {
  if (!destination.value) return []
  return getHotelsByDestination(destination.value.id)
})

// Format large numbers
function formatNumber(num: number): string {
  if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B'
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}
</script>

<template>
  <div v-if="!destination" class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-6xl mb-4">🗺️</p>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Destination Not Found</h1>
      <p class="text-gray-500 mb-4">This place doesn't exist. Lucky you!</p>
      <RouterLink to="/" class="btn-primary">Go Home</RouterLink>
    </div>
  </div>

  <div v-else>
    <!-- Hero Image -->
    <div class="relative h-[400px] lg:h-[500px]">
      <img
        :src="destination.image"
        :alt="destination.name"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div class="absolute bottom-0 left-0 right-0 p-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-4xl">{{ destination.emoji }}</span>
            <TrapRating :rating="destination.trapRating" size="lg" />
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-2">
            {{ destination.name }}
          </h1>
          <p class="text-xl text-white/80 italic">"{{ destination.tagline }}"</p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <section class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">About This Trap</h2>
            <p class="text-gray-600 leading-relaxed">{{ destination.description }}</p>

            <!-- Badges -->
            <div class="flex flex-wrap gap-2 mt-4">
              <TrapBadge v-for="badge in destination.badges" :key="badge.id" :badge="badge" />
            </div>
          </section>

          <!-- Reasons to Avoid -->
          <section class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
              ⚠️ Reasons NOT to Visit
            </h2>
            <ul class="space-y-3">
              <li
                v-for="(reason, index) in destination.reasonsToAvoid"
                :key="index"
                class="flex items-start gap-3"
              >
                <span class="text-red-500 mt-0.5">✗</span>
                <span class="text-gray-600">{{ reason }}</span>
              </li>
            </ul>
          </section>

          <!-- Highlights (Lowlights) -->
          <section class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
              "Highlights" (Use Loosely)
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="highlight in destination.highlights"
                :key="highlight.title"
                class="p-4 bg-gray-50 rounded-lg"
              >
                <span class="text-2xl block mb-2">{{ highlight.icon }}</span>
                <h3 class="font-semibold text-gray-900">{{ highlight.title }}</h3>
                <p class="text-sm text-gray-500">{{ highlight.description }}</p>
              </div>
            </div>
          </section>

          <!-- Hotels -->
          <section v-if="hotels.length > 0" class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
              Hotels to Haunt You
            </h2>
            <div class="space-y-4">
              <RouterLink
                v-for="hotel in hotels"
                :key="hotel.id"
                :to="`/hotel/${hotel.id}`"
                class="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  :src="hotel.images[0]"
                  :alt="hotel.name"
                  class="w-24 h-24 object-cover rounded-lg"
                />
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900">{{ hotel.name }}</h3>
                  <p class="text-sm text-gray-500 italic">"{{ hotel.tagline }}"</p>
                  <div class="flex items-center gap-4 mt-2">
                    <span class="text-trap-pink-500 font-bold">
                      ${{ hotel.basePrice }}<span class="text-gray-400 text-sm font-normal">/night*</span>
                    </span>
                    <TrapRating :rating="hotel.starRating" size="sm" />
                  </div>
                </div>
              </RouterLink>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="space-y-6">
          <!-- Booking Card -->
          <div class="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <div class="flex items-center justify-between mb-4">
              <div>
                <span class="text-gray-400 text-sm line-through">$999</span>
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-bold text-trap-pink-500">
                    ${{ destination.averagePrice }}
                  </span>
                  <span class="text-gray-400">/night*</span>
                </div>
              </div>
              <UrgencyIndicator />
            </div>

            <button class="btn-primary w-full mb-3">
              Book This Regret
            </button>
            <button class="btn-ghost w-full">
              Save for Later Regret
            </button>

            <p class="text-xs text-gray-400 mt-4 text-center">
              * Price before fees. See checkout for full disappointment.
            </p>
          </div>

          <!-- Stats -->
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="font-semibold text-gray-900 mb-4">Destination Stats</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-500">Annual Tourists</span>
                <span class="font-medium">{{ formatNumber(destination.stats.tourists) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Regrets Filed</span>
                <span class="font-medium text-red-500">{{ formatNumber(destination.stats.regrets) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Complaints</span>
                <span class="font-medium">{{ formatNumber(destination.stats.complaints) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Return Visitors</span>
                <span class="font-medium">{{ destination.stats.returnVisitors }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Avg Stay Duration</span>
                <span class="font-medium text-sm">{{ destination.stats.avgStayDuration }}</span>
              </div>
            </div>
          </div>

          <!-- Warning -->
          <div class="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 class="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              <span>⚠️</span>
              <span>Travel Advisory</span>
            </h3>
            <p class="text-sm text-yellow-700">
              This destination has a {{ destination.trapRating }}/5 trap rating.
              Proceed with extreme caution and low expectations.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
