import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/layout/Hero'
import Capabilities from '@/components/layout/Capabilities'
import Trust from '@/components/layout/Trust'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'BasalX — The Foundational Layer of B2B Revenue',
  description: 'Deploy autonomous multi-agent pods that research, personalize, and book high-ticket meetings while you sleep.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-jet">
      <Navbar />
      <Hero />
      <Capabilities />
      <Trust />
      <Contact />
      <Footer />
    </div>
  )
}
