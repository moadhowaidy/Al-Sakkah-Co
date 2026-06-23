import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'gold' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  onClick,
  href,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    gold: 'bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-[#0E0E0E] hover:shadow-[0_0_24px_rgba(197,160,89,0.5)] hover:-translate-y-0.5',
    outline:
      'border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 hover:shadow-[0_0_16px_rgba(197,160,89,0.2)]',
    ghost: 'text-[#A0A0A0] hover:text-white hover:bg-white/5',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
