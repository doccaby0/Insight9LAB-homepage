import { GoogleGenAI } from "@google/genai";

async function getAromaImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A professional, high-end display of exactly 29 amber glass aromatherapy bottles with white labels, arranged in a beautiful organized grid on a clean wooden surface, surrounded by subtle healing elements like lavender sprigs and soft natural light, 4:5 aspect ratio, editorial photography style.',
        },
      ],
    },
  });

  for (const part of response.candidates![0].content.parts) {
    if (part.inlineData) {
      console.log("IMAGE_DATA_START");
      console.log(part.inlineData.data);
      console.log("IMAGE_DATA_END");
    }
  }
}

getAromaImage();
