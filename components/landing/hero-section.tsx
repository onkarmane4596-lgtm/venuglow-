'use client'

import { useRef } from 'react'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Dynamic Wave Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510] via-[#2a241d] to-[#1a1510]" />

        {/* Wave 1 - Muted Accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[60vh] opacity-30"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full transform scale-150 origin-bottom" preserveAspectRatio="none">
            <path fill="#9A8A75" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Wave 2 - Primary Gold Accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[50vh] opacity-40"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full transform scale-125 origin-bottom" preserveAspectRatio="none">
            <path fill="#C1945E" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,229.3C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Wave 3 - Soft Highlight */}
        <motion.div
          className="absolute bottom-[-10%] left-0 right-0 h-[45vh] opacity-20 mixed-blend-overlay"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full transform scale-150 origin-bottom" preserveAspectRatio="none">
            <path fill="#D4C0A3" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,112C672,128,768,192,864,213.3C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-zivara animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/90">
            Premium Global Exports
          </span>
        </motion.div>

        {/* Headline with Staggered Reveal */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white mb-10 mix-blend-overlay">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Elevating Indian Luxury
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block text-brand-zivara italic"
            >
              for the World.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Curating the finest <span className="text-white font-medium">Indian luxury</span> across jewellery, wellness, and fashion for the global stage.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="#brands" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full h-16 bg-white text-black hover:bg-brand-zivara hover:text-white rounded-full px-10 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(var(--brand-zivara),0.5)]"
            >
              Explore Portfolios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <Link href="https://wa.me/919321078409" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-16 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white rounded-full px-10 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Chat With Us
            </Button>
          </Link>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent opacity-50" />
      </motion.div>

    </section>
  )
}
