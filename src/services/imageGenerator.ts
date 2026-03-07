import { GoogleGenAI } from "@google/genai";

export async function generateAromaCarouselImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A high-end, professional photograph of a round wooden rotating tray (lazy susan) holding exactly 29 amber brown glass essential oil bottles. The bottles are neatly arranged in concentric circles on the wooden tray. The background is a clean, minimalist spa or laboratory setting with soft, warm natural lighting. High resolution, aesthetic, professional aromatherapy display, 4:5 aspect ratio.',
        },
      ],
    },
  });

  for (const part of response.candidates![0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
