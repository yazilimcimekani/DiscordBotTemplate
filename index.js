const config = require('./config.js')
const { Client, Collection } = require('discord.js')
const InteractionHandler = require('./src/InteractionHandler.js')
const client = new Client({
  intents: 3276799
})

client.commands = new Collection()
client.cooldowns = new Collection()

const handler = new InteractionHandler(client)
handler.handleAll()

global.client = client

client
  .login(config.BOT.token)
  .then(() => console.log('[BOT] Logged in successfully!'))
  .catch((e) => {
    console.log('[BOT] An error occurred while logging in!')
    throw new Error(e)
  })
