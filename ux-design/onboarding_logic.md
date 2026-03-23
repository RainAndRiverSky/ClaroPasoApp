# 📂 For my GitHub Repo
To make this "ClaroPaso Professional," you need to document the Logic of the welcome, not just the words. Add these files to your repository:

This File tells the developer exactly how the "First Run" should behave.

# First-Run Experience (Onboarding)

## Visual Triggers:
- **Layer 0:** Darkened background (70% opacity).
- **Layer 1:** High-contrast Pulse on the "Ear" Icon (Top-Right).
- **Layer 2:** Yellow Arrow (#FFD700) pointing to the Camera Button.

## Audio Trigger Logic:
- **Play `welcome_part_1`** immediately on launch.
- **Delay 3 seconds**, then **Play `welcome_part_2`** (The Ear).
- **Delay 2 seconds**, then **Pulse Arrow** and **Play `welcome_part_3`** (The Camera).

## Exit Condition:
- Onboarding ends the moment the user taps the Camera button for the first time.
