const { Sequelize } = require('sequelize')
const { DB } = require('./config')
if (!DB) return

function connect(dbName) {
  if (dbName == 'mysql' || dbName == 'mssql') {
    return connectWithParams(DB.host, DB.username, DB.password, DB.database, DB._type)
  } else if (dbName === 'postgres') {
    return connectWithString(DB.connectionString, DB._type)
  }
}

function connectWithParams(host, username, password, database, dialect) {
  return new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
  })
}

function connectWithString(connectionString, dialect) {
  return new Sequelize(connectionString, { dialect: dialect })
}

const sequelize = connect(DB._type)
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error)
  })

module.exports = sequelize
