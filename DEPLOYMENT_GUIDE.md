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

## 📱 Step 4: Register with Farcaster (Official Process)

### 4.1 Follow Official Farcaster Publishing Guide
Reference: [https://miniapps.farcaster.xyz/docs/guides/publishing](https://miniapps.farcaster.xyz/docs/guides/publishing)

### 4.2 Create Farcaster Manifest File
Create the required manifest file at `/.well-known/farcaster.json`:

1. **Create the directory structure:**
```bash
mkdir -p public/.well-known
```

2. **Create farcaster.json file:**
```json
{
  "miniapp": {
    "version": "1",
    "name": "Social Trivia",
    "iconUrl": "https://social-trivia-quiz.vercel.app/icon.png",
    "homeUrl": "https://social-trivia-quiz.vercel.app",
    "splashImageUrl": "https://social-trivia-quiz.vercel.app/splash.png",
    "splashBackgroundColor": "#2563eb",
    "subtitle": "Base & Farcaster Quiz",
    "description": "Test your knowledge with 20 questions about Base blockchain and Farcaster protocol.",
    "primaryCategory": "games",
    "tags": ["trivia", "base", "farcaster", "quiz", "education"],
    "heroImageUrl": "https://social-trivia-quiz.vercel.app/hero.png",
    "tagline": "Test your Web3 knowledge!",
    "ogTitle": "Social Trivia Quiz",
    "ogDescription": "Challenge yourself with Base and Farcaster questions!",
    "ogImageUrl": "https://social-trivia-quiz.vercel.app/og.png"
  }
}
```

### 4.3 Generate Account Association (Ownership Verification)

1. **Visit Farcaster Developer Tools:**
   Go to: [https://farcaster.xyz/~/developers/mini-apps/manifest](https://farcaster.xyz/~/developers/mini-apps/manifest)

2. **Create Account Association:**
   - Enter your domain: `social-trivia-quiz.vercel.app`
   - Connect your Farcaster account
   - Generate the signed account association

3. **Update farcaster.json with account association:**
   Add the generated `accountAssociation` object to your farcaster.json file.

### 4.4 Create Required Assets

You need to create these image files in your `/public` folder:

- **icon.png**: 1024x1024px PNG, no transparency
- **splash.png**: 200x200px PNG 
- **hero.png**: 1200x630px PNG (1.91:1 ratio)
- **og.png**: 1200x630px PNG for Open Graph

### 4.5 Deploy Updated Files

```bash
# Commit and deploy the new files
git add .
git commit -m "Add Farcaster manifest and assets"
git push
vercel --prod
```

### 4.6 Verify Manifest

After deployment, verify your manifest is accessible:
- Visit: `https://social-trivia-quiz.vercel.app/.well-known/farcaster.json`
- Should return your JSON configuration
```json
{
  "name": "Social Trivia",
  "description": "Test your Base & Farcaster knowledge!",
  "url": "https://your-app-name.vercel.app",
  "icon": "https://your-app-name.vercel.app/icon.png",
  "category": "games",
  "tags": ["trivia", "base", "farcaster", "education"]
}
```

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

## � Step 8: Alternative Deployment Methods

### 8.1 If build.base.org is unavailable:

#### Method 1: Direct Social Sharing
1. **Deploy to Vercel** (Steps 1-3 above)
2. **Test your app** thoroughly 
3. **Share directly on Farcaster:**
   - Create a cast with your app URL
   - Use hashtags: #Base #MiniApp #Trivia
   - Tag relevant accounts: @base @coinbase

#### Method 2: Community Submission
1. **Join Base Discord**: https://discord.gg/base
2. **Look for ecosystem channels**:
   - #ecosystem-showcase
   - #mini-apps
   - #general
3. **Share your project** with:
   - App URL
   - Description
   - Screenshots
   - Source code (if open source)

#### Method 3: GitHub Pages Alternative
If Vercel has issues, use GitHub Pages:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d out"

# Add to next.config.ts:
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  assetPrefix: isProd ? '/your-repo-name/' : '',
  output: 'export',
  images: {
    unoptimized: true
  }
};

# Deploy
npm run deploy
```

### 8.2 Manual Frame Creation:
Create Farcaster Frame manually:

1. **Add meta tags to your layout.tsx**:
```html
<meta property="fc:frame" content="vNext" />
<meta property="fc:frame:image" content="https://your-app.vercel.app/og.png" />
<meta property="fc:frame:button:1" content="Play Trivia" />
<meta property="fc:frame:post_url" content="https://your-app.vercel.app" />
```

2. **Test Frame with**:
   - https://warpcast.com/~/developers/frames
   - Paste your URL to validate Frame

### 8.3 Current Working Resources (as of October 2024):

✅ **Working URLs:**
- Coinbase Developer Portal: https://portal.cdp.coinbase.com
- Base Documentation: https://docs.base.org
- Farcaster Developers: https://warpcast.com/~/developers
- Base Discord: https://discord.gg/base
- Vercel: https://vercel.com

⚠️ **May be unavailable:**
- build.base.org (use alternatives above)

📱 **Testing your Mini App:**
1. **In Warpcast mobile app**: Paste your URL
2. **In browser**: Test responsive design
3. **With Farcaster Frame validator**: Test Frame functionality

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