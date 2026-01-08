import type { UrgencyMessage } from '../types'

export const urgencyMessages: UrgencyMessage[] = [
  { id: 'u1', text: '3 people are avoiding this right now', icon: '👀' },
  { id: 'u2', text: 'Only 1 cancellation left!', icon: '🎫' },
  { id: 'u3', text: '47 people looked and laughed', icon: '😂' },
  { id: 'u4', text: 'Booked 0 times in the last hour', icon: '📊' },
  { id: 'u5', text: 'This hotel\'s WiFi went down 12 times today', icon: '📶' },
  { id: 'u6', text: 'Last guest left a 1-star review 3 minutes ago', icon: '⭐' },
  { id: 'u7', text: 'Someone is crying about fees right now', icon: '😢' },
  { id: 'u8', text: '3 stars is our highest rating', icon: '🏆' },
  { id: 'u9', text: 'WiFi status: Questionable', icon: '❓' },
  { id: 'u10', text: 'In high demand! (By bedbugs)', icon: '🐛' },
  { id: 'u11', text: 'Price will probably go up (we made that up)', icon: '📈' },
  { id: 'u12', text: 'Selling fast! (We lie about this)', icon: '⚡' },
  { id: 'u13', text: '99% of guests experienced regret', icon: '😔' },
  { id: 'u14', text: 'Featured in "Places to Avoid" magazine', icon: '📰' },
  { id: 'u15', text: 'Our staff is "mostly" friendly', icon: '🙂' },
]

export const tickerMessages: string[] = [
  '🔥 47 people just canceled their trip',
  '💰 Someone is crying about fees right now',
  '⭐ 3 stars is our highest rating',
  '📶 WiFi status: Questionable',
  '🐛 Bedbugs are complimentary',
  '😱 Last review: "Never again"',
  '💸 Hidden fees revealed at checkout (surprise!)',
  '🏨 Room service: Unavailable (always)',
  '🚿 Hot water: Sometimes',
  '🛏️ Beds: Horizontal (usually)',
  '🍳 Breakfast: Technically edible',
  '🧹 Cleaning: Attempted',
]

export function getRandomUrgencyMessage(): UrgencyMessage {
  return urgencyMessages[Math.floor(Math.random() * urgencyMessages.length)]!
}

export function getRandomTickerMessages(count: number = 5): string[] {
  const shuffled = [...tickerMessages].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
