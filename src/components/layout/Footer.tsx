'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img 
              src="/newlogo.svg" 
              alt="BasalX" 
              className="h-10 w-auto"
              style={{ display: 'block', maxWidth: 'none' }} 
            />
            <span className="text-bismuth-dark text-sm">© {currentYear} BasalX</span>
          </div>

          {/* Tagline */}
          <p className="text-bismuth-dark text-sm">
            Infrastructure for the Agentic Era
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-bismuth-dark text-sm hover:text-bismuth transition-colors">Privacy</Link>
            <Link href="/terms" className="text-bismuth-dark text-sm hover:text-bismuth transition-colors">Terms</Link>
            <Link href="/contact" className="text-bismuth-dark text-sm hover:text-bismuth transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
