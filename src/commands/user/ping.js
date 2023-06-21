const { EmbedBuilder } = require('discord.js')
const metadata = require('../meta/ping.meta')

module.exports = {
  metadata: metadata,

  async run(interaction) {
    const pingEmbed = new EmbedBuilder().setTitle('Pong!').setDescription(`${client.ws.ping}ms`)

    if (client.ws.ping < 200) {
      pingEmbed.setColor('Green')
    } else if (client.ws.ping < 300) {
      pingEmbed.setColor('DarkOrange')
    } else {
      pingEmbed.setColor('Red')
    }

    await interaction.reply({
      embeds: [pingEmbed],
      ephemeral: true
    })
  }
}
