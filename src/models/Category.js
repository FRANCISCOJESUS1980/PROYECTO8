const mongoose = require('mongoose')
const Joi = require('joi')

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre de la categoría es requerido'],
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  },
  { timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    image: Joi.string().uri().required()
  })
  return schema.validate(category)
}

module.exports = { Category, validateCategory }
