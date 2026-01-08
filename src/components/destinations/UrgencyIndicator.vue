<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { getRandomUrgencyMessage } from '../../data/urgencyMessages'
import type { UrgencyMessage } from '../../types'

defineProps<{
  size?: 'sm' | 'md'
}>()

const currentMessage = ref<UrgencyMessage>(getRandomUrgencyMessage())
let intervalId: number | null = null

onMounted(() => {
  // Rotate messages every 5 seconds
  intervalId = window.setInterval(() => {
    currentMessage.value = getRandomUrgencyMessage()
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const sizeClasses = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
}
</script>

<template>
  <div
    :class="[
      'inline-flex items-center gap-1.5 rounded-full bg-red-50 text-red-600 font-medium animate-pulse',
      sizeClasses[size || 'md']
    ]"
  >
    <span>{{ currentMessage.icon }}</span>
    <span class="truncate max-w-[150px]">{{ currentMessage.text }}</span>
  </div>
</template>
