require('dotenv').config()

const env = {
  PORT: process.env.PORT || 3000,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  MONGO_URI: process.env.DB_URL
}

if (
  !env.CLOUDINARY_CLOUD_NAME ||
  !env.CLOUDINARY_API_KEY ||
  !env.CLOUDINARY_API_SECRET
) {
  throw new Error('Faltan configuraciones de Cloudinary en el archivo .env')
}

if (!env.MONGO_URI) {
  throw new Error('Falta la URL de la base de datos en el archivo .env')
}

module.exports = env
