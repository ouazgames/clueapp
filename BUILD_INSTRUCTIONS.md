# Clues by Sam - Mobile App Build Instructions

This project wraps the existing web game into native mobile apps using Capacitor.

## Prerequisites

### For Android:
- Node.js 20+ and npm (Node 22+ required for Capacitor CLI v8)
- Java JDK 17+
- Android Studio with SDK 33+
- Gradle (usually bundled with Android Studio)

### For iOS:
- macOS with Xcode 15+
- CocoaPods (`sudo gem install cocoapods`)
- Apple Developer account (for device testing/App Store)

## Project Structure

```
cluesbysam-mobile/
├── www/                    # Web game files (served by Capacitor)
├── android/                # Android native project
├── ios/                    # iOS native project (Xcode)
├── capacitor.config.json   # Capacitor configuration
└── package.json
```

## Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Sync Web Assets to Native Projects
After any changes to `www/`:
```bash
npx cap sync
```

### 3. Android Build

#### Open in Android Studio:
```bash
npx cap open android
```

#### Build Debug APK (command line):
```bash
cd android
./gradlew assembleDebug
```
Output: `android/app/build/outputs/apk/debug/app-debug.apk`

#### Build Release APK/AAB:
```bash
cd android
./gradlew assembleRelease
# OR for App Bundle (recommended for Play Store):
./gradlew bundleRelease
```
Output: `android/app/build/outputs/bundle/release/app-release.aab`

**Note:** Release builds require signing configuration in `android/app/build.gradle`.

### 4. iOS Build

#### Open in Xcode:
```bash
npx cap open ios
```

1. Select your development team in Xcode
2. Select target device or simulator
3. Click Build (Cmd+B) or Run (Cmd+R)

#### Install pods (first time or after plugin changes):
```bash
cd ios/App
pod install
```

## App Configuration

### App ID/Bundle ID
- Android: `com.cluesbysam.app` (in `capacitor.config.json`)
- iOS: `com.cluesbysam.app` (in Xcode project settings)

### App Name
"Clues by Sam" - configured in capacitor.config.json

### Orientation
Locked to Portrait mode on both platforms.

### Offline Support
The game works offline as all assets are bundled with the app.

## Signing for Release

### Android
1. Generate keystore:
```bash
keytool -genkey -v -keystore cluesbysam.keystore -alias cluesbysam -keyalg RSA -keysize 2048 -validity 10000
```

2. Add to `android/app/build.gradle`:
```gradle
android {
    signingConfigs {
        release {
            storeFile file('cluesbysam.keystore')
            storePassword 'your-password'
            keyAlias 'cluesbysam'
            keyPassword 'your-password'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

### iOS
1. Open Xcode
2. Select your Team in Signing & Capabilities
3. Ensure you have a valid provisioning profile
4. Archive for distribution via Product > Archive

## Troubleshooting

### Common Issues

1. **Android SDK not found**
   - Set `ANDROID_HOME` environment variable
   - Install Android SDK via Android Studio

2. **iOS pods not installing**
   - Run `pod repo update`
   - Delete `ios/App/Pods` and `ios/App/Podfile.lock`, then run `pod install`

3. **Web assets not updating**
   - Run `npx cap sync` after any changes to `www/`

4. **Back button exits app immediately (Android)**
   - Capacitor back button handler is configured in `www/index.html`
