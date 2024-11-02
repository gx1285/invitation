import { ChatInputCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
const commands = [
  new ChatInputCommandBuilder().setName('ping').setDescription('Botの動作確認'),
];

const rest = new REST({ version: '10' }).setToken(process.env['DISCORD_TOKEN']);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env['CLIENT_ID']), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
