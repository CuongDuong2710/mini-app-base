# 🎯 Social Trivia - Base Farcaster Mini App

A fun interactive trivia game testing knowledge about Base blockchain and Farcaster protocol! Built with Next.js, OnchainKit, and deployed as a Farcaster Mini App.

## 🎮 Features

- **12 Quiz Questions** covering Base blockchain and Farcaster protocol
- **Real-time Scoring** with percentage-based results
- **Social Sharing** - Share scores directly to Farcaster
- **Responsive Design** - Works seamlessly in Warpcast and web browsers
- **User Integration** - Displays Farcaster profile information
- **Beautiful UI** - Modern design with smooth animations

## 📚 Quiz Topics Covered

### Base Blockchain:
- Layer-2 architecture and Ethereum compatibility
- Consensus mechanisms and transaction fees
- OnchainKit development toolkit
- Smart contract development with Solidity
- Scaling solutions and block times

### Farcaster Protocol:
- Social protocol fundamentals
- Decentralized hubs and data structures
- Farcaster Frames and interactive content
- Username system (fnames)
- Mini App integration

### Development & Deployment:
- Next.js and React frameworks
- Mini App architecture
- Web platform deployment
- Cross-platform compatibility

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Farcaster account (for testing)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/mini-app-base.git
cd mini-app-base
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open in browser:**
```
http://localhost:3000
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Integration**: OnchainKit, Farcaster MiniApp SDK
- **Deployment**: Vercel
- **Blockchain**: Base (Ethereum L2)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── AppLayout.tsx      # Main layout with safe areas
│   │   ├── TriviaGame.tsx     # Quiz game logic (20 questions)
│   │   ├── ResultsScreen.tsx  # Score display and sharing
│   │   └── Providers.tsx      # OnchainKit providers
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── lib/
│   └── TriviaLeaderboard.sol  # Smart contract (optional)
└── public/                    # Static assets
```

## 🎯 Quiz Questions Preview

The app includes 12 carefully crafted questions covering:

1. **Base Fundamentals** (Questions 1-8)
   - What is Base and its architecture?
   - Who built Base and when did it launch?
   - Technical details: consensus, fees, compatibility

2. **Farcaster Protocol** (Questions 9-11)
   - Social protocol structure
   - Frames and interactive content
   - Platform integration

3. **Development & Integration** (Question 12)
   - Smart contract languages
   - Cross-platform considerations

## 🚀 Deployment Guide

Follow our comprehensive [Deployment Guide](./DEPLOYMENT_GUIDE.md) for step-by-step instructions on:

1. **Environment Setup** - Configure production variables
2. **Vercel Deployment** - Deploy to production
3. **Asset Creation** - Required images and metadata
4. **Base Build Registration** - Submit to Base ecosystem
5. **Farcaster Integration** - Register as Mini App
6. **Testing & Go-Live** - Comprehensive testing checklist

## 🔧 Development

### Running locally:
```bash
npm run dev
```

### Building for production:
```bash
npm run build
npm start
```

### Linting:
```bash
npm run lint
```

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Environment Variables

```env
# Required
NEXT_PUBLIC_URL=https://your-app-domain.vercel.app
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=Social Trivia

# Optional (enhances functionality)
NEXT_PUBLIC_CDP_API_KEY=your-coinbase-api-key
FARCASTER_HEADER=your-header-here
FARCASTER_PAYLOAD=your-payload-here
FARCASTER_SIGNATURE=your-signature-here
```

## 🤝 Community

- [Base Discord](https://discord.gg/base)
- [Farcaster Discord](https://discord.gg/farcaster)
- [Base Build Platform](https://build.base.org)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [OnchainKit](https://onchainkit.xyz) by Coinbase
- Powered by [Base](https://base.org) blockchain
- Integrated with [Farcaster](https://farcaster.xyz) protocol
- Inspired by the Base and Farcaster communities

---

**Ready to test your Base and Farcaster knowledge? Try the quiz now!** 🚀