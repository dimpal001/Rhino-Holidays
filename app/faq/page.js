"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { ChevronDown, Search } from "lucide-react"

export default function FAQPage() {
  const [faqs, setFaqs] = useState([])
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch("/data/faqs.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Error fetching FAQs:", err))
  }, [])

  // Get unique categories
  const categories = ["All", ...new Set(faqs.map((faq) => faq.category))]

  // Filter FAQs
  const filteredFaqs = faqs.filter((faq) => {
    const categoryMatch = selectedCategory === "All" || faq.category === selectedCategory
    const searchMatch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90 leading-relaxed">Find answers to common questions about our services</p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Filter */}
            <div className="mb-12">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={faq.id} className="bg-card rounded-xl shadow-md overflow-hidden border border-border">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <span className="text-xs font-semibold text-primary uppercase mb-1 block">{faq.category}</span>
                        <span className="text-lg font-semibold text-card-foreground">{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-5 bg-muted/30 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No FAQs found matching your search.</p>
              </div>
            )}

            {/* Still Have Questions */}
            <div className="mt-16 bg-accent text-accent-foreground rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Our team is here to help you with any queries about your Himalayan adventure
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
