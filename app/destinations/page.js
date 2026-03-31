import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Destinations - Discover Himalayan Wonders | Rhino Holidays",
  description:
    "Explore our curated collection of breathtaking Himalayan destinations including Sikkim, Darjeeling, Gangtok, and Pelling. Find your perfect mountain escape.",
};

export default async function DestinationsPage() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/data/destinations.json`,
    {
      cache: "no-store",
    }
  );
  const destinations = await res.json();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/himalayan-mountain-range-panorama.jpg"
            alt="Destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Explore Destinations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover the pristine beauty of the Eastern Himalayas
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {destinations.map((destination) => (
                <Link
                  key={destination.id}
                  href={`/destinations/${destination.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-80">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-3xl font-serif font-bold mb-2">
                        {destination.name}
                      </h2>
                      <p className="text-lg text-white/90 mb-3">
                        {destination.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {destination.description}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{destination.bestTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities
                        ?.slice(0, 4)
                        .map((activity, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Explore?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Browse our carefully crafted tour packages to these stunning
              destinations
            </p>
            <Link
              href="/trips"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              View Tour Packages
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
