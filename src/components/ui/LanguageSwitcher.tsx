import { useTranslation } from 'react-i18next'

import { changeLanguage } from '@/i18n'
import { cn } from '@/lib/cn'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/lib/language'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation()
  const current = i18n.language.startsWith('en') ? 'en' : 'fa'

  return (
    <div
      className={cn(
        'inline-flex rounded-lg border border-slate-200 bg-white p-0.5',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => changeLanguage(lang as SupportedLanguage)}
          className={cn(
            'rounded-md px-2.5 py-1 text-xs font-medium transition-colors sm:px-3 sm:text-sm',
            current === lang
              ? 'bg-brand-600 text-white'
              : 'text-slate-600 hover:text-brand-700',
          )}
          aria-pressed={current === lang}
        >
          {t(`language.${lang}`)}
        </button>
      ))}
    </div>
  )
}
