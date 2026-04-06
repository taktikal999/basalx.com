'use client'

import { Zap, Brain, Shield, Sparkles, Code2, Globe, Database, Lock, ArrowUpRight } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-millisecond response times powered by edge infrastructure.',
    size: 'bento-large',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Native AI capabilities built into every layer of the platform.',
    size: '',
  },
  {
    icon: Shield,
    title: 'Zero Trust Security',
    description: 'Enterprise-grade security with end-to-end encryption.',
    size: '',
  },
  {
    icon: Code2,
    title: 'Developer First',
    description: 'APIs designed by developers, for developers.',
    size: '',
  },
  {
    icon: Globe,
    title: 'Global Edge',
    description: 'Deploy worldwide with 300+ edge locations.',
    size: '',
  },
  {
    icon: Database,
    title: 'Serverless DB',
    description: 'Fully managed database with automatic scaling.',
    size: '',
  },
  {
    icon: Lock,
    title: 'SOC 2 Compliant',
    description: 'Security certifications that matter.',
    size: '',
  },
  {
    icon: Sparkles,
    title: 'Auto Optimization',
    description: 'ML-powered performance tuning.',
    size: '',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">build at scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Premium infrastructure primitives for modern applications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bento-card group ${feature.size}`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
