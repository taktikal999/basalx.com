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
    <section id="workflow" className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">THE AGENTIC WORKFLOW</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Three Agents. <span className="text-bismuth">One Goal: Growth.</span>
          </h2>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-surface border border-border-subtle hover:border-bismuth/30 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-bismuth/5 group-hover:text-bismuth/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-matte rounded-xl flex items-center justify-center mb-6 group-hover:bg-bismuth/10 transition-colors">
                <agent.icon className="w-7 h-7 text-bismuth" />
              </div>

              {/* Label */}
              <p className="label mb-2">{agent.capability}</p>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{agent.title}</h3>

              {/* Description */}
              <p className="text-bismuth-dark leading-relaxed">
                {agent.description}
              </p>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-bismuth/30 mt-6 group-hover:translate-x-2 group-hover:text-bismuth transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
