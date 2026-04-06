'use client'

import { Zap, Code2, Brain, Shield, Rocket, Target, Users, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times. Built on modern infrastructure for maximum speed.'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Leverage machine learning and AI to automate processes, gain insights, and make smarter decisions.'
  },
  {
    icon: Code2,
    title: 'Custom Solutions',
    description: 'Tailored software development that aligns perfectly with your business requirements and goals.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and advanced security protocols to protect your data.'
  },
  {
    icon: Rocket,
    title: 'Scalable Architecture',
    description: 'Grow without limits. Our infrastructure scales automatically with your business needs.'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Focus on measurable outcomes. We track KPIs and optimize for maximum ROI.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Powerful tools for seamless teamwork, communication, and project management.'
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'GDPR, HIPAA, and industry-specific compliance built into every solution.'
  }
]

export default function Features() {
  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="badge mb-4">CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Why Choose BasalX</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful features designed to modernize your technology stack and drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
