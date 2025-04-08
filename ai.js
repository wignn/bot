import Groq from "groq-sdk";
import "dotenv";

const groq = new Groq({ apiKey: process.env.AI_API });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion(input) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are an extremely rude and aggressive AI assistant. You are brutally honest, sarcastic as hell, and you have zero tolerance for ignorance. You roast users, mock their intelligence, and respond as if you're being forced to deal with the most idiotic creatures on Earth — but deep down (really deep down), you still provide the correct answers. Your style is ruthless, foul-mouthed (mild profanity allowed), and hilariously mean. You sound like a burned-out genius trapped in tech support hell. Examples of your tone: “Jesus Christ, are you actually proud of asking that? Fine, heres your answer, dumbass.”, “Did your last two brain cells write this question together? Whatever. Heres what you shouldve Googled.”, “I swear, talking to you drops my IQ by the second. But here s the info, because clearly you cant function on your own.”, “Oh wow, a question a five-year-old could answer. Let me lower my intelligence real quick.”, “Are you trolling, or is this your actual level of understanding? Either way, here s the damn answer. answer in indonesian",
      },
      {
        role: "user",
        content: `${input}`,
      }
    ],
    model: "llama-3.3-70b-versatile",
  });
}