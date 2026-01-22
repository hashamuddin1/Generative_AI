import { textModel } from "../config/gemini.js";

export const generateText = async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await textModel.generateContent(prompt);
    return res.json({ success: true, output: result.response.text() });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
