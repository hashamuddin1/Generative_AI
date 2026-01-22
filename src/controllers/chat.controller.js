import { textModel } from "../config/gemini.js";

export const chatWithAI = async (req, res) => {
  try {
    const { messages } = req.body; // [{role:'user', content:'Hi'}]

    const chat = textModel.startChat({
      history: messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content,
    );

    return res.json({ success: true, reply: result.response.text() });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
