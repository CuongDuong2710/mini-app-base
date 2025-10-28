# 🎨 Required Images for Farcaster Mini App

You need to create these images and place them in the `/public` folder:

## 📐 Image Specifications

### **icon.png**
- **Size**: 1024 x 1024 pixels
- **Format**: PNG
- **Transparency**: No alpha channel (solid background)
- **Purpose**: App icon in Farcaster

### **splash.png** 
- **Size**: 200 x 200 pixels
- **Format**: PNG
- **Purpose**: Loading screen image

### **hero.png**
- **Size**: 1200 x 630 pixels  
- **Format**: PNG
- **Aspect Ratio**: 1.91:1
- **Purpose**: Promotional display image

### **og.png**
- **Size**: 1200 x 630 pixels
- **Format**: PNG  
- **Aspect Ratio**: 1.91:1
- **Purpose**: Open Graph social sharing

## 🎯 Design Suggestions

### Brand Colors
- **Primary Blue**: #2563eb
- **Background**: #ffffff or #f8fafc
- **Text**: #1e293b

### Content Ideas
- App logo/icon with "Social Trivia" text
- Quiz-related imagery (question marks, lightbulbs, brain)
- Base and Farcaster logos (if permitted)
- Colorful, engaging design

### Tools for Creation
- **Canva**: Free templates, easy to use
- **Figma**: Professional design tool
- **GIMP**: Free Photoshop alternative
- **Photoshop**: Professional image editor

## 📂 File Structure
```
public/
├── icon.png       (1024x1024)
├── splash.png     (200x200) 
├── hero.png       (1200x630)
├── og.png         (1200x630)
└── .well-known/
    └── farcaster.json
```

## ✅ Quick Start

1. Create images with specifications above
2. Save them in `/public` folder
3. Test URLs:
   - https://your-app.vercel.app/icon.png
   - https://your-app.vercel.app/splash.png
   - https://your-app.vercel.app/hero.png
   - https://your-app.vercel.app/og.png

4. Deploy to Vercel
5. Verify manifest: https://your-app.vercel.app/.well-known/farcaster.json