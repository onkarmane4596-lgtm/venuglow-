'use client'

import { motion } from 'framer-motion'
import { Layers, Tag, Globe, Package, Sliders, Briefcase } from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: "Category-Focused Architecture",
    desc: "Distinct brand identities for Wellness, Jewellery, and Fashion, allowing for targeted market positioning"
  },
  {
    icon: Tag,
    title: "Private Labelling Options",
    desc: "Comprehensive white-label solutions that allow you to market our premium products under your own brand name"
  },
  {
    icon: Globe,
    title: "Export-Ready Specifications",
    desc: "Products manufactured to meet international quality standards and compliance requirements for global trade"
  },
  {
    icon: Package,
    title: "Structured Packaging Solutions",
    desc: "Professional, secure, and aesthetic packaging designed to ensure safety during transit and shelf appeal"
  },
  {
    icon: Sliders,
    title: "Flexible MOQs",
    desc: "Adaptable Minimum Order Quantities designed to support both emerging retailers and established wholesale giants"
  },
  {
    icon: Briefcase,
    title: "Professional Communication",
    desc: "Dedicated account management with clear timelines, transparent updates, and reliable delivery schedules"
  }
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="w-full py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-[#F5F1E5] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#C1945E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#D4C0A3]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 md:mb-28 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#C1945E]/10 border border-[#C1945E]/20 backdrop-blur-sm"
          >
            <span className="text-[10px] font-black text-[#C1945E] uppercase tracking-[0.2em]">The VenusGlow Advantage</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3A28] mb-6 tracking-tight leading-tight"
          >
            Why Partner <span className="text-[#C1945E] italic">With Us</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B5A45] text-lg font-light leading-relaxed"
          >
            We don't just supply products; we build scalability into your business model through structured support and premium manufacturing
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#FEFEFE] border border-[#E4DAC7] hover:border-[#C1945E]/50 hover:bg-[#F5F1E5] hover:shadow-2xl hover:shadow-[#C1945E]/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <reason.icon className="w-24 h-24 text-[#C1945E] rotate-[-10deg]" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-8 bg-[#C1945E]/10 rounded-2xl group-hover:bg-[#C1945E] group-hover:text-white text-[#C1945E] transition-all duration-500">
                  <reason.icon className="w-7 h-7" />
                </div>

                <h4 className="text-xl font-bold text-[#4A3A28] mb-3">{reason.title}</h4>
                <p className="text-sm text-[#6B5A45] leading-relaxed font-light">
                  {reason.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C1945E]/0 via-[#C1945E]/50 to-[#C1945E]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
