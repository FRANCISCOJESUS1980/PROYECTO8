const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')

dotenv.config()

if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  throw new Error(
    'Faltan las configuraciones necesarias de Cloudinary en el archivo .env'
  )
}
try {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

  console.log('Cloudinary configurado correctamente')
} catch (error) {
  console.error('Error al configurar Cloudinary:', error.message)
  process.exit(1)
}

module.exports = cloudinary
