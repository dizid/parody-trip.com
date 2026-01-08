<script setup lang="ts">
import type { TrapBadge as TrapBadgeType } from '../../types'

defineProps<{
  badge: TrapBadgeType
  size?: 'sm' | 'md' | 'lg'
}>()

const colorClasses = {
  danger: 'bg-red-100 text-red-800 border-red-200',
  warning: 'bg-orange-100 text-orange-800 border-orange-200',
  certified: 'bg-trap-pink-100 text-trap-pink-800 border-trap-pink-200',
  info: 'bg-trap-blue-100 text-trap-blue-800 border-trap-blue-200',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1 rounded-full font-medium border',
      colorClasses[badge.color],
      sizeClasses[size || 'md']
    ]"
  >
    <span>{{ badge.icon }}</span>
    <span>{{ badge.name }}</span>
  </span>
</template>
