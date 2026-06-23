import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { type Lang, translations } from '../../data'

interface NavbarProps {
  lang: Lang
  onToggleLang: () => void
  activePage: string
  onNavigate: (page: string) => void
}

const sweepVariants = {
  initial: (dir: number) => ({
    opacity: 0,
    x: dir * 60,
    filter: 'blur(8px)',
  }),
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir * -60,
    filter: 'blur(8px)',
    transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] as const },
  }),
}

export default function Navbar({ lang, onToggleLang, activePage, onNavigate }: NavbarProps) {
  const t = translations[lang]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sweepDir, setSweepDir] = useState(1)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLangToggle = () => {
    setSweepDir(lang === 'ar' ? -1 : 1)
    onToggleLang()
  }

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'services', label: t.nav.services },
    { key: 'about', label: t.nav.about },
    { key: 'connect', label: t.nav.connect },
  ]

  return (
    <motion.nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0E0E0E]/95 backdrop-blur-xl border-b border-[rgba(197,160,89,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — Official company logo image */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="flex items-center cursor-pointer shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src="/images/logo.png"
              alt={lang === 'ar' ? 'شركة السكة' : 'Al Sakkah Co.'}
              className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0px_10px_rgba(255,255,255,0.1)]"
            />
          </motion.button>

          {/* Desktop Nav */}
          <AnimatePresence mode="wait" custom={sweepDir}>
            <motion.div
              key={lang + '-nav'}
              custom={sweepDir}
              variants={sweepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="hidden md:flex items-center gap-1"
            >
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer
                    ${activePage === item.key
                      ? 'text-[#C5A059]'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                    } ${lang === 'ar' ? 'font-ar' : 'font-en'}`}
                >
                  {item.label}
                  {activePage === item.key && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              onClick={handleLangToggle}
              className="relative px-3 py-1.5 rounded-lg border border-[rgba(197,160,89,0.3)] text-[#C5A059] text-sm font-semibold font-en overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t.nav.langToggle}</span>
              <div className="absolute inset-0 bg-[#C5A059]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {/* Mobile menu */}
            <button
              className="md:hidden text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#0E0E0E]/98 backdrop-blur-xl border-b border-[rgba(197,160,89,0.15)]"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.key}
                  initial={{ x: lang === 'ar' ? 20 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { onNavigate(item.key); setMenuOpen(false) }}
                  className={`text-start px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer
                    ${activePage === item.key
                      ? 'text-[#C5A059] bg-[#C5A059]/10'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                    } ${lang === 'ar' ? 'font-ar' : 'font-en'}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
