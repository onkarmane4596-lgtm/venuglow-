import React from 'react'

export default function TradeTerms() {
    return (
        <main className="w-full min-h-screen bg-[#F5F1E5] text-[#4A3A28] font-sans pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4 border-b border-[#C1945E]/30 pb-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-[#4A3A28]">Trade Terms</h1>
                    <p className="text-sm md:text-base text-[#6B5A45] tracking-wide">
                        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-10 text-sm md:text-base leading-relaxed text-[#6B5A45]">

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">1. General</h2>
                        <p>
                            These Terms and Conditions apply to all sales of goods by VenusGlow Global Exports ("Seller") to any purchaser ("Buyer"). By placing an order, the Buyer agrees to be bound by these terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">2. Orders and Acceptance</h2>
                        <p>
                            All orders are subject to acceptance by the Seller. We reserve the right to refuse any order for any reason. An order is considered accepted only when the Seller issues a written confirmation or commercial invoice.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">3. Pricing and Payment</h2>
                        <p>
                            Prices are quoted in the agreed currency and do not include taxes, duties, or shipping costs unless otherwise stated (e.g., CIF, FOB terms). Payment terms are as agreed in the Proforma Invoice (e.g., specific % advance, balance against B/L).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">4. Shipping and Delivery</h2>
                        <p>
                            Delivery dates are estimates only. Seller shall not be liable for delays caused by force majeure events, customs clearance issues, or carrier delays. Risk of loss passes to the Buyer according to the agreed Incoterms® 2020.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">5. Returns and Claims</h2>
                        <p>
                            Claims for damaged or non-conforming goods must be made in writing within 7 days of receipt. Returns are only accepted with prior written authorization from the Seller.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">6. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">7. Contact Information</h2>
                        <div className="mt-4 p-6 bg-[#FEFEFE] border border-[#E4DAC7] rounded-xl inline-block">
                            <p className="font-bold text-[#4A3A28]">VenusGlow Global Exports</p>
                            <p>Corporate Office: Maharashtra, India</p>
                            <p>Email: <a href="mailto:info@venusglowglobal.com" className="text-[#C1945E] hover:underline">info@venusglowglobal.com</a></p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}
