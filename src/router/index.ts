import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'TRAP.COM - Places NOT to Visit' }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchResultsView.vue'),
      meta: { title: 'Search Results - TRAP.COM' }
    },
    {
      path: '/destination/:id',
      name: 'destination',
      component: () => import('../views/DestinationView.vue'),
      meta: { title: 'Destination - TRAP.COM' }
    },
    {
      path: '/hotel/:id',
      name: 'hotel',
      component: () => import('../views/HotelView.vue'),
      meta: { title: 'Hotel - TRAP.COM' }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: { title: 'Cart of Regrets - TRAP.COM' }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: { title: 'Checkout (Abandon Hope) - TRAP.COM' }
    },
    {
      path: '/confirmation/:id',
      name: 'confirmation',
      component: () => import('../views/ConfirmationView.vue'),
      meta: { title: 'Booking Confirmed (Allegedly) - TRAP.COM' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: '404 - Lost Like Your Luggage - TRAP.COM' }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

// Update document title on navigation
router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || 'TRAP.COM - Where Dreams Go to Die'
  next()
})

export default router
