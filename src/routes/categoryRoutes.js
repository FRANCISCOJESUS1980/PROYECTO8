const express = require('express')
const {
  createNewCategory,
  listCategories,
  removeCategory
} = require('../controllers/categoryController')
const { uploadAndHandleError } = require('../middlewares/cloudinaryUpload')
const { validate } = require('../middlewares/validate')
const { joiCategorySchema } = require('../models/Category')

const router = express.Router()

const assignCategoryFolder = (req, res, next) => {
  req.body.folder = 'categories'
  next()
}

router.post(
  '/',
  assignCategoryFolder,
  uploadAndHandleError,
  validate(joiCategorySchema),
  createNewCategory
)
router.get('/', listCategories)
router.delete('/:id', removeCategory)

module.exports = router
