<script setup lang="ts">
import type { Destination } from '../../types'
import TrapBadge from './TrapBadge.vue'
import TrapRating from './TrapRating.vue'
import UrgencyIndicator from './UrgencyIndicator.vue'

defineProps<{
  destination: Destination
}>()
</script>

<template>
  <RouterLink
    :to="`/destination/${destination.id}`"
    class="destination-card block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
  >
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="destination.image"
        :alt="destination.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <!-- Country flag -->
      <span class="absolute top-3 left-3 text-2xl">{{ destination.emoji }}</span>

      <!-- Trap rating -->
      <div class="absolute top-3 right-3">
        <TrapRating :rating="destination.trapRating" size="sm" />
      </div>

      <!-- Name overlay -->
      <div class="absolute bottom-0 left-0 right-0 p-4">
        <h3 class="text-white font-bold text-lg leading-tight">{{ destination.name }}</h3>
        <p class="text-white/80 text-sm">{{ destination.country }}</p>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4">
      <!-- Tagline -->
      <p class="text-gray-600 text-sm italic mb-3">"{{ destination.tagline }}"</p>

      <!-- Badges -->
      <div class="flex flex-wrap gap-1.5 mb-3">
        <TrapBadge
          v-for="badge in destination.badges.slice(0, 2)"
          :key="badge.id"
          :badge="badge"
          size="sm"
        />
      </div>

      <!-- Price and urgency -->
      <div class="flex items-center justify-between">
        <div>
          <span class="text-gray-400 text-xs">From</span>
          <div class="flex items-baseline gap-1">
            <span class="text-trap-pink-500 font-bold text-xl">
              ${{ destination.averagePrice }}
            </span>
            <span class="text-gray-400 text-xs">/night*</span>
          </div>
        </div>
        <UrgencyIndicator size="sm" />
      </div>
    </div>

    <!-- Hover state -->
    <div class="absolute inset-0 bg-trap-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </RouterLink>
</template>
