'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Product {
    id: string
    title: string
    philosophy: string
    nature: string
    image: string
}

interface GalleryProps {
    brandName: string
    brandColor: string
    products: Product[]
}

export function BrandGallery({ brandName, brandColor, products }: GalleryProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    return (
        <div className="py-12 md:py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 md:gap-8">
                <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: brandColor }}>
                        {brandName} COLLECTION
                    </span>
                    <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                        The Philosophy of <span className="italic font-light opacity-50">Craft</span>
                    </h3>
                </div>
                Each piece in our {brandName.toLowerCase()} collection is a testament to the balance between natural raw energy and refined human artistry
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        layoutId={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="group cursor-pointer relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-foreground/[0.03] border border-foreground/5 mb-6">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md border border-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full shadow-sm transform translate-y-2 group-hover:translate-y-0">
                                <Plus className="w-5 h-5 text-black" />
                            </div>
                        </div>

                        <div className="text-center space-y-2">
                            <h4 className="text-lg md:text-xl font-bold text-[#4A3A28] leading-tight group-hover:text-[#C1945E] transition-colors">{product.title}</h4>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A8A75] group-hover:text-[#C1945E] transition-colors">
                                Explore Philosophy
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProduct && (
                    <PortalWrapper>
                        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                className="absolute inset-0 bg-[#F5F1E5]/95 backdrop-blur-xl"
                            />

                            <motion.div
                                layoutId={selectedProduct.id}
                                className="relative w-full max-w-6xl aspect-auto md:aspect-[16/9] bg-[#FEFEFE] border border-[#E4DAC7] flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-2xl"
                            >
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-4 right-4 z-50 p-4 bg-[#F5F1E5]/80 hover:bg-[#C1945E]/10 transition-colors border border-[#4A3A28]/10 shadow-sm rounded-full cursor-pointer"
                                >
                                    <X className="w-6 h-6 text-[#4A3A28]" />
                                </button>

                                <div className="relative w-full md:w-1/2 h-[50vh] md:h-full">
                                    <Image
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-6 md:space-y-8 overflow-y-auto max-h-[50vh] md:max-h-full">
                                    <div className="space-y-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: brandColor }}>
                                            Product Philosophy
                                        </span>
                                        <h3 className="font-display text-3xl md:text-5xl font-bold text-[#4A3A28]">
                                            {selectedProduct.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <h5 className="text-[10px] font-black text-[#9A8A75] uppercase tracking-widest">The Soul</h5>
                                            <p className="text-[#6B5A45] text-sm md:text-lg font-light leading-relaxed italic">"{selectedProduct.philosophy}"</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="text-[10px] font-black text-[#9A8A75] uppercase tracking-widest">Nature & Essence</h5>
                                            <p className="text-[#6B5A45]/80 text-xs md:text-base font-light leading-relaxed">{selectedProduct.nature}</p>
                                        </div>
                                    </div>

                                    <div className="pt-4 md:pt-6">
                                        <Link href={`https://wa.me/919321078409?text=I'm%20interested%20in%20${encodeURIComponent(selectedProduct.title)}`} className="w-full">
                                            <Button
                                                className="w-full bg-[#C1945E] text-white hover:bg-[#C1945E]/90 py-6 md:py-8 text-xs font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500"
                                            >
                                                Request Details
                                                <MessageCircle className="ml-3 w-5 h-5 fill-current" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </PortalWrapper>
                )}
            </AnimatePresence>
        </div>
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
