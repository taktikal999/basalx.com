'use client'

import { ArrowRight, Sparkles, Zap, Shield, Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute inset-0 bg-glow-accent" />
      </div>

      {/* Aurora Effect */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-aurora" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[100px] animate-aurora" style={{ animationDelay: '-4s' }} />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border-subtle mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Now in private beta</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Build the future with
            <br />
            <span className="gradient-text">intelligent infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Basal provides the foundation for next-generation applications. 
            AI-powered tools that scale with your ambition.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button className="btn-primary text-base px-8 py-4">
              <span>Start building</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-secondary text-base px-8 py-4">
              View documentation
            </button>
          </div>

          {/* Trust Signals - Logo Cloud */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by forward-thinking teams</p>
            <div className="logo-cloud">
              <span className="logo-item">Stripe</span>
              <span className="logo-item">Vercel</span>
              <span className="logo-item">Linear</span>
              <span className="logo-item">Notion</span>
              <span className="logo-item">Figma</span>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border-subtle">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Lightning fast</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border-subtle">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">AI-powered</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border-subtle">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Enterprise secure</span>
          </div>
        </div>
      </div>
    </section>
  )
}
