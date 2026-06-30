import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { applyDocumentLanguage, isSupportedLanguage } from '@/lib/language'

export function useDocumentDirection() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const language = i18n.language
    if (isSupportedLanguage(language)) {
      applyDocumentLanguage(language)
    }
  }, [i18n.language])
}
