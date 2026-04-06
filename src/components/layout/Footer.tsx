'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/newlogo.svg" 
              alt="BasalX" 
              className="h-6 w-auto"
              style={{ display: 'block' }} 
            />
          </Link>

          {/* Tagline */}
          <p className="text-bismuth-dark text-sm">
            © {currentYear} BasalX. Built for the Agentic Era.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-bismuth-dark text-sm hover:text-bismuth transition-colors">Privacy</Link>
            <Link href="/terms" className="text-bismuth-dark text-sm hover:text-bismuth transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
