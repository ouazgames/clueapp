# Verification Checklist - Clues by Sam Mobile App

This checklist verifies that the mobile app is identical to the original website.

## Visual Verification

- [ ] **Theme/Colors**: Dark background (#1a1a2e style) matches website
- [ ] **Typography**: Ribeye and Comic Neue fonts render correctly
- [ ] **Layout**: 4-column grid of character cards matches exactly
- [ ] **Level Display**: "Level X" header displays correctly at top
- [ ] **Navigation Buttons**: Previous/Next buttons present and styled same as website
- [ ] **Character Cards**: All 20 characters display with correct:
  - [ ] Emoji avatars
  - [ ] Names (Alex, Bonnie, Chris, etc.)
  - [ ] Professions (cook, painter, guard, etc.)
  - [ ] Grid positions (A1-D5)
- [ ] **Clue Display**: Clues appear in same format on selected cards

## Gameplay Verification

- [ ] **Level 1**: Loads correctly on first launch
- [ ] **Level Progression**: localStorage correctly tracks level progress
- [ ] **50 Puzzles**: All 50 puzzle hashes load correctly
- [ ] **Level Cycling**: After level 50, cycles back through puzzles
- [ ] **Card Selection**: Tapping cards works same as clicking on website
- [ ] **Clue Logic**: Same clue text and deduction logic
- [ ] **Win Condition**: Same win detection as website

## Level Navigation

- [ ] **Next Button**: Advances to next level and reloads
- [ ] **Previous Button**: Goes to previous level (disabled at level 1)
- [ ] **Level Persistence**: Current level saved across app restarts

## Mobile-Specific

- [ ] **Safe Area**: Content doesn't overlap with notch/status bar
- [ ] **Orientation**: Locked to portrait mode
- [ ] **Back Button (Android)**: Navigates back or exits app appropriately
- [ ] **Offline Mode**: Game fully functional without internet
- [ ] **Touch**: All interactions work with touch input

## Assets Verification

- [ ] All 50 puzzle JS files load correctly from `game/assets/`
- [ ] CSS files load correctly (`common.css`, `assets/index.css`)
- [ ] Google Fonts load (or fallback gracefully if offline)

## No Changes Policy

Verify these items have NOT been changed:

- [ ] No new menus or screens added
- [ ] No accounts/login system
- [ ] No analytics or tracking
- [ ] No advertisements
- [ ] No in-app purchases
- [ ] No social sharing beyond original
- [ ] Same scoring/progression system
- [ ] Same puzzle solutions
- [ ] Same character attributes

## Test Procedure

1. **Fresh Install Test**
   - Install app on fresh device/emulator
   - Verify Level 1 loads by default
   - Complete Level 1 to verify gameplay

2. **Progression Test**
   - Play through levels 1-5
   - Force close app
   - Reopen and verify level persisted

3. **Navigation Test**
   - Use Next/Previous buttons
   - Verify level changes correctly
   - Android: Test hardware back button

4. **Comparison Test**
   - Open original website in browser
   - Compare side-by-side with app
   - Verify visual parity at all levels

## Sign-Off

| Platform | Tester | Date | Pass/Fail |
|----------|--------|------|-----------|
| Android  |        |      |           |
| iOS      |        |      |           |
