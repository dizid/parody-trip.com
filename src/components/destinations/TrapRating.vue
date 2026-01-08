<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
}>()

const maxRating = props.maxRating || 5

const sizeClasses = {
  sm: 'text-sm gap-0.5',
  md: 'text-base gap-1',
  lg: 'text-xl gap-1',
}

const filledIcons = computed(() => Math.min(props.rating, maxRating))
const emptyIcons = computed(() => maxRating - filledIcons.value)
</script>

<template>
  <div
    :class="['flex items-center', sizeClasses[size || 'md']]"
    :title="`${rating}/${maxRating} Hazard Rating`"
  >
    <span
      v-for="n in filledIcons"
      :key="`filled-${n}`"
      class="text-orange-500"
    >
      ⚠️
    </span>
    <span
      v-for="n in emptyIcons"
      :key="`empty-${n}`"
      class="opacity-30"
    >
      ⚠️
    </span>
  </div>
</template>
