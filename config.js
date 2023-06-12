require('dotenv-safe').config({
  allowEmptyValues: true,
  example: '.env.example'
})

const configuration = {
  BOT: {
    token: process.env.token,
    slashCommandType: process.env.SLASH_COMMANDS_TYPE,
    id: process.env.ID
  }
}

switch (process.env.DB) {
  case 'mysql':
    configuration.DB = {
      _type: process.env.DB,
      host: process.env.MYSQL_HOST,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    }
    break
  case 'postgres':
    configuration.DB = {
      _type: process.env.DB,
      connectionString: process.env.POSTGRES_CONNECTION_STRING
    }
    break
  case 'mongodb':
    configuration.DB = {
      _type: process.env.DB,
      connectionString: process.env.MONGODB_CONNECTION_STRING
    }
    break
}

module.exports = configuration
