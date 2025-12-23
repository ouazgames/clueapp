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

## Mobile UI Features

The app has a mobile-optimized UI including:
- Gradient header showing current level
- Fixed bottom navigation bar with Previous/Next buttons
- Touch-optimized button styling with press feedback
- Safe area handling for notched devices
- Responsive sizing for different screen sizes

## Mobile-Specific Modifications

Changes made for mobile packaging:
1. Updated viewport meta for mobile scaling
2. Added safe-area CSS for notched devices
3. Added Capacitor back button handler (Android)
4. Locked orientation to portrait
5. Added mobile-friendly navigation bar UI
6. Gradient header styling

**No gameplay, puzzles, or game logic was modified.**
