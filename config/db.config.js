module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD : '',
  DB: 'latihan',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 5,
    acquire: 30000,
    idle: 10000
  }
}