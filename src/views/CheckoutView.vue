<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { baseFees, checkoutFees, convenienceFees, paymentFees, surpriseFees, getRandomFees } from '../data/fees'
import { paymentMethods } from '../data/paymentMethods'

const router = useRouter()

const step = ref(1)
const selectedPayment = ref('actual-money')

// Simulate a cart
const subtotal = 267 // 89 * 3 nights

// Progressive fee reveal based on step
const visibleFees = computed(() => {
  let fees = [...baseFees]

  if (step.value >= 2) {
    fees = [...fees, ...checkoutFees]
  }
  if (step.value >= 3) {
    fees = [...fees, ...convenienceFees]
  }
  if (step.value >= 4) {
    fees = [...fees, ...paymentFees]
    // Add some random fees for extra comedy
    fees = [...fees, ...getRandomFees(2)]
  }
  if (step.value >= 5) {
    fees = [...fees, ...surpriseFees.slice(0, 2)]
  }

  return fees
})

const feesTotal = computed(() =>
  visibleFees.value.reduce((sum, fee) => {
    if (fee.isPercentage) {
      return sum + (subtotal * fee.amount) / 100
    }
    return sum + fee.amount
  }, 0)
)

const grandTotal = computed(() => subtotal + feesTotal.value)

// Animate new fees appearing
const newFeesCount = ref(0)
watch(step, (_newStep, oldStep) => {
  const oldFees = oldStep <= 1 ? baseFees.length : oldStep * 2 + baseFees.length
  newFeesCount.value = visibleFees.value.length - oldFees
})

function nextStep() {
  if (step.value < 5) {
    step.value++
  } else {
    // Complete checkout
    router.push('/confirmation/TRAP-' + Math.random().toString(36).substr(2, 9).toUpperCase())
  }
}

