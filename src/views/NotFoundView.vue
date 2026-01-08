<script setup lang="ts">
const lostMessages = [
  'Much like your luggage, this page is lost forever.',
  'This page went to get milk and never came back.',
  'Error 404: Page not found (unlike our hidden fees, which are everywhere).',
  'This page is on a permanent vacation. Unlike you.',
  'The page you\'re looking for checked out early.',
]

const randomMessage = lostMessages[Math.floor(Math.random() * lostMessages.length)]

const suggestions = [
  { emoji: '🏠', text: 'Go home and pretend this never happened', path: '/' },
  { emoji: '🔍', text: 'Search for places to avoid', path: '/search' },
  { emoji: '🛒', text: 'Check your cart of regrets', path: '/cart' },
]
</script>

<template>
  <div class="min-h-[60vh] flex items-center justify-center px-4">
    <div class="text-center max-w-lg">
      <!-- Lost luggage animation -->
      <div class="relative w-48 h-48 mx-auto mb-8">
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-8xl animate-bounce">🧳</span>
        </div>
        <div class="absolute top-0 right-0 text-4xl animate-ping">❓</div>
      </div>

      <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">
        Lost Like Your Luggage
      </h2>

      <p class="text-gray-500 mb-8">
        {{ randomMessage }}
      </p>

      <!-- Suggestions -->
      <div class="space-y-3 mb-8">
        <RouterLink
          v-for="suggestion in suggestions"
          :key="suggestion.path"
          :to="suggestion.path"
          class="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mx-auto max-w-xs"
        >
          <span class="text-2xl">{{ suggestion.emoji }}</span>
          <span class="text-gray-700">{{ suggestion.text }}</span>
        </RouterLink>
      </div>

      <!-- Error code details (parody) -->
      <div class="text-sm text-gray-400 font-mono">
        <p>Error Code: TRAP-404-OOPS</p>
        <p>Blame: Probably yours</p>
        <p>Solution: Lower your expectations</p>
      </div>
    </div>
  </div>
</template>
