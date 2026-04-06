'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  Research: ['Papers', 'Basal-X v2.4', 'API Reference', 'Research Blog'],
  Company: ['About', 'Careers', 'Press', 'Partners'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-default">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-orange rounded-lg flex items-center justify-center">
                <span className="text-void font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-semibold">Basal</span>
            </Link>
            <p className="text-sm text-text-muted mb-6 max-w-xs">
              Building the foundation for next-generation AI systems.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" className="text-text-muted hover:text-text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-text-muted hover:text-text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-text-muted hover:text-text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="label mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border-subtle mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-dim">
            &copy; {currentYear} Basal. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-dim">
            <span>COORD: 34.05 / -118.24</span>
            <span>SERVER: US-WEST-1</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
