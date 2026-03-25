# 👂 Feature: The "Persistent Audio Helper" (The Ear Icon)

To prevent cognitive overload, ClaroPaso uses an **Invisible Teacher** approach. The "Ear" icon acts as a gentle guide that only speaks when invited or when it senses the user is stuck.

## ⏱️ Idle Logic
If a user is staring at a screen for more than **10 seconds** without moving, the "Ear" pulses.

## 🗣️ Contextual Interaction (Amigo/Amiga)
If they tap the pulsing icon, the AI provides category-specific guidance:

| Anchor | AI Interaction Script |
| :--- | :--- |
| **🏠 Hogar** | "¿Te quedaste pensando, amigo/a? Aquí es donde guardamos tus recibos de luz y agua. ¿Quieres que lea cuánto debes?" |
| **🏫 Escuela** | "¿Necesitas ayuda con los papeles del niño? Aquí puedes ver sus grados o subir sus vacunas. ¿Qué quieres hacer?" |
| **🏥 Salud** | "No te preocupes, estamos en la sección médica. Aquí están tus citas. ¿Quieres que te diga cuándo es la próxima?" |
| **👁️ Visión** | "¿Buscas lo de tus lentes? Aquí guardamos tu receta de los ojos. Toca un papel para que te lo explique." |
| **🦷 Dental** | "¿Todo bien con tus dientes? Si te duele algo, toca el botón rojo de emergencia. Si no, aquí están tus limpiezas." |
| **⚖️ Legal** | "Esta parte es seria, amigo/a. Aquí están tus citas de la corte. Toca el sobre para ver la fecha importante." |

## 🛠️ Visual Behavior
- **Icon:** A small, friendly ear icon stays in the corner.
- **Pulse:** A soft "Breathe" animation (opacity 0.5 to 1.0) starts after the idle timer hits 10s.
- **Haptic:** A "Tiny Tap" vibration occurs when the icon begins to pulse.
