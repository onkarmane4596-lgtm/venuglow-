'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function FloatingWhatsApp() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-8 right-8 z-[90]"
        >
            <Link
                href="https://wa.me/919321078409?text=Hello,%20I'd%20like%20to%20get%20in%20touch%20with%20the%20VenusGlow%20Trade%20Desk."
                target="_blank"
                className="group relative flex items-center gap-4"
            >
                <div className="absolute right-full mr-4 px-4 py-2 bg-background/80 backdrop-blur-xl border border-border whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">Talk to Trade Desk</span>
                </div>

                <div className="relative w-16 h-16 bg-primary flex items-center justify-center shadow-2xl group-hover:bg-brand-zivara-dark dark:group-hover:bg-brand-zivara-light group-hover:scale-110 transition-all duration-500 rounded-full">
                    <MessageCircle className="w-8 h-8 text-primary-foreground fill-current" />

                    <div className="absolute inset-0 rounded-full">
                        <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
