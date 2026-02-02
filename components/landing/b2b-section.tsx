'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Package, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function B2BSection() {
    const [formState, setFormState] = useState({
        company: '',
        country: '',
        interest: 'Auriva Stones',
        volume: '',
        email: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="export" className="w-full py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-[#F5F1E5] relative overflow-hidden">
            {/* Structural lines */}
            <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="h-full w-px bg-[#4A3A28]/10" />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Content side */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C1945E]/5 border border-[#C1945E]/10">
                                <Globe className="w-4 h-4 text-[#C1945E]" />
                                <span className="text-[10px] font-bold text-[#4A3A28] uppercase tracking-widest">Trade & Export Excellence</span>
                            </div>
                            Serious Supply <br /> for <span className="text-[#C1945E] italic">Domestic & Global Partners</span>
                            We are fully equipped for both pan-India distribution and global exports, ensuring streamlined logistics and compliance. Partner with us for reliable wholesale supply of premium Indian luxury goods
                        </motion.div>

                        <div className="grid gap-8">
                            {[
                                { icon: Package, title: "MOQ Flexibility", desc: "Adaptable order quantities tailored for both boutique retailers and large-scale distributors" },
                                { icon: Zap, title: "Export Mastery", desc: "Fully compliant with international standards and documentation for frictionless global trade" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className="p-4 bg-[#C1945E]/5 border border-[#C1945E]/10 text-[#C1945E] rounded-2xl group-hover:bg-[#C1945E] group-hover:text-white transition-all duration-500">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[#4A3A28] font-bold text-lg mb-1 group-hover:text-[#C1945E] transition-colors">{item.title}</h4>
                                        <p className="text-sm text-[#9A8A75] leading-relaxed max-w-xs">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C1945E]/10 to-[#D4C0A3]/10 blur-3xl opacity-30" />

                        <div className="relative bg-[#FEFEFE] border border-[#E4DAC7] p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-[#C1945E]/5">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-20 space-y-6"
                                >
                                    <div className="w-20 h-20 bg-[#C1945E]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle className="w-10 h-10 text-[#C1945E]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#4A3A28]">Inquiry Received</h3>
                                    <p className="text-[#9A8A75] font-light">Our trade desk will review your requirements and reach out within 24 hours</p>
                                    <Button variant="outline" onClick={() => setSubmitted(false)} className="border-[#C1945E]/20 text-[#C1945E] hover:bg-[#C1945E] hover:text-white rounded-full px-8 py-6 transition-all duration-500">Send Another Enquiry</Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-[#4A3A28] mb-1">Trade Enquiry</h3>
                                        <p className="text-[10px] text-[#C1945E] font-bold uppercase tracking-widest mb-6">Domestic & Global Trade Desk Support</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-[#9A8A75] uppercase tracking-widest ml-1">Company</label>
                                            <Input
                                                required
                                                placeholder="Global Exports Ltd."
                                                className="bg-[#F5F1E5] border-[#E4DAC7] text-[#4A3A28] rounded-xl px-4 py-6 focus:border-[#C1945E] transition-colors placeholder:text-[#9A8A75]/50 font-medium"
                                                value={formState.company}
                                                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-[#9A8A75] uppercase tracking-widest ml-1">Country</label>
                                            <Input
                                                required
                                                placeholder="United Kingdom"
                                                className="bg-[#F5F1E5] border-[#E4DAC7] text-[#4A3A28] rounded-xl px-4 py-6 focus:border-[#C1945E] transition-colors placeholder:text-[#9A8A75]/50 font-medium"
                                                value={formState.country}
                                                onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-[#9A8A75] uppercase tracking-widest ml-1">Product Interest</label>
                                        <select
                                            className="w-full bg-[#F5F1E5] border border-[#E4DAC7] px-4 py-4 rounded-xl text-[#4A3A28] text-sm focus:outline-none focus:border-[#C1945E] font-medium"
                                            value={formState.interest}
                                            onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                                        >
                                            <option value="auriva">Auriva (Stone Articles)</option>
                                            <option value="zivara">Zivara (Jewellery)</option>
                                            <option value="carryelle">Carryelle (Fashion Goods)</option>
                                            <option value="multi">Multi-Brand Partnership</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-[#9A8A75] uppercase tracking-widest ml-1">Monthly Volume</label>
                                        <Input
                                            placeholder="e.g. 1000+ units"
                                            className="bg-[#F5F1E5] border-[#E4DAC7] text-[#4A3A28] rounded-xl px-4 py-6 focus:border-[#C1945E] transition-colors placeholder:text-[#9A8A75]/50 font-medium"
                                            value={formState.volume}
                                            onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-[#9A8A75] uppercase tracking-widest ml-1">Business Email</label>
                                        <Input
                                            type="email"
                                            required
                                            placeholder="trade@company.com"
                                            className="bg-[#F5F1E5] border-[#E4DAC7] text-[#4A3A28] rounded-xl px-4 py-6 focus:border-[#C1945E] transition-colors placeholder:text-[#9A8A75]/50 font-medium"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#C1945E] text-white hover:bg-[#C1945E]/90 rounded-full py-8 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-[#C1945E]/20"
                                    >
                                        Submit Enquiry
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
