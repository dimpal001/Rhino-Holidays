import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Tour Packages", href: "/trips" },
  ];

  const destinations = [
    { name: "Egypt", href: "/destinations/egypt" },
    { name: "Malaysia", href: "/destinations/malaysia" },
    { name: "Philippines", href: "/destinations/philippines" },
  ];

  const support = [
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-secondary mb-4">
              Rhino Holidays
            </h3>
            <p className="text-sm text-background/80 mb-4 leading-relaxed">
              Your trusted partner for exploring the magnificent Himalayas.
              Creating unforgettable travel experiences since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/80 hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              Popular Destinations
            </h4>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <Link
                    href={destination.href}
                    className="text-sm text-background/80 hover:text-secondary transition-colors"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Maligaon, Guwahati, Assam</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/80">
                <Phone className="h-5 w-5 shrink-0" />
                <a
                  href="tel:+917099234605"
                  className="hover:text-secondary transition-colors"
                >
                  +91 70992-34605
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/80">
                <Mail className="h-5 w-5 shrink-0" />
                <a
                  href="mailto:contact@rhinoholidays.co.in"
                  className="hover:text-secondary transition-colors"
                >
                  contact@rhinoholidays.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2025 Rhino Holidays. All rights reserved.
            </p>
            <div className="flex gap-6">
              {support.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
