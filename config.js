require('dotenv-safe/config')
module.exports = {
  BOT: {
    token: process.env.token,
    slashCommandType: process.env.SLASH_COMMANDS_TYPE
  },

  DB: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    connectionIdle: process.env.DB_CONNECTION_IDLE
  }
}
