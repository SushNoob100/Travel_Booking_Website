-- Initial schema for Travel Booking Website
-- This migration creates all the necessary tables and relationships

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create destinations table
CREATE TABLE destinations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  image_url TEXT,
  images TEXT[] DEFAULT '{}',
  price_from DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  category TEXT NOT NULL CHECK (category IN ('beach', 'mountain', 'city', 'adventure', 'cultural', 'luxury', 'budget', 'family', 'romantic')),
  features TEXT[] DEFAULT '{}',
  coordinates JSONB, -- {lat: number, lng: number}
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create travel_packages table
CREATE TABLE travel_packages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  destination_id UUID REFERENCES destinations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  duration_days INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  max_guests INTEGER NOT NULL,
  included_services TEXT[] DEFAULT '{}',
  excluded_services TEXT[] DEFAULT '{}',
  itinerary JSONB DEFAULT '[]', -- Array of itinerary days
  images TEXT[] DEFAULT '{}',
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create package_availability table
CREATE TABLE package_availability (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  package_id UUID REFERENCES travel_packages(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  available_spots INTEGER NOT NULL,
  price_modifier DECIMAL(5,2) DEFAULT 0, -- Percentage modifier
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(package_id, start_date)
);

-- Create bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  package_id UUID REFERENCES travel_packages(id) ON DELETE RESTRICT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  guests INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded', 'partially_refunded')),
  special_requests TEXT,
  guest_details JSONB DEFAULT '[]', -- Array of guest information
  payment_intent_id TEXT, -- Stripe payment intent ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  package_id UUID REFERENCES travel_packages(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  images TEXT[] DEFAULT '{}',
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, package_id, booking_id)
);

-- Create favorites table
CREATE TABLE favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  package_id UUID REFERENCES travel_packages(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, package_id)
);

-- Create indexes for better performance
CREATE INDEX idx_destinations_category ON destinations(category);
CREATE INDEX idx_destinations_country ON destinations(country);
CREATE INDEX idx_destinations_rating ON destinations(rating DESC);
CREATE INDEX idx_travel_packages_destination ON travel_packages(destination_id);
CREATE INDEX idx_travel_packages_price ON travel_packages(price);
CREATE INDEX idx_travel_packages_rating ON travel_packages(rating DESC);
CREATE INDEX idx_package_availability_dates ON package_availability(start_date, end_date);
CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_dates ON bookings(start_date, end_date);
CREATE INDEX idx_reviews_package ON reviews(package_id);
CREATE INDEX idx_reviews_rating ON reviews(rating DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_destinations_updated_at BEFORE UPDATE ON destinations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_travel_packages_updated_at BEFORE UPDATE ON travel_packages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_package_availability_updated_at BEFORE UPDATE ON package_availability FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
