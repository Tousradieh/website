import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import {
  applyDocumentLanguage,
  isSupportedLanguage,
  type SupportedLanguage,
} from '@/lib/language'

import en from './locales/en.json'
import fa from './locales/fa.json'

const resources = {
  fa: { translation: fa },
  en: { translation: en },
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fa',
    supportedLngs: ['fa', 'en'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (language) => {
  if (isSupportedLanguage(language)) {
    applyDocumentLanguage(language)
  }
})

const initialLanguage = i18n.language
if (isSupportedLanguage(initialLanguage)) {
  applyDocumentLanguage(initialLanguage)
}

export default i18n

export function changeLanguage(language: SupportedLanguage) {
  void i18n.changeLanguage(language)
}
