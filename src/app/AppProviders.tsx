import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

import i18n from '@/i18n'

type AppProvidersProps = {
  children: React.ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Suspense fallback={null}>{children}</Suspense>
      </BrowserRouter>
    </I18nextProvider>
  )
}
