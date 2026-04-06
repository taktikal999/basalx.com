import Hero from '@/components/layout/Hero'
import Stats from '@/components/layout/Stats'
import Features from '@/components/layout/Features'
import Testimonials from '@/components/layout/Testimonials'
import CTA from '@/components/layout/CTA'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}
