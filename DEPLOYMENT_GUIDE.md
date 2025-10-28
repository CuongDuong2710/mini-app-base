# 🚀 Base Farcaster Mini App Deployment Guide

## 📋 Prerequisites

Before deploying your Mini App, ensure you have:
- ✅ A completed Mini App project
- ✅ Vercel account (recommended hosting)
- ✅ Farcaster account with developer access
- ✅ Base testnet/mainnet setup

## 🔧 Step 1: Environment Configuration

### 1.1 Update your `.env` file with production values:

```env
# Production domain (update after Vercel deployment)
NEXT_PUBLIC_URL=https://your-app-name.vercel.app

# App metadata
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=Social Trivia
NEXT_PUBLIC_APP_SUBTITLE=Play and share scores!
NEXT_PUBLIC_APP_DESCRIPTION=A fun trivia game on Base and Farcaster
NEXT_PUBLIC_APP_ICON=https://your-app-name.vercel.app/icon.png
NEXT_PUBLIC_APP_SPLASH_IMAGE=https://your-app-name.vercel.app/splash.png
NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR=#2563eb
NEXT_PUBLIC_APP_PRIMARY_CATEGORY=games
NEXT_PUBLIC_APP_HERO_IMAGE=https://your-app-name.vercel.app/hero.png
NEXT_PUBLIC_APP_TAGLINE=Beat your friends!
NEXT_PUBLIC_APP_OG_TITLE=Social Trivia Mini App
NEXT_PUBLIC_APP_OG_DESCRIPTION=Challenge friends in this fun Base trivia game!
NEXT_PUBLIC_APP_OG_IMAGE=https://your-app-name.vercel.app/og.png

# Optional: OnchainKit API (get from https://developer.coinbase.com)
NEXT_PUBLIC_CDP_API_KEY=your-coinbase-api-key
```

## 🌐 Step 2: Deploy to Vercel

### 2.1 Install Vercel CLI:
```bash
npm install -g vercel
```

### 2.2 Login to Vercel:
```bash
vercel login
```

### 2.3 Deploy your app:
```bash
# From your project root
vercel

# Follow the prompts:
# ? Set up and deploy "~/mini-app-base"? [Y/n] Y
# ? Which scope do you want to deploy to? Your Account
# ? Link to existing project? [y/N] N
# ? What's your project's name? social-trivia-miniapp
# ? In which directory is your code located? ./
```

### 2.4 Set environment variables in Vercel:
```bash
# Add each environment variable
vercel env add NEXT_PUBLIC_URL
# Enter: https://your-app-name.vercel.app

vercel env add NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME
# Enter: Social Trivia

# Continue for all environment variables...
```

### 2.5 Redeploy with environment variables:
```bash
vercel --prod
```

## 🖼️ Step 3: Create Required Assets

Create these images in your `/public` folder:

### 3.1 Required image files:
- `icon.png` - 512x512px app icon
- `splash.png` - 1200x630px splash screen
- `hero.png` - 1200x600px hero image
- `og.png` - 1200x630px Open Graph image

### 3.2 Example public folder structure:
```
public/
├── icon.png
├── splash.png
├── hero.png
├── og.png
└── favicon.ico
```

## 📱 Step 4: Register with Base Build

### 4.1 Visit Base Build:
Go to [https://build.base.org](https://build.base.org)

### 4.2 Connect your account:
- Connect your wallet
- Connect your Farcaster account

### 4.3 Submit your Mini App:
1. Click "Submit App"
2. Fill in the form:
   - **App Name**: Social Trivia
   - **App URL**: https://your-app-name.vercel.app
   - **Description**: A fun trivia game testing knowledge about Base and Farcaster
   - **Category**: Games
   - **Icon URL**: https://your-app-name.vercel.app/icon.png

### 4.4 Generate Farcaster association:
The tool will generate:
- `FARCASTER_HEADER`
- `FARCASTER_PAYLOAD`
- `FARCASTER_SIGNATURE`

Add these to your Vercel environment variables.

## 🔐 Step 5: Farcaster Developer Portal

### 5.1 Visit Farcaster Developer Portal:
Go to [https://warpcast.com/~/developers](https://warpcast.com/~/developers)

### 5.2 Create a new app:
1. Click "Create App"
2. Fill in details:
   - **Name**: Social Trivia
   - **Domain**: your-app-name.vercel.app
   - **Description**: Interactive trivia game for Base and Farcaster knowledge
   - **Logo**: Upload your icon.png

### 5.3 Configure app settings:
- **App Type**: Mini App
- **Permissions**: Basic profile access
- **Redirects**: https://your-app-name.vercel.app

## 🧪 Step 6: Testing

### 6.1 Test in Warpcast:
1. Open Warpcast mobile app
2. Go to your app URL
3. Test all functionality:
   - ✅ App loads correctly
   - ✅ User profile displays
   - ✅ Quiz works end-to-end
   - ✅ Share functionality works
   - ✅ Responsive design

### 6.2 Test cast sharing:
Create a test cast with your Mini App URL to verify Frame functionality.

## 📊 Step 7: Analytics & Monitoring

### 7.1 Vercel Analytics:
Enable Vercel Analytics in your dashboard for performance monitoring.

### 7.2 Add error monitoring:
Consider adding Sentry or similar for error tracking:

```bash
npm install @sentry/nextjs
```

## 🚀 Step 8: Go Live

### 8.1 Final deployment:
```bash
vercel --prod
```

### 8.2 Share your Mini App:
Create launch casts on Farcaster:
- Share the direct URL
- Create engaging content about your trivia game
- Tag relevant communities

### 8.3 Monitor performance:
- Check Vercel deployment logs
- Monitor user engagement
- Gather feedback for improvements

## 📝 Step 9: Post-Launch Optimization

### 9.1 Performance optimization:
- Monitor Core Web Vitals
- Optimize images and assets
- Enable caching strategies

### 9.2 Feature updates:
- Add more quiz questions
- Implement leaderboards
- Add social features

### 9.3 Marketing:
- Share in Base and Farcaster communities
- Create engaging content
- Collaborate with other developers

## 🔧 Troubleshooting

### Common issues:

1. **Mini App not loading in Warpcast:**
   - Verify HTTPS is enabled
   - Check environment variables
   - Ensure proper CORS configuration

2. **Share functionality not working:**
   - Verify OnchainKit configuration
   - Check MiniKitProvider setup
   - Test compose cast permissions

3. **Styling issues:**
   - Test on mobile viewport
   - Verify Tailwind CSS compilation
   - Check responsive design

## 📚 Additional Resources

- [Base Documentation](https://docs.base.org)
- [Farcaster Developer Docs](https://docs.farcaster.xyz)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Base Build Platform](https://build.base.org)

## 🎉 Congratulations!

Your Base Farcaster Mini App is now live! 🚀

Remember to:
- Keep your dependencies updated
- Monitor user feedback
- Iterate based on usage analytics
- Engage with the Base and Farcaster communities