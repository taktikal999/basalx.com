import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'BasalX — The Foundational Layer of B2B Revenue',
  description: 'Deploy autonomous multi-agent pods that research, personalize, and book high-ticket meetings while you sleep.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-jet text-bismuth">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
