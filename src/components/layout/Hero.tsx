'use client'

import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Deep Blue Glow - subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26, 35, 126, 0.08) 0%, transparent 60%)' }} />

      <div className="relative z-10 container-custom pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Mark */}
          <div className="flex justify-center mb-8">
            <img src="/newlogo.svg" alt="BasalX" className="h-12 w-auto" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border-subtle mb-8">
            <Zap className="w-4 h-4 text-bismuth" />
            <span className="text-xs text-bismuth-dark">Autonomous Agentic Infrastructure</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            The Foundational Layer of<br />
            <span className="text-bismuth">B2B Revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-bismuth-dark max-w-2xl mx-auto mb-10 leading-relaxed">
            We deploy autonomous multi-agent pods that research, personalize, and book 
            high-ticket meetings while you sleep.
          </p>

          {/* CTA */}
          <button className="btn-primary text-lg">
            Deploy Your Pod
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border-subtle">
            <div>
              <div className="text-3xl font-bold text-bismuth">500+</div>
              <div className="text-xs text-bismuth-dark mt-1">Active Pods</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bismuth">$2.4B</div>
              <div className="text-xs text-bismuth-dark mt-1">Pipeline Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bismuth">98%</div>
              <div className="text-xs text-bismuth-dark mt-1">Meeting Show Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
