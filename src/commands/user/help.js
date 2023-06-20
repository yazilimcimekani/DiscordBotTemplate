const { EmbedBuilder } = require('discord.js')
const metadata = require('../meta/help.meta')

module.exports = {
  metadata: metadata,

  async run(interaction) {
    const helpEmbed = new EmbedBuilder().setColor('DarkGold').setFooter({ text: 'Bot Help Menu' })
    client.commands.forEach((cmd) => {
      helpEmbed.addFields({ name: cmd.metadata.name, value: cmd.metadata.description })
    })

    await interaction.reply({
      embeds: [helpEmbed],
      ephemeral: true
    })
  }
}
