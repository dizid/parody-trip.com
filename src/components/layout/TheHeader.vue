<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const cartCount = ref(0)
const isMobileMenuOpen = ref(false)

const navTabs = [
  { id: 'hotels', label: 'Hotels & Holes', icon: '🏨', path: '/search?type=hotels', disabled: false },
  { id: 'flights', label: 'Flights to Nowhere', icon: '✈️', path: '#', disabled: true, tooltip: 'Coming never' },
  { id: 'trains', label: 'Delays & Cancellations', icon: '🚂', path: '#', disabled: true, tooltip: 'Perpetually delayed' },
  { id: 'cars', label: 'Car Troubles', icon: '🚗', path: '#', disabled: true, tooltip: 'Check engine light included' },
  { id: 'experiences', label: 'Things to Regret', icon: '🎭', path: '#', disabled: true, tooltip: 'Memories you\'ll suppress' },
]

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <!-- Top bar with logo and user actions -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 group">
          <span class="text-3xl font-bold">
            <span class="bg-gradient-to-r from-trap-blue-500 to-trap-pink-500 bg-clip-text text-transparent">
              TRAP
            </span>
            <span class="text-gray-400">.com</span>
          </span>
          <span class="hidden sm:block text-xs text-gray-400 group-hover:text-trap-pink-500 transition-colors">
            Where Dreams Go to Die
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <template v-for="tab in navTabs" :key="tab.id">
            <RouterLink
              v-if="!tab.disabled"
              :to="tab.path"
              class="nav-link flex items-center gap-1.5"
              :class="{ 'nav-link-active': route.path === tab.path }"
            >
              <span>{{ tab.icon }}</span>
              <span>{{ tab.label }}</span>
            </RouterLink>
            <span
              v-else
              class="nav-link opacity-50 cursor-not-allowed flex items-center gap-1.5"
              :title="tab.tooltip"
            >
              <span>{{ tab.icon }}</span>
              <span>{{ tab.label }}</span>
            </span>
          </template>
        </nav>

        <!-- Right side actions -->
        <div class="flex items-center gap-4">
          <!-- Currency (fake) -->
          <button class="hidden sm:flex items-center gap-1 text-sm text-gray-600 hover:text-trap-blue-500">
            <span>USD</span>
            <span>▼</span>
          </button>

          <!-- Sign in (fake) -->
          <button class="hidden sm:block text-sm text-gray-600 hover:text-trap-blue-500">
            Sign In to Your Mistakes
          </button>

          <!-- Cart -->
          <RouterLink
            to="/cart"
            class="relative flex items-center gap-1 text-gray-600 hover:text-trap-pink-500 transition-colors"
          >
            <span class="text-xl">🛒</span>
            <span class="hidden sm:inline text-sm">Cart of Regrets</span>
            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-2 bg-trap-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </RouterLink>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 text-gray-600 hover:text-trap-blue-500"
          >
            <span class="text-xl">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <nav
      v-if="isMobileMenuOpen"
      class="lg:hidden bg-white border-t border-gray-100 py-4"
    >
      <div class="max-w-7xl mx-auto px-4 space-y-2">
        <template v-for="tab in navTabs" :key="tab.id">
          <RouterLink
            v-if="!tab.disabled"
            :to="tab.path"
            class="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-100"
            @click="isMobileMenuOpen = false"
          >
            <span>{{ tab.icon }}</span>
            <span>{{ tab.label }}</span>
          </RouterLink>
          <span
            v-else
            class="flex items-center gap-2 py-2 px-3 rounded-lg opacity-50"
          >
            <span>{{ tab.icon }}</span>
            <span>{{ tab.label }}</span>
            <span class="text-xs text-gray-400">({{ tab.tooltip }})</span>
          </span>
        </template>
      </div>
    </nav>
  </header>
</template>
