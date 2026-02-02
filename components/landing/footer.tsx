import Link from 'next/link'
import Image from 'next/image'
import { Globe, MapPin, Mail, Instagram, Facebook, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#F5F1E5] text-[#4A3A28] border-t border-[#E4DAC7]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">

          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="VenusGlow"
                  width={200}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <div className="w-12 h-[1px] bg-[#C1945E]" />
            </div>
            A multi-brand export house delivering premium Indian lifestyle products across jewellery, wellness, and fashion categories
            <div className="flex gap-5">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/shobhajipawar/", colorClass: "text-[#E1306C] bg-[#E1306C]/10 border-[#E1306C]/20" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587148497847", colorClass: "text-[#1877F2] bg-[#1877F2]/10 border-[#1877F2]/20" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/shobha-p-0060a63a8/", colorClass: "text-[#0A66C2] bg-[#0A66C2]/10 border-[#0A66C2]/20" }
              ].map(({ Icon, href, colorClass }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className={`p-3 border transition-all rounded-full ${colorClass}`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ... (rest of the columns) ... */}

          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-[#4A3A28] uppercase tracking-[0.2em]">Our Brands</h4>
            <ul className="space-y-3 text-[10px] font-bold tracking-widest">
              <li>
                <Link href="#auriva" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  AURIVA (Wellness)
                </Link>
              </li>
              <li>
                <Link href="#zivara" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  ZIVARA (Jewellery)
                </Link>
              </li>
              <li>
                <Link href="#carryelle" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  CARRYELLE (Fashion)
                </Link>
              </li>
            </ul>
          </div>

          {/* Domestic (India) */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-[#4A3A28] uppercase tracking-[0.2em] flex items-center gap-2">
              <MapPin className="w-3 h-3 text-[#C1945E]" />
              Domestic (India)
            </h4>
            <ul className="space-y-3 text-[10px] font-bold tracking-widest">
              <li className="text-[#6B5A45] font-sans font-normal text-xs mb-2">
                Corporate Office: Maharashtra
              </li>
              <li>
                <a href="mailto:info@venusglowglobal.com?subject=Domestic Enquiry" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  Domestic Enquiries
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  Partner With Us (India)
                </Link>
              </li>

            </ul>
          </div>

          {/* Global (International) */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-[#4A3A28] uppercase tracking-[0.2em] flex items-center gap-2">
              <Globe className="w-3 h-3 text-[#C1945E]" />
              Global (International)
            </h4>
            <ul className="space-y-3 text-[10px] font-bold tracking-widest">
              <li className="text-[#6B5A45] font-sans font-normal text-xs mb-2">
                Global Headquarters
              </li>
              <li>
                <Link href="#export" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  Export Division
                </Link>
              </li>
              <li>
                <a href="mailto:info@venusglowglobal.com?subject=Global Export Enquiry" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  Global Enquiries
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  International Trade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-10 border-t border-[#E4DAC7] flex flex-col md:grid md:grid-cols-2 justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div>
              © {currentYear} VENUSGLOW GLOBAL EXPORTS. ALL RIGHTS RESERVED
            </div>
            <div className="text-[10px] text-[#9A8A75]/60 font-medium tracking-wider uppercase">
              Powered by : <a href="http://techsarthiservices.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C1945E] transition-colors">Techsarthi</a>
            </div>
          </div>
          <div className="flex gap-6 justify-center md:justify-end text-[9px] font-bold text-[#9A8A75]/60 uppercase tracking-[0.3em] font-sans">
            <Link href="/privacy-policy" className="hover:text-[#C1945E] transition-colors">Privacy Policy</Link>
            <Link href="/trade-terms" className="hover:text-[#C1945E] transition-colors">Trade Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
