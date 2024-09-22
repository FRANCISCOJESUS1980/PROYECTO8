const { Category } = require('../models/Category')

const createCategory = async (categoryData) => {
  const category = new Category(categoryData)
  await category.save()
  return category
}

const getCategories = async () => {
  return Category.find().populate('products')
}

module.exports = { createCategory, getCategories }
