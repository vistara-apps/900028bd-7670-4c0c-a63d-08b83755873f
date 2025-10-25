'use client'

import { Zap, Users, TrendingUp, DollarSign } from 'lucide-react'

export function StatsBar() {
  const stats = [
    { icon: <Zap className="w-5 h-5" />, label: 'Total Mints', value: '12.5K' },
    { icon: <Users className="w-5 h-5" />, label: 'Active Users', value: '3.2K' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Collections', value: '847' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Volume', value: '45 ETH' },
  ]

  return (
    <section className="py-lg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="gradient-card rounded-lg p-6 text-center hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-3 text-primary">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
