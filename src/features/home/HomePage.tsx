import { AboutSection } from '@/features/home/sections/AboutSection'
import { ContactSection } from '@/features/home/sections/ContactSection'
import { HeroSection } from '@/features/home/sections/HeroSection'
import { ServicesSection } from '@/features/home/sections/ServicesSection'
import { StatsSection } from '@/features/home/sections/StatsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
    </>
  )
}
