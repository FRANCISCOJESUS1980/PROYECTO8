const Product = require('../models/Product').Product
const cloudinary = require('../config/cloudinary')

const createNewProduct = async (data, file) => {
  const uploadResponse = await cloudinary.uploader.upload(file.path, {
    folder: 'products'
  })

  const newProduct = new Product({
    ...data,
    imageUrl: uploadResponse.secure_url,
    cloudinaryId: uploadResponse.public_id
  })

  return newProduct.save()
}
const listProducts = async () => {
  return await Product.find()
}

const getProductById = async (id) => {
  return await Product.findById(id)
}

const updateProduct = async (id, data, file) => {
  const product = await Product.findById(id)
  if (!product) return null

  if (file) {
    const uploadResponse = await cloudinary.uploader.upload(file.path, {
      folder: 'products'
    })
    data.imageUrl = uploadResponse.secure_url
    data.cloudinaryId = uploadResponse.public_id

    await cloudinary.uploader.destroy(product.cloudinaryId)
  }

  return await Product.findByIdAndUpdate(id, data, { new: true })
}

const deleteProduct = async (id) => {
  const product = await Product.findById(id)
  if (!product) return null

  await cloudinary.uploader.destroy(product.cloudinaryId)
  return await Product.findByIdAndDelete(id)
}

module.exports = {
  createNewProduct,
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct
}
