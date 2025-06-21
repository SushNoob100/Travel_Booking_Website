// User types
export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone?: string
  created_at: string
  updated_at: string
}

export interface UserProfile extends User {
  preferences?: UserPreferences
}

export interface UserPreferences {
  currency: string
  language: string
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
  }
}

// Destination types
export interface Destination {
  id: string
  name: string
  description: string
  country: string
  city: string
  image_url: string
  images: string[]
  price_from: number
  currency: string
  rating: number
  review_count: number
  category: DestinationCategory
  features: string[]
  coordinates: {
    lat: number
    lng: number
  }
  created_at: string
  updated_at: string
}

export type DestinationCategory = 
  | 'beach'
  | 'mountain'
  | 'city'
  | 'adventure'
  | 'cultural'
  | 'luxury'
  | 'budget'
  | 'family'
  | 'romantic'

// Travel package types
export interface TravelPackage {
  id: string
  destination_id: string
  destination?: Destination
  name: string
  description: string
  duration_days: number
  price: number
  currency: string
  max_guests: number
  included_services: string[]
  excluded_services: string[]
  itinerary: ItineraryDay[]
  availability: PackageAvailability[]
  images: string[]
  rating: number
  review_count: number
  created_at: string
  updated_at: string
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
  meals: string[]
  accommodation?: string
}

export interface PackageAvailability {
  start_date: string
  end_date: string
  available_spots: number
  price_modifier: number // percentage modifier from base price
}

// Booking types
export interface Booking {
  id: string
  user_id: string
  user?: User
  package_id: string
  package?: TravelPackage
  start_date: string
  end_date: string
  guests: number
  total_price: number
  currency: string
  status: BookingStatus
  payment_status: PaymentStatus
  special_requests?: string
  guest_details: GuestDetail[]
  created_at: string
  updated_at: string
}

export type BookingStatus = 
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed'

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'
  | 'partially_refunded'

export interface GuestDetail {
  name: string
  email: string
  phone?: string
  age?: number
  dietary_requirements?: string
}

// Search and filter types
export interface SearchFilters {
  destination?: string
  category?: DestinationCategory
  price_min?: number
  price_max?: number
  duration_min?: number
  duration_max?: number
  start_date?: string
  end_date?: string
  guests?: number
  rating_min?: number
  features?: string[]
}

export interface SearchResult {
  packages: TravelPackage[]
  total_count: number
  page: number
  per_page: number
  filters_applied: SearchFilters
}

// Cart types
export interface CartItem {
  package_id: string
  package: TravelPackage
  start_date: string
  end_date: string
  guests: number
  price: number
}

export interface Cart {
  items: CartItem[]
  total_price: number
  currency: string
}

// Review types
export interface Review {
  id: string
  user_id: string
  user?: User
  package_id: string
  package?: TravelPackage
  rating: number
  title: string
  comment: string
  images?: string[]
  helpful_count: number
  created_at: string
  updated_at: string
}

// Payment types
export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  client_secret: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    per_page: number
    total: number
    total_pages: number
  }
}
