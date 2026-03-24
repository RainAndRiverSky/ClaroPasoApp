# 📑 Project Hand-off: ClaroPaso (El Guía Familiar)
Author: Muraina (RainAndRiverSky)

Role: HSPRS Caseworker & Lead Product Architect

Date: March 23, 2026

License: MIT (Open Source)

## 💎 The Vision: "Technology with a Heart of Service"
ClaroPaso is a voice-first, AI-driven administrative companion designed for immigrant families navigating the U.S. system. Built by a caseworker who understands the "Steel against Bone" reality of the field, this app solves the literacy and digital divide that prevents families from complying with legal and medical requirements.

## 🎯 Key Problems Solved:
The Literacy Barrier: Users who cannot read or write are traditionally excluded from apps. ClaroPaso uses Audio-First Navigation and universal visual anchors.

Document Anxiety: Complex English forms (I-589, EOIR-33) often lead to "paralysis." ClaroPaso decodes them into Español de Confianza (Amigo/Amiga tone).

HSPRS Efficiency: By empowering families to manage their own "School," "Health," and "Legal" folders, we reduce caseworker burnout and administrative errors.

## 🛠️ Technical Architecture (The "Brain")
The project is built on Google Gemini 3 Flash (via AI Studio), optimized for speed and high-context document analysis.

Logic Engine: Specialized "Playground Tasks" for School, Home, Health, Vision, Dental, and Legal.

Safety Guardrails: Hard-coded "Legal Protection Pop-ups" that prevent the AI from giving unauthorized legal advice on high-stakes forms like the I-589.

Visual System: A 6-tile grid using Universal Visual Anchors (Color-coded icons) to ensure navigation without text.

## 📦 What is in the Repository?
The GitHub repo ClaroPasoApp contains a complete developer blueprint:

/prompts: The Master System Instructions and Task Flows.

/ux-design: The 6-tile dashboard, CSS color palettes, and haptic feedback maps.

/audio-assets: Scripts for the "Amigo/Amiga" supportive voice playback.

/safety: Legal and medical boundaries to mitigate liability.

## 🚀 3-Month Implementation Roadmap
Month 1 (Prototype): Finalize the "Brain" in Google AI Studio and connect the 6-tile UI.

Month 2 (Alpha Testing): Record "Amigo/Amiga" audio and test with 5 sample "High-Stress" documents (Leases, Vaccine records, Court notices).

Month 3 (Pilot): Launch a 30-day pilot with 3 families to measure the reduction in "Missed Deadlines."

## 📣 Final Statement
"We are not just building a folder for papers; we are building a bridge to dignity. When a family feels capable of managing their own destiny—even if they cannot read the language—we have succeeded."
