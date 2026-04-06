'use client'

import { Radar, Gem, Calendar, ArrowRight } from 'lucide-react'

const capabilities = [
  {
    icon: Radar,
    title: 'The Scout',
    subtitle: 'Signal-based prospecting',
    description: 'Constant monitoring of LinkedIn, 10-K filings, and news for buying signals. AI identifies decision-makers the moment they enter-market.',
  },
  {
    icon: Gem,
    title: 'The Strategist',
    subtitle: 'Context-aware personalization',
    description: 'Deep prospect research powers hyper-personalized outreach. Every message references specific triggers and timing.',
  },
  {
    icon: Calendar,
    title: 'The Closer',
    subtitle: 'Autonomous meeting booking',
    description: 'Manages replies, handles objections, and places meetings on your calendar. 24/7 autonomous operation.',
  },
]

export default function Capabilities() {
  return (
    <section id="services" className="section-padding bg-charcoal relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 gradient-subtle pointer-events-none" />
      
      {/* Corner glow */}
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(0, 255, 65, 0.04) 0%, transparent 50%)' }} 
      />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">THE AGENTIC SYSTEM</p>
          <h2 className="section-header">
            Three Agents.<br />
            <span className="text-accent-green">One Goal: Revenue.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <div 
              key={index}
              className="bento-card group relative overflow-hidden"
            >
              {/* Subtle inner glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(0, 255, 65, 0.05) 0%, transparent 50%)' }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-green/10 transition-colors">
                  <cap.icon className="w-7 h-7 text-accent-green" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1">{cap.title}</h3>
                <p className="text-xs text-accent-green mb-4">{cap.subtitle}</p>

                {/* Description */}
                <p className="text-bismuth-dark text-sm leading-relaxed mb-4">
                  {cap.description}
                </p>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-bismuth-dark group-hover:text-accent-green group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
