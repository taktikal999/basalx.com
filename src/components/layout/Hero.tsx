'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const agentLogs = [
  { time: '14:02:01', agent: 'SCOUT_AGENT', message: 'Signal detected - Vantage Corp hiring VP Sales' },
  { time: '14:02:03', agent: 'SCOUT_AGENT', message: 'Signal detected - Nexus AI expanding SDR team' },
  { time: '14:02:05', agent: 'WRITER_AGENT', message: 'Drafting contextual outreach for Vantage Corp' },
  { time: '14:02:08', agent: 'STRATEGIST_AGENT', message: 'Analyzing company tech stack - matching product fit' },
  { time: '14:02:12', agent: 'WRITER_AGENT', message: 'Personalization: Found recent funding round post' },
  { time: '14:02:15', agent: 'CLOSER_AGENT', message: 'Scheduling meeting - prospect shows high intent' },
  { time: '14:02:18', agent: 'CLOSER_AGENT', message: 'Meeting confirmed: Tue 2pm PST with VP Sales' },
  { time: '14:02:22', agent: 'SYSTEM', message: 'Pipeline updated: +$45,000 ARR opportunity' },
]

export default function Hero() {
  const [logs, setLogs] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleCount < agentLogs.length) {
        setVisibleCount(prev => prev + 1)
      }
    }, 800)
    return () => clearInterval(timer)
  }, [visibleCount])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 container-custom pt-16 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline - All Caps Bold */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase mb-6 leading-tight">
            The Foundational Layer of<br />
            <span className="text-bismuth">B2B Revenue</span>
          </h1>

          {/* Terminal Window */}
          <div className="terminal max-w-2xl mx-auto mb-10 mt-8">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-bismuth-dark">basalx_agent_terminal v2.4</span>
            </div>
            <div className="terminal-body text-left max-h-64 overflow-hidden">
              {agentLogs.slice(0, visibleCount).map((log, index) => (
                <div key={index} className="terminal-line">
                  <span className="terminal-time">[{log.time}]</span>
                  <span className="terminal-agent">{log.agent}:</span>
                  <span className="text-bismuth/80">{log.message}</span>
                </div>
              ))}
              {visibleCount < agentLogs.length && (
                <div className="terminal-line">
                  <span className="terminal-time">[{new Date().toTimeString().slice(0,8)}]</span>
                  <span className="terminal-agent text-accent-green animate-pulse">_</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <Link href="#contact" className="btn-primary text-lg inline-flex items-center">
            Request Agentic Audit
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border-subtle max-w-lg mx-auto">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-green">500+</div>
              <div className="text-xs text-bismuth-dark mt-1">Active Pods</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-green">$2.4B</div>
              <div className="text-xs text-bismuth-dark mt-1">Pipeline</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-green">98%</div>
              <div className="text-xs text-bismuth-dark mt-1">Show Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
