'use client'

import { type ReactNode } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface AppShellProps {
  children: ReactNode
  variant?: 'default' | 'minimal' | 'frame'
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (variant === 'minimal') {
    return <main className="min-h-screen">{children}</main>
  }

  if (variant === 'frame') {
    return (
      <main className="min-h-screen max-w-md mx-auto">
        {children}
      </main>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-[var(--color-border)]">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MintGenie</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200">
                Explore
              </a>
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200">
                Create
              </a>
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200">
                Rewards
              </a>
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200">
                Docs
              </a>
            </div>

            {/* Connect Button */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-all duration-200 shadow-button">
                Connect Wallet
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <a href="#" className="block text-fg hover:text-primary transition-colors duration-200">
                Explore
              </a>
              <a href="#" className="block text-fg hover:text-primary transition-colors duration-200">
                Create
              </a>
              <a href="#" className="block text-fg hover:text-primary transition-colors duration-200">
                Rewards
              </a>
              <a href="#" className="block text-fg hover:text-primary transition-colors duration-200">
                Docs
              </a>
              <button className="w-full px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-all duration-200">
                Connect Wallet
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] mt-xl">
        <div className="max-w-7xl mx-auto px-6 py-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MintGenie</span>
              </div>
              <p className="text-sm text-muted">
                Social, gasless NFT minting on Base
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Explore</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Create</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Rewards</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Farcaster</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-lg pt-lg border-t border-[var(--color-border)] text-center text-sm text-muted">
            <p>© 2024 MintGenie. Built on Base.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
