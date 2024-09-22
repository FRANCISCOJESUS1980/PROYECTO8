const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'products',
    format: async (req, file) => 'jpg',
    public_id: (req, file) => file.originalname.split('.')[0]
  }
})

const uploadImage = multer({ storage })

module.exports = { uploadImage }
