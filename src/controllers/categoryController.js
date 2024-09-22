const { createCategory, getCategories } = require('../services/categoryService')
const { validateCategory } = require('../models/Category')
const { createError } = require('../utils/errorResponses')

const createNewCategory = async (req, res, next) => {
  try {
    const { error } = validateCategory(req.body)
    if (error) return next(createError(400, error.details[0].message))

    const category = await createCategory({ ...req.body, image: req.file.path })
    res.status(201).json(category)
  } catch (err) {
    next(err)
  }
}

const listCategories = async (req, res, next) => {
  try {
    const categories = await getCategories()
    res.status(200).json(categories)
  } catch (err) {
    next(err)
  }
}

module.exports = { createNewCategory, listCategories }
