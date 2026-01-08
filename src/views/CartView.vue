<script setup lang="ts">
import { ref, computed } from 'vue'
import { baseFees } from '../data/fees'

// Fake cart item for demo
const cartItems = ref([
  {
    id: '1',
    hotelName: 'The "Cozy" Hostel',
    roomType: 'Standard Disappointment',
    checkIn: '2024-03-15',
    checkOut: '2024-03-18',
    nights: 3,
    guests: 2,
    basePrice: 89,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80',
  },
])

const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.basePrice * item.nights, 0)
)

// Progressive fee reveal - stage 1
const visibleFees = computed(() => [...baseFees])
const feesTotal = computed(() =>
  visibleFees.value.reduce((sum, fee) => {
    if (fee.isPercentage) {
      return sum + (subtotal.value * fee.amount) / 100
    }
    return sum + fee.amount
  }, 0)
)

const grandTotal = computed(() => subtotal.value + feesTotal.value)
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Your Cart of Regrets</h1>
      <p class="text-gray-500 mb-8">Review your upcoming disappointments</p>

      <div v-if="cartItems.length === 0" class="text-center py-16 bg-white rounded-xl">
        <p class="text-6xl mb-4">🛒</p>
        <h2 class="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
        <p class="text-gray-500 mb-6">Unlike the void in your heart.</p>
        <RouterLink to="/" class="btn-primary">Browse Anti-Destinations</RouterLink>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="bg-white rounded-xl p-6 shadow-sm"
          >
            <div class="flex gap-4">
              <img
                :src="item.image"
                :alt="item.hotelName"
                class="w-32 h-32 object-cover rounded-lg"
              />
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900 text-lg">{{ item.hotelName }}</h3>
                <p class="text-gray-500">{{ item.roomType }}</p>
                <div class="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>📅 {{ item.checkIn }} → {{ item.checkOut }}</span>
                  <span>🌙 {{ item.nights }} nights</span>
                  <span>👥 {{ item.guests }} guests</span>
                </div>
                <div class="mt-4 flex items-center justify-between">
                  <button class="text-red-500 text-sm hover:underline">
                    Remove (Wise Choice)
                  </button>
                  <span class="font-semibold">
                    ${{ item.basePrice }} × {{ item.nights }} = ${{ item.basePrice * item.nights }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <h2 class="font-semibold text-gray-900 text-lg mb-4">Order Summary</h2>

            <div class="space-y-3">
              <div class="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </div>

              <!-- Fees (Stage 1) -->
              <div class="border-t pt-3 space-y-2">
                <p class="text-sm font-medium text-gray-500">Fees (so far...):</p>
                <div
                  v-for="fee in visibleFees"
                  :key="fee.id"
                  class="flex justify-between text-sm"
                >
                  <span class="text-gray-600" :title="fee.reason">
                    {{ fee.name }}
                    <span class="text-xs text-gray-400 cursor-help">ℹ️</span>
                  </span>
                  <span>
                    {{ fee.isPercentage ? `${fee.amount}%` : `$${fee.amount.toFixed(2)}` }}
                  </span>
                </div>
              </div>

              <div class="border-t pt-3">
                <div class="flex justify-between font-semibold text-lg">
                  <span>Total (So Far)</span>
                  <span class="text-trap-pink-500">${{ grandTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <div class="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p class="text-xs text-yellow-800">
                ⚠️ Additional fees will be revealed at checkout. This is not the final price. It never is.
              </p>
            </div>

            <RouterLink
              to="/checkout"
              class="btn-primary w-full mt-4 block text-center"
            >
              Proceed to More Fees
            </RouterLink>

            <p class="text-xs text-gray-400 text-center mt-4">
              By proceeding, you accept that more fees are coming.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
