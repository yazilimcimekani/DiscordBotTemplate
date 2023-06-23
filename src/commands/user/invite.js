const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const metadata = require('../meta/invite.meta')
const i18n = require('../../i18n')

module.exports = {
  metadata: metadata,

  async run(interaction) {
    let strings = i18n(interaction.guildLocale).cmds.invite

    const baseUrl = 'https://discordapp.com/oauth2/authorize'
    let permission = await interaction.options._hoistedOptions[0].value
    let url = `${baseUrl}?client_id=${client.user.id}&scope=bot&permissions=${permission}`
    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setLabel(strings.inviteLabel).setURL(url).setStyle(ButtonStyle.Link)
    )

    await interaction.reply({
      content: strings.inviteText,
      components: [button],
      ephemeral: true
    })
  }
}
