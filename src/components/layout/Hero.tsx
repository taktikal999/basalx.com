'use client'

import { ArrowRight, Zap, Code2, Brain, Shield, Rocket, Target, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark-900 to-secondary/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="text-primary text-sm font-medium">🚀 Now in Beta</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with
            <span className="gradient-text block">Intelligent Technology</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            BasalX delivers AI-powered software solutions that accelerate growth, 
            enhance efficiency, and drive innovation for enterprises worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-dark-500 rounded-lg text-white hover:border-primary transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">No credit card required • 14-day free trial</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10x</div>
            <p className="text-gray-400">Faster Development</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <p className="text-gray-400">Uptime Guarantee</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <p className="text-gray-400">Enterprise Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
