const { SlashCommandBuilder } = require('discord.js')

const metadata = {
  name: 'invite',
  cooldown: 0,
  description: 'Sends the bot invite link.',
  active: true,
  slash: new SlashCommandBuilder().addStringOption((input) =>
    input
      .setName('permissions')
      .setDescription('Choose the permissions')
      .setRequired(true)
      .addChoices(
        { name: 'Recommended', value: '2088234230' },
        { name: 'Administrator', value: '8' },
        { name: 'Without permissions', value: '0' }
      )
  )
}

module.exports = metadata
