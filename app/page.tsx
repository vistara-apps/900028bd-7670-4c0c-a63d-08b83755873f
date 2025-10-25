'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Zap, Users, TrendingUp } from 'lucide-react'
import { AppShell } from './components/AppShell'
import { MintCard } from './components/MintCard'
import { FeatureCard } from './components/FeatureCard'
import { StatsBar } from './components/StatsBar'

interface Collection {
  id: string
  name: string
  image: string
  price: string
  supply: number
  minted: number
  creator: string
  color: string
}

const FEATURED_COLLECTIONS: Collection[] = [
  {
    id: '1',
    name: 'Cosmic Cubes',
    image: '🎲',
    price: '0.001',
    supply: 1000,
    minted: 847,
    creator: '@cosmicart',
    color: 'from-pink-500 to-purple-500',
  },
  {
    id: '2',
    name: 'Neon Dreams',
    image: '💎',
    price: '0.002',
    supply: 500,
    minted: 234,
    creator: '@neonwave',
    color: 'from-purple-500 to-blue-500',
  },
  {
    id: '3',
    name: 'Base Blocks',
    image: '📦',
    price: '0.0015',
    supply: 2000,
    minted: 1456,
    creator: '@basebuilder',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '4',
    name: 'Golden Gems',
    image: '💰',
    price: '0.003',
    supply: 750,
    minted: 623,
    creator: '@gemcollector',
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse-slow text-primary text-2xl">Loading...</div>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-xl px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Powered by Base</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fg to-primary bg-clip-text text-transparent">
            MINT NOW
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Create, share, and mint NFTs with reputation gates and referral boosts. 
            Gasless minting for frictionless onboarding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-button hover:shadow-xl transition-all duration-200 hover:scale-105">
              Start Minting
            </button>
            <button className="px-8 py-4 glass text-fg font-semibold rounded-lg hover:bg-surface transition-all duration-200">
              Create Collection
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Features Section */}
      <section className="py-xl px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-lg text-center">Why MintGenie?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Gasless Minting"
              description="Zero gas fees for minters. We sponsor all transactions for a seamless experience."
              color="text-primary"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Reputation Gates"
              description="Control access with Farcaster social graph and on-chain activity criteria."
              color="text-accent"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Referral Boosts"
              description="Grow virally with share-to-mint frames and rewards for referrers."
              color="text-success"
            />
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-xl px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="text-3xl font-bold">Featured Collections</h2>
            <button className="text-primary hover:text-accent transition-colors duration-200 font-medium">
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_COLLECTIONS.map((collection, index) => (
              <div
                key={collection.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MintCard collection={collection} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl px-6">
        <div className="max-w-4xl mx-auto text-center glass rounded-lg p-xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Collection?</h2>
          <p className="text-lg text-muted mb-8">
            Join creators earning through social-native NFT distribution
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-button hover:shadow-xl transition-all duration-200 hover:scale-105">
            Create Your First Mint
          </button>
        </div>
      </section>
    </AppShell>
  )
}
