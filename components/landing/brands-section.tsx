'use client'

import { motion } from 'framer-motion'
import { BrandGallery } from './brand-gallery'
import { Sparkles, Gem, ShoppingBag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const aurivaWellnessProducts = [
  {
    id: 'aur-w-1',
    title: 'Amethyst Pendant Necklace',
    philosophy: 'The Third Eye Awakened.',
    nature: 'A natural amethyst point set in silver, promoting intuition, clarity, and spiritual connection.',
    image: '/Auriva/1.png'
  },
  {
    id: 'aur-w-2',
    title: 'Money Magnet Bracelet',
    philosophy: 'Abundance in Motion.',
    nature: 'A powerful combination of Pyrite, Citrine, and Green Jade designed to attract wealth and opportunity.',
    image: '/Auriva/3.png'
  }
]

const aurivaDecorProducts = [
  {
    id: 'aur-d-1',
    title: 'Semi-precious Stone Coaster Set',
    philosophy: 'Grounded Elegance.',
    nature: 'Natural agate slices with electroplated edges, bringing the stabilizing energy of the earth to your living space.',
    image: '/Auriva/2.png'
  },
  {
    id: 'aur-d-2',
    title: 'Orgone Pyramid',
    philosophy: 'Energy Transmutation.',
    nature: 'A structured matrix of resin, metals, and quartz that harmonizes bio-energy and neutralizes EMF radiation.',
    image: '/Auriva/4.png'
  }
]

const zivaraWesternProducts = [
  {
    id: 'ziv-w-1',
    title: 'Vintage Ruby Set',
    philosophy: 'Timeless Passion.',
    nature: 'Exquisite ruby-inspired stones set in antique gold finish for a regal look.',
    image: '/zivara/4.png'
  },
  {
    id: 'ziv-w-2',
    title: 'Modern Minimalist Studs',
    philosophy: 'Less is Everything.',
    nature: 'Sleek, geometric earrings designed for the contemporary woman who appreciates subtle elegance.',
    image: '/zivara/2.png'
  }
]

const zivaraTraditionalProducts = [
  {
    id: 'ziv-t-1',
    title: 'Pearl Radiance Jhumki',
    philosophy: 'The Ocean\'s Whisper.',
    nature: 'Combining classic Indian silhouettes with contemporary pearl-work for the modern woman who values heritage.',
    image: '/zivara/3.png'
  },
  {
    id: 'ziv-t-2',
    title: 'Luminous Pearl Ensemble',
    philosophy: 'Elegance Reimagined.',
    nature: 'A sophisticated pearl bracelet and earring set with gold accents, bridging classic charm with modern styling.',
    image: '/zivara/1.png'
  },
  {
    id: 'ziv-t-3',
    title: 'Heritage Gold Bangles',
    philosophy: 'The Circle of Tradition.',
    nature: 'Intricately designed traditional bangles that celebrate the grandeur of Indian heritage craft.',
    image: '/zivara/5.png'
  }
]

const carryelleLeatherProducts = [
  {
    id: 'car-l-1',
    title: 'Signature Structured Tote',
    philosophy: 'Architecture of Style.',
    nature: 'Premium leather crafted for the modern professional.',
    image: '/CARRYELLE/1.png'
  },
  {
    id: 'car-l-2',
    title: 'Classic Bi-Fold & Cardholder',
    philosophy: 'Compact Luxury.',
    nature: 'Essential organization with a sleek, minimalist profile.',
    image: '/CARRYELLE/2.png'
  },
  {
    id: 'car-l-3',
    title: 'Elegant Evening Clutch',
    philosophy: 'Minimalist Grace.',
    nature: 'Sophisticated design perfect for special occasions.',
    image: '/CARRYELLE/3.png'
  }
]

const carryelleSustainableProducts = [
  {
    id: 'car-s-1',
    title: 'Artisan Crafted Belts',
    philosophy: 'The Perfect Finish.',
    nature: 'Durable leather with premium hardware to elevate any look.',
    image: '/CARRYELLE/4.png'
  },
  {
    id: 'car-s-2',
    title: 'Modern Leather Jacket',
    philosophy: 'Timeless Edge.',
    nature: 'Tailored fit that frames the spirit of adventure.',
    image: '/CARRYELLE/5.png'
  }
]

export function BrandsSection() {
  return (
    <section id="brands" className="w-full py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-[#F5F1E5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-[10px] font-black text-[#C1945E] uppercase tracking-[0.4em]">The Collections</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#4A3A28] mb-8 tracking-tighter"
          >
            Our Master <span className="text-[#C1945E] italic">Portfolios</span>.
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[2px] bg-[#C1945E] mx-auto"
          />
        </div>

        {/* Brand Portfolios with Galleries */}
        <div className="space-y-24 md:space-y-32">
          <section id="auriva">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-16">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#C1945E]/10 border border-[#C1945E]/20 rounded-xl">
                  <Sparkles className="w-5 h-5 text-[#C1945E]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#4A3A28] uppercase tracking-widest">Auriva · Stones</h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <p className="text-[10px] text-[#C1945E] font-bold uppercase tracking-[0.2em]">Crafted by Nature. Energized for You.</p>
                    <p className="text-[10px] text-[#9A8A75] font-medium uppercase tracking-[0.1em]">Spiritual • Wellness • Vastu • Gifting • Premium yet grounded</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Crystals', 'Wellness', 'Decor', 'Accessories'].map((type) => (
                  <span key={type} className="px-3 py-1 bg-[#D4C0A3]/20 border border-[#C1945E]/10 rounded-full text-[10px] font-bold text-[#6B5A45] uppercase tracking-wider">{type}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#C1945E]" />
                    Wellness Collection
                  </h4>
                  <BrandGallery
                    brandName="AURIVA WELLNESS"
                    brandColor="#C1945E"
                    products={aurivaWellnessProducts}
                  />
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Semi-Precious Stone Articles</h4>
                  <div className="text-sm md:text-base font-light text-[#6B5A45] leading-relaxed space-y-4">
                    <p>
                      AURIVA offers a thoughtfully curated range of semi-precious stone articles created for lifestyle, décor, personal wear, and gifting. Designed to serve both domestic retail markets and international wholesale channels, the collection balances aesthetic appeal with material authenticity.
                    </p>
                    <p>
                      Each creation reflects skilled craftsmanship and the inherent beauty of natural stones. Responsibly sourced and carefully finished, these pieces are designed to complement a variety of spaces and personal styles.
                    </p>
                    <p>
                      The collection features handcrafted jewellery, décor accents, and accessories, showcasing the distinctive qualities of stones such as amethyst, agate, jasper, and quartz.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Product Range</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Stone Bracelets',
                      'Crystal Pendants',
                      'Gemstone Necklaces',
                      'Gemstone Coasters',
                      'Vastu Products'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 bg-[#FEFEFE] border border-[#E4DAC7] rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C1945E]" />
                        <p className="text-xs font-bold text-[#6B5A45] uppercase tracking-wide">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Care & Disclaimer</h4>
                  <div className="text-[10px] md:text-xs font-light text-[#9A8A75] leading-relaxed space-y-2">
                    <p>
                      <span className="font-bold text-[#C1945E]">Care:</span> To maintain the beauty of your Semi-Precious Stone Articles, handle with care. Avoid exposure to harsh chemicals, extreme temperatures, and prolonged sunlight. Clean gently with a soft cloth.
                    </p>
                    <p>
                      <span className="font-bold text-[#C1945E]">Disclaimer:</span> Due to the natural variations in gemstones, each article may exhibit slight differences in color, pattern, and texture. These variations enhance the unique character of the handcrafted product and should not be considered defects.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#FEFEFE] border border-[#E4DAC7] rounded-2xl flex items-center justify-between gap-6 shadow-sm">
                  <div>
                    <h5 className="text-xs font-black text-[#4A3A28] uppercase tracking-widest mb-1">Business Partnership</h5>
                    <p className="text-[10px] text-[#9A8A75] font-light">Ethical Sourcing (B2B) & Holistic Retail (B2C)</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[#C1945E]/10 text-[#C1945E] text-[8px] font-black uppercase tracking-widest rounded-full">B2B</span>
                    <span className="px-3 py-1 bg-[#C1945E]/10 text-[#C1945E] text-[8px] font-black uppercase tracking-widest rounded-full">B2C</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C1945E]" />
                Decor & Accessories
              </h4>
              <BrandGallery
                brandName="AURIVA DECOR"
                brandColor="#C1945E"
                products={aurivaDecorProducts}
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="https://wa.me/919321078409?text=I'm%20interested%20in%20Auriva%20products%20for%20personal%20use" className="flex-1 min-w-[200px] md:flex-none">
                <Button variant="outline" className="w-full md:w-auto px-8 py-6 rounded-full border-[#C1945E]/30 text-[#4A3A28] hover:border-[#C1945E] text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#C1945E]/5">
                  Interested to Buy
                </Button>
              </Link>
              <Link href="https://wa.me/919321078409?text=I'm%20interested%20in%20Bulk%2FExport%20Enquiry%20for%20Auriva" className="flex-1 min-w-[200px] md:flex-none">
                <Button className="w-full md:w-auto bg-[#C1945E] hover:bg-[#C1945E]/90 text-white px-8 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all group shadow-md shadow-[#C1945E]/20">
                  Bulk / Export Enquiry
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </section>

          <section id="zivara">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-16">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#C1945E]/10 border border-[#C1945E]/20 rounded-xl">
                  <Gem className="w-5 h-5 text-[#C1945E]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#4A3A28] uppercase tracking-widest">Zivara · Jewellery</h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <p className="text-[10px] text-[#C1945E] font-bold uppercase tracking-[0.2em]">Where Trends Meet Craft</p>
                    <p className="text-[10px] text-[#9A8A75] font-medium uppercase tracking-[0.1em]">Fashion-forward • Affordable luxury • Trend-driven • Global appeal</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Earrings', 'Necklaces', 'Bracelets', 'Pearl & Metal'].map((type) => (
                  <span key={type} className="px-3 py-1 bg-[#D4C0A3]/20 border border-[#C1945E]/10 rounded-full text-[10px] font-bold text-[#6B5A45] uppercase tracking-wider">{type}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Imitation Jewellery (Western & Traditional)</h4>
                  <div className="text-sm md:text-base font-light text-[#6B5A45] leading-relaxed space-y-4">
                    <p>
                      ZIVARA presents a refined selection of imitation jewellery designed for contemporary and traditional aesthetics, suitable for everyday wear, special occasions, and gifting. Created to cater to both domestic retail markets and international wholesale channels, the collection combines design versatility with consistent quality.
                    </p>
                    <p>
                      Each piece reflects careful craftsmanship and attention to detail, offering styles that complement a wide range of outfits and preferences. Thoughtfully finished and trend-aware, the jewellery is designed to suit modern lifestyles while remaining timeless.
                    </p>
                    <p>
                      The collection includes earrings, necklaces, bangles, bracelets, and coordinated sets, crafted using quality base materials and imitation stones or pearls, delivering elegance and wearability across diverse markets.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Product Range</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Jewellery Sets',
                      'Earrings',
                      'Bangles & Bracelets',
                      'Necklaces'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 bg-[#FEFEFE] border border-[#E4DAC7] rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C1945E]" />
                        <p className="text-xs font-bold text-[#6B5A45] uppercase tracking-wide">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Care & Disclaimer</h4>
                  <div className="text-[10px] md:text-xs font-light text-[#9A8A75] leading-relaxed space-y-2">
                    <p>
                      <span className="font-bold text-[#C1945E]">Care:</span> To maintain the appearance and finish of your imitation jewellery, handle with care. Avoid contact with water, perfumes, cosmetics, and harsh chemicals. Store in a dry, air-tight container and clean gently with a soft, dry cloth after use.
                    </p>
                    <p>
                      <span className="font-bold text-[#C1945E]">Disclaimer:</span> Imitation jewellery is crafted using base materials, plating, and imitation stones or pearls. Minor variations in colour, finish, or detailing may occur due to manufacturing processes and design techniques. These variations are inherent to fashion jewellery and do not affect the overall quality or functionality of the product.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#FEFEFE] border border-[#E4DAC7] rounded-2xl flex items-center justify-between gap-6 shadow-sm">
                  <div>
                    <h5 className="text-xs font-black text-[#4A3A28] uppercase tracking-widest mb-1">Business Partnership</h5>
                    <p className="text-[10px] text-[#9A8A75] font-light">Global Export (B2B) & Premium Retail (B2C)</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[#C1945E]/10 text-[#C1945E] text-[8px] font-black uppercase tracking-widest rounded-full">B2B</span>
                    <span className="px-3 py-1 bg-[#C1945E]/10 text-[#C1945E] text-[8px] font-black uppercase tracking-widest rounded-full">B2C</span>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#C1945E]" />
                    Western Collection
                  </h4>
                  <BrandGallery
                    brandName="ZIVARA WESTERN"
                    brandColor="#C1945E"
                    products={zivaraWesternProducts}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C1945E]" />
                Traditional Collection
              </h4>
              <BrandGallery
                brandName="ZIVARA TRADITIONAL"
                brandColor="#C1945E"
                products={zivaraTraditionalProducts}
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="https://wa.me/919321078409?text=I'm%20interested%20in%20Zivara%20jewellery%20for%20personal%20use" className="flex-1 min-w-[200px] md:flex-none">
                <Button variant="outline" className="w-full md:w-auto px-8 py-6 rounded-full border-[#C1945E]/30 text-[#4A3A28] hover:border-[#C1945E] text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#C1945E]/5">
                  Interested to Buy
                </Button>
              </Link>
              <Link href="https://wa.me/919321078409?text=I'm%20interested%20in%20Bulk%2FExport%20Enquiry%20for%20Zivara" className="flex-1 min-w-[200px] md:flex-none">
                <Button className="w-full md:w-auto bg-[#C1945E] hover:bg-[#C1945E]/90 text-white px-8 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all group shadow-md shadow-[#C1945E]/20">
                  Bulk / Export Enquiry
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </section>

          <section id="carryelle">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-16">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#C1945E]/10 border border-[#C1945E]/20 rounded-xl">
                  <ShoppingBag className="w-5 h-5 text-[#C1945E]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#4A3A28] uppercase tracking-widest">Carryelle · Goods</h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <p className="text-[10px] text-[#C1945E] font-bold uppercase tracking-[0.2em]">Everyday Style. Elevated.</p>
                    <p className="text-[10px] text-[#9A8A75] font-medium uppercase tracking-[0.1em]">Functional fashion • Urban lifestyle • Export-ready</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Leather', 'Lifestyle', 'Travel', 'Sustainable'].map((type) => (
                  <span key={type} className="px-3 py-1 bg-[#D4C0A3]/20 border border-[#C1945E]/10 rounded-full text-[10px] font-bold text-[#6B5A45] uppercase tracking-wider">{type}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Leather and Non-Leather Goods</h4>
                  <div className="text-sm md:text-base font-light text-[#6B5A45] leading-relaxed space-y-4">
                    <p>
                      CARRYELLE offers a thoughtfully curated range of lifestyle accessories designed for everyday functionality and contemporary style. Created to serve both domestic retail markets and international wholesale channels, the collection focuses on versatility, practicality, and consistent quality across materials.
                    </p>
                    <p>
                      Each product reflects careful design and attention to construction, ensuring durability, comfort, and ease of use. Clean finishes and adaptable styling make these accessories suitable for a wide range of personal and professional settings.
                    </p>
                    <p>
                      The collection includes handbags, wallets, purses, clutches, belts, jackets, and related accessories, crafted using leather, PU, fabric, and other non-leather materials to meet diverse customer preferences and market requirements.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Product Range</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Handbags',
                      'Wallets & Purses',
                      'Clutches',
                      'Belts',
                      'Jackets',
                      'Non-Leather Variants'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 bg-[#FEFEFE] border border-[#E4DAC7] rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C1945E]" />
                        <p className="text-xs font-bold text-[#6B5A45] uppercase tracking-wide">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest mb-4">Care & Disclaimer</h4>
                  <div className="text-[10px] md:text-xs font-light text-[#9A8A75] leading-relaxed space-y-2">
                    <p>
                      <span className="font-bold text-[#C1945E]">Care:</span> To maintain the appearance and durability of leather and non-leather goods, handle with care. Avoid prolonged exposure to moisture, direct sunlight, and heat. Clean leather items with appropriate leather care products, and wipe non-leather surfaces gently with a soft, dry or slightly damp cloth. Store in a cool, dry place when not in use.
                    </p>
                    <p>
                      <span className="font-bold text-[#C1945E]">Disclaimer:</span> Products are crafted using leather, PU, fabric, or other non-leather materials depending on the design. Variations in colour, texture, grain, or finish may occur due to material characteristics and manufacturing processes. These variations are inherent to the materials used and should not be considered defects.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#FEFEFE] border border-[#E4DAC7] rounded-2xl flex items-center justify-between gap-6 shadow-sm">
                  <div>
                    <h5 className="text-xs font-black text-[#4A3A28] uppercase tracking-widest mb-1">Business Partnership</h5>
                    <p className="text-[10px] text-[#9A8A75] font-light">Custom Manufacturing (B2B) & Designer Retail (B2C)</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[#C1945E]/10 text-[#C1945E] text-[8px] font-black uppercase tracking-widest rounded-full">B2B</span>
                    <span className="px-3 py-1 bg-[#C1945E]/10 text-[#C1945E] text-[8px] font-black uppercase tracking-widest rounded-full">B2C</span>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#C1945E]" />
                    Leather Portfolio
                  </h4>
                  <BrandGallery
                    brandName="CARRYELLE LEATHER"
                    brandColor="#C1945E"
                    products={carryelleLeatherProducts}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black text-[#4A3A28] uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C1945E]" />
                Lifestyle & Apparel
              </h4>
              <BrandGallery
                brandName="CARRYELLE SUSTAINABLE"
                brandColor="#C1945E"
                products={carryelleSustainableProducts}
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="https://wa.me/919321078409?text=I'm%20interested%20in%20Carryelle%20goods%20for%20personal%20use" className="flex-1 min-w-[200px] md:flex-none">
                <Button variant="outline" className="w-full md:w-auto px-8 py-6 rounded-full border-[#C1945E]/30 text-[#4A3A28] hover:border-[#C1945E] text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#C1945E]/5">
                  Interested to Buy
                </Button>
              </Link>
              <Link href="https://wa.me/919321078409?text=I'm%20interested%20in%20Bulk%2FExport%20Enquiry%20for%20Carryelle" className="flex-1 min-w-[200px] md:flex-none">
                <Button className="w-full md:w-auto bg-[#C1945E] hover:bg-[#C1945E]/90 text-white px-8 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all group shadow-md shadow-[#C1945E]/20">
                  Bulk / Export Enquiry
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
