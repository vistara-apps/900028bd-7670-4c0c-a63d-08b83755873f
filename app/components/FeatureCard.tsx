'use client'

import { type ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="gradient-card rounded-lg p-6 hover:shadow-card transition-all duration-300 hover:scale-105">
      <div className={`${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  )
}
