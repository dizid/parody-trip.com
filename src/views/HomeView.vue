<script setup lang="ts">
import { computed } from 'vue'
import SearchBox from '../components/search/SearchBox.vue'
import DestinationCard from '../components/destinations/DestinationCard.vue'
import { destinations } from '../data/destinations'

// Featured destinations (first 8)
const featuredDestinations = computed(() => destinations.slice(0, 8))

// Trust badges parody
const trustBadges = [
  {
    icon: '🏆',
    title: 'Award-Avoiding Services',
    description: 'Winner of 0 awards since 2024',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Contact us anytime. We won\'t respond.',
  },
  {
    icon: '💰',
    title: 'Incredible Fees',
    description: 'Competitive prices*, exclusive surcharges',
  },
]

// Promotional banners
const promotions = [
  {
    id: 1,
    title: 'FLASH SALE',
    subtitle: 'Up to 0% off!',
    description: 'Every day! All day! Never ends!',
    bgClass: 'bg-gradient-to-r from-trap-pink-500 to-orange-500',
  },
  {
    id: 2,
    title: 'WEEKLY WEEPS',
    subtitle: 'Save up to nothing',
    description: 'Prices may increase while you\'re looking',
    bgClass: 'bg-gradient-to-r from-trap-blue-500 to-purple-500',
  },
  {
    id: 3,
    title: 'NEW YEAR SPECIAL',
    subtitle: 'Pay More, Get Less',
    description: 'Our premium promise to you',
    bgClass: 'bg-gradient-to-r from-green-500 to-teal-500',
  },
]

// Destination categories
const categories = [
  { id: 'tourist-traps', name: 'Classic Tourist Traps', emoji: '🗼', count: 47 },
  { id: 'depressing', name: 'Delightfully Depressing', emoji: '😔', count: 23 },
  { id: 'nightmares', name: 'Relatable Nightmares', emoji: '😱', count: 89 },
  { id: 'regrets', name: 'Experiences to Regret', emoji: '😭', count: 156 },
  { id: 'budget', name: 'Budget (For Reasons)', emoji: '💸', count: 12 },
  { id: 'haunted', name: 'Probably Haunted', emoji: '👻', count: 34 },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-trap-blue-600 via-trap-blue-500 to-trap-pink-500 text-white py-16 lg:py-24">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">
            Find Places
            <span class="text-yellow-300">NOT</span>
            to Visit
          </h1>
          <p class="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
            Book your next regret with TRAP.COM. Where dreams go to die, affordably.
          </p>
        </div>

        <!-- Search Box -->
        <div class="max-w-5xl mx-auto">
          <SearchBox />
        </div>
      </div>
    </section>

    <!-- Trust Badges (Parody) -->
    <section class="bg-white py-8 border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="badge in trustBadges"
            :key="badge.title"
            class="flex items-center gap-4 p-4"
          >
            <span class="text-4xl">{{ badge.icon }}</span>
            <div>
              <h3 class="font-semibold text-gray-900">{{ badge.title }}</h3>
              <p class="text-sm text-gray-500">{{ badge.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotional Banners -->
    <section class="py-8 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="promo in promotions"
            :key="promo.id"
            :class="[
              'rounded-xl p-6 text-white cursor-pointer hover:scale-105 transition-transform',
              promo.bgClass
            ]"
          >
            <span class="text-xs font-bold uppercase tracking-wider opacity-80">
              {{ promo.title }}
            </span>
            <h3 class="text-2xl font-bold mt-1">{{ promo.subtitle }}</h3>
            <p class="text-sm opacity-80 mt-2">{{ promo.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          Browse by Category of Regret
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <RouterLink
            v-for="cat in categories"
            :key="cat.id"
            :to="`/search?category=${cat.id}`"
            class="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 hover:shadow-md transition-all group"
          >
            <span class="text-3xl block mb-2 group-hover:scale-110 transition-transform">
              {{ cat.emoji }}
            </span>
            <h3 class="font-medium text-gray-900 text-sm">{{ cat.name }}</h3>
            <p class="text-xs text-gray-500">{{ cat.count }} traps</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">
              Featured Anti-Destinations
            </h2>
            <p class="text-gray-500">Places you'll wish you'd skipped</p>
          </div>
          <RouterLink
            to="/search"
            class="btn-ghost hidden sm:flex items-center gap-2"
          >
            <span>View All</span>
            <span>→</span>
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DestinationCard
            v-for="destination in featuredDestinations"
            :key="destination.id"
            :destination="destination"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter (Parody) -->
    <section class="py-16 bg-gradient-to-r from-trap-blue-500 to-trap-pink-500 text-white">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">
          Get Deals You'll Regret
        </h2>
        <p class="text-white/80 mb-6">
          Subscribe to receive special offers, last-minute disappointments, and emails you'll immediately delete.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email (we'll sell it)"
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400"
          />
          <button
            type="submit"
            class="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Subscribe (Regret Later)
          </button>
        </form>
        <p class="text-xs text-white/60 mt-4">
          By subscribing, you agree to our Terms of Suffering and Privacy Policy (We Sell Everything)
        </p>
      </div>
    </section>

    <!-- Stats (Fake) -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p class="text-4xl font-bold text-trap-blue-500">47M+</p>
            <p class="text-gray-500">Disappointed Travelers</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-trap-pink-500">0</p>
            <p class="text-gray-500">Awards Won</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-trap-blue-500">99%</p>
            <p class="text-gray-500">Regret Rate</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-trap-pink-500">∞</p>
            <p class="text-gray-500">Hidden Fees</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
