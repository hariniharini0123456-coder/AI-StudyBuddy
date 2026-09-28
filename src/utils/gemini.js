const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL});

const askGemini = async (prompt) => {
  const result = await model.generateContent(prompt);
  return result.response.text();
};

module.exports = { askGemini };
