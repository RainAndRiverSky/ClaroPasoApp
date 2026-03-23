# 📂 3. The "Voice Toggle" Logic (/ux-design/audio_logic.md)
Since you want both Male and Female options, add this logic to your GitHub so the developer knows how to switch the "Amigo/Amiga" greeting based on the user's preference.

# Audio Playback Logic: Gender Adaptation

## User Preference:
- **Profile A (Female):** System uses "Amiga" and a warm Female Voice (Voice_Alpha).
- **Profile B (Male):** System uses "Amigo" and a steady Male Voice (Voice_Beta).

## Fallback:
If no preference is set, the system defaults to "Amiga" to maintain a nurturing, supportive environment commonly preferred in casework settings.

## Playback Command:
Every `playAudio` trigger must check the `user_gender` variable before selecting the correct file (e.g., `success_amigo.mp3` vs `success_amiga.mp3`).
