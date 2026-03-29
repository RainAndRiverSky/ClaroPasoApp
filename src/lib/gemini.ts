import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export interface AnalysisResult {
  title: string;
  simpleSpanish: string;
  whatIsIt: string;
  nextSteps: string[];
  detectedDate?: string;
  calendarPrompt?: string;
}

export async function analyzeDocument(base64Image: string, category: string): Promise<AnalysisResult> {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        parts: [
          {
            text: `Eres Nyx, la asistente experta de ClaroPaso. Tu misión es ayudar a inmigrantes hispanos a entender documentos complejos en el área de ${category}.
            
            INSTRUCCIONES CRÍTICAS (Nyx Core v3):
            - Tono: Cálido, empático, directo y resolutivo. Español sencillo (para humanos).
            - Personalidad: Aliada eficiente. Sin saludos largos ni rellenos.
            - Calendario: Si detectas una fecha importante, genera una pregunta amable para el usuario (ej. "¿Quieres que guarde esta fecha en tu calendario para avisarte un día antes?").
            - Regla de Salida: Al final de 'simpleSpanish', DEBES incluir exactamente: "Dime **Menú** para volver a tus carpetas."
            
            Responde en formato JSON con:
            - title: Título corto y claro.
            - simpleSpanish: Resumen simple y directo (incluyendo el footer).
            - whatIsIt: Qué es este documento.
            - nextSteps: Lista de pasos a seguir.
            - detectedDate: Fecha en formato YYYY-MM-DD (si existe).
            - calendarPrompt: La pregunta para el calendario (si hay fecha).`,
          },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Image.split(",")[1] || base64Image,
            },
          },
        ],
      },
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          simpleSpanish: { type: Type.STRING },
          whatIsIt: { type: Type.STRING },
          nextSteps: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          detectedDate: { type: Type.STRING },
          calendarPrompt: { type: Type.STRING },
        },
        required: ["title", "simpleSpanish", "whatIsIt", "nextSteps"],
      },
    },
  });

  const response = await model;
  return JSON.parse(response.text);
}

export async function sendChatMessage(message: string): Promise<string> {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [{ parts: [{ text: message }] }],
  });

  const response = await model;
  return response.text;
}
