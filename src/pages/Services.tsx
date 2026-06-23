import { motion } from 'framer-motion'
import { type Lang, translations } from '../data'
import ProductGrid from '../components/services/ProductGrid'

interface ServicesProps {
  lang: Lang
}

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'

  return (
    <main className="min-h-dvh bg-[#0E0E0E] pt-28 pb-20">
      {/* Page ambient */}
      <div className="absolute top-0 inset-x-0 h-80 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#C5A059]/5 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className={`mb-12 ${isRtl ? 'text-right' : 'text-left'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1 className={`text-4xl sm:text-5xl font-black text-white mb-3 ${isRtl ? 'font-ar' : 'font-en'}`}>
            {t.services.pageTitle}
          </h1>
          <p className={`text-[#A0A0A0] text-lg ${isRtl ? 'font-ar' : 'font-en'}`}>
            {t.services.pageSubtitle}
          </p>
          <div className={`mt-4 h-0.5 w-20 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full ${isRtl ? 'mr-0 ml-auto' : ''}`} />
        </motion.div>

        <ProductGrid lang={lang} />
      </div>
    </main>
  )
}
