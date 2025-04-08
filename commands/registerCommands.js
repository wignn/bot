require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  { name: 'ping', description: 'Replies with Pong!' },
  { name: 'beep', description: 'Replies with Boop!' },
  { name: 'boop', description: 'Replies with Beep!' },
  { name: 'hello', description: 'Replies with Hello!' },
  { name: 'goodbye', description: 'Replies with Goodbye!' },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

async function registerCommands() {
  try {
    console.log('Registering slash commands...');
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('✅ Successfully registered slash commands!');
  } catch (error) {
    console.error('❌ Error registering commands:', error);
  }
}

module.exports = { registerCommands };
