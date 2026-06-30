import { Headphones, Network, Radio, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'

const services = [
  { key: 'radio', icon: Radio },
  { key: 'network', icon: Network },
  { key: 'support', icon: Headphones },
  { key: 'consulting', icon: Settings },
] as const

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {t('services.label')}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map(({ key, icon: Icon }) => (
            <article
              key={key}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-lg sm:p-8"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/25 transition-transform group-hover:scale-105">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900 sm:text-xl">
                {t(`services.items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t(`services.items.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
