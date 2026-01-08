<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import DestinationCard from '../components/destinations/DestinationCard.vue'
import { destinations, searchDestinations } from '../data/destinations'

const route = useRoute()

const searchQuery = computed(() => (route.query.destination as string) || '')
const sortBy = ref('most-avoided')

const filteredDestinations = computed(() => {
  if (searchQuery.value) {
    return searchDestinations(searchQuery.value)
  }
  return destinations
})

const sortedDestinations = computed(() => {
  const sorted = [...filteredDestinations.value]
  switch (sortBy.value) {
    case 'price-low':
      return sorted.sort((a, b) => a.averagePrice - b.averagePrice)
    case 'price-high':
      return sorted.sort((a, b) => b.averagePrice - a.averagePrice)
    case 'rating-worst':
      return sorted.sort((a, b) => b.trapRating - a.trapRating)
    case 'most-avoided':
    default:
      return sorted.sort((a, b) => b.stats.regrets - a.stats.regrets)
  }
})

const sortOptions = [
  { value: 'most-avoided', label: 'Most Avoided' },
  { value: 'rating-worst', label: 'Worst First' },
  { value: 'price-low', label: 'Cheapest (Suspicious)' },
  { value: 'price-high', label: 'Most Expensive (Scam)' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <h1 class="text-2xl font-bold text-gray-900">
          {{ searchQuery ? `Results for "${searchQuery}"` : 'All Anti-Destinations' }}
        </h1>
        <p class="text-gray-500">
          {{ sortedDestinations.length }} places you should probably avoid
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar -->
        <aside class="lg:w-64 flex-shrink-0">
          <div class="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <h3 class="font-semibold text-gray-900 mb-4">Sort By</h3>
            <select
              v-model="sortBy"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trap-blue-500"
            >
              <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">
                {{ opt.label }}
              </option>
            </select>

            <div class="mt-6">
              <h3 class="font-semibold text-gray-900 mb-4">Trap Rating</h3>
              <div class="space-y-2">
                <label v-for="n in 5" :key="n" class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="rounded text-trap-pink-500 focus:ring-trap-pink-500" checked />
                  <span>{{ '⚠️'.repeat(n) }} ({{ n }})</span>
                </label>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="font-semibold text-gray-900 mb-4">Price Range</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="rounded text-trap-pink-500" checked />
                  <span>Under $50 (Suspicious)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="rounded text-trap-pink-500" checked />
                  <span>$50 - $150 (Overpriced)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="rounded text-trap-pink-500" checked />
                  <span>$150+ (Scam Territory)</span>
                </label>
              </div>
            </div>

            <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p class="text-sm text-yellow-800">
                <span class="font-medium">Pro tip:</span> All filters are for decoration only. Results may vary. Fees not included.
              </p>
            </div>
          </div>
        </aside>

        <!-- Results Grid -->
        <div class="flex-1">
          <div v-if="sortedDestinations.length === 0" class="text-center py-12">
            <p class="text-6xl mb-4">🏝️</p>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">No results found</h2>
            <p class="text-gray-500">
              We couldn't find any places to avoid matching your search.
              <br />
              Don't worry, there are plenty of terrible places out there.
            </p>
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <DestinationCard
              v-for="destination in sortedDestinations"
              :key="destination.id"
              :destination="destination"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
