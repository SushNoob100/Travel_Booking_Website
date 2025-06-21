'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { 
  User, 
  Settings, 
  Heart, 
  Calendar, 
  LogOut, 
  ChevronDown,
  UserCircle
} from 'lucide-react'

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, profile, signOut, loading } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
    router.push('/')
  }

  if (loading) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <User className="h-5 w-5" />
      </Button>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3"
      >
        {profile?.avatar_url ? (
          <img
            src={profile.avatar_url}
            alt={profile.full_name || 'User'}
            className="h-6 w-6 rounded-full"
          />
        ) : (
          <UserCircle className="h-6 w-6" />
        )}
        <span className="hidden sm:inline text-sm">
          {profile?.full_name || user.email?.split('@')[0] || 'User'}
        </span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border z-50">
            <div className="py-1">
              {/* User Info */}
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium text-gray-900">
                  {profile?.full_name || 'User'}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {user.email}
                </p>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <Link
                  href="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="mr-3 h-4 w-4" />
                  Profile
                </Link>
                
                <Link
                  href="/bookings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar className="mr-3 h-4 w-4" />
                  My Bookings
                </Link>
                
                <Link
                  href="/favorites"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="mr-3 h-4 w-4" />
                  Favorites
                </Link>
                
                <Link
                  href="/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="mr-3 h-4 w-4" />
                  Settings
                </Link>
              </div>

              {/* Sign Out */}
              <div className="py-1 border-t">
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
