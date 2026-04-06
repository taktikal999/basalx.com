'use client'

import { Shield, CheckCircle, Lock, Scale } from 'lucide-react'

const complianceItems = [
  {
    icon: Shield,
    title: 'SOC2 Ready',
    description: 'Enterprise-grade security controls with audit-ready compliance infrastructure.',
  },
  {
    icon: Scale,
    title: 'EU AI Act Compliant',
    description: 'Fully aligned with European AI regulations. Transparency and governance built-in.',
  },
  {
    icon: Lock,
    title: 'Human-in-the-Loop',
    description: 'Every critical decision reviewed by humans. AI augments, never replaces human judgment.',
  },
  {
    icon: CheckCircle,
    title: 'GDPR Compliant',
    description: 'Data privacy by design. Your prospects data is never used to train our models.',
  },
]

export default function Trust() {
  return (
    <section className="section-padding bg-jet relative">
      {/* Subtle glow */}
      <div 
        className="absolute top-1/2 left-0 w-[400px] h-[400px] pointer-events-none -translate-y-1/2" 
        style={{ background: 'radial-gradient(circle, rgba(0, 255, 65, 0.03) 0%, transparent 50%)' }} 
      />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">INSTITUTIONAL GRADE</p>
          <h2 className="section-header">
            Infrastructure for<br />
            <span className="text-bismuth">Compliance</span>
          </h2>
          <p className="text-bismuth-dark mt-6 max-w-2xl mx-auto">
            The enterprise choice for $5k+/month B2B deals. Our compliance-first approach 
            removes friction from procurement.
          </p>
        </div>

        {/* Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceItems.map((item, index) => (
            <div 
              key={index}
              className="compliance-box group relative overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at center, rgba(0, 255, 65, 0.03) 0%, transparent 60%)' }}
              />
              
              <div className="relative z-10">
                <div className="compliance-icon mb-4 group-hover:bg-accent-green/20 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-bismuth-dark text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-border-subtle">
          {['SOC2', 'GDPR', 'EU AI Act', 'ISO 27001'].map((badge, index) => (
            <div 
              key={index}
              className="px-4 py-2 border border-border-default rounded text-xs text-bismuth-dark font-mono"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
