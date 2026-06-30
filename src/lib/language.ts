export const SUPPORTED_LANGUAGES = ['fa', 'en'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export function isSupportedLanguage(value: string): value is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(value as SupportedLanguage)
}

export function getDirection(language: SupportedLanguage): 'rtl' | 'ltr' {
  return language === 'fa' ? 'rtl' : 'ltr'
}

export function applyDocumentLanguage(language: SupportedLanguage) {
  const root = document.documentElement
  root.lang = language
  root.dir = getDirection(language)
}
