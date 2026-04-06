import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Basal — Foundational Intelligence for the Next Era',
  description: 'AI infrastructure for next-generation applications. Build faster, scale globally, deploy instantly.',
  keywords: ['AI', 'infrastructure', 'machine learning', 'edge computing', 'developer tools'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-void text-text-primary">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
