"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { Clock, Filter, Search } from "lucide-react";

// shadcn components
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import { Input } from "@/components/ui/input";

export default function TripsPage() {
  const [trips, setTrips] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/data/trips.json")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((err) => console.error("Error fetching trips:", err));

    fetch("/data/destinations.json")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Error fetching destinations:", err));
  }, []);

  // Categories
  const categories = useMemo(() => {
    return ["All", ...new Set(trips.map((trip) => trip.category))];
  }, [trips]);

  // Filtering logic
  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const categoryMatch =
        selectedCategory === "All" || trip.category === selectedCategory;

      const destinationMatch =
        selectedDestination === "All" ||
        trip.destinationIds?.includes(selectedDestination);

      const searchMatch =
        trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.shortDescription
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      return categoryMatch && destinationMatch && searchMatch;
    });
  }, [trips, selectedCategory, selectedDestination, searchQuery]);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/himalayan-mountain-range-panorama.jpg"
            alt="Tour Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Tour Packages
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Curated journeys through the majestic Himalayas
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-2xl p-6 shadow-md mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Filter Packages</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 🔍 Search Trips */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Search Trips
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or description..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Category
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <Command>
                        <CommandInput placeholder="Search category..." />
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              key={category}
                              value={category}
                              onSelect={() => setSelectedCategory(category)}
                            >
                              {category}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </SelectContent>
                  </Select>
                </div>

                {/* Destination (Searchable) */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Destination
                  </label>
                  <Select
                    value={selectedDestination}
                    onValueChange={setSelectedDestination}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select destination"
                        children={
                          selectedDestination === "All"
                            ? "All Destinations"
                            : destinations.find(
                                (d) => d.id === selectedDestination,
                              )?.name
                        }
                      />
                    </SelectTrigger>

                    <SelectContent>
                      <Command>
                        <CommandInput placeholder="Search destination..." />
                        <CommandEmpty>No destination found.</CommandEmpty>

                        <CommandGroup>
                          <CommandItem
                            value="All"
                            onSelect={() => setSelectedDestination("All")}
                          >
                            All Destinations
                          </CommandItem>

                          {destinations.map((dest) => (
                            <CommandItem
                              key={dest.id}
                              value={dest.name}
                              onSelect={() => setSelectedDestination(dest.id)}
                            >
                              {dest.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filteredTrips.length}
                </span>{" "}
                package{filteredTrips.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Grid */}
            {filteredTrips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTrips.map((trip) => (
                  <div
                    key={trip.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="relative h-64">
                      <Image
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-secondary px-3 py-1.5 rounded-full text-sm font-semibold">
                        {trip.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold mb-3 line-clamp-2">
                        {trip.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {trip.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 text-sm mb-4">
                        <Clock className="h-4 w-4" />
                        {trip.duration}
                      </div>

                      <div className="mb-5">
                        <span className="text-sm text-muted-foreground">
                          Starting from
                        </span>
                        <div className="text-2xl font-bold text-primary">
                          {trip.price}
                        </div>
                      </div>

                      <Link
                        href={`/trips/${trip.slug}`}
                        className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold hover:bg-primary/90"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No packages found.
                </p>

                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedDestination("All");
                    setSearchQuery("");
                  }}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Package?</h2>
          <Link
            href="/contact"
            className="bg-secondary px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
