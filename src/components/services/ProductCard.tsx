import { motion } from 'framer-motion'
import { MessageCircle, Tag } from 'lucide-react'
import { type Product, type Lang, translations, WHATSAPP_NUMBER } from '../../data'

interface ProductCardProps {
  product: Product
  lang: Lang
  index: number
}

export default function ProductCard({ product, lang, index }: ProductCardProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'

  const name = isRtl ? product.nameAr : product.nameEn
  const price = isRtl ? product.priceAr : product.priceEn
  const badge = isRtl ? product.badge : product.badgeEn
  const specs = isRtl ? product.specs : product.specsEn

  const waMessage = encodeURIComponent(`${t.services.waMsg}${name} - ${price}`)
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className={`group relative rounded-2xl overflow-hidden card-glass hover:border-[rgba(197,160,89,0.4)] transition-all duration-300 flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] transition-all duration-500 ease-out" />

      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#1C1C1C] to-[#141414] flex items-center justify-center overflow-hidden p-6 group-hover:bg-[#1f1f1f] transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/8 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        
        <img 
          src={product.imageUrl} 
          alt={name}
          className="object-contain w-full h-full relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:drop-shadow-[0_10px_15px_rgba(212,175,55,0.15)]"
        />

        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 z-20 ${isRtl ? 'right-3' : 'left-3'} px-2.5 py-1 rounded-md bg-[#C5A059] text-[#0E0E0E] text-xs font-bold flex items-center gap-1 ${isRtl ? 'font-ar' : 'font-en'}`}>
            <Tag size={10} />
            {badge}
          </div>
        )}

        {/* Featured glow */}
        {product.featured && (
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#C5A059]/10 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category pill */}
        <span className={`text-[10px] font-semibold text-[#C5A059]/70 uppercase tracking-widest mb-2 ${isRtl ? 'font-ar' : 'font-en'}`}>
          {isRtl ? product.category : product.categoryEn}
        </span>

        {/* Name */}
        <h3 className={`text-white font-bold text-lg leading-tight mb-3 ${isRtl ? 'font-ar' : 'font-en'}`}>
          {name}
        </h3>

        {/* Specs */}
        <div className={`flex flex-wrap gap-1.5 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {specs.map((spec, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[#A0A0A0] text-xs font-en"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price + CTA */}
        <div className={`flex items-center justify-between gap-3 mt-auto pt-4 border-t border-white/5 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#555] uppercase tracking-wide font-en">
              {isRtl ? 'السعر' : 'Price'}
            </span>
            <span className="text-xl font-black gold-gradient font-en leading-tight">
              {price}
            </span>
          </div>

          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whatsapp-btn text-sm font-bold shrink-0 ${isRtl ? 'font-ar flex-row-reverse' : 'font-en'}`}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle size={15} />
            <span>{t.services.orderBtn}</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

