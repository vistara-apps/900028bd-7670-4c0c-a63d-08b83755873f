import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'MintGenie - Social NFT Minting',
  description: 'Social, gasless NFT minting with reputation gates and referral boosts',
  openGraph: {
    title: 'MintGenie',
    description: 'Social, gasless NFT minting with reputation gates and referral boosts',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="gradient-bg min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
