const { Category } = require('../models/Category')
const cloudinary = require('../config/cloudinary')

const createNewCategory = async (data, file) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file.path, {
      folder: 'categories'
    })
    const newCategory = new Category({
      ...data,
      image: uploadResponse.secure_url,
      cloudinaryId: uploadResponse.public_id
    })
    return await newCategory.save()
  } catch (error) {
    throw new Error('Error creando nueva categoría: ' + error.message)
  }
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

  let uploadResponse
  if (file) {
    uploadResponse = await cloudinary.uploader.upload(file.path, {
      folder: 'categories'
    })
    data.image = uploadResponse.secure_url
    data.cloudinaryId = uploadResponse.public_id

    await cloudinary.uploader.destroy(category.cloudinaryId)
  }

  return await Category.findByIdAndUpdate(id, data, { new: true })
}
const deleteCategory = async (id) => {
  const category = await Category.findById(id)
  if (!category) {
    throw new Error('Categoría no encontrada')
  }

  console.log('Categoría encontrada:', category)

  if (category.cloudinaryId) {
    try {
      await cloudinary.uploader.destroy(category.cloudinaryId)
    } catch (error) {
      console.error('Error al eliminar imagen de Cloudinary:', error.message)
      throw new Error('Error eliminando la imagen de Cloudinary')
    }
  }

  return await Category.findByIdAndDelete(id)
}

module.exports = {
  createNewCategory,
  listCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}
