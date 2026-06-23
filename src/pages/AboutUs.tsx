import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Globe } from 'lucide-react'
import { type Lang, translations } from '../data'

interface AboutUsProps {
  lang: Lang
}

export default function AboutUs({ lang }: AboutUsProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'

  const pillarIcons = [<CheckCircle size={20} />, <Award size={20} />, <Globe size={20} />]

  return (
    <main className="min-h-dvh bg-[#0E0E0E] pt-28 pb-20 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/4 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B6F35]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mb-8 flex ${isRtl ? 'justify-end' : 'justify-start'}`}
        >
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(197,160,89,0.3)] bg-[rgba(197,160,89,0.06)] text-[#C5A059] text-sm ${isRtl ? 'font-ar' : 'font-en'}`}>
            <Users size={14} />
            {t.about.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`text-5xl sm:text-6xl font-black text-white mb-8 ${isRtl ? 'text-right font-ar' : 'text-left font-en'}`}
        >
          {t.about.pageTitle}
        </motion.h1>

        {/* Body paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`space-y-5 mb-16 ${isRtl ? 'text-right' : 'text-left'}`}
        >
          <p className={`text-[#A0A0A0] text-lg leading-relaxed ${isRtl ? 'font-ar' : 'font-en'}`}>{t.about.p1}</p>
          <p className={`text-[#A0A0A0] text-lg leading-relaxed ${isRtl ? 'font-ar' : 'font-en'}`}>{t.about.p2}</p>
        </motion.div>

        {/* Pillars */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16`}>
          {t.about.pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
              className={`p-6 rounded-2xl card-glass hover:border-[rgba(197,160,89,0.35)] transition-all duration-300 group ${isRtl ? 'text-right' : 'text-left'}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-4 group-hover:bg-[#C5A059]/20 transition-colors duration-300">
                {pillarIcons[i]}
              </div>
              <h3 className={`text-white font-bold text-lg mb-2 ${isRtl ? 'font-ar' : 'font-en'}`}>{pillar.title}</h3>
              <p className={`text-[#A0A0A0] text-sm leading-relaxed ${isRtl ? 'font-ar' : 'font-en'}`}>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Licensed banner — Logo + gold accent bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
          className={`relative p-6 sm:p-8 rounded-2xl overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}
        >
          {/* Gold border gradient */}
          <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(197,160,89,0.15), rgba(197,160,89,0.05))' }} />
          <div className="absolute inset-0 rounded-2xl border border-[rgba(197,160,89,0.3)]" />

          <div className={`relative z-10 flex items-start gap-5 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* Logo next to license details */}
            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/logo.png"
                alt={isRtl ? 'شركة السكة' : 'Al Sakkah Co.'}
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_0px_10px_rgba(255,255,255,0.1)]"
              />
            </motion.div>

            {/* Gold accent line + text */}
            <div className={`flex-1 ${isRtl ? 'border-r-4' : 'border-l-4'} border-[#D4AF37] ${isRtl ? 'pr-5' : 'pl-5'}`}>
              <h3 className={`text-white font-bold text-xl mb-2 ${isRtl ? 'font-ar' : 'font-en'}`}>{t.about.licensedTitle}</h3>
              <p className={`text-[#A0A0A0] leading-relaxed ${isRtl ? 'font-ar' : 'font-en'}`}>{t.about.licensedDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
