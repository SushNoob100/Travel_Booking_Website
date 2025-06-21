import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  Star,
  Calendar,
  Plane,
  Shield,
  Clock,
  Award
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore amazing destinations and create unforgettable memories with our curated travel packages
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Where do you want to go?"
                  className="pl-10 text-gray-900"
                />
              </div>
              <div className="flex-1 relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="date"
                  className="pl-10 text-gray-900"
                />
              </div>
              <Button size="lg" className="md:w-auto w-full">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TravelBooking?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make travel planning easy and enjoyable with our comprehensive services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your payments and personal information are protected with industry-leading security
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our travel experts are available around the clock to assist you
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Best Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We guarantee the best prices for your dream vacation packages
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Easy Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Plan your entire trip in one place with our intuitive booking system
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most sought-after travel destinations around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample destination cards */}
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Bali, Indonesia</h3>
                  <p className="text-sm opacity-90">Tropical Paradise</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.8</span>
                    <span className="ml-1 text-sm text-muted-foreground">(156 reviews)</span>
                  </div>
                  <span className="text-lg font-bold text-primary">From $899</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience stunning beaches, ancient temples, and vibrant culture
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Swiss Alps</h3>
                  <p className="text-sm opacity-90">Mountain Adventure</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                    <span className="ml-1 text-sm text-muted-foreground">(89 reviews)</span>
                  </div>
                  <span className="text-lg font-bold text-primary">From $1,299</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Breathtaking mountain views and pristine alpine lakes
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-purple-400 to-purple-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Tokyo, Japan</h3>
                  <p className="text-sm opacity-90">Cultural Experience</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.7</span>
                    <span className="ml-1 text-sm text-muted-foreground">(234 reviews)</span>
                  </div>
                  <span className="text-lg font-bold text-primary">From $1,099</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Modern metropolis where tradition meets innovation
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/destinations">
                View All Destinations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered their perfect vacation with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/packages">
                Browse Packages
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}