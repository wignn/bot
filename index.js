require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');
const { registerCommands } = require('./commands/registerCommands.js');
const handleInteraction = require('./handlers/interactionHandler.js');
const { getGroqChatCompletion } = require('./utils/groq.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  registerCommands();
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith('!pler')) {
    const input = message.content.slice(6);
    const pler = await getGroqChatCompletion(input);
    await message.reply(pler.choices[0]?.message?.content || '');
  }
});

client.on(Events.InteractionCreate, handleInteraction);

client.login(process.env.TOKEN);
