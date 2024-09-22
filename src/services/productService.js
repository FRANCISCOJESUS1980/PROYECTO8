const cloudinary = require('../config/cloudinary')
const { Product } = require('../models/Product')
const { Category } = require('../models/Category')

const createProduct = async (productData) => {
  const product = new Product(productData)
  const category = await Category.findById(productData.category)

  if (!category) {
    throw new Error('Categoría no encontrada')
  }

  await product.save()
  category.products.push(product._id)
  await category.save()

  return product
}

const getProducts = async () => {
  return Product.find().populate('category', 'name')
}

const deleteProduct = async (id) => {
  const product = await Product.findById(id)

  if (!product) throw new Error('Producto no encontrado')
  const imageId = product.image.split('/').pop().split('.')[0]

  await cloudinary.uploader.destroy(imageId)
  await product.remove()

  return product
}

module.exports = { createProduct, getProducts, deleteProduct }
