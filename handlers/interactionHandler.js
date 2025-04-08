module.exports = async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
  
    const replies = {
      ping: 'Pong!',
      beep: 'Boop!',
      boop: 'Beep!',
      hello: 'Hallo yang Mulia Helmy!',
      goodbye: 'Goodbye!',
    };
  
    const reply = replies[interaction.commandName];
    if (reply) {
      await interaction.reply(reply);
    }
  };
  