import Hero from '@/components/layout/Hero'
import Features from '@/components/layout/Features'
import Stats from '@/components/layout/Stats'
import Testimonials from '@/components/layout/Testimonials'
import CTA from '@/components/layout/CTA'

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  )
}
