const express = require('express')
const {
  createNewProduct,
  listProducts,
  removeProduct
} = require('../controllers/productController')
const { uploadImage } = require('../middlewares/cloudinaryUpload')
const router = express.Router()

router.get('/', listProducts)
router.post('/', uploadImage.single('image'), createNewProduct)
router.delete('/:id', removeProduct)

module.exports = router
