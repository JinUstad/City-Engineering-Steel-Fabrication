'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

type ThemeToggleProps = {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, resolvedTheme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className={`inline-flex items-center justify-center rounded-xl p-2 sm:p-2.5 border border-border/80 bg-secondary/50 text-muted-foreground opacity-70 transition-all ${className}`}
        aria-label="Toggle theme"
      >
        <span className="size-5" />
        {showLabel && <span className="ml-2 text-xs font-semibold">Theme</span>}
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-center rounded-xl p-2 sm:p-2.5 border border-border bg-card/80 hover:bg-accent/80 text-foreground transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_15px_rgba(255,85,0,0.25)] active:scale-95 cursor-pointer ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative size-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Light Mode) */}
        <Sun
          className={`size-5 text-amber-500 transition-all duration-500 ${
            isDark
              ? 'rotate-90 scale-0 opacity-0 absolute'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />

        {/* Moon Icon (Dark Mode) */}
        <Moon
          className={`size-5 text-amber-400 transition-all duration-500 ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0 absolute'
          }`}
        />
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-semibold tracking-wide">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  )
}
