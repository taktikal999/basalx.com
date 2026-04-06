'use client'

import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow-accent opacity-30" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build the
            <br />
            <span className="gradient-text">next generation?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join thousands of developers building the future with Basal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-base px-8 py-4">
              <span>Start building</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-secondary text-base px-8 py-4 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Talk to sales</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
