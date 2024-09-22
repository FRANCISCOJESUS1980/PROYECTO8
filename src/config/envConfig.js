require('dotenv').config()

const env = {
  PORT: process.env.PORT || 3000,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  MONGO_URI: process.env.DB_URL
}

module.exports = env
