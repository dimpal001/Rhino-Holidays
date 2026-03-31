"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const whatsappNumber = "917099234605";

      const message = `
        Hello Rhino Holidays,

        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "N/A"}
        Subject: ${formData.subject}

        Message:
        ${formData.message}
            `;

      const encodedMessage = encodeURIComponent(message.trim());

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      setTimeout(() => {
        window.open(whatsappURL, "_blank");

        setIsSubmitting(false);
        setSubmitStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSubmitStatus(null), 5000);
      }, 800);
    } catch (error) {
      console.error("WhatsApp redirect failed:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              We're here to help you plan your perfect Himalayan adventure
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+917099234605"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 70992 34605
                      </a>
                      <br />
                      <a
                        href="tel:+917099234605"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 70992 34606
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@rhinoholidays.co.in"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@rhinoholidays.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        Maligaon
                        <br />
                        Guwahati, Assam
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-serif font-bold text-card-foreground mb-6">
                    Send Us a Message
                  </h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary">
                      Thank you for your message! We'll get back to you within
                      24 hours.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-card-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-card-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-card-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+91 70992 34605"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-card-foreground mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="custom">Custom Package</option>
                          <option value="general">General Question</option>
                          <option value="support">Support</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-card-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your travel plans, questions, or how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Quick Links
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore more about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/trips"
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Tour Packages
                </h3>
                <p className="text-muted-foreground">
                  Browse our curated travel experiences
                </p>
              </a>
              <a
                href="/destinations"
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Destinations
                </h3>
                <p className="text-muted-foreground">
                  Explore beautiful Himalayan locations
                </p>
              </a>
              <a
                href="/faq"
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  FAQs
                </h3>
                <p className="text-muted-foreground">
                  Find answers to common questions
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
