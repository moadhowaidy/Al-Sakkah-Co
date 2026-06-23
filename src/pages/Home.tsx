import { type Lang } from '../data'
import Hero from '../components/home/Hero'
import QuickActions from '../components/home/QuickActions'

interface HomeProps {
  lang: Lang
  onNavigate: (page: string) => void
}

export default function Home({ lang, onNavigate }: HomeProps) {
  return (
    <main>
      <Hero lang={lang} onNavigate={onNavigate} />
      <QuickActions lang={lang} />
    </main>
  )
}
