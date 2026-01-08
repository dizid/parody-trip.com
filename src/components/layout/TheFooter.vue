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

    <!-- Social & Share -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="font-semibold text-white mb-3 text-center md:text-left">Spread the Misery</h3>
            <div class="flex gap-3">
              <!-- Twitter/X -->
              <a
                :href="socialLinks[0]!.url"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                title="Share on X"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <!-- Facebook -->
              <a
                :href="socialLinks[1]!.url"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                title="Share on Facebook"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <!-- Instagram -->
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 flex items-center justify-center transition-colors"
                title="Follow on Instagram"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <!-- TikTok -->
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                title="Follow on TikTok"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <!-- Reddit -->
              <a
                href="https://reddit.com/submit?url=https://trap.com&title=TRAP.COM%20-%20Places%20NOT%20to%20Visit"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FF4500] flex items-center justify-center transition-colors"
                title="Share on Reddit"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="text-center">
            <p class="text-sm text-gray-400 mb-2">Share this catastrophe with friends:</p>
            <p class="text-xs text-gray-500">"Misery loves company. So do we."</p>
          </div>
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

        <!-- Credits -->
        <div class="mt-6 pt-6 border-t border-gray-800 text-center">
          <p class="text-sm text-gray-400">
            A satirical project by
            <a
              href="https://dizid.com"
              target="_blank"
              rel="noopener"
              class="text-trap-pink-400 hover:text-trap-pink-300 font-medium transition-colors"
            >
              dizid.com
            </a>
          </p>
          <p class="text-xs text-gray-600 mt-2">
            Made with questionable judgment and too much coffee ☕
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
