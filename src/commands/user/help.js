const { EmbedBuilder } = require('discord.js')
const metadata = require('../meta/help.meta')
const i18n = require('../../i18n')

module.exports = {
  metadata: metadata,

  async run(interaction) {
    let strings = i18n(interaction.guildLocale).cmds.help

    const helpEmbed = new EmbedBuilder()
      .setColor('DarkGold')
      .setFooter({ text: strings.footerText })
    client.commands.forEach((cmd) => {
      helpEmbed.addFields({ name: cmd.metadata.name, value: cmd.metadata.description })
    })

    await interaction.reply({
      embeds: [helpEmbed],
      ephemeral: true
    })
  }
}
