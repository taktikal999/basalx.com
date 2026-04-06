'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Play, FileText, ArrowRight } from 'lucide-react'

const megaMenuData = {
  Research: {
    primary: [
      { title: 'Basal Research Labs', description: 'Advanced AI research initiatives' },
      { title: 'Model Architecture', description: 'Next-generation neural designs' },
      { title: 'Safety & Alignment', description: 'Ensuring beneficial AI systems' },
    ],
    secondary: [
      { title: 'Papers', href: '/papers' },
      { title: 'Basal-X v2.4', href: '/docs/v2.4' },
      { title: 'Basal-X v2.3', href: '/docs/v2.3' },
      { title: 'API Reference', href: '/docs/api' },
      { title: 'Research Blog', href: '/blog/research' },
    ],
  },
  Solutions: {
    primary: [
      { title: 'Enterprise', description: 'Custom AI solutions at scale' },
      { title: 'Developer Platform', description: 'Build with Basal APIs' },
      { title: 'Edge Computing', description: 'Low-latency global deployment' },
    ],
    secondary: [
      { title: 'Documentation', href: '/docs' },
      { title: 'SDKs', href: '/docs/sdks' },
      { title: 'Status', href: '/status' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Community', href: '/community' },
    ],
  },
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <>
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Far Left - Absolute Path */}
            <Link href="/" className="flex items-center">
              <img 
                src="/home/fred/basalx.com/logo.png" 
                alt="Basal" 
                className="h-12 w-auto object-contain"
                style={{ background: 'transparent' }}
              />
            </Link>

            {/* Center Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {Object.entries(megaMenuData).map(([label, data]) => (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 px-4 py-2 text-sm text-white/80 hover:text-white hover:opacity-100 transition-all duration-200">
                    <span>{label}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <Link href="/about" className="px-4 py-2 text-sm text-white/80 hover:text-white hover:opacity-100 transition-all duration-200">
                About
              </Link>
              <Link href="/pricing" className="px-4 py-2 text-sm text-white/80 hover:text-white hover:opacity-100 transition-all duration-200">
                Pricing
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <Link href="/login" className="hidden md:block text-sm text-white/80 hover:text-white hover:opacity-100 transition-all duration-200">
                Log in
              </Link>
              <Link href="/contact" className="btn-pill-accent text-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu Overlay - Deep Black */}
      {activeMenu && (
        <div
          className="mega-menu"
          style={{ backgroundColor: '#000000' }}
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Primary Links */}
              <div className="col-span-7 grid grid-cols-3 gap-6">
                {megaMenuData[activeMenu as keyof typeof megaMenuData].primary.map((item, i) => (
                  <Link
                    key={i}
                    href={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group p-4 -mx-4 rounded-lg hover:bg-[#111111] transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666666]">{item.description}</p>
                  </Link>
                ))}
              </div>

              {/* Right Column - Secondary Links */}
              <div className="col-span-5 border-l border-[#1a1a1a] pl-8">
                <p className="label mb-4">Resources</p>
                <div className="grid grid-cols-2 gap-3">
                  {megaMenuData[activeMenu as keyof typeof megaMenuData].secondary.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-center justify-between text-sm text-white/60 hover:text-white py-2 border-b border-[#1a1a1a] hover:border-[#333333] transition-colors"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  )
}
