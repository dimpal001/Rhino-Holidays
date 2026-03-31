"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowRight, Check } from "lucide-react";

export default async function DestinationDetailPage({ params }) {
  const { id } = await params;

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
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    notFound();
  }

  // Fetch related trips
  const tripsRes = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/trips.json`,
    {
      cache: "no-store",
    },
  );
  const allTrips = await tripsRes.json();
  const relatedTrips = allTrips.filter((trip) =>
    trip.destinationIds?.includes(id),
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-end overflow-hidden">
          <Image
            src={
              destination.heroImage || destination.image || "/placeholder.svg"
            }
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative z-10 w-full px-4 pb-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                {destination.name}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                {destination.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Destination Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  About {destination.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {destination.longDescription}
                </p>

                {/* Highlights */}
                <div className="bg-muted rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {destination.highlights?.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities */}
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Things to Do
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {destination.activities?.map((activity, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-8 shadow-lg sticky top-24">
                  <h3 className="text-xl font-bold text-card-foreground mb-6">
                    Travel Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold text-card-foreground">
                          Best Time to Visit
                        </h4>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        {destination.bestTime}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold text-card-foreground">
                          Location
                        </h4>
                      </div>
                      <p className="text-muted-foreground ml-7">
                        Eastern Himalayas, India
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Plan Your Trip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Trips */}
        {relatedTrips.length > 0 && (
          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                  Tours to {destination.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Explore our curated packages featuring this destination
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedTrips.slice(0, 3).map((trip) => (
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
                        {trip.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                        {trip.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {trip.shortDescription}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          {trip.category}
                        </span>
                        <span className="text-xl font-bold text-primary">
                          {trip.price}
                        </span>
                      </div>
                      <Link
                        href={`/trips/${trip.slug}`}
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
                  View All Tour Packages
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
