import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Lang, translations, products } from '../../data'
import ProductCard from './ProductCard'

interface ProductGridProps {
  lang: Lang
}

export default function ProductGrid({ lang }: ProductGridProps) {
  const t = translations[lang]
  const isRtl = lang === 'ar'
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filterOptions = [
    { key: 'all', label: t.services.filterAll },
    ...t.services.categories.map((cat, i) => ({
      key: cat,
      label: cat,
      enKey: translations.en.services.categories[i],
    })),
  ]

  const filtered = activeFilter === 'all'
    ? products
    : products.filter((p) =>
        isRtl ? p.category === activeFilter : p.categoryEn === activeFilter
      )

  return (
    <div>
      {/* Filter bar */}
      <div className={`flex flex-wrap gap-2 mb-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
        {filterOptions.map((opt) => (
          <motion.button
            key={opt.key}
            onClick={() => setActiveFilter(opt.key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 ${
              activeFilter === opt.key
                ? 'bg-[#C5A059] text-[#0E0E0E] shadow-[0_0_16px_rgba(197,160,89,0.4)]'
                : 'border border-[rgba(197,160,89,0.2)] text-[#A0A0A0] hover:text-white hover:border-[rgba(197,160,89,0.4)] bg-transparent'
            } ${isRtl ? 'font-ar' : 'font-en'}`}
            whileTap={{ scale: 0.96 }}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} lang={lang} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center text-[#555]"
        >
          <p className={`text-lg ${isRtl ? 'font-ar' : 'font-en'}`}>
            {isRtl ? 'لا توجد منتجات في هذه الفئة' : 'No products in this category'}
          </p>
        </motion.div>
      )}
    </div>
  )
}
