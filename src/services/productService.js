const mongoose = require('mongoose')
const Product = require('../models/Product').Product
const cloudinary = require('../config/cloudinary')

const createNewProduct = async (data, file) => {
  try {
    if (data.category) {
      data.category = new mongoose.Types.ObjectId(data.category)
    }

    const uploadResponse = await cloudinary.uploader.upload(file.path, {
      folder: 'products'
    })

    data.image = uploadResponse.secure_url
    const newProduct = new Product({
      ...data,
      imageUrl: uploadResponse.secure_url,
      cloudinaryId: uploadResponse.public_id
    })

    return await newProduct.save()
  } catch (error) {
    throw new Error('Error creando nuevo producto: ' + error.message)
  }
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

  let uploadResponse
  if (file) {
    uploadResponse = await cloudinary.uploader.upload(file.path, {
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
