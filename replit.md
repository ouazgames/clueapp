# Clues by Sam - Mobile App

A logic puzzle game wrapped as a native mobile app using Capacitor with full monetization.

## Overview

This is the original "Clues by Sam" web game converted into Android and iOS mobile apps. The game contains 50 logic puzzles where players deduce who is a criminal based on clues.

## Project Structure

```
├── www/                    # Web game files (source for mobile apps)
│   ├── index.html          # Main game page with splash screen + monetization
│   ├── assets/             # CSS and JS assets  
│   ├── game/assets/        # 50 puzzle scripts (obfuscated filenames)
│   └── common.css          # Shared styles
├── android/                # Android native project (Gradle)
├── ios/                    # iOS native project (Xcode)
├── cluesbysam(2)/          # Original web game files (backup)
├── capacitor.config.json   # Capacitor configuration
├── server.js               # Static file server for web preview
├── BUILD_INSTRUCTIONS.md   # Complete build instructions
└── VERIFICATION_CHECKLIST.md # QA verification checklist
```

## Running in Replit

The project runs on port 5000 using a Node.js static file server:
```
node server.js
```

## Building Mobile Apps

See `BUILD_INSTRUCTIONS.md` for complete instructions.

### Quick Commands:
```bash
npm install                  # Install dependencies
npx cap sync                 # Sync web assets to native projects
npx cap open android         # Open Android Studio
npx cap open ios             # Open Xcode
```

## Configuration

- **App ID**: com.cluesbysam.app
- **App Name**: Clues by Sam
- **Orientation**: Portrait only
- **Offline**: Fully functional offline

## Monetization Features

### Coins System
- Users start with 50 coins
- Coins display in header (tap to open shop)
- Hints cost 10 coins each
- Rewarded ads give 25 coins

### AdMob Ads
- **Banner ad**: Fixed at bottom of screen
- **Interstitial ad**: Shown on level completion
- **App Open ad**: Shown when app launches
- **Rewarded ad**: Watch to earn 25 coins

**Test Ad IDs** (replace for production):
- Banner: `ca-app-pub-3940256099942544/6300978111`
- Interstitial: `ca-app-pub-3940256099942544/1033173712`
- Rewarded: `ca-app-pub-3940256099942544/5224354917`
- App Open: `ca-app-pub-3940256099942544/9257395921`

### In-App Purchases (RevenueCat)
Coin packs available:
- 25 coins - FREE (watch ad)
- 150 coins - AED 7.99
- 450 coins - AED 29.99
- 1,500 coins - AED 59.99
- 4,000 coins - AED 99.99
- 7,500 coins - AED 199.99
- 15,000 coins - AED 399.99

**Setup Required:**
1. Create RevenueCat account at https://app.revenuecat.com
2. Add your API key in `www/index.html` (search for `YOUR_REVENUECAT_API_KEY`)
3. Configure products in RevenueCat dashboard

### Push Notifications
- Uses Firebase Cloud Messaging (FCM)
- Auto-subscribes to "cluesbysam" topic
- Requires Firebase project setup

**Setup Required:**
1. Create Firebase project
2. Download `google-services.json` for Android
3. Download `GoogleService-Info.plist` for iOS
4. Upload APNs certificate to Firebase (iOS)

## Production Checklist

Before publishing:
1. Replace test AdMob IDs with production IDs
2. Add RevenueCat API key
3. Set up Firebase project and add config files
4. Update iOS `GADApplicationIdentifier` in Info.plist
5. Configure RevenueCat products matching the shop

## Mobile UI Features

The app includes:
- Loading splash screen with progress animation
- Light blue gradient background
- Original game layout and styling preserved
- Safe area support for notched devices
- Styled action buttons
- Fixed z-index for popups to appear above cards
- Responsive design for all screen sizes
- Shop popup matching reference design
- Not enough coins popup with options

## Mobile-Specific Modifications

Changes made for mobile packaging:
1. Updated viewport meta for mobile scaling
2. Added safe-area CSS for notched devices
3. Added Capacitor back button handler (Android)
4. Locked orientation to portrait
5. Added splash screen with loading animation
6. Styled action buttons for better visibility
7. Fixed popup z-index layering
8. Added coins system with localStorage persistence
9. Integrated AdMob for all ad types
10. Integrated RevenueCat for in-app purchases
11. Added push notification support
12. Hints now cost coins (10 per use)
13. Multi-language support (English, Arabic, Spanish, Italian, Russian)
14. RTL (right-to-left) layout for Arabic

**No gameplay, puzzles, or game logic was modified. Only UI presentation, monetization, and localization added.**

## Level System

- 50 unique puzzles with obfuscated filenames
- Levels cycle after completing all 50
- Progress persists via localStorage
- Level number continues incrementing (51, 52, etc.)
