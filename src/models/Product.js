const mongoose = require('mongoose')
const Joi = require('joi')

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    description: { type: String, required: true, minlength: 10 },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    image: { type: String, required: true },
    cloudinaryId: { type: String }
  },
  { timestamps: true }
)

const joiProductSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  category: Joi.string().required(),
  image: Joi.string().optional()
})

module.exports = {
  Product: mongoose.model('Product', productSchema),
  joiProductSchema
}
