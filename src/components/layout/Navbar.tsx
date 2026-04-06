'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-matte/90 backdrop-blur-md border-b border-border-subtle">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4 md:px-0">
            {/* Logo - larger */}
            <Link href="/" className="flex items-center">
              <img 
                src="/newlogo.svg" 
                alt="BasalX" 
                className="h-12 w-auto"
                style={{ display: 'block', maxWidth: 'none' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#workflow" className="text-sm text-bismuth-dark hover:text-bismuth transition-colors">How it Works</Link>
              <Link href="#trust" className="text-sm text-bismuth-dark hover:text-bismuth transition-colors">About</Link>
              <Link href="#contact" className="btn-primary text-sm group">
                Deploy Your Pod
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
          <div className="md:hidden border-t border-border-subtle p-4 space-y-4 bg-matte">
            <Link href="#workflow" className="block text-bismuth-dark hover:text-bismuth py-2" onClick={() => setIsOpen(false)}>How it Works</Link>
            <Link href="#trust" className="block text-bismuth-dark hover:text-bismuth py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#contact" className="btn-primary text-center block" onClick={() => setIsOpen(false)}>Deploy Your Pod</Link>
          </div>
        )}
      </nav>
      <div className="h-20" />
    </>
  )
}
