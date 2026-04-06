import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Basal — Intelligent Infrastructure for the Future',
  description: 'AI-powered tools and infrastructure primitives for next-generation applications. Build faster, scale globally, deploy instantly.',
  keywords: ['infrastructure', 'AI', 'developer tools', 'cloud', 'edge computing', 'serverless'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
