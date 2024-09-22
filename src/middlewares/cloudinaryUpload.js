const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')
const { createError } = require('../utils/errorResponses')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: async (req) => req.body.folder || 'default-folder',
    format: async () => 'png'
  }
})

const uploadImage = multer({ storage })

const deleteUnusedImage = async (imagePath) => {
  try {
    const imageId = imagePath.split('/').pop().split('.')[0]
    await cloudinary.uploader.destroy(imageId)
  } catch (err) {
    console.error('Error eliminando imagen en Cloudinary:', err)
  }
}

const uploadAndHandleError = (req, res, next) => {
  uploadImage.single('image')(req, res, async (err) => {
    if (err) {
      if (req.file) {
        await deleteUnusedImage(req.file.path)
      }
      return next(createError(400, 'Error subiendo imagen'))
    }
    next()
  })
}

module.exports = { uploadAndHandleError, deleteUnusedImage }
