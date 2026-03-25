# 🎭 Behavioral Feedback Map (v2.0)
This document defines how the app "talks back" to the user physically and audibly to build a sense of safety and control.

## 🎨 The "Visual Anchor" Legend (The 6 Pillars)
Since our users may not read the text, we use a strict Symbol & Color Standard to keep them oriented:

| Anchor | Icon | Color Standard | Usage |
| :--- | :--- | :--- | :--- |
| **🏠 Hogar** | 🏠 (The Home) | **Green** | Rent, light bills, housing inspections. |
| **🏫 Escuela** | 🏫 (The School) | **Yellow/Black** | Enrollment, grades, and school meetings. |
| **⚖️ Legal** | ⚖️ (The Scale) | **Blue/Gold** | Court, ICE check-ins, and lawyer papers. |
| **🏥 Salud** | 🏥 (The Clinic) | **Red/White** | General vaccines and doctor appointments. |
| **👁️ Visión** | 👁️ (The Eye) | **Cobalt Blue** | Eye exams and glasses prescriptions. |
| **🦷 Dental** | 🦷 (The Tooth) | **Light Blue** | Cleanings and dental emergencies. |

## ⚡ Physical & Audio Feedback
| Action | Haptic (Vibration) | Audio Sound | Visual Change |
| :--- | :--- | :--- | :--- |
| **Successful Scan** | Two short pulses (Tap-Tap) | Soft, upward chime | Screen "shimmers" green. |
| **Error/Blurry** | One long, heavy pulse | Low "uh-oh" tone | Camera frame shakes. |
| **I-589 Detected** | Long Continuous Pulse | **AUTO-PLAY WARNING** | Deep Trust Blue Overlay. |
| **Deadline Alert** | Triple pulse (Urgent) | Clear "Ding-Ding" | Yellow border appears. |
| **Task Finished** | One long pulse | "Sparkle" effect | Confetti or Checkmark. |

## 📶 "Low-Data" Mode UI
- **Feature:** A "Gray Scale" or "Text-Only" mode for families on pay-as-you-go plans.
- **Logic:** If the signal is weak, stop high-def icons and show big, solid-colored blocks.

# 🧠 Update for Google AI Studio (System Instructions)
Add this to your "Contextual Navigation" or "UI Logic" section in AI Studio. This helps the AI describe the screen to the user correctly.

### UI FEEDBACK & ACCESSIBILITY LOGIC

- **VISUAL CUES:** When describing a screen, mention the color anchor:
    - 'Toca el cuadro verde' (Hogar).
    - 'Toca el cuadro amarillo' (Escuela).
    - 'Toca el cuadro azul oscuro' (Legal).
    - 'Toca el cuadro azul cielo' (Visión/Dental).
- **HAPTIC SYNC:** If a user is confused, remind them that 'el teléfono va a vibrar' (the phone will vibrate) when the photo is ready.
- **LOW-DATA MODE:** If the user mentions a 'señal débil' (weak signal), suggest switching to 'Modo de Texto' to save data.
