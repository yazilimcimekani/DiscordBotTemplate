const { SlashCommandBuilder } = require('discord.js')

const metadata = {
  name: 'davet',
  cooldown: 0,
  description: 'Botun davet linkini gönderir.',
  active: true,
  slash: new SlashCommandBuilder().addStringOption((input) =>
    input
      .setName('izin')
      .setDescription('İzinleri seçersiniz')
      .setRequired(true)
      .addChoices(
        { name: 'Önerilen', value: '2088234230' },
        { name: 'Yönetici', value: '8' },
        { name: 'Yetkisiz', value: '0' }
      )
  )
}

module.exports = metadata
