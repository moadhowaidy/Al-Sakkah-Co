import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { type Lang } from './data'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Connect from './pages/Connect'

const pageVariants = {
  initial: (dir: number) => ({
    opacity: 0,
    x: dir * 40,
    filter: 'blur(8px)',
  }),
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir * -40,
    filter: 'blur(6px)',
    transition: { duration: 0.28, ease: [0.55, 0, 1, 0.45] },
  }),
}

const pages = ['home', 'services', 'about', 'connect']

export default function App() {
  const [lang, setLang] = useState<Lang>('ar')
  const [activePage, setActivePage] = useState('home')
  const [prevPage, setPrevPage] = useState('home')
  const [sweepDir, setSweepDir] = useState(1)

  // Sync dir attribute on root html element for RTL
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const handleNavigate = (page: string) => {
    const prevIdx = pages.indexOf(activePage)
    const nextIdx = pages.indexOf(page)
    setSweepDir(nextIdx >= prevIdx ? 1 : -1)
    setPrevPage(activePage)
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleToggleLang = () => {
    setSweepDir(lang === 'ar' ? 1 : -1)
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  const renderPage = () => {
    switch (activePage) {
      case 'home':     return <Home lang={lang} onNavigate={handleNavigate} />
      case 'services': return <Services lang={lang} />
      case 'about':    return <AboutUs lang={lang} />
      case 'connect':  return <Connect lang={lang} />
      default:         return <Home lang={lang} onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-dvh bg-[#0E0E0E] flex flex-col">
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Language sweep wrapper — mirrors layout on lang change */}
      <AnimatePresence mode="wait" custom={sweepDir}>
        <motion.div
          key={lang + '-' + activePage}
          custom={sweepDir}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1 flex flex-col"
        >
          {renderPage()}
          <Footer lang={lang} onNavigate={handleNavigate} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
