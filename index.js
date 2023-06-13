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
  .then(() => console.log('[BOT] Bota giriş yapıldı!'))
  .catch((e) => console.log('[BOT] Bota giriş yapılırken bir hata oluştu:\n' + e))
