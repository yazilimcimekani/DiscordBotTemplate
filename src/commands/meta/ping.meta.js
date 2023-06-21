const { SlashCommandBuilder } = require('discord.js')

const metadata = {
  name: 'ping',
  cooldown: 0,
  description: 'My Response time',
  active: true,
  slash: new SlashCommandBuilder()
}

module.exports = metadata
