#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm ci
npx cap sync android
cd android
chmod +x gradlew
./gradlew assembleDebug
printf '\nAPK: android/app/build/outputs/apk/debug/app-debug.apk\n'
