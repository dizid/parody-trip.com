<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const confirmationCode = computed(() => route.params.id as string || 'TRAP-404-NOTFOUND')

const funFacts = [
  'Your booking may or may not exist in our system.',
  'A confirmation email has been sent to an address we made up.',
  'Your room will be ready sometime between now and never.',
  'We\'ve shared your information with approximately 47 third parties.',
  'The hotel has been notified. They sighed.',
]

const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-16">
    <div class="max-w-2xl mx-auto px-4 text-center">
      <!-- Success animation -->
      <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-subtle">
        <span class="text-5xl">✓</span>
      </div>

      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Booking "Confirmed"
      </h1>

      <p class="text-xl text-gray-600 mb-8">
        Congratulations on your upcoming regret!
      </p>

      <!-- Confirmation details -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="mb-6">
          <p class="text-sm text-gray-500 mb-1">Confirmation Code</p>
          <p class="text-3xl font-mono font-bold text-trap-blue-500">{{ confirmationCode }}</p>
        </div>

        <div class="border-t border-b py-6 my-6 space-y-4">
          <div class="flex justify-between">
            <span class="text-gray-500">Property</span>
            <span class="font-medium">The "Cozy" Hostel</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Check-in</span>
            <span class="font-medium">March 15, 2024 (Allegedly)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Check-out</span>
            <span class="font-medium">March 18, 2024 (If They Let You)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Guests</span>
            <span class="font-medium">2 (Victims)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Total Paid</span>
            <span class="font-medium text-trap-pink-500">$487.42*</span>
          </div>
        </div>

        <p class="text-sm text-gray-500 italic">
          "{{ randomFact }}"
        </p>
      </div>

      <!-- What's next -->
      <div class="bg-yellow-50 rounded-xl p-6 mb-8">
        <h2 class="font-semibold text-yellow-800 mb-3">What Happens Next?</h2>
        <ul class="text-sm text-yellow-700 space-y-2 text-left">
          <li class="flex items-start gap-2">
            <span>📧</span>
            <span>You'll receive a confirmation email (check spam, we're usually there)</span>
          </li>
          <li class="flex items-start gap-2">
            <span>📱</span>
            <span>Download our app for real-time disappointment updates</span>
          </li>
          <li class="flex items-start gap-2">
            <span>🏨</span>
            <span>Show up and hope for the best</span>
          </li>
          <li class="flex items-start gap-2">
            <span>📝</span>
            <span>Leave a review (5 stars, obviously)</span>
          </li>
        </ul>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="btn-secondary">
          📄 View Booking Details
        </button>
        <RouterLink to="/" class="btn-primary">
          🏠 Book Another Regret
        </RouterLink>
      </div>

      <!-- Disclaimer -->
      <p class="text-xs text-gray-400 mt-8">
        * This is a parody website. No actual booking has been made.
        No money has been charged. No hotel expects your arrival.
        Please do not show up anywhere with this confirmation code.
      </p>
    </div>
  </div>
</template>

<style scoped>
.animate-bounce-subtle {
  animation: bounceSubtle 2s infinite;
}

@keyframes bounceSubtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
