'use client'

import { Play, FileText, ArrowRight, Zap, Lock, Cpu, Cloud } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Light Leaks */}
      <div className="light-leak-indigo" />
      <div className="light-leak-crimson" />

      {/* Void Grid - Fixed Background */}
      <div className="absolute inset-0 void-grid opacity-30" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Metadata */}
        <div className="flex justify-between items-center mb-8 metadata">
          <span>COORD: 34.05 / -118.24</span>
          <span>SYSTEM_STATUS: NOMINAL</span>
        </div>

        {/* Stargate Frame */}
        <div className="stargate-frame aspect-[16/9] max-h-[600px]">
          {/* Particle Visual - Blue/Red Gradient */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Blue Particles - #00d4ff */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={`blue-${i}`}
                  className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.8 + 0.2,
                    boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(0, 212, 255, 0.8)`,
                    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * -20}s`,
                  }}
                />
              ))}
            </div>

            {/* Red/Crimson Particles - Match Logo Red */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={`red-${i}`}
                  className="absolute w-1.5 h-1.5 bg-[#ff3333] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.7 + 0.3,
                    boxShadow: `0 0 ${Math.random() * 12 + 6}px rgba(255, 51, 51, 0.8)`,
                    animation: `float ${Math.random() * 12 + 12}s linear infinite`,
                    animationDelay: `${Math.random() * -24}s`,
                  }}
                />
              ))}
            </div>

            {/* Central Glow - Blue/Red Blend */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00d4ff]/20 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#ff3333]/30 rounded-full blur-[60px]" />
          </div>

          {/* Typography Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-void via-void/90 to-transparent">
            <p className="label mb-3">FOUNDATIONAL INTELLIGENCE</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-heading mb-4 leading-tight">
              Foundational Intelligence<br />
              <span className="text-text-secondary">for the Next Era</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="btn-pill-accent">
                <Play className="w-4 h-4 mr-2" />
                Watch Presentation
              </button>
              <button className="btn-secondary group">
                <FileText className="w-4 h-4 mr-2" />
                Read Whitepaper
                <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border-subtle">
            <Zap className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-text-secondary">Sub-millisecond latency</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border-subtle">
            <Lock className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-text-secondary">Zero-trust security</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border-subtle">
            <Cpu className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-text-secondary">Native AI inference</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border-subtle">
            <Cloud className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-text-secondary">300+ edge locations</span>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <p className="label mb-6">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
            <span className="text-lg font-medium">OpenAI</span>
            <span className="text-lg font-medium">Anthropic</span>
            <span className="text-lg font-medium">Google DeepMind</span>
            <span className="text-lg font-medium">Microsoft</span>
            <span className="text-lg font-medium">Meta AI</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-border-bright flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-text-muted rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
