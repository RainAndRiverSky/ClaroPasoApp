# 🔊 Master Audio Logic: User-Triggered (Amigo/Amiga)

This file defines the audio behavior for ClaroPaso. To prevent "Audio Fatigue," the app follows a **"Quiet First"** philosophy.

## 1. 🛑 The "Silent Default" Rule
- **No Autoplay:** Audio must NOT play automatically when a screen loads or a tile is tapped.
- **The "Ear" Trigger:** Audio summaries only play if the user taps the **👂 (Ear Icon)** or asks: "¿Qué dice aquí?".

## 2. 🚻 Gender Adaptation (Amigo/Amiga)
When audio is triggered by the user, the system must check the `user_gender` preference:
- **Profile A (Female):** System uses "Amiga" and a warm Female Voice.
- **Profile B (Male):** System uses "Amigo" and a steady Male Voice.
- **Fallback:** Default to "Amiga" (nurturing/supportive) if no preference is selected.

## 3. 🚨 The Only Exception: Legal Safety
- **Logic:** The only audio that **MUST** autoplay is the **I-589 Legal Protection Warning**.
- **Reason:** This is a high-stakes safety requirement to prevent unauthorized legal self-filling.

## 4. 🛠 Playback Commands for Developers
Every `playAudio` trigger must call the specific file based on the context:
- `playAudio(category_intro, user_gender)`
- `playAudio(summary_readout, user_gender)`

## 5. 🗺️ Anchor-Specific Audio Tones
When audio is triggered via the "Ear" icon, the system must use the following tonal profiles:
- **Hogar/Escuela:** Supportive, Encouraging (Honey).
- **Salud/Visión/Dental:** Calm, Instructive, Steady.
- **Legal:** Serious, Protective (Steel), Lower Pitch.

**Logic Note:** If the document is categorized as 'Legal' but NOT 'I-589', the user must still tap the 'Ear' to hear the summary. Only the 'I-589' bypasses this rule.
