<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import ParodyBanner from './components/layout/ParodyBanner.vue'
import UrgencyTicker from './components/layout/UrgencyTicker.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Parody disclaimer banner -->
    <ParodyBanner />

    <!-- Urgency ticker -->
    <UrgencyTicker />

    <!-- Main header -->
    <TheHeader />

    <!-- Main content -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
