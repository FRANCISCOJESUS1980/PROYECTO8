const express = require('express')
const {
  createNewCategory,
  listCategories
} = require('../controllers/categoryController')
const { uploadImage } = require('../middlewares/cloudinaryUpload')
const router = express.Router()

router.get('/', listCategories)
router.post('/', uploadImage.single('image'), createNewCategory)

module.exports = router
