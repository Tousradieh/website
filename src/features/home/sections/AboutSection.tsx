import { Award, Lightbulb, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'

const points = [
  { key: 'experience', icon: Award },
  { key: 'quality', icon: ShieldCheck },
  { key: 'innovation', icon: Lightbulb },
] as const

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {t('about.label')}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t('about.description')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ key, icon: Icon }) => (
            <article
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="size-5" aria-hidden />
              </span>
              <p className="mt-4 text-base font-semibold text-slate-900">
                {t(`about.points.${key}`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
