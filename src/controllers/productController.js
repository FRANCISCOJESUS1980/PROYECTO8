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
const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' })
    }
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}
const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body,
      req.file
    )
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' })
    }
    res.status(200).json(updatedProduct)
  } catch (error) {
    next(error)
  }
}

const removeProduct = async (req, res, next) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' })
    }
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params
    await productService.deleteProduct(id)
    return res.status(204).send()
  } catch (error) {
    console.error('Error al eliminar el producto:', error)
    return res
      .status(500)
      .json({ message: 'Error al eliminar el producto: ' + error.message })
  }
}

module.exports = {
  createNewProduct,
  listProducts,
  getProductById,
  updateProduct,
  removeProduct,
  deleteProductController
}
