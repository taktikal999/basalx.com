'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const megaMenuData = {
  Research: {
    primary: [
      { title: 'Basal Research Labs', description: 'Advanced AI research initiatives', href: '/research' },
      { title: 'Model Architecture', description: 'Next-generation neural designs', href: '/research/architecture' },
      { title: 'Safety & Alignment', description: 'Ensuring beneficial AI systems', href: '/research/safety' },
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
      { title: 'Enterprise', description: 'Custom AI solutions at scale', href: '/solutions/enterprise' },
      { title: 'Developer Platform', description: 'Build with Basal APIs', href: '/solutions/developer' },
      { title: 'Edge Computing', description: 'Low-latency global deployment', href: '/solutions/edge' },
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
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMouseOverMenu, setIsMouseOverMenu] = useState(false)

  const navLinks = [
    { label: 'Research', href: '/research' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Team', href: '/team' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ]

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #222222'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Far Left */}
            <Link href="/" className="flex items-center z-50">
              <img 
                src="/logo.png" 
                alt="Basalx Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Center Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {Object.keys(megaMenuData).map((label) => (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button 
                    className={`flex items-center space-x-1 px-4 py-2 text-sm transition-all duration-200 ${
                      pathname.startsWith(`/${label.toLowerCase()}`) || (label === 'Research' && pathname?.startsWith('/research'))
                        ? 'text-white border-b border-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {navLinks.filter(l => !Object.keys(megaMenuData).includes(l.label)).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-white border-b border-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <Link 
                href="/login" 
                className="hidden md:block text-sm text-white/70 hover:text-white transition-all duration-200"
              >
                Log in
              </Link>
              <Link 
                href="/contact" 
                className="text-sm px-5 py-2.5 rounded-full font-medium text-black bg-white hover:bg-gray-100 transition-all duration-200"
                style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu Bridge - Invisible padding to bridge gap */}
      <div className="h-16" />

      {/* Mega Menu Overlay - Deep Black with bridge */}
      {activeMenu && (
        <div
          className="fixed left-0 right-0 top-16 z-40"
          style={{ backgroundColor: '#000000' }}
          onMouseEnter={() => {
            setIsMouseOverMenu(true)
            setActiveMenu(activeMenu)
          }}
          onMouseLeave={() => {
            setIsMouseOverMenu(false)
            setTimeout(() => {
              if (!isMouseOverMenu) setActiveMenu(null)
            }, 150)
          }}
        >
          {/* Bridge - Transparent padding between nav and menu */}
          <div className="h-3" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8" style={{ pointerEvents: 'auto' }}>
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Primary Links */}
              <div className="col-span-7 grid grid-cols-3 gap-2">
                {megaMenuData[activeMenu as keyof typeof megaMenuData].primary.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group p-4 -mx-4 rounded-lg hover:bg-[#111111] transition-all duration-150"
                    style={{ pointerEvents: 'auto' }}
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
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-4">Resources</p>
                <div className="grid grid-cols-2 gap-1">
                  {megaMenuData[activeMenu as keyof typeof megaMenuData].secondary.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-center justify-between text-sm text-[#666666] hover:text-white py-2 border-b border-[#1a1a1a] hover:border-[#333333] transition-all duration-150"
                      style={{ pointerEvents: 'auto' }}
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
