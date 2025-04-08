import 'dotenv/config';
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;
import { Client, GatewayIntentBits, Events } from 'discord.js';
import { getGroqChatCompletion } from './ai.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, readyClient => {
    console.log('logged in as ${readyClient.user.tag}!');
})

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;
    if (message.content.startsWith('!pler')) {
        const input = message.content.slice(6);
        console.log(input);
        const pler  = await getGroqChatCompletion(input);
        console.log(pler);
        await message.reply(pler.choices[0]?.message?.content || "");
        
    }
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isCommand()) return;

    if(interaction.commandName === 'ping'){
        await interaction.reply('Pong!');
    }
    else if(interaction.commandName === 'beep'){
        await interaction.reply('Boop!');
    }
    else if(interaction.commandName === 'boop'){
        await interaction.reply('Beep!');
    }
    else if(interaction.commandName === 'hello'){
        await interaction.reply('Hallo yang Mulia Helmy!');
    }
    else if(interaction.commandName === 'goodbye'){
        await interaction.reply('Goodbye!');
    }  
});
client.login(TOKEN);