import { motion } from 'framer-motion'
import { Shield, Zap, MessageCircle, Star } from 'lucide-react'
import { type Lang, translations } from '../../data'

interface QuickActionsProps {
  lang: Lang
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={24} />,
  Zap: <Zap size={24} />,
  MessageCircle: <MessageCircle size={24} />,
  Star: <Star size={24} />,
}

export default function QuickActions({ lang }: QuickActionsProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'

  return (
    <section className="relative py-24 bg-[#0E0E0E]">
      <div className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className={`text-center mb-14 ${isRtl ? 'font-ar' : 'font-en'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.quickActions.title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.quickActions.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`group relative p-6 rounded-2xl card-glass hover:border-[rgba(197,160,89,0.35)] transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-5 group-hover:bg-[#C5A059]/20 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] transition-all duration-300">
                {iconMap[card.icon]}
              </div>

              <h3 className={`text-white font-semibold text-lg mb-2 ${isRtl ? 'font-ar' : 'font-en'}`}>
                {card.title}
              </h3>
              <p className={`text-[#A0A0A0] text-sm leading-relaxed ${isRtl ? 'font-ar' : 'font-en'}`}>
                {card.desc}
              </p>

              {/* Corner glow on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C5A059]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
