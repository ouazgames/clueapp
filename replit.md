# Clues by Sam - Mobile App

A logic puzzle game wrapped as a native mobile app using Capacitor.

## Overview

This is the original "Clues by Sam" web game converted into Android and iOS mobile apps. The game contains 50 logic puzzles where players deduce who is a criminal based on clues.

## Project Structure

```
├── www/                    # Web game files (source for mobile apps)
│   ├── index.html          # Main game page with mobile-optimized UI
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

## Mobile UI Features (Updated December 2024)

The app has been redesigned with a modern mobile game UI:

### Splash Screen
- Cyan-to-purple gradient background
- Magnifying glass icon with "Clues by Sam" branding
- Animated loading progress bar

### Game UI
- Light blue gradient background
- Colorful character cards:
  - **Blue gradient** for male characters
  - **Pink gradient** for female characters
- Rounded card corners with shadows
- Position badges (A1, B1, C1, etc.) on each card
- "CLEARED" badge on solved characters

### Header
- Bold "Level X" title
- Progress bar showing X/20 format with gold fill

### Controls
- Good/Bad emoji toggle at bottom
- Touch-optimized interactions

### Win/Lose Popups
- Level Complete popup with celebration
- Try Again popup for retries

## Mobile-Specific Modifications

Changes made for mobile packaging:
1. Updated viewport meta for mobile scaling
2. Added safe-area CSS for notched devices
3. Added Capacitor back button handler (Android)
4. Locked orientation to portrait
5. Complete UI redesign matching reference images
6. Splash screen with loading animation
7. Card colors based on character gender
8. Position badges and cleared status indicators

**No gameplay, puzzles, or game logic was modified.**
