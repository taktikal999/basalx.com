'use client'

import { Quote } from 'lucide-react'

const testimonials = [
  { name: 'Sarah Chen', role: 'CTO, TechCorp', content: 'Basal transformed our infrastructure. Deployment time reduced by 85%.' },
  { name: 'Michael Torres', role: 'VP Engineering, StartupXYZ', content: 'The developer experience is unmatched. Zero to production in days, not weeks.' },
  { name: 'Emily Watson', role: 'Director of Innovation, Enterprise Co', content: 'Finally, infrastructure that scales without complexity. It just works.' },
]

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-border-default">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="label mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Built by teams who<br />
            <span className="text-text-secondary">demand excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px' }}>
              <Quote className="w-8 h-8 text-text-dim mb-4" />
              <p className="text-text-secondary leading-relaxed mb-6">"{t.content}"</p>
              <div>
                <p className="font-semibold text-text-primary">{t.name}</p>
                <p className="text-sm text-text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
