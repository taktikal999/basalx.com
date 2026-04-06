'use client'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechCorp',
    content: 'Basal transformed our infrastructure. The AI-powered tooling reduced our deployment time by 85%.',
  },
  {
    name: 'Michael Torres',
    role: 'VP Engineering, StartupXYZ',
    content: 'The developer experience is unmatched. Our team went from zero to production in days, not weeks.',
  },
  {
    name: 'Emily Watson',
    role: 'Director of Innovation, Enterprise Co',
    content: 'Finally, infrastructure that scales without complexity. It just works.',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built by teams who
            <br />
            <span className="gradient-text">demand excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bento-card"
            >
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
