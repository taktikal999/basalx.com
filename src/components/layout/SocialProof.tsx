'use client'

import { Quote } from 'lucide-react'

export default function SocialProof() {
  return (
    <section id="trust" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/newlogo.svg" alt="BasalX" className="h-12 w-auto mx-auto mb-8 opacity-40 animate-fade-in" style={{ display: 'block', maxWidth: 'none' }} />
          <Quote className="w-12 h-12 text-bismuth/30 mx-auto mb-8 animate-fade-up opacity-0 stagger-1" />
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 animate-fade-up opacity-0 stagger-2">
            "BasalX is built on the philosophy that the best AI feels human. 
            We don't spam. We engage."
          </p>
          <div className="pt-8 border-t border-border-subtle animate-fade-up opacity-0 stagger-3">
            <p className="text-lg font-semibold text-bismuth">BasalX</p>
            <p className="text-sm text-bismuth-dark mt-1">Infrastructure for the Agentic Era</p>
          </div>
        </div>
      </div>
    </section>
  )
}
