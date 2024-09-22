const mongoose = require('mongoose')
const Joi = require('joi')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre del producto es requerido'],
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().max(255),
    image: Joi.string().uri().required(),
    category: Joi.string().required()
  })
  return schema.validate(product)
}

module.exports = { Product, validateProduct }
