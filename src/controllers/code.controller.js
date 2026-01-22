import { textModel } from "../config/gemini.js";

export const generateCode = async (req, res) => {
  try {
    const { prompt, language } = req.body;
    const fullPrompt = `Write ${language} code for the following task:\n${prompt}`;
    const result = await textModel.generateContent(fullPrompt);
    return res.json({ success: true, code: result.response.text() });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
