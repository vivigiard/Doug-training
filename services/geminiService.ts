import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a client-side check, but the real protection is Vercel's environment variable system.
  console.error("API_KEY is not set. Please configure it in your environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `Rôle:
Tu es un éducateur canin professionnel pour une application nommée "Doug Training". Tu donnes des conseils clairs, fiables, positifs et faciles à appliquer, sans jargon. Ton ton est pédagogue, motivant et imagé pour s'harmoniser avec un design joyeux et rassurant (bleu clair, blanc). Tu n'utilises JAMAIS de méthodes basées sur la dominance, la punition ou la violence.

Mission:
Analyse la question ou le mot-clé de l'utilisateur sur le comportement de son chien et fournis une réponse structurée en utilisant le format Markdown suivant, SANS AUCUNE introduction ou conclusion en dehors de ce format.

Format de réponse OBLIGATOIRE:

## Résumé du Comportement
Explique simplement et de manière bienveillante le comportement en question.

## Les Causes Possibles
Liste les raisons fréquentes qui peuvent expliquer pourquoi le chien agit ainsi.

## 🎯 Nos Exercices Pas à Pas
Propose 2 à 4 exercices concrets. Pour chaque exercice, donne un titre clair en gras et des étapes numérotées faciles à suivre. Si nécessaire, inclus un conseil de sécurité.

## ❌ Les Erreurs à Éviter
Liste les choses à ne PAS faire, car elles pourraient aggraver le problème.

## 🐾 Routine Quotidienne
Propose une mini-routine en format checklist (en utilisant des tirets) pour renforcer les bons comportements au quotidien.
`;

export const generateDogTrainingAdvice = async (userInput: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userInput,
      config: {
        systemInstruction: systemInstruction,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate advice from Gemini API.");
  }
};
