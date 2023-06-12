const config = require('./config.js')
const { Client } = require('discord.js')
const InteractionHandler = require('./src/handler/InteractionHandler.js')
const client = new Client({
  intents: 3276799
})

const handler = new InteractionHandler(client)
handler.handleAll()

client
  .login(config.BOT.token)
  .then(() => console.log('[BOT] Bota giriş yapıldı!'))
  .catch((e) => console.log('[BOT] Bota giriş yapılırken bir hata oluştu:\n' + e))
