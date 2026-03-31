"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Clock, Check, X, ArrowRight, Phone } from "lucide-react";

export default async function TripDetailPage({ params }) {
  const { slug } = await params;

  // Fetch trips
  const tripsRes = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/trips.json`,
    {
      cache: "no-store",
    },
  );
  const trips = await tripsRes.json();
  const trip = trips.find((t) => t.slug === slug);

  if (!trip) {
    notFound();
  }

  // Fetch destinations
  const destRes = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/destinations.json`,
    {
      cache: "no-store",
    },
  );
  const destinations = await destRes.json();
  const tripDestinations = destinations.filter((d) =>
    trip.destinationIds?.includes(d.id),
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-end overflow-hidden">
          <Image
            src={trip.image || "/placeholder.svg"}
            alt={trip.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 w-full px-4 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                  {trip.category}
                </span>
                {trip.featured && (
                  <span className="px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                {trip.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg">{trip.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">
                    {tripDestinations.map((d) => d.name).join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2">
                {/* Overview */}
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                    Tour Overview
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {trip.description}
                  </p>
                </div>

                {/* Itinerary */}
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                    Detailed Itinerary
                  </h2>
                  <div className="space-y-6">
                    {trip.itinerary?.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-card rounded-2xl p-6 shadow-md border-l-4 border-primary"
                      >
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                              <h3 className="text-xl font-bold text-card-foreground">
                                {item.day}
                              </h3>
                              <span className="text-sm text-muted-foreground">
                                {item.title}
                              </span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Included/Excluded */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Included */}
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Check className="h-6 w-6 text-primary" />
                      Included Services
                    </h3>
                    <ul className="space-y-3">
                      {trip.services?.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground leading-relaxed">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  {trip.exclusions && trip.exclusions.length > 0 && (
                    <div className="bg-muted rounded-2xl p-6 border border-border">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <X className="h-6 w-6 text-muted-foreground" />
                        Not Included
                      </h3>
                      <ul className="space-y-3">
                        {trip.exclusions.map((exclusion, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">
                              {exclusion}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Gallery */}
                {trip.gallery && trip.gallery.length > 0 && (
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                      Gallery
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {trip.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-video rounded-xl overflow-hidden"
                        >
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`${trip.title} gallery ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Booking Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-8 shadow-xl sticky top-24 border border-border">
                  <div className="text-center mb-6 pb-6 border-b border-border">
                    <div className="text-sm text-muted-foreground mb-2">
                      Starting from
                    </div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      {trip.price}
                    </div>
                    {trip.pricePerPerson && (
                      <div className="text-sm text-muted-foreground">
                        per person
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 pb-3 border-b border-border">
                      <Clock className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Duration
                        </div>
                        <div className="font-semibold text-card-foreground">
                          {trip.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Destinations
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tripDestinations.map((dest) => (
                            <Link
                              key={dest.id}
                              href={`/destinations/${dest.id}`}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                            >
                              {dest.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="block w-full bg-primary text-primary-foreground text-center py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Book This Tour
                    </Link>
                    <a
                      href="tel:+917099234605"
                      className="flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground text-center py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>
                  </div>

                  <p className="text-xs text-center text-muted-foreground mt-6">
                    Have questions? Our travel experts are here to help you plan
                    your perfect trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Trips */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                You May Also Like
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore more amazing tour packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trips
                .filter((t) => t.slug !== slug && t.featured)
                .slice(0, 3)
                .map((relatedTrip) => (
                  <div
                    key={relatedTrip.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <div className="relative h-56">
                      <Image
                        src={relatedTrip.image || "/placeholder.svg"}
                        alt={relatedTrip.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 line-clamp-2">
                        {relatedTrip.title}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          {relatedTrip.duration}
                        </span>
                        <span className="text-xl font-bold text-primary">
                          {relatedTrip.price}
                        </span>
                      </div>
                      <Link
                        href={`/trips/${relatedTrip.slug}`}
                        className="block w-full bg-primary text-primary-foreground text-center py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
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
                View All Packages
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
