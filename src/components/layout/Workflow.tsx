'use client'

import { Search, FileText, Calendar, ArrowRight } from 'lucide-react'

const agents = [
  {
    icon: Search,
    title: 'The Scout',
    description: 'Constant monitoring of LinkedIn, 10-K filings, and news for buying signals.',
    capability: 'Research',
  },
  {
    icon: FileText,
    title: 'The Writer',
    description: 'Drafts 1-to-1 hyper-personalized outreach based on deep prospect research.',
    capability: 'Personalization',
  },
  {
    icon: Calendar,
    title: 'The Closer',
    description: 'Manages replies, handles objections, and places meetings on your calendar.',
    capability: 'Conversion',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding bg-charcoal relative">
      {/* Subtle blue glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26, 35, 126, 0.1) 0%, transparent 60%)' }} />
      
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label mb-3 animate-fade-up opacity-0 stagger-1">THE AGENTIC WORKFLOW</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up opacity-0 stagger-2">
            Three Agents. <span style={{ color: '#3d5afe' }}>One Goal: Growth.</span>
          </h2>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-surface border border-border-subtle hover:border-[#3d5afe]/30 transition-all duration-500 hover:translate-y-[-4px]"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold" style={{ color: 'rgba(61, 90, 254, 0.1)' }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-matte rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a237e]/20 transition-all duration-300">
                <agent.icon className="w-7 h-7" style={{ color: '#3d5afe' }} />
              </div>

              {/* Label */}
              <p className="label mb-2">{agent.capability}</p>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-white transition-colors">{agent.title}</h3>

              {/* Description */}
              <p className="text-bismuth-dark leading-relaxed group-hover:text-bismuth transition-colors">
                {agent.description}
              </p>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 mt-6 group-hover:translate-x-2 group-hover:text-[#3d5afe] transition-all duration-300" style={{ color: '#3d5afe', opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
