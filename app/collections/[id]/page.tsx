'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/landing/footer'

const collectionData = {
  'celestial-stones': {
    name: 'Celestial Stones',
    description: 'Semi-precious stones and natural wellness products sourced from across India',
    accent: 'from-purple-500/20 to-purple-900/5',
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=1200&fit=crop',
        alt: 'Amethyst cluster',
        title: 'Amethyst Collection',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=1200&fit=crop',
        alt: 'Rose quartz stones',
        title: 'Rose Quartz',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=1200&fit=crop',
        alt: 'Healing crystal set',
        title: 'Healing Collections',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1515562141207-5dab67b05d1d?w=1200&h=1200&fit=crop',
        alt: 'Moonstone',
        title: 'Moonstone Range',
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=1200&fit=crop',
        alt: 'Tiger eye stones',
        title: 'Tiger Eye',
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=1200&fit=crop',
        alt: 'Chakra stones',
        title: 'Chakra Sets',
      },
    ],
  },
  'radiance': {
    name: 'Radiance',
    description: 'Contemporary and traditional imitation jewellery pieces',
    accent: 'from-amber-500/20 to-amber-900/5',
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=1200&fit=crop',
        alt: 'Gold pendant necklace',
        title: 'Gold Collection',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1515562141207-5dab67b05d1d?w=1200&h=1200&fit=crop',
        alt: 'Silver earrings',
        title: 'Silver Line',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=1200&fit=crop',
        alt: 'Studded bracelet',
        title: 'Bracelet Range',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=1200&fit=crop',
        alt: 'Pearl jewelry set',
        title: 'Pearl Collection',
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=1200&fit=crop',
        alt: 'Statement rings',
        title: 'Ring Collection',
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1515562141207-5dab67b05d1d?w=1200&h=1200&fit=crop',
        alt: 'Ceremonial jewelry',
        title: 'Traditional Wear',
      },
    ],
  },
  'crafted-heritage': {
    name: 'Crafted Heritage',
    description: 'Leather and lifestyle accessories with careful attention to detail',
    accent: 'from-orange-500/20 to-orange-900/5',
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=1200&fit=crop',
        alt: 'Leather bag',
        title: 'Handbag Collection',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1515562141207-5dab67b05d1d?w=1200&h=1200&fit=crop',
        alt: 'Leather belt',
        title: 'Accessory Line',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=1200&fit=crop',
        alt: 'Wallet and case',
        title: 'Small Leather Goods',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=1200&fit=crop',
        alt: 'Leather shoes',
        title: 'Footwear',
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=1200&fit=crop',
        alt: 'Travel accessories',
        title: 'Travel Collection',
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1515562141207-5dab67b05d1d?w=1200&h=1200&fit=crop',
        alt: 'Statement pieces',
        title: 'Limited Edition',
      },
    ],
  },
}

export default function CollectionPage({ params }: { params: { id: string } }) {
  const collection = collectionData[params.id as keyof typeof collectionData]
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Collection not found</h1>
          <Link href="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="w-full min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="text-right">
            <h1 className="font-display text-2xl font-bold text-foreground">{collection.name}</h1>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className={`relative w-full py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-gradient-to-br ${collection.accent}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {collection.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {collection.description}
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  Interested? Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            {/* Decorative element */}
            <div className="hidden md:block h-96 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-border/50" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full py-16 md:py-24 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm text-muted-foreground">
              {collection.images.length} photos
            </p>
          </div>

          {/* Responsive grid gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {collection.images.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg border border-border/50 hover:border-border bg-card aspect-square transition-all duration-300"
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                  <p className="text-white/0 group-hover:text-white/90 transition-colors duration-300 text-sm font-medium">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Loading state for more images */}
          <div className="mt-16 text-center border-t border-border pt-12">
            <p className="text-sm text-muted-foreground mb-4">More products coming soon</p>
            <p className="text-xs text-muted-foreground/70">Check back regularly for new additions to our collection</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-6 md:px-8 lg:px-12 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Interested in working with us?
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            We're open to B2B partnerships, wholesale inquiries, and collaborations. Get in touch
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
