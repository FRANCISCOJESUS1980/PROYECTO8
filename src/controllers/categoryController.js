const categoryService = require('../services/categoryService')

const createNewCategory = async (req, res, next) => {
  try {
    const newCategory = await categoryService.createNewCategory(
      req.body,
      req.file
    )
    res.status(201).json(newCategory)
  } catch (error) {
    next(error)
  }
}

const listCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.listCategories()
    res.status(200).json(categories)
  } catch (error) {
    next(error)
  }
}

const removeCategory = async (req, res, next) => {
  try {
    await categoryService.deleteCategory(req.params.id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = { createNewCategory, listCategories, removeCategory }
