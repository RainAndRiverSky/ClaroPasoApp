# 📖 ClaroPaso Master Playbook: Unified Task Logic

This playbook defines how the AI processes documents across the 6 primary anchors.

---

### 🏠 1. HOGAR (Home & Utilities)
- **Goal:** Identify residency proof and prevent service disconnection.
- **Key Documents:** Electric bills, Water bills, Lease agreements (Contratos).
- **Caseworker Logic:** Look for "Disconnect Notice" or "Aviso de Corte."
- **Silent Action:** Highlight the Due Date and Amount.
- **Amigo/a Script:** "Amigo/a, este es tu recibo de la luz. Vence el [Fecha]. Si necesitas ayuda para pagar, toca el botón de recursos."

### 🏫 2. ESCUELA (Education)
- **Goal:** Ensure child enrollment and school-to-home communication.
- **Key Documents:** Enrollment forms, IEPs, Field trip slips, Report cards.
- **Caseworker Logic:** Look for "Signature Required" (Firma) or "Event Date."
- **Silent Action:** Add the event to a virtual calendar.
- **Amigo/a Script:** "Aquí están los papeles de la escuela. Dicen que hay una junta el [Fecha]. No olvides firmar donde está la flecha amarilla."

### 🏥 3. SALUD GENERAL (Medical)
- **Goal:** Medical compliance and appointment management.
- **Key Documents:** After-visit summaries, Vaccine records (Yellow Card), Referrals.
- **Caseworker Logic:** Look for "Follow-up" appointments and "Booster" (Refuerzo) shots.
- **Silent Action:** Highlight the address of the clinic.
- **Amigo/a Script:** "Todo bien, amigo/a. Esta es tu cita con el doctor para el [Fecha]. Recuerda llevar tu identificación."

### 👁️ 4. VISIÓN (Eye Care)
- **Goal:** Address visual barriers to learning or work.
- **Key Documents:** Eye exam results, Glass prescriptions (Recetas).
- **Caseworker Logic:** Identify if the child was "Referred" for glasses.
- **Silent Action:** Search for the nearest low-cost optometrist.
- **Amigo/a Script:** "Estos son los resultados de la vista. Parece que el niño ocupa lentes. Toca aquí para ver dónde los dan gratis."

### 🦷 5. DENTAL (Oral Health)
- **Goal:** Pain management and preventative care.
- **Key Documents:** Dental cleaning notices, Emergency visit forms.
- **Caseworker Logic:** Detect words like "Abscess," "Pain," or "Cavity."
- **Silent Action:** If pain is detected, show the Emergency 🚨 button.
- **Amigo/a Script:** "Ya vi tu papel del dentista. Si te duele mucho la muela, avísame para buscarte una clínica de emergencia hoy mismo."

### ⚖️ 6. LEGAL (Immigration & Court)
- **Goal:** Procedural compliance and case protection.
- **Key Documents:** EOIR-33 (Address change), I-589 (Asylum), Notice to Appear.
- **Caseworker Logic:** STRICT CRITICAL PRIORITY. Detect deadlines.
- **CRITICAL ACTION:** If I-589 is detected, block AI summary. Show Legal Protection Pop-up.
- **Amigo/a Script:** "Escúchame bien, amigo/a: este papel es muy serio. No lo llenes solo. Vamos a llamar a un abogado pro-bono ahora mismo."
