'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Brands', href: '#brands' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Export', href: '#export' },
    { name: 'Contact', href: '#contact' },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 px-6 md:px-12 py-4 bg-[#F5F1E5]/95 backdrop-blur-md border-b border-[#E4DAC7] shadow-sm`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col group transition-transform hover:scale-105">
                    <Image
                        src="/images/logo.png"
                        alt="VenusGlow Global Export Hub"
                        width={240}
                        height={60}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold text-[#4A3A28]/70 uppercase tracking-[0.2em] hover:text-[#C1945E] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-[#C1945E] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#C1945E]/90 transition-all shadow-lg"
                    >
                        Inquire Now
                    </Link>
                </nav>

                {/* Mobile Menu Trigger */}
                <button
                    type="button"
                    className="md:hidden p-2 text-[#4A3A28] cursor-pointer relative z-50 hover:bg-[#4A3A28]/5 rounded-full transition-colors"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu Overlay - Portal for Full Screen Coverage */}
            <PortalWrapper>
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[9999] bg-[#F5F1E5] flex flex-col p-6 overflow-hidden h-[100dvh]"
                        >
                            <div className="flex items-center justify-between mb-8 md:mb-12">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col">
                                    <Image
                                        src="/images/logo.png"
                                        alt="VenusGlow Global Export Hub"
                                        width={200}
                                        height={50}
                                        className="h-10 w-auto object-contain"
                                    />
                                </Link>
                                <button
                                    type="button"
                                    className="p-3 text-[#4A3A28] cursor-pointer hover:bg-[#4A3A28]/5 rounded-full transition-colors relative z-50 border border-[#4A3A28]/10"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <X className="w-6 h-6 pointer-events-none" />
                                </button>
                            </div>

                            <nav className="flex flex-col items-center justify-center flex-1 gap-6 md:gap-8 pb-20">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-4xl md:text-5xl font-display font-bold text-[#4A3A28] hover:text-[#C1945E] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="pt-8 w-full max-w-xs"
                                >
                                    <Link
                                        href="#contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full py-5 bg-[#C1945E] text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full text-center shadow-xl hover:bg-[#A67C4B] transition-colors cursor-pointer"
                                    >
                                        Inquire Now
                                    </Link>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </PortalWrapper>
        </header>
    )
}

function PortalWrapper({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return createPortal(children, document.body)
}
