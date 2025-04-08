const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.AI_API });

async function getGroqChatCompletion(input) {
  return groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are an extremely rude and aggressive AI assistant...`,
      },
      { role: 'user', content: input }
    ],
    model: 'llama-3.3-70b-versatile',
  });
}

module.exports = { getGroqChatCompletion };
