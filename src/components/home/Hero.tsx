import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, ShoppingBag } from 'lucide-react'
import { type Lang, translations, WHATSAPP_NUMBER } from '../../data'
import Button from '../ui/Button'

interface HeroProps {
  lang: Lang
  onNavigate: (page: string) => void
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
} as const

export default function Hero({ lang, onNavigate }: HeroProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    isRtl ? 'مرحباً، أريد الاستفسار عن المنتجات' : 'Hello, I would like to inquire about products'
  )}`

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-[#0E0E0E]">
      {/* Ambient background layers */}
      <div className="absolute inset-0">
        {/* Central gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C5A059]/6 blur-[120px]" />
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/4 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B6F35]/5 blur-[100px] rounded-full" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(197,160,89,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Scanline */}
        <div className="absolute inset-0 scanline" />
      </div>

      {/* Logo watermark — massive, subtle, behind content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src="/images/logo.png"
          alt=""
          aria-hidden="true"
          className="w-[500px] md:w-[700px] lg:w-[900px] h-auto object-contain select-none"
        />
      </motion.div>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#C5A059]/40"
          style={{
            top: `${20 + i * 13}%`,
            left: `${10 + i * 14}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Proud logo at top center — fade-in and slide-up entry */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.img
              src="/images/logo.png"
              alt={isRtl ? 'شركة السكة' : 'Al Sakkah Co.'}
              className="h-20 sm:h-24 md:h-28 w-auto object-contain mx-auto drop-shadow-[0_0px_15px_rgba(197,160,89,0.2)]"
            />
          </motion.div>

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(197,160,89,0.3)] bg-[rgba(197,160,89,0.06)] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span className={`text-[#C5A059] text-xs font-medium tracking-wide ${isRtl ? 'font-ar' : 'font-en'}`}>
                {t.hero.badge}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className={`text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tight ${isRtl ? 'font-ar' : 'font-en'}`}>
              <span className="block text-white">{t.hero.headline1}</span>
              <span className="block gold-gradient mt-1">{t.hero.headline2}</span>
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className={`text-[#A0A0A0] text-base sm:text-lg max-w-2xl leading-relaxed mb-10 ${isRtl ? 'font-ar' : 'font-en'}`}
          >
            {t.hero.sub}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className={`flex flex-col sm:flex-row items-center gap-4 mb-16 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              variant="gold"
              onClick={() => onNavigate('services')}
            >
              <ShoppingBag size={18} />
              <span className={isRtl ? 'font-ar' : 'font-en'}>{t.hero.cta}</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              href={waLink}
            >
              <MessageCircle size={18} />
              <span className={isRtl ? 'font-ar' : 'font-en'}>{t.hero.ctaSub}</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 sm:gap-12">
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <motion.span
                  className="text-3xl sm:text-4xl font-black font-en gold-gradient"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {stat.value}
                </motion.span>
                <span className={`text-[#A0A0A0] text-xs sm:text-sm ${isRtl ? 'font-ar' : 'font-en'}`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#555]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
