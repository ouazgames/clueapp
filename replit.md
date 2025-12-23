# Clues by Sam - Mobile App

A logic puzzle game wrapped as a native mobile app using Capacitor.

## Overview

This is the original "Clues by Sam" web game converted into Android and iOS mobile apps. The game contains 50 logic puzzles where players deduce who is a criminal based on clues.

## Project Structure

```
├── www/                    # Web game files (source for mobile apps)
│   ├── index.html          # Main game page with splash screen
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

The app includes:
- Loading splash screen with progress animation
- Light blue gradient background
- Original game layout and styling preserved
- Safe area support for notched devices
- Updated action button styling
- Fixed z-index for popups to appear above cards
- Responsive design for all screen sizes

## Mobile-Specific Modifications

Changes made for mobile packaging:
1. Updated viewport meta for mobile scaling
2. Added safe-area CSS for notched devices
3. Added Capacitor back button handler (Android)
4. Locked orientation to portrait
5. Added splash screen with loading animation
6. Styled action buttons for better visibility
7. Fixed popup z-index layering

**No gameplay, puzzles, or game logic was modified. Only UI presentation.**
