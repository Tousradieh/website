import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { useDocumentDirection } from '@/hooks/useDocumentDirection'

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  useDocumentDirection()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
