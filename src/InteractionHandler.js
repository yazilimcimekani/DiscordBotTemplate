const { REST, Routes } = require('discord.js')
const { BOT } = require('../config.js')
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
          const event = await require(`./events/${file}`)

          if (!event) return
          this.client.on(event.eventName, event.execute)
          console.log(`[EVENT] ${event.name} event loaded successfully!`)
        })
    } catch (e) {
      console.log('[EVENT] An error occurred while loading events!')
      throw new Error(e)
    }
  }

  handleButtons() {}

  handleModals() {}

  handleSelectMenus() {}

  handleSlashCommands() {
    const slashCommands = []
    const rest = new REST({ version: '10' }).setToken(BOT.token)

    readdirSync('./src/commands')
      .filter((dir) => dir != 'meta')
      .forEach(async (dir) => {
        readdirSync(`./src/commands/${dir}`)
          .filter((file) => file.endsWith('.js'))
          .forEach(async (file) => {
            const cmd = await require(`./commands/${dir}/${file}`)
            this.client.commands.set(cmd.metadata.name, cmd)
            cmd.metadata.slash.setName(cmd.metadata.name).setDescription(cmd.metadata.description)
            slashCommands.push(cmd.metadata.slash.toJSON())
            if (cmd.metadata.contextMenu) {
              await cmd.metadata.contextMenu.setName(cmd.metadata.name)
              slashCommands.push(cmd.metadata.contextMenu.toJSON())
            }
            console.log(`[/CMDS] ${cmd.metadata.name} command loaded!`)
          })
      })

    setTimeout(() => {
      if (BOT.slashCommandType === 'global') {
        rest
          .put(Routes.applicationCommands(BOT.id, BOT.slashCommandType), {
            body: slashCommands
          })
          .then(() => console.log('[/CMDS] All slash commands loaded globally!'))
      } else {
        rest
          .put(Routes.applicationGuildCommands(BOT.id, BOT.slashCommandType), {
            body: slashCommands
          })
          .then(() => console.log('[/CMDS] All slash commands loaded in the guild!'))
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
