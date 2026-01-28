'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ExportFocusSection() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">For Exporters</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
                Built for Global Supply Chains
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/20">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Bulk Order Capability</h3>
                  <p className="text-muted-foreground mt-1">Handle wholesale quantities with consistent quality and timely delivery</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/20">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Compliant & Certified</h3>
                  <p className="text-muted-foreground mt-1">All products meet international standards and export regulations</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/20">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">International Logistics</h3>
                  <p className="text-muted-foreground mt-1">Ready for direct shipment to distributors and retailers worldwide</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/20">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Flexible MOQ</h3>
                  <p className="text-muted-foreground mt-1">Minimum order quantities tailored to your business scale and growth timeline</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-accent text-background hover:bg-accent/90 px-8 py-6 text-base font-semibold w-full sm:w-auto"
            >
              Get in Touch with Our Export Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right - Stats/Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-background border border-border">
              <div className="space-y-8">
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">50+</p>
                  <p className="text-foreground font-semibold">Countries Importing</p>
                  <p className="text-sm text-muted-foreground mt-2">Active distribution across Asia, Europe, Americas, and Africa</p>
                </div>
                <div className="border-t border-border pt-8">
                  <p className="text-3xl font-bold text-foreground mb-2">1000+</p>
                  <p className="text-foreground font-semibold">B2B Partners Served</p>
                  <p className="text-sm text-muted-foreground mt-2">From small retailers to large distribution networks</p>
                </div>
                <div className="border-t border-border pt-8">
                  <p className="text-3xl font-bold text-foreground mb-2">24/7</p>
                  <p className="text-foreground font-semibold">Order Support</p>
                  <p className="text-sm text-muted-foreground mt-2">Dedicated account managers for timely communication</p>
                </div>
              </div>
            </div>

            {/* Quick contact */}
            <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-sm font-semibold text-foreground mb-4">Need a quick answer?</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
