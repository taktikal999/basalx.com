'use client'

import { ChevronRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Chief Systems Architect',
    bio: 'Former DARPA lead for decentralized compute. Specializes in "Basal-Layer" neural mesh networking.',
    background: ' DARPA / MIT / NSA ',
  },
  {
    name: 'Sloane Halloway',
    role: 'Head of Foundational Safety',
    bio: 'Leading expert in AI alignment and recursive logic gates. Author of the Non-Linear Governance whitepaper.',
    background: ' Stanford / DeepMind / OECD ',
  },
  {
    name: 'Kaelen Vance',
    role: 'Principal Infrastructure Engineer',
    bio: 'Architect of the "Stargate" data pipeline. Specialist in sub-millisecond latency for global-scale agentic models.',
    background: ' Google / Cloudflare / AWS ',
  },
]

export default function TeamPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-4 md:px-8" style={{ backgroundColor: '#000000' }}>
      {/* Light Leaks */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255, 51, 51, 0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-3">THE ARCHITECT GROUP</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6" style={{ letterSpacing: '-0.05em' }}>
            Meet the minds behind<br />
            <span className="text-[#00d4ff]">foundational intelligence</span>
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl">
            Builders of the infrastructure that powers the next generation of AI systems.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group"
              style={{ 
                backgroundColor: '#0a0a0a', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              {/* Image Placeholder - 1:1 Aspect Ratio */}
              <div 
                className="aspect-square relative"
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #1a1a1a 100%)',
                }}
              >
                {/* Grainy overlay */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
                {/* 1px border */}
                <div className="absolute inset-0 border border-white/5" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <ChevronRight className="w-5 h-5 text-[#666666] group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <p className="text-[#00d4ff] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-[#666666] text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <p className="text-[#333333] text-xs font-mono">{member.background}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div 
          className="mt-16 p-8 md:p-12 text-center"
          style={{ 
            backgroundColor: '#0a0a0a', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px'
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join the architect group</h2>
          <p className="text-[#666666] mb-6 max-w-xl mx-auto">
            We're always looking for exceptional minds to help build the foundation of tomorrow's AI infrastructure.
          </p>
          <a 
            href="/careers"
            className="inline-flex items-center px-6 py-3 rounded-full text-black bg-white hover:bg-gray-100 transition-all duration-200 font-medium"
          >
            View Open Positions
            <ChevronRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Metadata */}
        <div className="flex justify-between mt-12 text-[8px] font-mono text-[#333333]">
          <span>COORD: 34.05 / -118.24</span>
          <span>TEAM_SIZE: 003</span>
          <span>STATUS: NOMINAL</span>
        </div>
      </div>
    </section>
  )
}
