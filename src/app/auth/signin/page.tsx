import { Metadata } from 'next'
import { SignInForm } from '@/components/auth/sign-in-form'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign In - TravelBooking',
  description: 'Sign in to your TravelBooking account',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-primary">TravelBooking</h1>
          </Link>
        </div>
        
        <SignInForm
          redirectTo="/"
        />
        
        <div className="text-center">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
