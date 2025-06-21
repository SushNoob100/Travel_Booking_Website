-- Seed data for Travel Booking Website

-- Insert sample destinations
INSERT INTO destinations (id, name, description, country, city, image_url, images, price_from, currency, rating, review_count, category, features, coordinates) VALUES
(
  'dest-1',
  'Tropical Paradise Bali',
  'Experience the magic of Bali with its stunning beaches, ancient temples, and vibrant culture. Perfect for relaxation and adventure.',
  'Indonesia',
  'Bali',
  'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
    'https://images.unsplash.com/photo-1555400082-8c5cd5b3c3d5?w=800'
  ],
  899.00,
  'USD',
  4.8,
  156,
  'beach',
  ARRAY['Beach Access', 'Spa Services', 'Cultural Tours', 'Water Sports', 'Local Cuisine'],
  '{"lat": -8.3405, "lng": 115.0920}'
),
(
  'dest-2',
  'Swiss Alps Adventure',
  'Breathtaking mountain views, pristine lakes, and charming villages await in the heart of the Swiss Alps.',
  'Switzerland',
  'Interlaken',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
  ],
  1299.00,
  'USD',
  4.9,
  89,
  'mountain',
  ARRAY['Mountain Hiking', 'Cable Car Rides', 'Lake Activities', 'Alpine Cuisine', 'Photography Tours'],
  '{"lat": 46.6863, "lng": 7.8632}'
),
(
  'dest-3',
  'Tokyo City Explorer',
  'Immerse yourself in the bustling metropolis of Tokyo, where tradition meets modernity in perfect harmony.',
  'Japan',
  'Tokyo',
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800',
    'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800'
  ],
  1099.00,
  'USD',
  4.7,
  234,
  'city',
  ARRAY['City Tours', 'Temple Visits', 'Food Experiences', 'Shopping', 'Cultural Shows'],
  '{"lat": 35.6762, "lng": 139.6503}'
),
(
  'dest-4',
  'Santorini Romance',
  'Fall in love with the stunning sunsets, white-washed buildings, and crystal-clear waters of Santorini.',
  'Greece',
  'Santorini',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
  ARRAY[
    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
    'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    'https://images.unsplash.com/photo-1504457047772-da04f2b03750?w=800'
  ],
  1199.00,
  'USD',
  4.6,
  178,
  'romantic',
  ARRAY['Sunset Views', 'Wine Tasting', 'Beach Access', 'Boat Tours', 'Fine Dining'],
  '{"lat": 36.3932, "lng": 25.4615}'
);

-- Insert sample travel packages
INSERT INTO travel_packages (id, destination_id, name, description, duration_days, price, currency, max_guests, included_services, excluded_services, itinerary, images, rating, review_count) VALUES
(
  'pkg-1',
  'dest-1',
  'Bali Bliss - 7 Days',
  'A perfect week in Bali combining relaxation, culture, and adventure. Includes luxury accommodation, guided tours, and authentic experiences.',
  7,
  1299.00,
  'USD',
  4,
  ARRAY['Luxury Hotel Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Guided Temple Tours', 'Spa Treatment', 'Cooking Class'],
  ARRAY['International Flights', 'Lunch & Dinner', 'Personal Expenses', 'Travel Insurance'],
  '[
    {"day": 1, "title": "Arrival & Relaxation", "description": "Arrive in Bali, check into luxury resort, welcome dinner", "activities": ["Airport pickup", "Hotel check-in", "Welcome dinner"], "meals": ["Dinner"], "accommodation": "Luxury Beach Resort"},
    {"day": 2, "title": "Cultural Discovery", "description": "Explore ancient temples and traditional villages", "activities": ["Temple tour", "Village visit", "Traditional dance show"], "meals": ["Breakfast"], "accommodation": "Luxury Beach Resort"},
    {"day": 3, "title": "Beach & Spa Day", "description": "Relax on pristine beaches and enjoy spa treatments", "activities": ["Beach time", "Spa treatment", "Sunset viewing"], "meals": ["Breakfast"], "accommodation": "Luxury Beach Resort"}
  ]',
  ARRAY[
    'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800'
  ],
  4.8,
  45
),
(
  'pkg-2',
  'dest-2',
  'Alpine Adventure - 5 Days',
  'Experience the best of the Swiss Alps with hiking, scenic railways, and mountain adventures.',
  5,
  1599.00,
  'USD',
  6,
  ARRAY['Mountain Lodge Accommodation', 'Daily Breakfast', 'Cable Car Passes', 'Guided Hiking Tours', 'Train Transfers'],
  ARRAY['International Flights', 'Lunch & Dinner', 'Equipment Rental', 'Travel Insurance'],
  '[
    {"day": 1, "title": "Mountain Arrival", "description": "Arrive and settle into mountain lodge", "activities": ["Arrival", "Lodge tour", "Welcome briefing"], "meals": ["Breakfast"], "accommodation": "Alpine Lodge"},
    {"day": 2, "title": "Peak Adventures", "description": "Cable car rides and mountain hiking", "activities": ["Cable car to summit", "Guided hike", "Photography session"], "meals": ["Breakfast"], "accommodation": "Alpine Lodge"}
  ]',
  ARRAY[
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800'
  ],
  4.9,
  32
);

-- Insert sample package availability
INSERT INTO package_availability (package_id, start_date, end_date, available_spots, price_modifier) VALUES
('pkg-1', '2024-07-01', '2024-07-07', 8, 0),
('pkg-1', '2024-07-15', '2024-07-21', 6, 10),
('pkg-1', '2024-08-01', '2024-08-07', 10, 15),
('pkg-1', '2024-08-15', '2024-08-21', 4, 20),
('pkg-2', '2024-06-15', '2024-06-19', 12, 0),
('pkg-2', '2024-07-01', '2024-07-05', 8, 5),
('pkg-2', '2024-07-20', '2024-07-24', 10, 10),
('pkg-2', '2024-08-10', '2024-08-14', 6, 15);
