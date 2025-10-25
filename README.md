# MintGenie - Social NFT Minting Platform

A Base Mini App for social, gasless NFT minting with reputation gates and referral boosts.

## Features

- 🎨 **Reputation-Gated Minting**: Control access based on Farcaster social graph and on-chain activity
- 🚀 **Referral-Boosted Distribution**: Viral growth through share-to-mint frames
- ⚡ **Gas-Sponsored Mints**: Completely gasless experience for users
- 📊 **Real-time Tracking**: Live mint statistics and notifications

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── AppShell.tsx    # Main layout with header/footer
│   ├── MintCard.tsx    # NFT collection card
│   ├── FeatureCard.tsx # Feature highlight card
│   ├── StatsBar.tsx    # Statistics display
│   └── Providers.tsx   # OnchainKit provider
├── page.tsx            # Home page
├── layout.tsx          # Root layout
└── globals.css         # Global styles with Coinbase theme

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Key Components

### AppShell
Main layout component with responsive navigation and footer. Supports three variants:
- `default`: Full layout with header and footer
- `minimal`: Content only
- `frame`: Optimized for Farcaster frames

### MintCard
Displays NFT collection information with:
- Collection image and name
- Mint progress bar
- Price and supply information
- Mint button

### Providers
Wraps the app with OnchainKit and React Query providers for blockchain interactions.

## Theming

The app uses the Coinbase theme with:
- Dark navy background (#0a1929)
- Coinbase blue accents (#0052ff)
- Subtle rounded borders
- Glass morphism effects

All colors are defined as CSS variables in `globals.css` for easy customization.

## Deployment

1. Build the production app:
```bash
npm run build
```

2. Deploy to Vercel or your preferred hosting platform

3. Update the manifest URLs in `public/.well-known/farcaster.json`

## License

MIT
