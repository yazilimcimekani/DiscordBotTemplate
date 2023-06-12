const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const metadata = require('../meta/invite.meta')

module.exports = {
  metadata: metadata,

  async run(client, interaction) {
    const baseUrl = 'https://discordapp.com/oauth2/authorize'
    let permission = await interaction.options._hoistedOptions[0].value
    let url = `${baseUrl}?client_id=${client.user.id}&scope=bot&permissions=${permission}`
    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setLabel('Davet Et').setURL(url).setStyle(ButtonStyle.Link)
    )

    await interaction.reply({
      content: 'Beni Sunucuna Ekle',
      components: [button],
      ephemeral: true
    })
  }
}
