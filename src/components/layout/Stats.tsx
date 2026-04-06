'use client'

export default function Stats() {
  const stats = [
    { number: '99.99%', label: 'Uptime SLA' },
    { number: '300+', label: 'Global Edges' },
    { number: '50ms', label: 'Avg Latency' },
    { number: '10K+', label: 'Active Developers' },
  ]

  return (
    <section className="section-padding border-y border-border-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
