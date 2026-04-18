import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mountain,
  Users,
  Shield,
  Heart,
  Clock,
  Star,
} from "lucide-react";

export const metadata = {
  title:
    "Rhino Holidays - Roam the world, The Rhino way- from Northeast to the world!",
  description:
    "Explore breathtaking destinations like Sikkim and Darjeeling with Rhino Holidays. Curated tour packages, authentic experiences, and unforgettable adventures await.",
};

export default async function Home() {
  const destinationsRes = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/destinations.json`,
    { cache: "no-store" },
  );
  const destinations = await destinationsRes.json();

  const tripsRes = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/trips.json`,
    {
      cache: "no-store",
    },
  );
  const trips = await tripsRes.json();

  const testimonialsRes = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/testimonials.json`,
    { cache: "no-store" },
  );
  const testimonials = await testimonialsRes.json();

  const featuredTrips = trips.filter((trip) => trip.featured).slice(0, 3);
  const popularDestinations = destinations.slice(0, 3);

  const galleryRes = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/gallery.json`,
    { cache: "no-store" },
  );
  const gallery = await galleryRes.json();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-image.cms"
            alt="Himalayan Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />

          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <img src={"/logo.png"} className="w-52 opacity-70 mx-auto mb-5" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Discover the Northeast
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Roam the world, The Rhino way- from Northeast to the world!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/trips"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore Tour Packages
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                View Destinations
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Popular Destinations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore the most breathtaking locations in the Eastern Himalayas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularDestinations.map((destination) => (
                <Link
                  key={destination.id}
                  href={`/destinations/${destination.id}`}
                  className="group relative overflow-hidden rounded-2xl aspect-3/4 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {destination.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                View All Destinations
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Trips */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Featured Tour Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Carefully curated journeys designed for unforgettable
                experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {trip.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-card-foreground mb-3 line-clamp-1">
                      {trip.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {trip.shortDescription}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {trip.price}
                      </div>
                    </div>
                    <Link
                      href={`/trips/${trip.slug}`}
                      className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/trips"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                View All Tour Packages
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Why Choose Rhino Holidays
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We're committed to making your Himalayan adventure extraordinary
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Mountain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Expert Knowledge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Years of experience exploring the Himalayas ensures authentic,
                  well-planned journeys
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Personalized Service
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customized itineraries tailored to your preferences, pace, and
                  interests
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary-foreground mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Safety First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your safety is our priority with experienced drivers and 24/7
                  support
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Memorable Experiences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating lasting memories through authentic cultural and
                  natural encounters
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                What Our Travelers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real stories from real travelers who experienced the magic
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="min-w-75 max-w-87.5 bg-card rounded-2xl p-6"
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-secondary text-secondary"
                          />
                        ))}
                      </div>

                      <p className="text-sm text-card-foreground mb-4 leading-relaxed line-clamp-4">
                        "{testimonial.text}"
                      </p>

                      <div className="border-t border-border pt-3">
                        <p className="font-semibold text-sm text-card-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Travel Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Moments captured from our यात्राएँ — real experiences, real
                memories
              </p>
            </div>

            {/* Collage Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {gallery.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-xl group
            ${index % 5 === 0 ? "md:row-span-2" : ""}
            ${index % 7 === 0 ? "lg:col-span-2" : ""}
          `}
                >
                  <Image
                    src={item.image}
                    alt="Travel Gallery"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Start Your Himalayan Adventure?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Let us help you plan the perfect journey through the most
              beautiful mountains on Earth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/trips"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Browse Tour Packages
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
