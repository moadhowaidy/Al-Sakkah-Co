import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { type Lang, translations, WHATSAPP_NUMBER } from '../../data'

interface FooterProps {
  lang: Lang
  onNavigate: (page: string) => void
}

export default function Footer({ lang, onNavigate }: FooterProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'

  const pageKeys = ['home', 'services', 'about', 'connect']

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[rgba(197,160,89,0.15)] pt-16 pb-8">
      {/* Glow line top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 ${isRtl ? 'text-right' : 'text-left'}`}>

          {/* Brand column — Logo + tagline + email */}
          <div>
            <motion.div
              className="mb-5"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/logo.jpg"
                alt={isRtl ? 'شركة السكة' : 'Al Sakkah Co.'}
                className="h-24 md:h-28 lg:h-32 w-auto object-contain rounded-lg drop-shadow-[0_0px_10px_rgba(255,255,255,0.1)]"
                style={{ filter: 'drop-shadow(0 0 10px rgba(197,160,89,0.18))' }}
              />
            </motion.div>
            <p className={`text-[#A0A0A0] text-sm leading-relaxed mb-4 ${isRtl ? 'font-ar' : 'font-en'}`}>
              {t.footer.tagline}
            </p>
            <a
              href="mailto:info@emaar-furniture.com"
              className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors duration-200"
            >
              <Mail size={14} className="text-[#C5A059] shrink-0" />
              <span className="font-en">info@emaar-furniture.com</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className={`text-white font-semibold mb-4 text-sm tracking-wide ${isRtl ? 'font-ar' : 'font-en'}`}>
              {isRtl ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {t.footer.links.map((label, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(pageKeys[i])}
                    className={`text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors duration-200 cursor-pointer ${isRtl ? 'font-ar' : 'font-en'}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-white font-semibold mb-4 text-sm tracking-wide ${isRtl ? 'font-ar' : 'font-en'}`}>
              {isRtl ? 'تواصل معنا' : 'Contact'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors duration-200 group"
                >
                  <MessageCircle size={14} className="text-[#C5A059] shrink-0" />
                  <span className="font-en">+218 94 684 3270</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+218946843270"
                  className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors duration-200"
                >
                  <Phone size={14} className="text-[#C5A059] shrink-0" />
                  <span className="font-en">+218 94 684 3270</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#A0A0A0] text-sm">
                <MapPin size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span className={isRtl ? 'font-ar' : 'font-en'}>{t.connect.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555] ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
          <span className={isRtl ? 'font-ar' : 'font-en'}>{t.footer.rights}</span>
          <span className="font-en">Powered by SwiftScale</span>
        </div>
      </div>
    </footer>
  )
}
