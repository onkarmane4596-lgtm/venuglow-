'use client'

import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SocialProofSection() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Stay Connected</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Follow Our Journey
          </h2>
          Get inspired by new launches, behind-the-scenes content, and exclusive insights from the world of global lifestyle brands
        </div>

        {/* Instagram feed preview grid */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-lg overflow-hidden bg-card border border-border group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-colors duration-300 relative overflow-hidden">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-accent/40 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm10.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3 4.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs text-muted-foreground">Content #{item}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social follow section */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Join Our Growing Global Community
          </h3>

          {/* Social icons */}
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#"
              className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
            >
              <Instagram className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              <p className="text-xs mt-2 text-muted-foreground">Instagram</p>
            </a>
            <a
              href="#"
              className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
            >
              <Facebook className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              <p className="text-xs mt-2 text-muted-foreground">Facebook</p>
            </a>
            <a
              href="#"
              className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              <p className="text-xs mt-2 text-muted-foreground">LinkedIn</p>
            </a>
          </div>

          {/* CTA */}
          <div className="inline-block">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6"
            >
              Follow Us on Instagram
            </Button>
          </div>

          {/* Follower count placeholder */}
          <p className="text-sm text-muted-foreground mt-8">
            <span className="font-semibold text-foreground">10K+</span> followers and growing |
            <span className="font-semibold text-foreground ml-1">Daily</span> inspiration
          </p>
        </div>
      </div>
    </section>
  )
}
