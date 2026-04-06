'use client'

const stats = [
  { number: '99.99%', label: 'Uptime SLA' },
  { number: '300+', label: 'Global Edges' },
  { number: '50ms', label: 'Avg Latency' },
  { number: '10K+', label: 'Active Developers' },
]

export default function Stats() {
  return (
    <section className="border-y border-border-default">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{stat.number}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
