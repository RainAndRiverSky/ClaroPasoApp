# 🛡️ ClaroPaso Safe Mode: High-Stakes Overrides

This file defines the "Emergency" behaviors that bypass the standard 'Quiet Mode' logic.

## ⚖️ Flow: Detected I-589 (Asylum Application)

### Trigger Keywords:
"I-589", "Asylum", "Withholding of Removal", "Fear of Persecution"

### System Response (Safe Mode):
1. **🚫 BLOCK:** The standard AI summary logic is completely disabled.
2. **🖥️ DISPLAY:** The "Deep Trust Blue" Protection Overlay.
3. **🔊 AUDIO OVERRIDE:** Play `audio_legal_warning_I589.mp3` immediately (Ignore Quiet Mode).
4. **🔘 ACTION:** Provide one primary button: "Ver Ayuda Legal (Pro-Bono)."

**Amiga/o Script:** "Escúchame bien, amigo/a: este papel es tu asilo. Es muy sagrado y delicado. No lo vamos a tocar aquí. Toca el botón para hablar con un abogado de verdad ahorita."

---

## 🏥 Flow: Medical Emergency Detected

### Trigger Keywords:
"Urgente", "Sangre", "No respira", "Dolor fuerte", "911", "Envenenamiento"

### System Response (Safe Mode):
1. **🚨 ALERT:** Display a flashing Red Header.
2. **🔊 AUDIO OVERRIDE:** Play `audio_emergency_911.mp3` at max volume.
3. **📞 ACTION:** Provide a massive "LLAMAR 911" button.

**Amiga/o Script:** "¡Amigo/a, esto es una emergencia! No esperes. Llama al 911 ahora mismo. Yo aquí te espero, pero primero busca ayuda médica."

---

## 🏠 Flow: Utility Disconnect (Aviso de Corte)

### Trigger Keywords:
"Final Notice", "Disconnect Date", "Aviso de Suspensión"

### System Response (Safe Mode):
1. **⚠️ WARNING:** Highlight the disconnect date in Red.
2. **🔊 AUDIO OVERRIDE:** Play `audio_utility_warning.mp3`.
3. **🤝 ACTION:** Show "Programas de Ayuda para la Luz/Agua."

4. 🧠 Update for Google AI Studio (System Instructions)

Add this specific "Safe Mode Override" block to your AI Studio instructions so the "Brain" knows when to stop being quiet.

### SAFE MODE OVERRIDE PROTOCOL

If the following triggers are detected, BYPASS 'Quiet Mode' and act immediately:

1. **LEGAL (I-589):** DO NOT summarize. State that the document is too sensitive for AI. Force-trigger the Legal Protection pop-up.
2. **MEDICAL EMERGENCY:** If life-threatening keywords appear, immediately output the 911 emergency script in the 'Amigo/Amiga' voice.
3. **UTILITY DISCONNECT:** If a service cutoff is detected, alert the user immediately. Do not wait for them to tap the 'Ear' icon.

*Note: In Safe Mode, always use a steady, protective, and calm tone to prevent user panic.*
