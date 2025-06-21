import { createServerComponentClient } from './supabase-server'
import type { 
  Destination, 
  TravelPackage, 
  Booking, 
  Review, 
  SearchFilters, 
  SearchResult,
  User,
  UserProfile 
} from '@/types'

// User and Profile functions
export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) {
    console.error('Error fetching user profile:', error)
    return null
  }
  
  return data
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>): Promise<boolean> {
  const supabase = await createServerComponentClient()
  
  const { error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
  
  if (error) {
    console.error('Error updating user profile:', error)
    return false
  }
  
  return true
}

// Destination functions
export async function getDestinations(): Promise<Destination[]> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .order('rating', { ascending: false })
  
  if (error) {
    console.error('Error fetching destinations:', error)
    return []
  }
  
  return data || []
}

export async function getDestinationById(id: string): Promise<Destination | null> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching destination:', error)
    return null
  }
  
  return data
}

// Travel Package functions
export async function getTravelPackages(): Promise<TravelPackage[]> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('travel_packages')
    .select(`
      *,
      destination:destinations(*)
    `)
    .eq('is_active', true)
    .order('rating', { ascending: false })
  
  if (error) {
    console.error('Error fetching travel packages:', error)
    return []
  }
  
  return data || []
}

export async function getTravelPackageById(id: string): Promise<TravelPackage | null> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('travel_packages')
    .select(`
      *,
      destination:destinations(*)
    `)
    .eq('id', id)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('Error fetching travel package:', error)
    return null
  }
  
  return data
}

export async function searchTravelPackages(filters: SearchFilters): Promise<SearchResult> {
  const supabase = await createServerComponentClient()
  
  let query = supabase
    .from('travel_packages')
    .select(`
      *,
      destination:destinations(*)
    `, { count: 'exact' })
    .eq('is_active', true)
  
  // Apply filters
  if (filters.destination) {
    query = query.ilike('destination.name', `%${filters.destination}%`)
  }
  
  if (filters.category) {
    query = query.eq('destination.category', filters.category)
  }
  
  if (filters.price_min) {
    query = query.gte('price', filters.price_min)
  }
  
  if (filters.price_max) {
    query = query.lte('price', filters.price_max)
  }
  
  if (filters.duration_min) {
    query = query.gte('duration_days', filters.duration_min)
  }
  
  if (filters.duration_max) {
    query = query.lte('duration_days', filters.duration_max)
  }
  
  if (filters.rating_min) {
    query = query.gte('rating', filters.rating_min)
  }
  
  // Pagination
  const page = filters.page || 1
  const per_page = filters.per_page || 12
  const from = (page - 1) * per_page
  const to = from + per_page - 1
  
  query = query.range(from, to)
  query = query.order('rating', { ascending: false })
  
  const { data, error, count } = await query
  
  if (error) {
    console.error('Error searching travel packages:', error)
    return {
      packages: [],
      total_count: 0,
      page,
      per_page,
      filters_applied: filters
    }
  }
  
  return {
    packages: data || [],
    total_count: count || 0,
    page,
    per_page,
    filters_applied: filters
  }
}

// Booking functions
export async function getUserBookings(userId: string): Promise<Booking[]> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      package:travel_packages(
        *,
        destination:destinations(*)
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching user bookings:', error)
    return []
  }
  
  return data || []
}

export async function createBooking(booking: Omit<Booking, 'id' | 'created_at' | 'updated_at'>): Promise<string | null> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('bookings')
    .insert(booking)
    .select('id')
    .single()
  
  if (error) {
    console.error('Error creating booking:', error)
    return null
  }
  
  return data?.id || null
}

export async function updateBookingStatus(bookingId: string, status: Booking['status'], paymentStatus?: Booking['payment_status']): Promise<boolean> {
  const supabase = await createServerComponentClient()
  
  const updates: any = { status }
  if (paymentStatus) {
    updates.payment_status = paymentStatus
  }
  
  const { error } = await supabase
    .from('bookings')
    .update(updates)
    .eq('id', bookingId)
  
  if (error) {
    console.error('Error updating booking status:', error)
    return false
  }
  
  return true
}

// Review functions
export async function getPackageReviews(packageId: string): Promise<Review[]> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      user:profiles(full_name, avatar_url)
    `)
    .eq('package_id', packageId)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching package reviews:', error)
    return []
  }
  
  return data || []
}

export async function createReview(review: Omit<Review, 'id' | 'created_at' | 'updated_at' | 'helpful_count'>): Promise<boolean> {
  const supabase = await createServerComponentClient()
  
  const { error } = await supabase
    .from('reviews')
    .insert(review)
  
  if (error) {
    console.error('Error creating review:', error)
    return false
  }
  
  return true
}

// Favorites functions
export async function getUserFavorites(userId: string): Promise<TravelPackage[]> {
  const supabase = await createServerComponentClient()
  
  const { data, error } = await supabase
    .from('favorites')
    .select(`
      package:travel_packages(
        *,
        destination:destinations(*)
      )
    `)
    .eq('user_id', userId)
  
  if (error) {
    console.error('Error fetching user favorites:', error)
    return []
  }
  
  return data?.map(item => item.package).filter(Boolean) || []
}

export async function toggleFavorite(userId: string, packageId: string): Promise<boolean> {
  const supabase = await createServerComponentClient()
  
  // Check if already favorited
  const { data: existing } = await supabase
    .from('favorites')
    .select('id')
    .eq('user_id', userId)
    .eq('package_id', packageId)
    .single()
  
  if (existing) {
    // Remove from favorites
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', userId)
      .eq('package_id', packageId)
    
    if (error) {
      console.error('Error removing favorite:', error)
      return false
    }
  } else {
    // Add to favorites
    const { error } = await supabase
      .from('favorites')
      .insert({ user_id: userId, package_id: packageId })
    
    if (error) {
      console.error('Error adding favorite:', error)
      return false
    }
  }
  
  return true
}
