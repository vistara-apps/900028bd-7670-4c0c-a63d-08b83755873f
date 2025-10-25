'use client'

import { TrendingUp } from 'lucide-react'

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

interface MintCardProps {
  collection: Collection
}

export function MintCard({ collection }: MintCardProps) {
  const progress = (collection.minted / collection.supply) * 100

  return (
    <div className="gradient-card rounded-lg overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer group">
      {/* Image */}
      <div className={`relative h-48 bg-gradient-to-br ${collection.color} flex items-center justify-center`}>
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {collection.image}
        </span>
        <div className="absolute top-3 right-3 px-3 py-1 glass rounded-full text-xs font-medium">
          {progress.toFixed(0)}% minted
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg mb-1">{collection.name}</h3>
            <p className="text-sm text-muted">{collection.creator}</p>
          </div>
          <div className="flex items-center gap-1 text-success text-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">Hot</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-muted mb-1">
            <span>{collection.minted} minted</span>
            <span>{collection.supply} total</span>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted">Price</p>
            <p className="font-bold text-lg">{collection.price} ETH</p>
          </div>
          <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-all duration-200 shadow-button text-sm">
            Mint Now
          </button>
        </div>
      </div>
    </div>
  )
}
