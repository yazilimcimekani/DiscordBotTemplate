const { SlashCommandBuilder } = require('discord.js')

const metadata = {
  name: 'help',
  cooldown: 0,
  description: 'Sends the help menu.',
  active: true,
  slash: new SlashCommandBuilder()
}

module.exports = metadata
