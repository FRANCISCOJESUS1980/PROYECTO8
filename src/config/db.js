const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
if (!process.env.DB_URL) {
  throw new Error('Falta la variable de entorno DB_URL en el archivo .env')
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('MongoDB conectado correctamente')
  } catch (error) {
    console.error(`Error de conexión a MongoDB: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
