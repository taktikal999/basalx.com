'use client'

import { ArrowRight, Search, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thanks! We\'ll run our Scout Agent on your prospects and be in touch.')
  }

  return (
    <section id="contact" className="section-padding bg-charcoal relative">
      {/* Subtle blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none animate-glow-pulse" style={{ background: 'radial-gradient(circle, rgba(26, 35, 126, 0.08) 0%, transparent 50%)' }} />
      
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="label mb-3 animate-fade-up opacity-0 stagger-1">GET STARTED</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-up opacity-0 stagger-2">
              Request an <span style={{ color: '#3d5afe' }}>Agentic Audit</span>
            </h2>
            <p className="text-bismuth-dark text-lg animate-fade-up opacity-0 stagger-3">
              We will run our "Scout Agent" on your top 10 prospects and send you the results for free.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up opacity-0 stagger-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bismuth-dark" />
                <input
                  type="email"
                  placeholder="Enter your top 10 prospect domains..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-surface border border-border-subtle rounded-lg text-bismuth placeholder-bismuth-dark focus:border-[#3d5afe] focus:outline-none transition-colors"
                  required
                />
              </div>
              <button type="submit" className="btn-primary whitespace-nowrap group">
                Run Free Audit
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          {/* Trust indicator */}
          <p className="text-center text-xs text-bismuth-dark mt-6 animate-fade-up opacity-0 stagger-5">
            No credit card required. No sales calls. Just data.
          </p>
        </div>
      </div>
    </section>
  )
}
