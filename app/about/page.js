import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Mountain, Users, Shield, Heart, Award, Globe } from "lucide-react";

export const metadata = {
  title: "About Us - Your Trusted Himalayan Travel Partner | Rhino Holidays",
  description:
    "Learn about Rhino Holidays, your trusted partner for exploring the Himalayas. With years of experience and passion for adventure, we create unforgettable travel experiences.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Mountain,
      title: "Expert Knowledge",
      description:
        "Deep understanding of the Himalayan region with years of hands-on experience and local insights.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "Every traveler is unique. We customize each journey to match your interests, pace, and preferences.",
    },
    {
      icon: Shield,
      title: "Safety & Reliability",
      description:
        "Your safety is our top priority. Professional drivers, 24/7 support, and thoroughly vetted accommodations.",
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description:
        "We create meaningful connections with local cultures and communities for truly immersive adventures.",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description:
        "Consistently high standards across all our services, from transportation to accommodations.",
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description:
        "Committed to responsible travel that respects local communities and preserves natural environments.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}

        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              About Rhino Holidays
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Your trusted partner for unforgettable Himalayan adventures
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, Rhino Holidays began with a simple vision:
                    to share the breathtaking beauty and rich culture of the
                    Eastern Himalayas with travelers from around the world. What
                    started as a small operation with a handful of passionate
                    guides has grown into one of the region's most trusted
                    travel companies.
                  </p>
                  <p>
                    Over the years, we've had the privilege of hosting thousands
                    of travelers, each bringing their own dreams and
                    expectations. Through every journey, we've learned, adapted,
                    and refined our approach to ensure that each trip is not
                    just a vacation, but a transformative experience.
                  </p>
                  <p>
                    Today, we're proud to offer carefully curated tours that
                    showcase the best of Sikkim, Darjeeling, and surrounding
                    regions. Our team of local experts, experienced drivers, and
                    dedicated support staff work tirelessly to ensure your
                    journey is seamless, safe, and truly memorable.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-full min-h-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/himalayan-travel-company-office.jpg"
                  alt="Rhino Holidays Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-serif font-bold text-card-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide exceptional travel experiences that connect people
                  with the natural beauty and cultural richness of the
                  Himalayas, while promoting sustainable tourism practices that
                  benefit local communities and preserve the environment for
                  future generations.
                </p>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To be the most trusted and respected travel company in the
                  Eastern Himalayas, recognized for our commitment to quality,
                  sustainability, and creating life-changing experiences that
                  inspire travelers to explore, connect, and grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                These core values guide everything we do and shape every journey
                we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">10K+</div>
                <div className="text-lg opacity-90">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Tour Packages</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let us help you create memories that will last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/trips"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Browse Tour Packages
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
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
