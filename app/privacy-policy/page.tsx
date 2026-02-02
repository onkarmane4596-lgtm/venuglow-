import React from 'react'

export default function PrivacyPolicy() {
    return (
        <main className="w-full min-h-screen bg-[#F5F1E5] text-[#4A3A28] font-sans pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4 border-b border-[#C1945E]/30 pb-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-[#4A3A28]">Privacy Policy</h1>
                    <p className="text-sm md:text-base text-[#6B5A45] tracking-wide">
                        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-10 text-sm md:text-base leading-relaxed text-[#6B5A45]">

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">1. Introduction</h2>
                        <p>
                            Welcome to VenusGlow Global Exports. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">2. Information We Collect</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4A3A28] uppercase tracking-widest">5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <div className="mt-4 p-6 bg-[#FEFEFE] border border-[#E4DAC7] rounded-xl inline-block">
                            <p className="font-bold text-[#4A3A28]">VenusGlow Global Exports</p>
                            <p>Email: <a href="mailto:info@venusglowglobal.com" className="text-[#C1945E] hover:underline">info@venusglowglobal.com</a></p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}
