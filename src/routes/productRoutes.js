const express = require('express')
const {
  createNewProduct,
  listProducts,
  removeProduct
} = require('../controllers/productController')
const { uploadAndHandleError } = require('../middlewares/cloudinaryUpload')
const { validate } = require('../middlewares/validate')
const { joiProductSchema } = require('../models/Product')

const router = express.Router()

const assignProductFolder = (req, res, next) => {
  req.body.folder = 'products'
  next()
}

router.post(
  '/',
  assignProductFolder,
  uploadAndHandleError,
  validate(joiProductSchema),
  createNewProduct
)
router.get('/', listProducts)
router.delete('/:id', removeProduct)

module.exports = router
