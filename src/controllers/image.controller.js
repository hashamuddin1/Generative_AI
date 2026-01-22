import { textModel } from "../config/gemini.js";

export const generateImagePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;
    const enhancedPrompt = `Create a detailed image description for: ${prompt}`;
    const result = await textModel.generateContent(enhancedPrompt);

    return res.json({
      success: true,
      image_prompt: result.response.text(),
      note: "Use this prompt with an image generation model (Imagen / DALL·E)",
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
