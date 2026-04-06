'use client'

export default function Stats() {
  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '45%', label: 'Avg. Cost Reduction' },
    { number: '3x', label: 'Faster Time to Market' },
    { number: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
