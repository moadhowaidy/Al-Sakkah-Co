import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { type Lang, translations, WHATSAPP_NUMBER } from '../data'
import Button from '../components/ui/Button'

interface ConnectProps {
  lang: Lang
}

export default function Connect({ lang }: ConnectProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    isRtl ? 'مرحباً، أريد الاستفسار' : 'Hello, I would like to inquire'
  )}`

  const contactItems = [
    {
      icon: <Phone size={20} />,
      label: isRtl ? 'الهاتف' : 'Phone',
      value: t.connect.phone,
      href: `tel:${WHATSAPP_NUMBER}`,
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      value: t.connect.phone,
      href: waLink,
    },
    {
      icon: <Mail size={20} />,
      label: isRtl ? 'البريد الإلكتروني' : 'Email',
      value: t.connect.email,
      href: `mailto:${t.connect.email}`,
    },
    {
      icon: <MapPin size={20} />,
      label: isRtl ? 'العنوان' : 'Address',
      value: t.connect.address,
      href: 'https://maps.app.goo.gl/ZmBZ9bBrw3Fb9fN18',
    },
  ]

  return (
    <main className="min-h-dvh bg-[#0E0E0E] pt-28 pb-20 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/4 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B6F35]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered logo at top */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <motion.img
            src="/images/logo.jpg"
            alt={isRtl ? 'شركة السكة' : 'Al Sakkah Co.'}
            className="h-24 sm:h-28 md:h-32 w-auto object-contain rounded-xl"
            style={{ filter: 'drop-shadow(0 0 15px rgba(197,160,89,0.2))' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl sm:text-5xl font-black text-white mb-3 ${isRtl ? 'font-ar' : 'font-en'}`}>
            {t.connect.pageTitle}
          </h1>
          <p className={`text-[#A0A0A0] text-lg ${isRtl ? 'font-ar' : 'font-en'}`}>
            {t.connect.pageSubtitle}
          </p>
          <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {/* WhatsApp CTA */}
            <div className="p-6 rounded-2xl card-glass border-[rgba(197,160,89,0.3)] mb-6">
              <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-11 h-11 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400">
                  <MessageCircle size={22} />
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <p className={`text-white font-bold ${isRtl ? 'font-ar' : 'font-en'}`}>{t.connect.whatsappCta}</p>
                  <p className={`text-[#A0A0A0] text-sm ${isRtl ? 'font-ar' : 'font-en'}`}>{t.connect.whatsappNote}</p>
                </div>
              </div>
              <Button href={waLink} variant="gold" size="lg" fullWidth>
                <MessageCircle size={18} />
                <span className={isRtl ? 'font-ar' : 'font-en'}>{t.connect.whatsappCta}</span>
              </Button>
            </div>

            {/* Contact list */}
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08 }}
                className={`flex items-center gap-4 p-4 rounded-xl card-glass hover:border-[rgba(197,160,89,0.35)] transition-all duration-300 group ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059]/20 transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[#A0A0A0] text-xs mb-0.5 ${isRtl ? 'font-ar' : 'font-en'}`}>{item.label}</p>
                  <p className="text-white text-sm font-medium font-en truncate">{item.value}</p>
                </div>
                <ExternalLink size={14} className="text-[#555] group-hover:text-[#C5A059] transition-colors shrink-0" />
              </motion.a>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden card-glass"
          >
            <div className="p-4 border-b border-[rgba(197,160,89,0.1)]">
              <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <MapPin size={16} className="text-[#C5A059]" />
                <span className={`text-white text-sm font-medium ${isRtl ? 'font-ar' : 'font-en'}`}>
                  {t.connect.mapTitle}
                </span>
              </div>
            </div>
            <div className="relative" style={{ paddingBottom: '70%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.7!2d13.1800!3d32.8300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a89270c7b2d4b5%3A0x1a2b3c4d5e6f7a8b!2sAin%20Zara%2C%20Tripoli%2C%20Libya!5e0!3m2!1sar!2sly!4v1700000000000"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.connect.mapTitle}
              />
            </div>
            <div className="p-4">
              <a
                href="https://maps.app.goo.gl/ZmBZ9bBrw3Fb9fN18"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-[#C5A059] text-sm hover:text-[#D4AF37] transition-colors ${isRtl ? 'flex-row-reverse justify-end font-ar' : 'font-en'}`}
              >
                <ExternalLink size={14} />
                {isRtl ? 'افتح في خرائط Google' : 'Open in Google Maps'}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
