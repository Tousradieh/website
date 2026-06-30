import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '@/app/AppLayout'
import { HomePage } from '@/features/home/HomePage'

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        }
      />
    </Routes>
  )
}