const stepTitles = [
  'Guest Information',
  'Payment Method',
  'Review Booking',
  'Final Review',
  'Last Chance to Run',
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
      <p class="text-gray-500 mb-8">Step {{ step }} of 5: {{ stepTitles[step - 1] }}</p>

      <!-- Progress bar -->
      <div class="mb-8">
        <div class="flex justify-between mb-2">
          <span v-for="n in 5" :key="n" class="text-sm" :class="n <= step ? 'text-trap-pink-500' : 'text-gray-400'">
            {{ n }}
          </span>
        </div>
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-trap-blue-500 to-trap-pink-500 transition-all duration-500"
            :style="{ width: `${(step / 5) * 100}%` }"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Form Section -->
        <div class="lg:col-span-2">
          <!-- Step 1: Guest Info -->
          <div v-if="step === 1" class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="font-semibold text-gray-900 text-lg mb-4">Guest Information</h2>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" class="search-input" placeholder="Your first regret" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" class="search-input" placeholder="Your family's shame" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email (We'll Sell It)</label>
                <input type="email" class="search-input" placeholder="spam@victim.com" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Phone (For Emergencies We'll Ignore)</label>
                <input type="tel" class="search-input" placeholder="555-REGRET" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Special Requests (We'll Ignore These Too)</label>
                <textarea class="search-input h-24" placeholder="List your hopes and dreams here. We won't read them."></textarea>
              </div>
            </div>
          </div>

          <!-- Step 2: Payment -->
          <div v-if="step === 2" class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="font-semibold text-gray-900 text-lg mb-4">Payment Method</h2>
            <div class="space-y-3">
              <label
                v-for="method in paymentMethods"
                :key="method.id"
                class="flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all"
                :class="[
                  selectedPayment === method.id ? 'border-trap-pink-500 bg-trap-pink-50' : 'border-gray-200',
                  !method.available && 'opacity-50 cursor-not-allowed'
                ]"
              >
                <input
                  type="radio"
                  :value="method.id"
                  v-model="selectedPayment"
                  :disabled="!method.available"
                  class="text-trap-pink-500 focus:ring-trap-pink-500"
                />
                <span class="text-2xl">{{ method.icon }}</span>
                <div class="flex-1">
                  <p class="font-medium text-gray-900">{{ method.name }}</p>
                  <p class="text-sm text-gray-500">{{ method.description }}</p>
                </div>
                <span v-if="method.processingFee !== 0" class="text-sm" :class="method.processingFee < 0 ? 'text-green-500' : 'text-red-500'">
                  {{ method.processingFee < 0 ? `-$${Math.abs(method.processingFee)}` : `+$${method.processingFee}` }}
                </span>
              </label>
            </div>
          </div>

          <!-- Steps 3-5: Review with escalating fees -->
          <div v-if="step >= 3" class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="font-semibold text-gray-900 text-lg mb-4">
              {{ step === 3 ? 'Review Your Booking' : step === 4 ? 'Final Review (We Promise)' : 'Actually Final Review' }}
            </h2>

            <div class="p-4 bg-gray-50 rounded-lg mb-4">
              <h3 class="font-medium text-gray-900">The "Cozy" Hostel</h3>
              <p class="text-sm text-gray-500">Standard Disappointment • 3 nights • 2 guests</p>
              <p class="text-sm text-gray-500">March 15 - March 18, 2024</p>
            </div>

            <div v-if="step === 5" class="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 class="font-medium text-red-800 mb-2">⚠️ Last Chance Warning</h3>
              <p class="text-sm text-red-700">
                You are about to book a place you will regret. The fees have multiplied.
                The price is now {{ ((grandTotal / subtotal - 1) * 100).toFixed(0) }}% higher than advertised.
                This is your last chance to close this tab and pretend this never happened.
              </p>
            </div>
          </div>

          <button
            @click="nextStep"
            class="btn-primary w-full mt-6"
          >
            {{ step === 5 ? 'Complete Booking (Final Answer)' : 'Continue to More Fees' }}
          </button>
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

              <!-- Fees with animation -->
              <div class="border-t pt-3 space-y-2 max-h-64 overflow-y-auto">
                <p class="text-sm font-medium text-gray-500">
                  Fees ({{ visibleFees.length }} so far):
                </p>
                <div
                  v-for="(fee, index) in visibleFees"
                  :key="fee.id"
                  class="flex justify-between text-sm animate-slide-in-right"
                  :style="{ animationDelay: `${index * 100}ms` }"
                >
                  <span class="text-gray-600 truncate pr-2" :title="fee.reason">
                    {{ fee.name }}
                  </span>
                  <span class="flex-shrink-0">
                    ${{ fee.isPercentage ? (subtotal * fee.amount / 100).toFixed(2) : fee.amount.toFixed(2) }}
                  </span>
                </div>
              </div>

              <div class="border-t pt-3">
                <div class="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Fees Total</span>
                  <span class="text-red-500">${{ feesTotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between font-bold text-xl">
                  <span>Grand Total</span>
                  <span class="text-trap-pink-500">${{ grandTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <!-- Fee increase indicator -->
            <div class="mt-4 p-3 rounded-lg" :class="step >= 3 ? 'bg-red-50' : 'bg-yellow-50'">
              <p class="text-xs" :class="step >= 3 ? 'text-red-800' : 'text-yellow-800'">
                <span v-if="step < 5">
                  ⚠️ {{ 5 - step }} more fee reveals remaining. Brace yourself.
                </span>
                <span v-else>
                  🎉 All fees revealed! Final price is {{ ((grandTotal / subtotal - 1) * 100).toFixed(0) }}% more than shown. Enjoy!
                </span>
              </p>
            </div>

            <!-- Comparison -->
            <div class="mt-4 text-center text-sm text-gray-500">
              <p>Original advertised: <span class="line-through">$89/night</span></p>
              <p>Actual cost: <span class="font-bold text-trap-pink-500">${{ (grandTotal / 3).toFixed(2) }}/night</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
