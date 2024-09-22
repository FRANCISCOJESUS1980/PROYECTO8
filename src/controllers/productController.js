const productService = require('../services/productService')

const createNewProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createNewProduct(req.body, req.file)
    res.status(201).json(newProduct)
  } catch (error) {
    next(error)
  }
}

const listProducts = async (req, res, next) => {
  try {
    const products = await productService.listProducts()
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

const removeProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = { createNewProduct, listProducts, removeProduct }
