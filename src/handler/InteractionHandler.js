const { REST, Routes } = require('discord.js')
const { BOT } = require('../../config.js')
const { readdirSync } = require('fs')

class InteractionHandler {
  constructor(client) {
    this.client = client
  }

  handleEvents() {
    try {
      readdirSync('./src/events')
        .filter((file) => file.endsWith('.js'))
        .forEach(async (file) => {
          const event = await require(`../events/${file}`)

          if (!event) return
          this.client.on(event.eventName, event.execute.bind(null, this.client))
          console.log(`[EVENT] ${event.name} adlı event başarıyla yüklendi!`)
        })
    } catch (e) {
      console.log(`[EVENT] Eventler yüklenirken bir hata ortaya çıktı:\n` + e)
    }
  }

  handleButtons() {}

  handleModals() {}

  handleSelectMenus() {}

  handleSlashCommands() {
    const commands = new Set()
    const slashCommands = []
    const rest = new REST({ version: '10' }).setToken(BOT.token)

    readdirSync('./src/commands')
      .filter((dir) => dir != 'meta')
      .forEach(async (dir) => {
        readdirSync(`./src/commands/${dir}`)
          .filter((file) => file.endsWith('.js'))
          .forEach(async (file) => {
            const cmd = await require(`../commands/${dir}/${file}`)
            commands.add(cmd.metadata.name, cmd.run)
            cmd.metadata.slash.setName(cmd.metadata.name).setDescription(cmd.metadata.description)
            slashCommands.push(cmd.metadata.slash.toJSON())
            if (cmd.metadata.contextMenu) {
              await cmd.metadata.contextMenu.setName(cmd.metadata.name)
              slashCommands.push(cmd.metadata.contextMenu.toJSON())
            }
            console.log(`[/CMDS] ${cmd.metadata.name} adlı komut yüklendi.`)
          })
      })

    setTimeout(() => {
      if (BOT.slashCommandType === 'global') {
        rest
          .put(Routes.applicationCommands(BOT.id, BOT.slashCommandType), {
            body: slashCommands
          })
          .then(() => console.log('[/CMDS] Slash komutları global bir şekilde başarıyla yüklendi.'))
      } else {
        rest
          .put(Routes.applicationGuildCommands(BOT.id, BOT.slashCommandType), {
            body: slashCommands
          })
          .then(() =>
            console.log('[/CMDS] Slash komutları sadece bir sunucuya başarıyla yüklendi.')
          )
      }
    }, 1000)
  }

  handleAll() {
    this.handleEvents()
    this.handleButtons()
    this.handleModals()
    this.handleSelectMenus()
    this.handleSlashCommands()
  }
}

module.exports = InteractionHandler
