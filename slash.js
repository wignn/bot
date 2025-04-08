require('dotenv').config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;
const { REST, Routes } = require('discord.js');

const command = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: 'beep',
        description: 'Replies with Boop!',
    },
    {
        name: 'boop',
        description: 'Replies with Beep!',
    },
    {
        name: 'hello',
        description: 'Replies with Hello!',
    },
    {
        name: 'goodbye',
        description: 'Replies with Goodbye!',
    }
];

const rest = new REST({ version: '10' }).setToken(TOKEN);
try{
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: command });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}