'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Mail, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-[#F5F1E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Contact Info & CTA */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl md:text-6xl font-bold text-[#4A3A28] leading-[1.1]">
                Let's Build <br /> Something <span className="text-[#C1945E] italic">Exceptional</span>.
              </h2>
              <p className="text-base md:text-lg text-[#6B5A45] font-light leading-relaxed max-w-md">
                Whether you're looking to source premium products or explore a global partnership, we invite your enquiry.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <div className="flex flex-col gap-8">
                {[
                  { icon: Mail, label: "Email", value: "info@venusglowglobal.com", href: "mailto:info@venusglowglobal.com" },
                  { icon: MessageSquare, label: "WhatsApp", value: "+91 93210 78409", href: "https://wa.me/919321078409?text=Hello,%20I%20have%20an%20enquiry%20regarding%20VenusGlow%20Global%20products." }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} className="group flex items-center gap-6 p-6 bg-[#FEFEFE] border border-[#E4DAC7] rounded-2xl hover:bg-[#F5F1E5] hover:border-[#C1945E]/50 transition-all duration-500 shadow-sm">
                    <div className="p-3 bg-[#C1945E]/10 rounded-xl text-[#C1945E] group-hover:bg-[#C1945E] group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#9A8A75] uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg md:text-xl text-[#4A3A28] font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-10 border-t border-[#E4DAC7]">
                <p className="text-[10px] font-bold text-[#9A8A75] uppercase tracking-widest mb-6">Follow Our Journey</p>
                <div className="flex gap-4">
                  {[
                    { Icon: Instagram, href: "https://www.instagram.com/shobhajipawar/" },
                    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587148497847" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/shobha-p-0060a63a8/" }
                  ].map(({ Icon, href }, idx) => (
                    <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="p-4 bg-[#FEFEFE] border border-[#E4DAC7] rounded-xl text-[#9A8A75] hover:text-[#C1945E] hover:border-[#C1945E] transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FEFEFE] border border-[#E4DAC7] p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C1945E]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <div className="w-20 h-20 bg-[#C1945E]/10 rounded-full flex items-center justify-center text-[#C1945E] mb-2">
                <MessageSquare className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#4A3A28]">
                  Quick <span className="text-[#C1945E] italic">Enquiry</span>
                </h3>
                <p className="text-[#9A8A75] font-light leading-relaxed max-w-sm mx-auto">
                  For personal purchases, custom orders, or quick questions about our collections, chat with us directly.
                </p>
              </div>

              <a
                href="https://wa.me/919321078409?text=Hello,%20I%20have%20an%20enquiry%20regarding%20VenusGlow%20Global%20products."
                target="_blank"
                className="w-full"
              >
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full py-8 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
                >
                  Chat on WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>

              <p className="text-[10px] text-[#4A3A28]/30 font-bold uppercase tracking-widest">
                Available Mon-Sat • 9 AM - 7 PM IST
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
