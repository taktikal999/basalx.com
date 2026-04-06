'use client'

import { ArrowRight, MessageCircle, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Light Leaks */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent-orange/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="label mb-3">GET STARTED</p>
        <h2 className="text-3xl md:text-5xl font-bold text-heading mb-6">
          Ready to build the<br />
          <span className="text-text-secondary">future?</span>
        </h2>
        <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
          Join thousands of developers building next-generation AI systems with Basal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-pill-accent text-base px-8 py-3">
            <span>Start building</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button className="btn-secondary text-base px-8 py-3">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Talk to sales</span>
          </button>
        </div>
      </div>
    </section>
  )
}
