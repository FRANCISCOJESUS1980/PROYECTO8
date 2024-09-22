const {
  createProduct,
  getProducts,
  deleteProduct
} = require('../services/productService')
const { validateProduct } = require('../models/Product')
const { createError } = require('../utils/errorResponses')

const createNewProduct = async (req, res, next) => {
  try {
    const { error } = validateProduct(req.body)
    if (error) return next(createError(400, error.details[0].message))

    const product = await createProduct({ ...req.body, image: req.file.path })
    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
}

const listProducts = async (req, res, next) => {
  try {
    const products = await getProducts()
    res.status(200).json(products)
  } catch (err) {
    next(err)
  }
}

const removeProduct = async (req, res, next) => {
  try {
    const product = await deleteProduct(req.params.id)
    res
      .status(200)
      .json({ message: 'Producto eliminado correctamente', product })
  } catch (err) {
    next(err)
  }
}

module.exports = { createNewProduct, listProducts, removeProduct }
