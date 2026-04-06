'use client'

import { Zap, Brain, Shield, Globe, Database, Code2, Lock, Cloud } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Sub-millisecond response times at the edge.' },
  { icon: Brain, title: 'Native AI', description: 'Built-in inference engine for AI models.' },
  { icon: Shield, title: 'Zero Trust', description: 'Enterprise-grade security model.' },
  { icon: Globe, title: 'Global Edge', description: '300+ locations worldwide.' },
  { icon: Database, title: 'Serverless DB', description: 'Fully managed, auto-scaling database.' },
  { icon: Code2, title: 'Developer First', description: 'APIs designed for developers.' },
  { icon: Lock, title: 'SOC 2', description: 'Compliance certifications included.' },
  { icon: Cloud, title: 'Cloud Native', description: 'Kubernetes-native deployment.' },
]

export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="label mb-2">CAPABILITIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Infrastructure for the<br />
            <span className="text-text-secondary">next generation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="group" style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px' }}>
              <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-blue/10 transition-colors">
                <feature.icon className="w-5 h-5 text-text-secondary group-hover:text-accent-blue transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
