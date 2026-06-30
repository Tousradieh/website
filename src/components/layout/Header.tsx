import { Menu, Radio, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { cn } from '@/lib/cn'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'contact', href: '#contact' },
] as const

export function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-brand-900"
          onClick={closeMenu}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/30">
            <Radio className="size-5" aria-hidden />
          </span>
          <span className="text-base font-bold sm:text-lg">
            {t('footer.company')}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          'border-t border-slate-200 bg-white md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              onClick={closeMenu}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </Container>
      </div>
    </header>
  )
}
