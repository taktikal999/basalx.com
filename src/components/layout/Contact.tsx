'use client'

import { Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    dealSize: '',
    industry: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent-green" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Request Received</h2>
            <p className="text-bismuth-dark">
              We'll run our Scout Agent on your prospects and be in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="label mb-3">GET STARTED</p>
            <h2 className="section-header">
              Let's deploy<br />
              <span className="text-accent-green">your pod</span>
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Deal Size */}
            <div>
              <label className="block text-sm font-medium mb-2">What is your average deal size?</label>
              <select 
                className="select-field"
                value={formData.dealSize}
                onChange={(e) => setFormData({...formData, dealSize: e.target.value})}
                required
              >
                <option value="">Select deal size</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium mb-2">Target Industry</label>
              <select 
                className="select-field"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                required
              >
                <option value="">Select industry</option>
                <option value="saas">SaaS / Enterprise Software</option>
                <option value="fintech">Fintech</option>
                <option value="healthcare">Healthcare / HealthTech</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="professional">Professional Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Work Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="input-field"
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full justify-center text-base">
              Run Free Audit
              <Send className="w-4 h-4 ml-2" />
            </button>

            <p className="text-center text-xs text-bismuth-dark">
              No credit card required. No sales calls. Just data.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
