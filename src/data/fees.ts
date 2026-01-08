import type { Fee } from '../types'

// Base fees that always apply
export const baseFees: Fee[] = [
  {
    id: 'booking-fee',
    name: 'Booking Fee',
    amount: 24.99,
    reason: 'For the privilege of giving us money',
    category: 'booking',
    revealStage: 1,
    isPercentage: false,
  },
  {
    id: 'service-fee',
    name: 'Service Fee',
    amount: 15,
    reason: 'Service may or may not be provided',
    category: 'service',
    revealStage: 1,
    isPercentage: true,
    percentageBase: 'subtotal',
  },
]

// Fees revealed at checkout step 2
export const checkoutFees: Fee[] = [
  {
    id: 'resort-fee',
    name: 'Resort Fee',
    amount: 45.00,
    reason: 'We have a pool. It might have water.',
    category: 'resort',
    revealStage: 2,
    isPercentage: false,
  },
  {
    id: 'cleaning-fee',
    name: 'Pre-Cleaning Fee',
    amount: 35.00,
    reason: 'We might clean before you arrive. No promises.',
    category: 'random',
    revealStage: 2,
    isPercentage: false,
  },
]

// Fees revealed at checkout step 3
export const convenienceFees: Fee[] = [
  {
    id: 'convenience-fee',
    name: 'Convenience Fee',
    amount: 12.99,
    reason: 'For the convenience of booking online instead of fax',
    category: 'convenience',
    revealStage: 3,
    isPercentage: false,
  },
  {
    id: 'digital-handling',
    name: 'Digital Handling Fee',
    amount: 8.99,
    reason: 'Our computers get tired too',
    category: 'processing',
    revealStage: 3,
    isPercentage: false,
  },
]

// Fees revealed at payment step
export const paymentFees: Fee[] = [
  {
    id: 'processing-fee',
    name: 'Processing Fee',
    amount: 8.50,
    reason: 'Our hamsters who run the servers need feeding',
    category: 'processing',
    revealStage: 4,
    isPercentage: false,
  },
  {
    id: 'platform-fee',
    name: 'Platform Fee',
    amount: 5,
    reason: 'For using our platform instead of theirs',
    category: 'service',
    revealStage: 4,
    isPercentage: true,
    percentageBase: 'subtotal',
  },
]

// Final surprise fees
export const surpriseFees: Fee[] = [
  {
    id: 'existence-tax',
    name: 'Existence Tax',
    amount: 5.99,
    reason: 'You exist. That costs us emotionally.',
    category: 'existence',
    revealStage: 5,
    isPercentage: false,
  },
  {
    id: 'regret-insurance',
    name: 'Regret Insurance',
    amount: 19.99,
    reason: 'You\'ll probably regret this. We\'re preparing.',
    category: 'random',
    revealStage: 5,
    isPercentage: false,
  },
  {
    id: 'surprise-fee',
    name: 'Surprise Fee',
    amount: 14.99,
    reason: 'Surprise! There\'s a fee.',
    category: 'random',
    revealStage: 6,
    isPercentage: false,
  },
]

// All available random fees for dynamic generation
export const randomFees: Fee[] = [
  {
    id: 'pillow-rental',
    name: 'Pillow Rental',
    amount: 7.99,
    reason: 'Per pillow per night. Sleep on your arm for free.',
    category: 'random',
    revealStage: 4,
    isPercentage: false,
  },
  {
    id: 'air-fee',
    name: 'Air Conditioning Surcharge',
    amount: 9.99,
    reason: 'Summer only (also winter)',
    category: 'random',
    revealStage: 4,
    isPercentage: false,
  },
  {
    id: 'view-fee',
    name: 'View Fee',
    amount: 15.00,
    reason: 'You might look out the window',
    category: 'random',
    revealStage: 5,
    isPercentage: false,
  },
  {
    id: 'breathing-fee',
    name: 'Breathing Surcharge',
    amount: 3.50,
    reason: 'Oxygen is a luxury item',
    category: 'random',
    revealStage: 6,
    isPercentage: false,
  },
  {
    id: 'wifi-hope',
    name: 'WiFi Hope Fee',
    amount: 11.99,
    reason: 'Hope the WiFi works fee. No guarantees.',
    category: 'random',
    revealStage: 3,
    isPercentage: false,
  },
  {
    id: 'towel-fee',
    name: 'Towel Usage Fee',
    amount: 4.99,
    reason: 'Per towel. Air drying is complimentary.',
    category: 'random',
    revealStage: 4,
    isPercentage: false,
  },
  {
    id: 'hallway-fee',
    name: 'Hallway Walking Surcharge',
    amount: 8.00,
    reason: 'Wear and tear on the carpet from your feet',
    category: 'random',
    revealStage: 5,
    isPercentage: false,
  },
  {
    id: 'quiet-fee',
    name: 'Quiet Enjoyment Fee',
    amount: 12.00,
    reason: 'For not complaining. Yet.',
    category: 'random',
    revealStage: 6,
    isPercentage: false,
  },
  {
    id: 'ice-fee',
    name: 'Ice Machine Discovery Fee',
    amount: 4.00,
    reason: 'Finding the ice machine is part of the adventure',
    category: 'random',
    revealStage: 4,
    isPercentage: false,
  },
  {
    id: 'complaining-fee',
    name: 'Complaining About Fees Fee',
    amount: 50.00,
    reason: 'For complaining about fees. Very meta.',
    category: 'random',
    revealStage: 6,
    isPercentage: false,
  },
  {
    id: 'anti-discount',
    name: 'Anti-Discount Adjustment',
    amount: 25.00,
    reason: 'You seemed too happy about the discount',
    category: 'random',
    revealStage: 5,
    isPercentage: false,
  },
  {
    id: 'box-opening',
    name: 'Box Opening Surcharge',
    amount: 6.00,
    reason: 'Only charged if you plan to open your luggage',
    category: 'random',
    revealStage: 4,
    isPercentage: false,
  },
]

// Get fees by reveal stage
export function getFeesByStage(stage: number): Fee[] {
  return [
    ...baseFees,
    ...checkoutFees,
    ...convenienceFees,
    ...paymentFees,
    ...surpriseFees,
  ].filter(fee => fee.revealStage <= stage)
}

// Get random additional fees
export function getRandomFees(count: number = 3): Fee[] {
  const shuffled = [...randomFees].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Calculate total fees for a given subtotal and stage
export function calculateFees(subtotal: number, stage: number): { fees: Fee[], total: number } {
  const fees = getFeesByStage(stage)
  let total = 0

  for (const fee of fees) {
    if (fee.isPercentage) {
      const base = fee.percentageBase === 'total' ? subtotal + total : subtotal
      total += (base * fee.amount) / 100
    } else {
      total += fee.amount
    }
  }

  return { fees, total }
}
