import type { PaymentMethod } from '../types'

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'actual-money',
    name: 'Actual Money',
    icon: '💳',
    description: 'Boring but effective. Processing fee applies.',
    processingFee: 12.99,
    available: true,
  },
  {
    id: 'exposure',
    name: 'Exposure',
    icon: '📸',
    description: 'For influencers. We\'ll mention you once. Maybe.',
    processingFee: 0,
    available: false,
  },
  {
    id: 'good-vibes',
    name: 'Good Vibes',
    icon: '✨',
    description: 'Payment in positive energy only. Requires 10,000 karma.',
    processingFee: 0,
    available: false,
  },
  {
    id: 'monopoly',
    name: 'Monopoly Money',
    icon: '🎲',
    description: 'From your childhood game. Pink $500s preferred.',
    processingFee: 0,
    available: false,
  },
  {
    id: 'soul',
    name: 'Your Soul',
    icon: '👻',
    description: 'One-time payment. Terms eternal. No refunds.',
    processingFee: -15, // Discount!
    available: true,
  },
  {
    id: 'handshake',
    name: 'Firm Handshake',
    icon: '🤝',
    description: 'Old school. Must be firm. We\'ll know if it isn\'t.',
    processingFee: 0,
    available: false,
  },
  {
    id: 'crypto',
    name: 'CrapCoin',
    icon: '💩',
    description: 'Our proprietary cryptocurrency. Currently worth nothing.',
    processingFee: 99.99,
    available: true,
  },
  {
    id: 'promise',
    name: 'IOU',
    icon: '📝',
    description: 'A promise to pay later. Interest rate: your firstborn.',
    processingFee: 47.00,
    available: true,
  },
  {
    id: 'barter',
    name: 'Trade/Barter',
    icon: '🔄',
    description: 'What do you have? Chickens? We might accept chickens.',
    processingFee: 0,
    available: false,
  },
]

export function getAvailablePaymentMethods(): PaymentMethod[] {
  return paymentMethods.filter(pm => pm.available)
}

export function getPaymentMethodById(id: string): PaymentMethod | undefined {
  return paymentMethods.find(pm => pm.id === id)
}
