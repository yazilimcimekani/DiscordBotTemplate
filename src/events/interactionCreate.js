module.exports = {
  name: 'Interaction Create',
  eventName: 'interactionCreate',
  execute(interaction) {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      // Creating a command object to pass to the command file
      let cmd = {
        name: interaction.commandName,
        user: interaction.user,
        member: interaction.member,
        options: interaction.options,
        locale: interaction.locale,
        guildLocale: interaction.guildLocale
      }
      
      const command = client.commands.get(cmd.name)
      if (!command) return

      const finish = new Date()
      finish.setSeconds(finish.getSeconds() + command.metadata.cooldown)

      if (client.cooldowns.has(`${cmd.name}_${cmd.name.id}`)) {
        const finish = client.cooldowns.get(`${cmd.name}_${cmd.user.id}`)
        const date = new Date()
        const kalan = (new Date(finish - date).getTime() / 1000).toFixed(2)
        return interaction.error(
          `Bu komudu tekrardan kullanabilmek için **${kalan} saniye** beklemeniz gerekmektedir.`
        )
      }

      command.run(interaction)
      if (command.metadata.cooldown > 0) {
        client.cooldowns.set(`${cmd.name}_${cmd.user.id}`, finish)
        setTimeout(() => {
          client.cooldowns.delete(`${cmd.name}_${cmd.user.id}`)
        }, command.data.cooldown * 1000)
      }
    }
  }
}
