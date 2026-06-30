import { Clock, FolderKanban, Users, CalendarDays } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'

const stats = [
  { key: 'projects', value: '150+', icon: FolderKanban },
  { key: 'clients', value: '80+', icon: Users },
  { key: 'years', value: '20+', icon: CalendarDays },
  { key: 'support', value: '24/7', icon: Clock },
] as const

export function StatsSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-brand-900 py-14 text-white sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map(({ key, value, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center sm:px-6"
            >
              <Icon className="mb-3 size-6 text-accent-400 sm:size-7" aria-hidden />
              <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">{value}</p>
              <p className="mt-2 text-xs text-brand-100 sm:text-sm">
                {t(`stats.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
