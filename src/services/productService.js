const Product = require('../models/Product').Product
const { deleteUnusedImage } = require('../middlewares/cloudinaryUpload')

const createNewProduct = async (productData, file) => {
  const image = file ? file.path : ''
  return await Product.create({ ...productData, image })
}

const listProducts = async () => {
  return await Product.find().populate('category')
}

const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id)
  if (product) {
    await deleteUnusedImage(product.image)
  }
}

module.exports = { createNewProduct, listProducts, deleteProduct }
