import Hero from '@/components/layout/Hero'
import Features from '@/components/layout/Features'
import Stats from '@/components/layout/Stats'
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
