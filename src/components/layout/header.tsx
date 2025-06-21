'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserMenu } from '@/components/auth/user-menu'
import {
  Search,
  Menu,
  X,
  Heart,
  ShoppingBag,
  MapPin,
  Plane
} from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">TravelBooking</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/destinations" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Destinations
            </Link>
            <Link 
              href="/packages" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Packages
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            {/* Search button for mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <UserMenu />

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="py-4 space-y-4">
              {/* Mobile Search */}
              <div className="lg:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/destinations" 
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin className="inline h-4 w-4 mr-2" />
                  Destinations
                </Link>
                <Link 
                  href="/packages" 
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingBag className="inline h-4 w-4 mr-2" />
                  Packages
                </Link>
                <Link 
                  href="/favorites" 
                  className="text-sm font-medium transition-colors hover:text-primary py-2 sm:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="inline h-4 w-4 mr-2" />
                  Favorites
                </Link>
                <Link 
                  href="/about" 
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>


            </div>
          </div>
        )}
      </div>
    </header>
  )
}
