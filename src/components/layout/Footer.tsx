import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-brand-950 text-slate-300">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">
            {t('footer.company')}
          </p>
          <p className="mt-1 max-w-md text-sm text-slate-400">
            {t('footer.tagline')}
          </p>
        </div>
        <p className="text-sm text-slate-400">
          © {year} {t('footer.company')}. {t('footer.rights')}
        </p>
      </Container>
    </footer>
  )
}
