<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getHotelById } from '../data/hotels'
import TrapRating from '../components/destinations/TrapRating.vue'
import TrapBadge from '../components/destinations/TrapBadge.vue'
import UrgencyIndicator from '../components/destinations/UrgencyIndicator.vue'
import ShareButtons from '../components/shared/ShareButtons.vue'

const route = useRoute()

const hotel = computed(() => {
  const id = route.params.id as string
  return getHotelById(id)
})

const selectedRoom = ref(0)
</script>

<template>
  <div v-if="!hotel" class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-6xl mb-4">🏨</p>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Hotel Not Found</h1>
      <p class="text-gray-500 mb-4">This hotel doesn't exist. Consider it a blessing.</p>
      <RouterLink to="/" class="btn-primary">Go Home</RouterLink>
    </div>
  </div>

  <div v-else>
    <!-- Hero -->
    <div class="relative h-[400px]">
      <img
        :src="hotel.images[0]"
        :alt="hotel.name"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div class="absolute bottom-0 left-0 right-0 p-8">
        <div class="max-w-7xl mx-auto">
          <TrapRating :rating="hotel.starRating" size="lg" class="mb-2" />
          <h1 class="text-4xl font-bold text-white mb-2">{{ hotel.name }}</h1>
          <p class="text-xl text-white/80 italic">"{{ hotel.tagline }}"</p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <section class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">About This Establishment</h2>
            <p class="text-gray-600">{{ hotel.description }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <TrapBadge v-for="badge in hotel.badges" :key="badge.id" :badge="badge" />
            </div>
          </section>

          <!-- Amenities -->
          <section class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">"Amenities"</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="amenity in hotel.amenities"
                :key="amenity.id"
                class="p-3 rounded-lg"
                :class="amenity.available ? 'bg-green-50' : 'bg-gray-100 opacity-60'"
              >
                <div class="flex items-center gap-2">
                  <span>{{ amenity.icon }}</span>
                  <span class="font-medium">{{ amenity.name }}</span>
                  <span v-if="!amenity.available" class="text-xs text-red-500">(N/A)</span>
                </div>
                <p class="text-xs text-gray-500 mt-1">{{ amenity.caveat }}</p>
              </div>
            </div>
          </section>

          <!-- Room Types -->
          <section class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Room Options</h2>
            <div class="space-y-4">
              <div
                v-for="(room, index) in hotel.roomTypes"
                :key="room.id"
                @click="selectedRoom = index"
                class="p-4 rounded-lg border-2 cursor-pointer transition-all"
                :class="selectedRoom === index ? 'border-trap-pink-500 bg-trap-pink-50' : 'border-gray-200 hover:border-gray-300'"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-semibold text-gray-900">{{ room.name }}</h3>
                    <p class="text-sm text-gray-500">{{ room.description }}</p>
                    <div class="flex gap-4 mt-2 text-sm text-gray-600">
                      <span>🛏️ {{ room.beds }}</span>
                      <span>📐 {{ room.size }}</span>
                      <span>👥 Max {{ room.maxGuests }}</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-trap-pink-500">${{ room.basePrice }}</span>
                    <span class="text-gray-400 text-sm">/night*</span>
                    <span
                      v-if="!room.available"
                      class="block text-xs text-red-500 mt-1"
                    >
                      Sold Out (Relief)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Reviews -->
          <section class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
              Guest Reviews (5 Stars, Somehow)
            </h2>
            <div class="space-y-4">
              <div
                v-for="review in hotel.reviews"
                :key="review.id"
                class="p-4 bg-gray-50 rounded-lg"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-10 h-10 bg-trap-blue-100 rounded-full flex items-center justify-center">
                    {{ review.author[0] }}
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">{{ review.author }}</p>
                    <p class="text-xs text-gray-500">{{ review.authorTitle }} • {{ review.tripType }}</p>
                  </div>
                  <div class="ml-auto flex gap-0.5">
                    <span v-for="n in 5" :key="n" class="text-yellow-400">★</span>
                  </div>
                </div>
                <h4 class="font-medium text-gray-900">{{ review.title }}</h4>
                <p class="text-gray-600 text-sm mt-1">{{ review.body }}</p>
                <p class="text-xs text-gray-400 mt-2">
                  {{ review.helpful }} people found this trauma relatable
                </p>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="space-y-6">
          <div class="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <div class="flex items-center justify-between mb-4">
              <div>
                <span class="text-gray-400 text-sm line-through">${{ hotel.basePrice * 3 }}</span>
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-bold text-trap-pink-500">
                    ${{ hotel.basePrice }}
                  </span>
                  <span class="text-gray-400">/night*</span>
                </div>
              </div>
              <UrgencyIndicator />
            </div>

            <div class="space-y-3 mb-4">
              <div class="text-sm text-gray-600 flex justify-between">
                <span>Last booked:</span>
                <span class="font-medium">{{ hotel.lastBooked }}</span>
              </div>
              <div class="text-sm text-gray-600 flex justify-between">
                <span>Currently viewing:</span>
                <span class="font-medium text-red-500">{{ hotel.viewersCount }} people</span>
              </div>
            </div>

            <RouterLink
              to="/cart"
              class="btn-primary w-full block text-center mb-3"
            >
              Reserve This Mistake
            </RouterLink>

            <p class="text-xs text-gray-400 text-center">
              * Fees will be revealed gradually at checkout for maximum surprise
            </p>

            <!-- Share -->
            <div class="mt-6 pt-6 border-t border-gray-100">
              <p class="text-sm text-gray-500 mb-3 text-center">Share this nightmare:</p>
              <ShareButtons
                :title="`${hotel.name} - TRAP.COM`"
                :text="`Found this 'gem' on TRAP.COM: ${hotel.name} - '${hotel.tagline}'`"
                variant="compact"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
