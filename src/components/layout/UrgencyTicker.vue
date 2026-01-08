<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { tickerMessages } from '../../data/urgencyMessages'

const messages = ref<string[]>([])
const tickerContent = ref('')

onMounted(() => {
  // Get random messages
  messages.value = [...tickerMessages].sort(() => Math.random() - 0.5).slice(0, 8)
  // Double them for seamless loop
  tickerContent.value = [...messages.value, ...messages.value].join('   •   ')
})
</script>

<template>
  <div class="ticker-wrap overflow-hidden bg-gradient-to-r from-trap-pink-500 to-trap-pink-600 text-white py-2">
    <div class="ticker-container relative">
      <div class="ticker animate-ticker inline-block whitespace-nowrap">
        {{ tickerContent }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticker-container {
  width: 100%;
}

.ticker {
  animation: ticker 45s linear infinite;
  padding-left: 100%;
}

@keyframes ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.ticker:hover {
  animation-play-state: paused;
}
</style>
