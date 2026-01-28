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
            <p className="text-[11px] text-[#6B5A45] leading-loose font-medium font-sans max-w-xs uppercase tracking-widest">
              A multi-brand export house delivering premium Indian lifestyle products across jewellery, wellness, and fashion categories.
            </p>
            <div className="flex gap-5">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/shobhajipawar/" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587148497847" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/shobha-p-0060a63a8/" }
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#FEFEFE] border border-[#E4DAC7] text-[#9A8A75] hover:text-[#C1945E] hover:bg-[#C1945E]/10 transition-all rounded-full">
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

          {/* Corporate Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-[#4A3A28] uppercase tracking-[0.2em]">Our Presence</h4>
            <ul className="space-y-3 text-[10px] font-bold tracking-widest">
              <li>
                <Link href="#about" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  Parent Overview
                </Link>
              </li>
              <li>
                <Link href="#export" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  B2B Trade Desk
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#9A8A75] hover:text-[#C1945E] transition-colors uppercase">
                  Global Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-[#4A3A28] uppercase tracking-[0.2em]">Global Trade Desk</h4>
            <ul className="space-y-4 font-sans font-light">
              <li className="flex items-start gap-3 text-xs text-[#6B5A45]">
                <MapPin className="w-4 h-4 text-[#C1945E] shrink-0" />
                <span>Maharashtra, India <br /> Global Export Division</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-[#6B5A45]">
                <Mail className="w-4 h-4 text-[#C1945E] shrink-0" />
                <a href="mailto:info@venusglowglobal.com" className="hover:text-[#C1945E] transition-colors text-xs">info@venusglowglobal.com</a>
              </li>
              <li className="flex items-center gap-3 text-xs text-[#6B5A45]">
                <Globe className="w-4 h-4 text-[#C1945E] shrink-0" />
                <span>VenusGlow Global Export</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-10 border-t border-[#E4DAC7] flex flex-col md:grid md:grid-cols-2 justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[9px] font-bold text-[#9A8A75]/60 uppercase tracking-[0.3em]">
              © {currentYear} VENUSGLOW GLOBAL BRANDS & EXPORTS. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex gap-6 justify-center md:justify-end text-[9px] font-bold text-[#9A8A75]/60 uppercase tracking-[0.3em] font-sans">
            <Link href="#" className="hover:text-[#C1945E] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#C1945E] transition-colors">Trade Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
