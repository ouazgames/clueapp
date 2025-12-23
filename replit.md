# Clues by Sam

A logic puzzle game where players deduce who is a criminal based on clues.

## Overview

This is a static website game with 50 logic puzzles. Players progress through levels, with the game cycling back through puzzles after level 50.

## Project Structure

- `cluesbysam(2)/` - Main game directory containing all static assets
  - `index.html` - Main game page
  - `assets/` - CSS and JS assets
  - `game/assets/` - Individual puzzle scripts (50 puzzles with obfuscated filenames)
  - `common.css` - Shared styles

- `server.js` - Simple Node.js static file server

## Running the Project

The project runs on port 5000 using a Node.js static file server:
```
node server.js
```

## Game Features

- 50 unique logic puzzles
- Level progression system (stored in localStorage)
- Theme support
- Navigation buttons to move between levels
