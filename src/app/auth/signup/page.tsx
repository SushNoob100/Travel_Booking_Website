import { Metadata } from 'next'
import { SignUpForm } from '@/components/auth/sign-up-form'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign Up - TravelBooking',
  description: 'Create your TravelBooking account',
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-primary">TravelBooking</h1>
          </Link>
        </div>
        
        <SignUpForm
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
