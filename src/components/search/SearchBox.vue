<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeTab = ref('hotels')
const destination = ref('')
const checkIn = ref('')
const checkOut = ref('')
const guests = ref(2)
const rooms = ref(1)

const tabs = [
  { id: 'hotels', label: 'Hotels & Holes', icon: '🏨', disabled: false },
  { id: 'flights', label: 'Flights to Nowhere', icon: '✈️', disabled: true },
  { id: 'trains', label: 'Delays & Cancellations', icon: '🚂', disabled: true },
  { id: 'cars', label: 'Car Troubles', icon: '🚗', disabled: true },
  { id: 'experiences', label: 'Regrettable Experiences', icon: '🎭', disabled: true },
]

const popularDestinations = [
  'Paris (The Tourist Trap Version)',
  'Venice (The Sinking Feeling)',
  'Times Square',
  'Your Ex\'s Hometown',
  'The Airport Marriott',
]

function handleSearch() {
  router.push({
    path: '/search',
    query: {
      destination: destination.value,
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      guests: guests.value.toString(),
      rooms: rooms.value.toString(),
    },
  })
}
</script>

<template>
  <div class="search-box bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
    <!-- Tabs -->
    <div class="flex overflow-x-auto gap-1 mb-6 border-b border-gray-200 -mx-6 px-6">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :disabled="tab.disabled"
        @click="!tab.disabled && (activeTab = tab.id)"
        :class="[
          'flex items-center gap-2 px-4 py-3 font-medium whitespace-nowrap transition-colors border-b-2 -mb-[2px]',
          activeTab === tab.id
            ? 'text-trap-blue-500 border-trap-blue-500'
            : 'text-gray-500 border-transparent hover:text-gray-700',
          tab.disabled && 'opacity-40 cursor-not-allowed'
        ]"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ tab.label }}</span>
        <span v-if="tab.disabled" class="text-xs text-gray-400">(Never)</span>
      </button>
    </div>

    <!-- Search form -->
    <form @submit.prevent="handleSearch" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Destination -->
        <div class="lg:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Where do you want to regret going?
          </label>
          <div class="relative">
            <input
              v-model="destination"
              type="text"
              placeholder="Enter a destination to avoid..."
              list="destinations"
              class="search-input pl-10"
            />
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
          <datalist id="destinations">
            <option v-for="dest in popularDestinations" :key="dest" :value="dest" />
          </datalist>
        </div>

        <!-- Check-in -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Check-in (Supposedly)
          </label>
          <input
            v-model="checkIn"
            type="date"
            class="search-input"
          />
        </div>

        <!-- Check-out -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Check-out (If They Let You)
          </label>
          <input
            v-model="checkOut"
            type="date"
            class="search-input"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Guests -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Guests (Victims)
          </label>
          <select v-model="guests" class="search-input">
            <option v-for="n in 10" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
          </select>
        </div>

        <!-- Rooms -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Rooms (Allegedly)
          </label>
          <select v-model="rooms" class="search-input">
            <option v-for="n in 5" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Room' : 'Rooms' }}</option>
          </select>
        </div>

        <!-- Search button -->
        <div class="col-span-2 flex items-end">
          <button
            type="submit"
            class="btn-primary w-full flex items-center justify-center gap-2"
          >
            <span>🔍</span>
            <span>Search for Regrets</span>
          </button>
        </div>
      </div>
    </form>

    <!-- Disclaimer -->
    <p class="text-xs text-gray-400 mt-4 text-center">
      * Prices shown are before fees. Many, many fees. So many fees.
    </p>
  </div>
</template>
