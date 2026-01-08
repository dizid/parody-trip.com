<script setup lang="ts">
const footerLinks = {
  'About TRAP.COM': [
    { label: 'About Us (Don\'t Ask)', href: '#' },
    { label: 'Our Mission (Questionable)', href: '#' },
    { label: 'Press (Bad Press)', href: '#' },
    { label: 'Careers (We\'re Not Hiring)', href: '#' },
  ],
  'Customer Disservice': [
    { label: 'Help Center (Empty)', href: '#' },
    { label: 'Contact Us (Don\'t)', href: '#' },
    { label: 'Refund Policy (LOL)', href: '#' },
    { label: 'Complaints (Ignored)', href: '#' },
  ],
  'Legal Fiction': [
    { label: 'Terms of Suffering', href: '#' },
    { label: 'Privacy Policy (We Sell Everything)', href: '#' },
    { label: 'Cookie Policy (We Take Them All)', href: '#' },
    { label: 'Disclaimer (Read This)', href: '#' },
  ],
  'Partner With Us': [
    { label: 'List Your Property (Brave)', href: '#' },
    { label: 'Affiliate Program (Pyramid)', href: '#' },
    { label: 'Advertising (Waste Money)', href: '#' },
    { label: 'Business Solutions (Problems)', href: '#' },
  ],
}

const trustBadges = [
  { icon: '🏆', label: 'Winner of 0 Awards', sublabel: 'Since 2024' },
  { icon: '📞', label: '24/7 Support', sublabel: 'We Won\'t Answer' },
  { icon: '💰', label: 'Best Price Guarantee', sublabel: '*Compared to Other Scams' },
]

const socialLinks = [
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/intent/tweet?text=Check%20out%20TRAP.COM%20-%20Find%20places%20NOT%20to%20visit!' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=https://trap.com' },
  { name: 'Instagram', icon: 'instagram', url: '#' },
  { name: 'TikTok', icon: 'tiktok', url: '#' },
]
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Trust badges section -->
    <div class="border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="badge in trustBadges"
            :key="badge.label"
            class="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50"
          >
            <span class="text-3xl">{{ badge.icon }}</span>
            <div>
              <p class="font-semibold text-white">{{ badge.label }}</p>
              <p class="text-sm text-gray-400">{{ badge.sublabel }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main footer links -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(links, category) in footerLinks" :key="category">
          <h3 class="font-semibold text-white mb-4">{{ category }}</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm hover:text-trap-pink-400 transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold">
              <span class="bg-gradient-to-r from-trap-blue-400 to-trap-pink-400 bg-clip-text text-transparent">
                TRAP
              </span>
              <span class="text-gray-500">.com</span>
            </span>
            <span class="text-sm text-gray-500">© 2024 All Wrongs Reserved</span>
          </div>

          <p class="text-sm text-gray-500 text-center md:text-right">
            This is a parody website. No real bookings. No real fees.
            <br class="hidden md:inline" />
            (Well, maybe some real fees. We haven't decided.)
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
