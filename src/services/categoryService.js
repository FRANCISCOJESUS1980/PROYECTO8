const Category = require('../models/Category')
const cloudinary = require('../config/cloudinary')

const createNewCategory = async (data, file) => {
  const uploadResponse = await cloudinary.uploader.upload(file.path, {
    folder: 'categories'
  })

  const newCategory = new Category({
    ...data,
    imageUrl: uploadResponse.secure_url,
    cloudinaryId: uploadResponse.public_id
  })

  return newCategory.save()
}

const listCategories = async () => {
  return await Category.find()
}

const getCategoryById = async (id) => {
  return await Category.findById(id)
}

const updateCategory = async (id, data, file) => {
  const category = await Category.findById(id)
  if (!category) return null

  if (file) {
    const uploadResponse = await cloudinary.uploader.upload(file.path, {
      folder: 'categories'
    })
    data.imageUrl = uploadResponse.secure_url
    data.cloudinaryId = uploadResponse.public_id

    await cloudinary.uploader.destroy(category.cloudinaryId)
  }

  return await Category.findByIdAndUpdate(id, data, { new: true })
}

const deleteCategory = async (id) => {
  const category = await Category.findById(id)
  if (!category) return null

  await cloudinary.uploader.destroy(category.cloudinaryId)
  return await Category.findByIdAndDelete(id)
}

module.exports = {
  createNewCategory,
  listCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}
