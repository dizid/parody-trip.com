// TRAP.COM - Type Definitions
// "Where Dreams Go to Die, Affordably"

export interface Destination {
  id: string
  name: string
  country: string
  emoji: string
  tagline: string
  description: string
  image: string
  gallery: string[]
  trapRating: number // 0-5 hazards
  badges: TrapBadge[]
  reasonsToAvoid: string[]
  averagePrice: number
  currency: string
  highlights: DestinationHighlight[]
  stats: DestinationStats
}

export interface DestinationHighlight {
  icon: string
  title: string
  description: string
}

export interface DestinationStats {
  tourists: number
  regrets: number
  complaints: number
  returnVisitors: number
  avgStayDuration: string
}

export interface Hotel {
  id: string
  destinationId: string
  name: string
  tagline: string
  description: string
  address: string
  starRating: number // In hazard symbols
  images: string[]
  basePrice: number
  amenities: Amenity[]
  badges: TrapBadge[]
  reviews: Review[]
  roomTypes: RoomType[]
  viewersCount: number
  lastBooked: string
}

export interface RoomType {
  id: string
  name: string
  description: string
  basePrice: number
  maxGuests: number
  beds: string
  size: string
  amenities: string[]
  images: string[]
  available: boolean
}

export interface Amenity {
  id: string
  name: string
  icon: string
  available: boolean
  caveat: string // The funny catch
}

export interface Review {
  id: string
  author: string
  authorTitle: string // "Verified Survivor"
  avatar?: string
  rating: number // Always 5 despite terrible content
  title: string
  body: string
  date: string
  helpful: number
  tripType: string
}

export interface Fee {
  id: string
  name: string
  amount: number
  reason: string // Absurd justification
  category: FeeCategory
  revealStage: number // When to show (1-6)
  isPercentage: boolean
  percentageBase?: 'subtotal' | 'total'
}

export type FeeCategory =
  | 'booking'
  | 'service'
  | 'processing'
  | 'convenience'
  | 'resort'
  | 'existence'
  | 'random'

export interface TrapBadge {
  id: string
  name: string
  icon: string
  color: BadgeColor
  description?: string
}

export type BadgeColor = 'danger' | 'warning' | 'certified' | 'info'

export interface CartItem {
  id: string
  hotel: Hotel
  roomType: RoomType
  checkIn: string
  checkOut: string
  guests: number
  nights: number
  basePrice: number
}

export interface PaymentMethod {
  id: string
  name: string
  icon: string
  description: string
  processingFee: number
  available: boolean
}

export interface Booking {
  id: string
  items: CartItem[]
  fees: CalculatedFee[]
  subtotal: number
  feesTotal: number
  grandTotal: number
  confirmationCode: string
  status: BookingStatus
  paymentMethod?: PaymentMethod
}

export interface CalculatedFee {
  fee: Fee
  calculatedAmount: number
}

export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'canceled'
  | 'lost'
  | 'questionable'

export interface SearchFilters {
  destination: string
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
  priceRange: [number, number]
  trapRating: number[]
  sortBy: SortOption
}

export type SortOption =
  | 'price-low'
  | 'price-high'
  | 'rating-worst'
  | 'most-avoided'
  | 'recently-complained'

export interface UrgencyMessage {
  id: string
  text: string
  icon?: string
}

export interface NavTab {
  id: string
  label: string
  icon: string
  path: string
  disabled?: boolean
  disabledReason?: string
}
