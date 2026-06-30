import { ArrowLeft, ArrowRight, Radio, Signal, Wifi } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function HeroSection() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('fa')
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -start-24 top-10 size-72 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="absolute -end-16 bottom-0 size-96 rounded-full bg-brand-500/20 blur-3xl" />
      </div>

      <Container className="relative grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-brand-100 sm:text-sm">
            <Signal className="size-3.5" aria-hidden />
            {t('hero.badge')}
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-brand-100 sm:text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="bg-white text-brand-800 hover:bg-brand-50"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('hero.ctaPrimary')}
              <ArrowIcon className="size-4" aria-hidden />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-square rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_65%)]" />
            <div className="relative flex h-full flex-col items-center justify-center gap-6">
              <div className="flex size-24 items-center justify-center rounded-full bg-brand-600 shadow-lg shadow-brand-600/40 sm:size-28">
                <Radio className="size-12 sm:size-14" aria-hidden />
              </div>
              <div className="grid w-full grid-cols-3 gap-3 sm:gap-4">
                {[Wifi, Signal, Radio].map((Icon, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4',
                      index === 1 && 'scale-105 border-accent-400/30 bg-accent-500/10',
                    )}
                  >
                    <Icon className="size-5 text-accent-400 sm:size-6" />
                    <span className="h-1.5 w-full rounded-full bg-white/20">
                      <span
                        className="block h-full rounded-full bg-accent-400"
                        style={{ width: `${60 + index * 15}%` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
