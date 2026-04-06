'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 h-16">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo - 32px height */}
            <Link href="/" className="flex items-center">
              <img 
                src="/newlogo.svg" 
                alt="BasalX" 
                className="h-8 w-auto"
                style={{ display: 'block' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-sm text-bismuth-dark hover:text-bismuth transition-colors">
                Services
              </Link>
              <Link href="#case-studies" className="text-sm text-bismuth-dark hover:text-bismuth transition-colors">
                Case Studies
              </Link>
              <Link href="#contact" className="btn-primary text-sm">
                Deploy Pod
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2 text-bismuth" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border-subtle p-4 space-y-4 bg-charcoal">
            <Link href="#services" className="block text-bismuth-dark hover:text-bismuth py-2" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#case-studies" className="block text-bismuth-dark hover:text-bismuth py-2" onClick={() => setIsOpen(false)}>Case Studies</Link>
            <Link href="#contact" className="btn-primary text-center block" onClick={() => setIsOpen(false)}>Deploy Pod</Link>
          </div>
        )}
      </nav>
      <div className="h-16" />
    </>
  )
}
