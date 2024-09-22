const Category = require('../models/Category').Category
const { deleteUnusedImage } = require('../middlewares/cloudinaryUpload')

const createNewCategory = async (categoryData, file) => {
  const image = file ? file.path : ''
  return await Category.create({ ...categoryData, image })
}

const listCategories = async () => {
  return await Category.find()
}

const deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id)
  if (category) {
    await deleteUnusedImage(category.image)
  }
}

module.exports = { createNewCategory, listCategories, deleteCategory }
