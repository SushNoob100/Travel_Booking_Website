# Travel Booking Website

A modern, full-stack travel booking platform built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🔐 User Authentication (Sign up, Login, Profile management)
- 🔍 Travel Search & Browse (Destinations, filters, packages)
- 📅 Booking System (Cart, booking flow, management)
- 💳 Payment Integration (Secure transactions)
- 👨‍💼 Admin Dashboard (Manage destinations, bookings, users)
- 📱 Responsive Design (Mobile-first approach)
- ⚡ Modern Tech Stack (Next.js 15, React 19, TypeScript)

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see `.env.example`)
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and configurations
│   ├── types/               # TypeScript type definitions
│   └── hooks/               # Custom React hooks
├── public/                  # Static assets
└── docs/                    # Documentation
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
