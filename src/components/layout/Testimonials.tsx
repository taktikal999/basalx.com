'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechCorp',
    content: 'BasalX transformed our entire infrastructure. The AI-driven solutions they implemented increased our efficiency by 300%.',
    rating: 5
  },
  {
    name: 'Michael Torres',
    role: 'VP Engineering, StartupXYZ',
    content: 'The team at BasalX is incredibly talented. They delivered a complex platform in half the time we expected.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Director of Innovation, Enterprise Co',
    content: 'Their expertise in AI and machine learning helped us launch products we never thought possible.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="badge mb-4">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 text-lg">See what our clients say about working with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
