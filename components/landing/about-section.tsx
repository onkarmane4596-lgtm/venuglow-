'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Globe, ArrowRight, CheckCircle2, Diamond } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Dynamic Transformations for Luxury Art
  const rotateBig = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotateSmall = useTransform(scrollYProgress, [0, 1], [0, -180])
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section id="about" ref={containerRef} className="w-full bg-[#F5F1E5] relative">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT COLUMN: The Essence & Philosophy */}
        <div className="w-full lg:w-[45%] bg-[#4A3A28] text-[#F5F1E5] relative overflow-hidden py-16 px-8 md:p-16 flex flex-col">
          {/* Dynamic Luxury Art Installation - Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 1. The Golden Orbit - Dashed */}
            <motion.div
              style={{ rotate: rotateBig, opacity: 0.1 }}
              className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-dashed border-[#C1945E] rounded-full"
            />
            {/* 2. The Solid Meridian */}
            <motion.div
              style={{ rotate: rotateSmall, opacity: 0.15 }}
              className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] border border-[#D4C0A3] rounded-full"
            />
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C1945E] rounded-full blur-[120px] opacity-10" />
          </div>

          <div className="relative z-10 flex-grow flex flex-col justify-center">
            {/* Top Marker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#C1945E]">Est. 2024</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9]">
                About <br />
                <span className="italic font-serif text-[#C1945E]">Us</span>.
              </h2>
              <div className="w-24 h-1 bg-[#C1945E] mt-8" />
            </motion.div>

            {/* Vision & Mission - MOVED HERE */}
            <div className="space-y-16">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Target className="w-6 h-6 text-[#C1945E]" />
                  <h3 className="text-xl font-display font-bold text-[#F5F1E5]">Our Vision</h3>
                </div>
                <p className="text-[#D4C0A3] leading-relaxed text-lg max-w-md">
                  To build globally trusted lifestyle brands from India, blending design, craftsmanship, and conscious sourcing into a singular standard of luxury.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-6 h-6 text-[#C1945E]" />
                  <h3 className="text-xl font-display font-bold text-[#F5F1E5]">Our Mission</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Deliver uncompromising quality.",
                    "Foster sustainable trade relationships.",
                    "Celebrate Indian craftsmanship globally."
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#D4C0A3]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C1945E] mt-2.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Narrative */}
        <div className="w-full lg:w-[55%] p-8 md:p-16 lg:p-24 space-y-24 bg-[#F5F1E5]">

          {/* Block 1: Identity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#9A8A75] uppercase mb-8">Who We Are</h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#4A3A28] font-display leading-tight font-medium">
              <span className="text-[#C1945E]">VenusGlow Global Exports</span> is a premier curation house, bridging the gap between Indian artistry and the global marketplace.
            </p>
            <p className="mt-8 text-lg text-[#6B5A45] leading-relaxed max-w-2xl">
              Operating as a dynamic proprietorship, we specialize in the sourcing, branding, and export of high-caliber lifestyle goods. From the spiritual resonance of semi-precious stones to the modern allure of fashion accessories, we deliver excellence without compromise.
            </p>
          </motion.div>

          {/* Block 2: Scope (Nature of Business) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="border-t border-[#4A3A28]/10 pt-16"
          >
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#9A8A75] uppercase mb-12">Nature of Business</h3>
            <ul className="grid gap-6">
              {[
                { title: "Global Trader", desc: "Executing seamless cross-border commodity flow." },
                { title: "Wholesale Supplier", desc: "Volume-based distribution for B2B partners." },
                { title: "Direct Exporter", desc: "Compliant, documentation-ready international shipping." }
              ].map((item, idx) => (
                <li key={idx} className="group flex items-start gap-6 p-6 hover:bg-[#FEFEFE] rounded-2xl transition-colors duration-500 border border-transparent hover:border-[#E4DAC7] hover:shadow-sm">
                  <div className="pt-1">
                    <Diamond className="w-6 h-6 text-[#C1945E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-[#4A3A28] mb-2">{item.title}</h4>
                    <p className="text-[#6B5A45]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Block 3: Values (Horizontal Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="border-t border-[#4A3A28]/10 pt-16"
          >
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#9A8A75] uppercase mb-12">Core Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Quality", "Integrity", "Innovation", "Sustainability"].map((val, idx) => (
                <div key={idx} className="aspect-[4/3] bg-[#4A3A28] rounded-xl flex items-center justify-center relative overflow-hidden group shadow-lg">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[#C1945E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 text-[#F5F1E5] font-display font-bold text-lg md:text-xl tracking-wider">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Block 4: Contact CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="bg-[#FEFEFE] border border-[#E4DAC7] p-8 md:p-12 rounded-3xl shadow-sm"
          >
            <div className="flex flex-col xl:flex-row items-center justify-between gap-8 text-center xl:text-left">
              <div>
                <h3 className="text-2xl font-display font-bold text-[#4A3A28] mb-2">Ready to Collaborate?</h3>
                <p className="text-[#9A8A75]">Join our network of global partners and retailers.</p>
              </div>
              <Link href="#contact" className="w-full xl:w-auto">
                <Button className="w-full xl:w-auto h-14 bg-[#C1945E] hover:bg-[#C1945E]/90 text-white rounded-full px-10 text-xs font-black uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl">
                  Start Dialogue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
