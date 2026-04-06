'use client'

import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-900 to-secondary/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's build something extraordinary together. Our team of experts is ready to help 
            you leverage the power of AI and modern software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-dark-500 rounded-lg text-white hover:border-primary transition-colors text-lg flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Talk to Sales</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="glass-card p-6 flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Email Us</h3>
                <p className="text-gray-400 text-sm">hello@basalx.com</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Call Us</h3>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xs font-bold text-white">L</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-sm">linkedin.com/company/basalx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
