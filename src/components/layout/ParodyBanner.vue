<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(true)

function closeBanner() {
  isVisible.value = false
}
</script>

<template>
  <div
    v-if="isVisible"
    class="bg-gray-900 text-white text-center py-2 px-4 text-sm relative"
  >
    <span class="inline-flex items-center gap-2">
      <span class="text-yellow-400">⚠️</span>
      <span>This is a <strong>parody</strong>. Not real. Please laugh responsibly.</span>
      <span class="text-yellow-400">⚠️</span>
    </span>
    <button
      @click="closeBanner"
      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
      aria-label="Close banner"
    >
      ✕
    </button>
  </div>
</template>
