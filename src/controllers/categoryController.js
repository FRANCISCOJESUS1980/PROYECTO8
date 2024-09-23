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
const getCategoryById = async (req, res, next) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id)
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }
    res.status(200).json(category)
  } catch (error) {
    next(error)
  }
}
const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await categoryService.updateCategory(
      req.params.id,
      req.body,
      req.file
    )
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }
    res.status(200).json(updatedCategory)
  } catch (error) {
    next(error)
  }
}
const removeCategory = async (req, res, next) => {
  try {
    const deletedCategory = await categoryService.deleteCategory(req.params.id)
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createNewCategory,
  listCategories,
  getCategoryById,
  updateCategory,
  removeCategory
}
